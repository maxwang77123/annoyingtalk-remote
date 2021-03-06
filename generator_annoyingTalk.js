function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}


function generateAnnoyingTalk(choice) {
  //定義職類
  const jobs = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家',
  }
  //定義工作項目
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']


  return choice ? `身為一位【${jobs[choice]}】，${getRandomItem(task[choice])}，${getRandomItem(phrase)}吧` : `請選擇職業`

}
module.exports = generateAnnoyingTalk
