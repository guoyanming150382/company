          // pages/teacher/teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      {
        'name': "丁高远",
        "msg": "中国政法大学硕士，法理逻辑专业，六年公务员考试辅导教学实战经验，深谙公务员考试的测查本质、考试形式、考试态势，考点考题及备考策略精髓。尤其对行测的判断推理、言语理解与表达、常识判断以及面试具有深入研究和丰厚的教学经验，独创面试“三步”答题法。丁老师熟知面试评分标准，针对考生面试中的薄弱环节，总结出一套独特且行之有效的面试技巧和方法，能在短时间内帮助考生迅速提高面试实践能力，从而在面试中脱颖而出。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher1.jpg'
      }, {
        'name': "靳健文",
        "msg": "河南大学汉语言博士，从事公职考试辅导工作八年余，数次参与河南省公务员考试题库建设与管理、出题规划和考官培训等相关工作。授课风格实战性和实用性并举，幽默风趣，研发出极具个人特色的“申论读写练讲评全方位封闭式立体教学法”，经多次省考、政法干警及事业单位考试实战检验，高效帮助众多考生提升申论得分，受到广大学生的热烈追捧，被学生亲切的称赞为“申论教父”。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher2.jpg'
      }, {
        'name': "鲁之政",
        "msg": "华中师范大学数学博士，教育学硕士，师从著名考试学研究专家王后雄教授。从事公务员、选调生、事业单位、政法干警等公职考试研究和培训多年，是最早一批从事公考培训的老师之一，先后发表数十篇学术论文。现为多家教育培训机构特聘资深讲师。多年潜心研究公职类行测考试的考试题型、命题特点、命题趋势，总结出最清晰、最系统的行测“题型体系”，帮助考生准确把握考点；独创的“题型+技巧”模式，深入透析各种题型的解题方法及技巧，为考生提供最快捷、最实用的解题方法；授课风格灵活、幽默，善于从学生思维切入，把复杂问题简单化；受邀组织、编写多套国家及地方版的行政职业能力测试教材，受到广大考生的追捧。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher3.jpg'
      }, {
        'name': "李艳敏",
        "msg": "211高校副教授，具有多年高校教育教学工作经验，授课内容系统严谨，针对性强，对历年真题衍变及地区命题细微差异有清晰的分析和把控。个人独创的“抽屉式教学法”，使学员在较短时间内对公共基础知识所涉及的各模块知识得到有效的梳理，归类，取得阶梯型稳步提高。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher4.jpg'
      }, {
        'name': "韩齐武",
        "msg": "法学硕士，曾在中学、大学任教数年，授课风格激情澎湃，富有感染力；经验丰富；亦在北京某政府单位工作，对政府单位工作有独到见解；知识面广，现主要从事公共基础知识及事业单位面试课程的考试研究与教学工作。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher5.jpg'
      }, {
        'name': "彭胜利",
        "msg": "中国政法大学法学博士，国家二级律师。经验丰富，专业扎实，授课风格灵活多变，妙趣横生，惯从真实案例入手，抽丝剥茧，循循善诱，从而令广大学员对抽象的法律条文记忆深刻，受益良多。对各级事业单位考试公共基础知识中的法律模块高频考点，及历年政法干警《民法学》的命题范围有清晰的分析及准确的判断。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher6.jpg'
      }, {
        'name': "何海天",
        "msg": "应用数学博士，是最早一批从事公考培训的老师之一。从基本的概念、理论入手，逐层深入，在此循序渐进的过程中逐渐帮助学生理清思路；同时结合相关题型，使学生能更深入地理解并提高成绩。思路清晰、深入浅出、轻松幽默、富有激情、节奏感强。方法独特、实用性强、提分较快。曾参与铁道出版社出版的多个版本的行测教材，任主编、副主编，曾让数万名考生从中受益，是中国公认的实力派公考培训专家。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher7.jpg'
      }, {
        'name': "陈斌",
        "msg": "曾供职于长葛市政府，五次事业单位面试考官经历，对许昌地区各级党政机关事业单位面试规则规律有深入的研究和独到的见解，授课风格儒雅不失激情，广博兼具细腻，以多年公务员及考官生涯中所历所见事件实例为引，剖析面试常见题型的合理回答方式，结合实际，深入浅出，倍受学员推崇。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher8.jpg'
      }, {
        'name': "范非凡",
        "msg": "青云教育特邀金牌教师，授课风格有理有节，论证周密，法度严谨，擅长用深邃的眼光和宽广的视角去论证社会热点和国家方针、政策，惯用稳扎稳打不失分数的思路达到平中见奇，稳中求胜的效果，注重与学生互动交流，启发学生思考问题的本质，倡导以“公务员”的思维来统筹分析解决问题。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher9.jpg'
      }, {
        'name': "贾子睿",
        "msg": "中国人民大学哲学硕士。喜欢思考，追求具体和明确的事情，善于从不同角度看待问题，解决问题。喜欢逻辑的思考和理论的应用，拥有对细节很强的记忆力和把握力。对申论课程体系及考查要点有深入研究，具备深厚的哲学功底和政治理论素养，专业知识深厚。授课风格幽默风趣，析理深刻，善用热点及生活中的事例分析理论问题，往往能一语道破问题的关键点所在。帮助考生在轻松的课堂气氛下掌握申论的核心知识及做题技巧，所指导考生通过率居行业前列。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher10.jpg'
      }, {
        'name': "胡泽英",
        "msg": "省内知名高校副教授，长期从事各类事业编制考试公共基础知识科目考情分析及培训工作，曾多次参与各地市命题与阅卷。擅长政治、行政管理及法律部分，紧扣“马列毛邓三科十八大”等考点，以专项性提分为第一要务。授课案例丰富，思路明晰，重点突出，繁简得当，具有很强的针对性和实用性。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher11.jpg'
      }, {
        'name': "盛育政",
        "msg": "许昌籍公考培训专家，北京航空航天大学管理学硕士学位。喜交友、好读书、人勤奋、乐执教。自攻读研究生阶段开始研究国家公务员考试，对时政热点和经典政治语录情有独钟，擅长以十种视角审视和分析社会热点问题。主讲：面试、申论。在省级核心期刊发表《基于直选机制在新农村政权建设中应用的思考》，《基于平衡计分卡的政府绩效管理》等多篇论文。主要参与撰写《北京高校30年科技博览》课题研究报告。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher12.jpg'
      }, {
        'name': "左丰瑞",
        "msg": "985高校高等数学高级讲师，理论及教学经验烂熟于心，挥洒自如。善于将抽象枯燥的逻辑、运算类知识具象化，趣味化。课堂风格诙谐幽默，活灵活现，使学员无形中对行测运算类、逻辑类题型产生亲和感，从而在短时内提升答题效率。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher13.jpg'
      }, {
        'name': "尤甫岚",
        "msg": "公考界新锐面试名师，亲和力强，理论功底深厚，理论联系实际、深入浅出，与学员产生强烈共鸣；实际经验丰富，能使学员快速学能致用；倡导快乐学习，语言风趣幽默、亦庄亦谐，注重互动、鼓励参与，深受学员的欢迎。对面试要求拿捏到位，对考生特点更能一语中的，其独家面试秘技更是神来之笔，令人惊叹不已。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher14.jpg'
      }, {
        'name': "石鸣",
        "msg": "法学博士，美国哈佛大学访问学者，具有深厚的公共管理学专业背景和政府部门工作实践经历，曾任大学教师、机关公务员。近年来一直从事公考培训事业，授课经验丰富，深谙公务员和事业单位笔试、面试命题规律。教学严谨不失幽默，条理清晰、通俗易懂，深入浅出，能使学员在短期内把握公考本质和考点，融会贯通，在各地讲学中深受广大学员的好评和喜爱。",
        "url": 'https://www.hnxpsit.com/qy/img/teacher15.jpg'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})