let timeline = [] //时间线变量数组
let fbText = '' //练习试次反馈文字
let curAns = '' //
let pNum = 0
let pRight = 0
let pFalse = 0
let nickname = ''
let motiType
let imgSrc
let pId

//创建jsPsych对象
let jsPsych = initJsPsych({
    use_webaudio: true,
    on_finish: function () {
        jsPsych.data.get().localSave('csv', '被试' + pNum +'.csv');
    }
});

//全屏
var enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true,
    message: `<div style="margin-bottom:20px">您好！请点击下方按钮进入全屏模式进行实验</div>`,
    button_label: '进入全屏'
}

//收集被试信息
let participantInfo = {
    type: jsPsychSurveyHtmlForm,
    html: `
        <div class="form-container">
        <H1>📝信息登记</H1>
        <div class="inner-container">
            <div class="inner-sub-container">
                <img class="avatar" id="avatarPreview" src="https://via.placeholder.com/50" alt="Avatar">
                <div class="form-group">
                    <label for="avatar">头像</label>
                    <div class="input-width">
                         <input type="file" id="avatar" name="avatar" style="width:100%;height:100%" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="nickname">昵称</label>
                    <div class="input-width">
                        <input type="text" id="nickname" name="nickname" placeholder="请输入昵称" style="width:100%;height:100%" required>
                    </div>
                </div>
            </div>
            <div  class="inner-sub-container" style="margin-left:30px">
                <div class="form-group">
                    <label for="pID">序号</label>
                    <div class="input-width">
                        <input type="text" id="pID" name="pID" placeholder="请输入实验序号（由注视提供）" style="width:100%;height:100%" required>
                    </div>   
                </div>
                <div class="form-group">
                    <label for="name">姓名</label>
                    <div class="input-width">
                        <input type="text" id="name" name="name" placeholder="请输入姓名" style="width:100%;height:100%" required>
                    </div>   
                </div>
                <div class="form-group">
                    <label for="age">年龄</label>
                    <div class="input-width">
                        <input type="number" id="age" name="age" placeholder="请输入年龄" style="width:100%;height:100%" required>
                    </div>   
                </div>
                <div class="form-group gender-hand">
                    <label for="gender">性别</label>
                    <select id="gender" name="gender" >
                        <option value="male">男</option>
                        <option value="female">女</option>
                    </select>
                    <label for="motiType" style="margin-left:20px">实验类型</label>
                    <select id="motiType" name="motiType">
                        <option value="m1">任务一</option>
                        <option value="m2">任务二</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="major">专业</label>
                    <div class="input-width">
                        <input type="text" id="major" name="major" placeholder="请输入专业" style="width:100%;height:100%" required>
                    </div>   
                </div>                
            </div>

    </div>
    `,
    on_start:function(){
        setTimeout(function(){
            document.getElementById('avatar').addEventListener('change', function(event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        imgSrc = e.target.result
                        document.getElementById('avatarPreview').src = e.target.result;
                    }
                    reader.readAsDataURL(file);
                }
            });
        },200);
    },
    on_finish:function(data){
        console.log(data);
        motiType = data.response.motiType
        nickname = data.response.nickname
        pID = data.response.pId
    },
    button_label: "进入实验"
}

//指导语
let instructions = {
    type: jsPsychInstructions,
    pages: function () {
        let richText1 = `
        <img class="scnu" src="img/logo.png">
        <h1 style="color:#EE2C2C">同学你好，欢迎参加本实验</h1>
        <div style="margin-top:30px;font-weight:bold;">实验中请勿退出全屏模式</div>
        <div style="margin-top:30px;font-size:15px;color:grey"">华南师范大学心理学院</div>
        <div style="margin-top:20px;margin-bottom:90px;"><按空格键继续></div>
        `;
        let richText2 = `
        <div >请仔细阅读以下实验说明</div>
        <div class="mt15">
            <div class="mt15">实验开始时，屏幕中央会出现一个红色星号，提醒你实验开始</div>
            <div class="mt15">接下来会出现两个字的词汇</div>
            <div class="mt15">你需要判断词汇是属于高权力词还是低权力词</div>
            <div class="mt15">如果是高权力词汇请按下 F 键</div>
            <div class="mt15">如果是低权力词汇请按下 J 键</div>
            <div class="mt15">在正式实验开始之前，需要你先参加练习实验</div>
            <div class="mt15">准备好了请按空格键开始<text style="font-weight:bold">练习</text></div>
        </div>
       `
        return [richText1, richText2]
    },
    key_forward: ' ',
    allow_backward: false
}

let fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<div class="bigSize" style="color:red;">+</div class="bigSize">`,
    trial_duration: 600,
    response_ends_trial: false,
    choices: "NO_KEYS",
}

let stimulusText = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        let word = jsPsych.timelineVariable('stimuli_text')
        let wSize = jsPsych.timelineVariable('word_size')
        return `<div class="bigSize" style="font-size:${wSize};">${word}</div class="bigSize">`
    },
    response_ends_trial: true,
    choices: ["f", "j"],
    data: function () {
        return {
            stimuli_text: jsPsych.timelineVariable('stimuli_text'),
            word_size: jsPsych.timelineVariable('word_color'),
            type: jsPsych.timelineVariable('type'),
            corr_ans: jsPsych.timelineVariable('corr_ans'),
        };
    },
    on_finish: function (data) {
        pNum++
        curAns = jsPsych.timelineVariable('corr_ans')
        fbText = (data.response === jsPsych.timelineVariable('corr_ans')) ? "正确" : "错误";
        data.correct = jsPsych.pluginAPI.compareKeys(data.response, data.corr_ans);
        if (data.correct) {
            pRight++
        }
    }
}

let feedback = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        if (fbText === "错误") {
            fbText += "，正确答案是&nbsp" + curAns
            pFalse++
        }
        return `<div class="bigSize">${fbText}</div class="bigSize">`
    },
    trial_duration: 1000,
    response_ends_trial: false,
    choices: "NO_KEYS",
}

let pNotice = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        let pNoticeText = ((pRight / pNum) >= 0.8) ? "您已通过练习！<br><br><br>按<空格键>开始正式实验" : "您的正确率不足80%，需要重新练习。<br><br><br>按<空格键>继续"
        return `<div class="bigSize">${pNoticeText}</div class="bigSize">`
    },
    response_ends_trial: true,
    choices: " ",
    on_finish: function () {

    }
}

// 练习试次
let practiceTrial = {
    timeline: [fixation, stimulusText, feedback],
    timeline_variables: arrayOfPractice,
    randomize_order: true,
}

//练习模块循环
let practiceBlock = {
    timeline: [practiceTrial, pNotice],
    randomize_order: true,
    loop_function: function (data) {
        if ((pFalse / pNum) <= 0.2) {
            pNum = 0
            pRight = 0
            pFalse = 0
            return false;
        } else {
            pNum = 0
            pRight = 0
            pFalse = 0
            return true;
        }
    }
}

// Block1
let testBlock1 = {
    timeline: [fixation, stimulusText],
    timeline_variables: testList1,
    randomize_order: true,
}

// Block2
let testBlock2 = {
    timeline: [fixation, stimulusText],
    timeline_variables: testList2,
    randomize_order: true,
}

//离开全屏
var leave_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: false
}

//生成排行榜
let rank = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        let userinfo = {
            name: `<div style="color:red;font-weight:bold">${nickname}</div>`,
            avatar: imgSrc,
            accuracy: (pRight / pNum * 100).toFixed(2)
        };

        let fixedUsers = [
            { name: "Liv", avatar: "img/avatar1.jpg" },
            { name: "豆豆", avatar: "img/avatar2.jpg" },
            { name: "lpk", avatar: "img/avatar3.jpg" },
            { name: "Bingo", avatar: "img/avatar4.jpg" },
            { name: "小也", avatar: "img/avatar5.jpg" },
            { name: "咖啡糖", avatar: "img/avatar6.jpg" },
            { name: "噜咕", avatar: "img/avatar7.jpg" },
            { name: "Lumos", avatar: "img/avatar8.jpg" },
            { name: "柚子", avatar: "img/avatar9.jpg" }
        ];

        let leaderboard = [];

        if (motiType == 'm1') {
            // 生成一个比被试胜率高的用户
            console.log(userinfo.accuracy);
            console.log(typeof(userinfo.accuracy));
            let highAccuracy = Math.min(100, parseFloat(userinfo.accuracy) + Math.random() * 5);
            console.log(highAccuracy);
            leaderboard.push({
                name: "小小龙",
                avatar: "img/avatar9.jpg",
                accuracy: highAccuracy.toFixed(2)
            });

            // 生成八个比被试胜率低的用户
            for (let i = 0; i < 8; i++) {
                let lowAccuracy = Math.max(0, parseFloat(userinfo.accuracy) - Math.random() * 10);
                leaderboard.push({
                    ...fixedUsers[i],
                    accuracy: lowAccuracy.toFixed(2)
                });
            }

            // 将被试添加到排行榜中
            leaderboard.push(userinfo);

        } else {
            // 生成八个比被试胜率高的用户
            for (let i = 0; i < 8; i++) {
                let highAccuracy = Math.min(100, parseFloat(userinfo.accuracy)+ Math.random() * 10);
                leaderboard.push({
                    ...fixedUsers[i],
                    accuracy: highAccuracy.toFixed(2)
                });
            }

            // 生成一个比被试胜率低的用户
            let lowAccuracy = Math.max(0, parseFloat(userinfo.accuracy) - Math.random() * 5);
            leaderboard.push({
                name: "小小龙",
                avatar: "img/avatar9.jpg",
                accuracy: lowAccuracy.toFixed(2)
            });

            // 将被试添加到排行榜中
            leaderboard.push(userinfo);
        }

        // 排序排行榜
        leaderboard.sort((a, b) => b.accuracy - a.accuracy);

        return `
        <H1>🏆中场排行榜</H1>
          <div class="leaderboard" id="leaderboard">
        <div class="leaderboard-item">
            <div class="rank">🥇</div>
            <img src="${leaderboard[0].avatar}" alt="">
            <div class="name">${leaderboard[0].name}</div>
            <div class="accuracy">${leaderboard[0].accuracy}%</div>
        </div>
        <div class="leaderboard-item">
            <div class="rank">🥈</div>
            <img src="${leaderboard[1].avatar}" alt="">
            <div class="name">${leaderboard[1].name}</div>
            <div class="accuracy">${leaderboard[1].accuracy}%</div>
        </div>
        <div class="leaderboard-item">
            <div class="rank">🥉</div>
            <img src="${leaderboard[2].avatar}" alt="">
            <div class="name">${leaderboard[2].name}</div>
            <div class="accuracy">${leaderboard[2].accuracy}%</div>
        </div>
        <div class="leaderboard-item">
            <div class="rank">4️⃣</div>
            <img src="${leaderboard[3].avatar}" alt="">
            <div class="name">${leaderboard[3].name}</div>
            <div class="accuracy">${leaderboard[3].accuracy}%</div>
        </div>
        <div class="leaderboard-item">
            <div class="rank">5️⃣</div>
            <img src="${leaderboard[4].avatar}" alt="">
            <div class="name">${leaderboard[4].name}</div>
            <div class="accuracy">${leaderboard[4].accuracy}%</div>
        </div>
        <div class="leaderboard-item">
            <div class="rank">6️⃣</div>
            <img src="${leaderboard[5].avatar}" alt="">
            <div class="name">${leaderboard[5].name}</div>
            <div class="accuracy">${leaderboard[5].accuracy}%</div>
        </div>
        <div class="leaderboard-item">
            <div class="rank">7️⃣</div>
            <img src="${leaderboard[6].avatar}" alt="">
            <div class="name">${leaderboard[6].name}</div>
            <div class="accuracy">${leaderboard[6].accuracy}%</div>
        </div>
        <div class="leaderboard-item">
            <div class="rank">8️⃣</div>
            <img src="${leaderboard[7].avatar}" alt="">
            <div class="name">${leaderboard[7].name}</div>
            <div class="accuracy">${leaderboard[7].accuracy}%</div>
        </div>
        <div class="leaderboard-item">
            <div class="rank">9️⃣</div>
            <img src="${leaderboard[8].avatar}" alt="">
            <div class="name">${leaderboard[8].name}</div>
            <div class="accuracy">${leaderboard[8].accuracy}%</div>
        </div>
        <div class="leaderboard-item">
            <div class="rank">🔟</div>
            <img src="${leaderboard[9].avatar}" alt="">
            <div class="name">${leaderboard[9].name}</div>
            <div class="accuracy">${leaderboard[9].accuracy}%</div>
        </div>
    </div>
        `
    },
    choices: ['休息好了继续']
}

//实验结束提示
let end = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        let corrRate = decimalToPercentage(pRight / pNum)
        return `
                <H1>✔ 实验已全部完成</H1>
                <div class="mt15">
                    <div>您的正确率是：${corrRate}</div>
                    <div>非常感谢您的配合，祝您生活愉快 : )</div>
                    <div></div>
                </div>
        `
    },
    response_ends_trial: true,
    choices: ["结束实验"],
}

timeline.push(enter_fullscreen, 
    participantInfo, 
    instructions, 
    practiceBlock, 
    testBlock1, 
    rank, 
    testBlock2, 
    leave_fullscreen, 
    end)

jsPsych.run(timeline);