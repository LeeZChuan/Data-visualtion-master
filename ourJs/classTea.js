var classTea = new Array();
classTea = [
	["cla_id", "bas_id", "bas_Name"],
	["901", "14", "庄老师"],
	["901", "51", "顾老师"],
	["901", "73", "戴老师"],
	["901", "106", "朱老师"],
	["901", "161", "王老师"],
	["901", "215", "沈老师"],
	["901", "249", "杨老师"],
	["901", "256", "冯老师"],
	["901", "262", "效老师"],
	["901", "314", "陈老师"],
	["901", "409", "宋老师"],
	["902", "14", "庄老师"],
	["902", "95", "郑老师"],
	["902", "119", "王老师"],
	["902", "174", "范老师"],
	["902", "182", "庄老师"],
	["902", "215", "沈老师"],
	["902", "262", "效老师"],
	["902", "384", "周老师"],
	["902", "409", "宋老师"],
	["903", "14", "庄老师"],
	["903", "57", "张老师"],
	["903", "95", "郑老师"],
	["903", "174", "范老师"],
	["903", "182", "庄老师"],
	["903", "215", "沈老师"],
	["903", "262", "效老师"],
	["903", "333", "徐老师"],
	["903", "409", "宋老师"],
	["904", "14", "庄老师"],
	["904", "111", "赵老师"],
	["904", "174", "范老师"],
	["904", "182", "庄老师"],
	["904", "215", "沈老师"],
	["904", "226", "周老师"],
	["904", "262", "效老师"],
	["904", "384", "周老师"],
	["904", "409", "宋老师"],
	["905", "62", "岑老师"],
	["905", "101", "周老师"],
	["905", "157", "王老师"],
	["905", "215", "沈老师"],
	["905", "223", "陈老师"],
	["905", "226", "周老师"],
	["905", "234", "杨老师"],
	["905", "262", "效老师"],
	["905", "380", "鲍老师"],
	["905", "409", "宋老师"],
	["906", "62", "岑老师"],
	["906", "83", "胡老师"],
	["906", "113", "戴老师"],
	["906", "157", "王老师"],
	["906", "215", "沈老师"],
	["906", "256", "冯老师"],
	["906", "262", "效老师"],
	["906", "314", "陈老师"],
	["906", "409", "宋老师"],
	["907", "83", "胡老师"],
	["907", "157", "王老师"],
	["907", "213", "程老师"],
	["907", "223", "陈老师"],
	["907", "224", "徐老师"],
	["907", "262", "效老师"],
	["907", "273", "李老师"],
	["907", "312", "过老师"],
	["907", "314", "陈老师"],
	["908", "71", "贾老师"],
	["908", "101", "周老师"],
	["908", "157", "王老师"],
	["908", "213", "程老师"],
	["908", "223", "陈老师"],
	["908", "224", "徐老师"],
	["908", "262", "效老师"],
	["908", "312", "过老师"],
	["908", "382", "陈老师"],
	["909", "58", "蒋老师"],
	["909", "71", "贾老师"],
	["909", "117", "武老师"],
	["909", "158", "俞老师"],
	["909", "192", "王老师"],
	["909", "213", "程老师"],
	["909", "262", "效老师"],
	["909", "312", "过老师"],
	["909", "382", "陈老师"],
	["910", "58", "蒋老师"],
	["910", "98", "王老师"],
	["910", "158", "俞老师"],
	["910", "213", "程老师"],
	["910", "246", "邬老师"],
	["910", "256", "冯老师"],
	["910", "262", "效老师"],
	["910", "312", "过老师"],
	["910", "382", "陈老师"],
	["911", "158", "俞老师"],
	["911", "192", "王老师"],
	["911", "213", "程老师"],
	["911", "234", "杨老师"],
	["911", "262", "效老师"],
	["911", "271", "范老师"],
	["911", "312", "过老师"],
	["911", "334", "刘老师"],
	["911", "417", "夏老师"],
	["912", "80", "张老师"],
	["912", "158", "俞老师"],
	["912", "192", "王老师"],
	["912", "213", "程老师"],
	["912", "234", "杨老师"],
	["912", "262", "效老师"],
	["912", "312", "过老师"],
	["912", "334", "刘老师"],
	["912", "417", "夏老师"],
	["913", "267", "杜老师"],
	["913", "420", "胡老师"],
	["914", "267", "杜老师"],
	["915", "267", "杜老师"],
	["916", "134", "张老师"],
	["916", "157", "王老师"],
	["916", "213", "程老师"],
	["916", "262", "效老师"],
	["916", "269", "马老师"],
	["916", "312", "过老师"],
	["916", "413", "朱老师"],
	["917", "84", "童老师"],
	["917", "103", "陈老师"],
	["917", "158", "俞老师"],
	["917", "213", "程老师"],
	["917", "262", "效老师"],
	["917", "266", "叶老师"],
	["917", "312", "过老师"],
	["918", "84", "童老师"],
	["918", "128", "高老师"],
	["918", "158", "俞老师"],
	["918", "213", "程老师"],
	["918", "240", "孙老师"],
	["918", "262", "效老师"],
	["918", "312", "过老师"],
	["919", "14", "庄老师"],
	["919", "53", "唐老师"],
	["919", "213", "程老师"],
	["919", "262", "效老师"],
	["919", "274", "王老师"],
	["919", "312", "过老师"],
	["919", "316", "鲁老师"],
	["920", "26", "程老师"],
	["920", "53", "唐老师"],
	["920", "158", "俞老师"],
	["920", "213", "程老师"],
	["920", "262", "效老师"],
	["920", "312", "过老师"],
	["920", "316", "鲁老师"],
	["921", "108", "王老师"],
	["921", "157", "王老师"],
	["921", "213", "程老师"],
	["921", "262", "效老师"],
	["921", "269", "马老师"],
	["921", "312", "过老师"],
	["921", "413", "朱老师"],
	["922", "14", "庄老师"],
	["922", "54", "洪老师"],
	["922", "85", "吕老师"],
	["922", "112", "王老师"],
	["922", "213", "程老师"],
	["922", "262", "效老师"],
	["922", "312", "过老师"],
	["923", "12", "周老师"],
	["923", "52", "陈老师"],
	["923", "78", "潘老师"],
	["923", "158", "俞老师"],
	["923", "213", "程老师"],
	["923", "262", "效老师"],
	["923", "312", "过老师"],
	["924", "14", "庄老师"],
	["924", "54", "洪老师"],
	["924", "85", "吕老师"],
	["924", "112", "王老师"],
	["924", "213", "程老师"],
	["924", "262", "效老师"],
	["924", "312", "过老师"],
	["925", "65", "陈老师"],
	["925", "78", "潘老师"],
	["925", "158", "俞老师"],
	["925", "213", "程老师"],
	["925", "262", "效老师"],
	["925", "274", "王老师"],
	["925", "312", "过老师"],
	["926", "72", "黄老师"],
	["926", "102", "曹老师"],
	["926", "146", "袁老师"],
	["926", "215", "沈老师"],
	["926", "262", "效老师"],
	["926", "268", "朱老师"],
	["926", "276", "任老师"],
	["926", "338", "李老师"],
	["926", "407", "徐老师"],
	["926", "409", "宋老师"],
	["926", "410", "黎老师"],
	["926", "421", "李老师"],
	["927", "109", "何老师"],
	["927", "146", "袁老师"],
	["927", "184", "陈老师"],
	["927", "215", "沈老师"],
	["927", "262", "效老师"],
	["927", "268", "朱老师"],
	["927", "276", "任老师"],
	["927", "394", "周老师"],
	["927", "403", "乐老师"],
	["927", "407", "徐老师"],
	["927", "409", "宋老师"],
	["927", "421", "李老师"],
	["928", "129", "陈老师"],
	["928", "170", "俞老师"],
	["928", "215", "沈老师"],
	["928", "262", "效老师"],
	["928", "276", "任老师"],
	["928", "338", "李老师"],
	["928", "383", "张老师"],
	["928", "402", "张老师"],
	["928", "409", "宋老师"],
	["928", "410", "黎老师"],
	["928", "414", "陈老师"],
	["928", "421", "李老师"],
	["929", "50", "谢老师"],
	["929", "184", "陈老师"],
	["929", "215", "沈老师"],
	["929", "262", "效老师"],
	["929", "275", "王老师"],
	["929", "276", "任老师"],
	["929", "393", "沈老师"],
	["929", "403", "乐老师"],
	["929", "409", "宋老师"],
	["929", "416", "余老师"],
	["929", "418", "李老师"],
	["929", "421", "李老师"],
	["930", "180", "徐老师"],
	["930", "193", "王老师"],
	["930", "215", "沈老师"],
	["930", "262", "效老师"],
	["930", "275", "王老师"],
	["930", "276", "任老师"],
	["930", "383", "张老师"],
	["930", "399", "王老师"],
	["930", "402", "张老师"],
	["930", "409", "宋老师"],
	["930", "410", "黎老师"],
	["930", "414", "陈老师"],
	["931", "50", "谢老师"],
	["931", "105", "沈老师"],
	["931", "170", "俞老师"],
	["931", "180", "徐老师"],
	["931", "184", "陈老师"],
	["931", "215", "沈老师"],
	["931", "262", "效老师"],
	["931", "276", "任老师"],
	["931", "393", "沈老师"],
	["931", "403", "乐老师"],
	["931", "409", "宋老师"],
	["931", "416", "余老师"],
	["932", "56", "张老师"],
	["932", "75", "杨老师"],
	["932", "141", "邬老师"],
	["932", "166", "黄老师"],
	["932", "180", "徐老师"],
	["932", "193", "王老师"],
	["932", "215", "沈老师"],
	["932", "225", "郑老师"],
	["932", "262", "效老师"],
	["932", "370", "周老师"],
	["932", "409", "宋老师"],
	["932", "410", "黎老师"],
	["933", "56", "张老师"],
	["933", "75", "杨老师"],
	["933", "141", "邬老师"],
	["933", "180", "徐老师"],
	["933", "184", "陈老师"],
	["933", "215", "沈老师"],
	["933", "225", "郑老师"],
	["933", "262", "效老师"],
	["933", "275", "王老师"],
	["933", "370", "周老师"],
	["933", "403", "乐老师"],
	["933", "409", "宋老师"],
	["934", "45", "虞老师"],
	["934", "74", "牟老师"],
	["934", "150", "陈老师"],
	["934", "172", "郭老师"],
	["934", "188", "谢老师"],
	["934", "197", "吴老师"],
	["934", "213", "程老师"],
	["934", "233", "王老师"],
	["934", "262", "效老师"],
	["934", "272", "郑老师"],
	["934", "312", "过老师"],
	["934", "423", "王老师"],
	["935", "45", "虞老师"],
	["935", "74", "牟老师"],
	["935", "124", "陈老师"],
	["935", "150", "陈老师"],
	["935", "172", "郭老师"],
	["935", "187", "潘老师"],
	["935", "213", "程老师"],
	["935", "233", "王老师"],
	["935", "262", "效老师"],
	["935", "312", "过老师"],
	["935", "376", "蔡老师"],
	["935", "423", "王老师"],
	["936", "76", "朱老师"],
	["936", "107", "吴老师"],
	["936", "148", "何老师"],
	["936", "188", "谢老师"],
	["936", "197", "吴老师"],
	["936", "213", "程老师"],
	["936", "233", "王老师"],
	["936", "262", "效老师"],
	["936", "312", "过老师"],
	["936", "419", "李老师"],
	["936", "423", "王老师"],
	["936", "429", "章老师"],
	["937", "49", "傅老师"],
	["937", "76", "朱老师"],
	["937", "107", "吴老师"],
	["937", "187", "潘老师"],
	["937", "213", "程老师"],
	["937", "233", "王老师"],
	["937", "257", "庄老师"],
	["937", "262", "效老师"],
	["937", "312", "过老师"],
	["937", "376", "蔡老师"],
	["937", "389", "贾老师"],
	["937", "423", "王老师"],
	["938", "46", "蒋老师"],
	["938", "148", "何老师"],
	["938", "188", "谢老师"],
	["938", "197", "吴老师"],
	["938", "213", "程老师"],
	["938", "233", "王老师"],
	["938", "243", "闵老师"],
	["938", "256", "冯老师"],
	["938", "262", "效老师"],
	["938", "312", "过老师"],
	["938", "404", "牟老师"],
	["938", "429", "章老师"],
	["939", "46", "蒋老师"],
	["939", "79", "杜老师"],
	["939", "100", "袁老师"],
	["939", "183", "王老师"],
	["939", "213", "程老师"],
	["939", "233", "王老师"],
	["939", "256", "冯老师"],
	["939", "257", "庄老师"],
	["939", "262", "效老师"],
	["939", "312", "过老师"],
	["939", "376", "蔡老师"],
	["939", "429", "章老师"],
	["940", "64", "黄老师"],
	["940", "148", "何老师"],
	["940", "162", "阮老师"],
	["940", "188", "谢老师"],
	["940", "197", "吴老师"],
	["940", "213", "程老师"],
	["940", "262", "效老师"],
	["940", "312", "过老师"],
	["940", "370", "周老师"],
	["940", "405", "周老师"],
	["940", "406", "熊老师"],
	["940", "423", "王老师"],
	["941", "64", "黄老师"],
	["941", "163", "汪老师"],
	["941", "183", "王老师"],
	["941", "213", "程老师"],
	["941", "257", "庄老师"],
	["941", "262", "效老师"],
	["941", "312", "过老师"],
	["941", "370", "周老师"],
	["941", "376", "蔡老师"],
	["941", "405", "周老师"],
	["941", "406", "熊老师"],
	["941", "423", "王老师"],
	["942", "267", "杜老师"],
	["943", "267", "杜老师"]
]
