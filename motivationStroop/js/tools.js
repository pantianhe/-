//洗牌算法
Array.prototype.shuffle = function () {
    let input = this;
    for (let i = input.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

//判空
function isEmpty(obj) {
    return (typeof obj === "undefined" || obj === null || obj === "")
}

function decimalToPercentage(decimal) {
	// 将小数乘以100，并使用toFixed方法设置小数点后的位数
	var percentage = (decimal * 100).toFixed(2);
	
	// 添加百分号
	return percentage + "%";
}

let arrayOfPractice = [{
	'stimuli_text': '监管',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '警察',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '权贵',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '服从',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '罪犯',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '普通',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '监管',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '警察',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '权贵',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '服从',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '罪犯',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '普通',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}]

let arrayOfTest = [{
	'stimuli_text': '皇帝',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '将军',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '领袖',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '主人',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '领导',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '狱警',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '经理',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '教授',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '富人',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '老爷',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '地主',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '耶稣',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '主管',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '导演',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '师傅',
	'word_size': '99px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '平民',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '士兵',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '追随',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '奴隶',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '群众',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '囚犯',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '职员',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '学生',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '穷人',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '随从',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '贫农',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '信徒',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '雇员',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '演员',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '徒弟',
	'word_size': '99px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '皇帝',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '将军',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '领袖',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '主人',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '领导',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '狱警',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '经理',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '教授',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '富人',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '老爷',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '地主',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '耶稣',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '主管',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '导演',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '师傅',
	'word_size': '33px',
	'corr_ans': 'f',
	'type': 'high_power'
}, {
	'stimuli_text': '平民',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '士兵',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '追随',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '奴隶',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '群众',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '囚犯',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '职员',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '学生',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '穷人',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '随从',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '贫农',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '信徒',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '雇员',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '演员',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}, {
	'stimuli_text': '徒弟',
	'word_size': '33px',
	'corr_ans': 'j',
	'type': 'lower_power'
}]

//打乱数组
arrayOfTest.shuffle()

//分割函数
function splitArrayInHalf(array) {
	const middleIndex = Math.ceil(array.length / 2);
	const firstHalf = array.slice(0, middleIndex);
	const secondHalf = array.slice(middleIndex);
	return [firstHalf, secondHalf];
}


// 调用分割函数
const [testList1, testList2] = splitArrayInHalf(arrayOfTest);
