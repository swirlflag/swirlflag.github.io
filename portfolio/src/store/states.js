export default {
  test : 'test',

  spy : null,
  isMobile : null,
  isMini : null,
  isIOS : null,
  
  adminData : {},

  // #gnb element
  gnb : null,
  isGnbOpen : false,
  gnbItems : null,
  mobileActiveElements : [],

  // #router view element
  
  bottomAlert : null,
  isBottomAlert : false,

  isPaging : false,
  nowGnbContentItem : null,


  categoryData  : null,
  contentsData : null,

  contentsItem : null,


  updateDate : null,
  // 라우터 히스토리 저장소
  beforePath : [],
  // 라우터의 트랜지션 방향 :  true => 왼쪽에서 오른쪽 ,  false => 오른쪽에서 왼쪽
  routeDirectionLeft : false,


  

}