import request from '@/utils/request'
export function get_myQuestion() {
    return request({
        url: 'QA/getMyQuestion',
        method: 'get'
    })
}
export function get_myAnswer() {
    return request({
        url: 'QA/getMyAnswer',
        method: 'get'
    })
}
export function askQuestion(content,header,rewardpoints) {
    return request({
        url: 'QA/askQuestion',
        method: 'post',
        params: {"header":header,"rewardpoints":rewardpoints},
        data:content
    })
}
export function getAnswer(questionid)
{
    return request({
        url: 'QA/getAnswer',
        method: 'get',
        params:{"questionid":questionid}
    })
}
export function answerQuestion(questionid,content)
{
        return request({
        url: 'QA/answerQuestion',
        method: 'post',
        params: { "questionid": questionid },
        data:content
    })
}
export function searchByQuestion(keyword)
{
        return request({
        url: 'QA/searchByQuestion',
        method: 'get',
        params:{"keyword":keyword}
    })
}
export function searchByUser(keyword)
{
        return request({
        url: 'QA/searchByUser',
        method: 'get',
        params:{"keyword":keyword}
    })
}
export function clickLike(answerid)
{
        return request({
        url: 'QA/clickLike',
        method: 'post',
        params:{"answerid":answerid}
    })
}
export function undoLike(answerid)
{
        return request({
        url: 'QA/undoLike',
        method: 'post',
        params:{"answerid":answerid}
    })
}
