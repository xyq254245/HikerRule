function updata() {
    var res = {};
    var items = [];

    res.data = items;
    setHomeResult(res);
};

function filter(key) {
    var word = JSON.parse(base64Decode('WyLkvKbnkIYiLCAi5YaZ55yfIiwgIuemj+WIqSIsICJWSVAiLCAi576O5aWzIiwgIumHjOeVqiIsICLmgKfmhJ8iLCAi5YCr55CGIiwgIuiuuueQhiIsICLmiJDkuroiLCAi5oOF6ImyIiwgIuaXoOeggSIsICLmnInnoIEiLCAi5aa7IiwgIuivsSIsICLkubMiLCAi57qi5Li7IiwgIuiOiSIsICLlk4HmjqgiLCAi5paH5a2XIiwgIuS4iee6pyIsICLnvo7lsJEiLCAiSEVZIiwgIumqkeWFtSIsICLkuqfoh6oiLCAi5oCn54ixIiwgIuijuOiBiiIsICLkubHkvKYiLCAi5YG3IiwgIkFWIiwgImF2IiwgIua3qyIsICLlppYiLCAi5ZCM5oCnIiwgIueUt+WQjCIsICLlpbPlkIwiLCAi5Lq6IiwgIuWmhyIsICLkuJ0iLCAi56eBIiwgIueblyIsICLomZrmi58iLCAi5LqkIiwgIlNNIiwgIuaFsCIsICLnsr7lk4EiLCAi5a2m55SfIiwgIuWwhCIsICIzUCIsICLlpKfnp4AiLCAi57K+5ZOBIiwgIuWPo+WRsyIsICLpq5jmva4iLCAi5p6B5ZOBIiwgIkRNTSIsICLpppbmrKEiLCAi6L6j5qSSIiwgIuWutuaTgiIsICLoibLmg4UiLCAi5Li75pKtIiwgIuWQjeS8mCIsICLlubwiLCAi55yJIiwgIuWlsyIsICLpmLQiLCAi5aW4IiwgIui9qCIsICLluIgiLCAi5oOF5L6jIiwgIua/gCIsICLmgIEiLCAi5o6nIiwgIumjnuacuiIsICLmjqgiLCAi5r2uIiwgIum6u+ixhiIsICJleSJd'));
    for (var i = 0; i < word.length; i++) {
        if (key!=null&&key!=undefined&&key!=''&&key.indexOf(word[i]) > -1) {
            return true;
        }
    }
    return false;
};

function zywhm() {
    var html = getResCode();
    setItem('zylink', MY_URL);
    var arr = html.indexOf('http') != -1 ? html.match(/#[\s\S]*?#/g) : base64Decode(html).match(/#[\s\S]*?#/g);
    var setjson = JSON.parse(fetch('hiker://files/rules/xyq/zywset.json', {}));
    var ssmd = setjson.ssmode;
    var ssxc = setjson.sscount;
    var self = JSON.parse(getRule()).title;
    var res = {};
    var items = [];
    //items.push({col_type: 'line'});

    var decText = getMyVar("xyqzywcjtext", "");
    //items.push({
    //title: decText,
    //url: "input://" + '' + ".js:putVar('xyqtext',input);refreshPage()",
    //col_type: 'icon_1_search'
    //});
    items.push({
        title: '搜索',
        //url: "'toast://你输入的是' + input",
        url: $.toString(() => {
            var link = 'hiker://empty#noRecordHistory#$$$?wd=' + input + '&pg=1&ac=list$$$fypage';
            //log(link);
            return $(link).rule(() => {
                eval(fetch('hiker://files/rules/xyq/zywcj.js'));
                zywsea();
            });
        }),
        extra: {
            onChange: "putMyVar('xyqzywcjtext',input)",
            defaultValue: decText,
            titleVisible: true
        },
        col_type: 'input'
    });
    var ssyq = ['香情影视搜@@香情影视'];
    if (self !== '资源网采集.xyq') {
        items.push({
            title: self + '搜',
            url: $("#noLoading#").lazyRule(rule => 'hiker://search?s=' + getMyVar('xyqzywcjtext') + '&rule=' + rule, self),
            col_type: 'flex_button'
        });
    } else {
        for (var yq in ssyq) {
            var kj = ssyq[yq].split('@@');
            items.push({
                title: kj[0],
                url: $("#noLoading#").lazyRule(rule => 'hiker://search?s=' + getMyVar('xyqzywcjtext') + '&rule=' + rule, kj[1]),
                col_type: "flex_button"
            });
        }
    }
    items.push({
        title: '茶杯狐搜',
        url: $('hiker://empty#x#fypage@-1@#x#').rule(() => {
            var res = {};
            var d = [];
            eval(getCryptoJS());
            let tok = CryptoJS.SHA1(getMyVar('xyqzywcjtext') + 'URBBRGROUN').toString();
            var spl = MY_URL.split('#x#');
            var lin = 'http://www.chabeihu.org/api/v2/search/?text=' + getMyVar('xyqzywcjtext') + '&type=0&from=' + spl[1] * 10 + '&size=20&douban_id=0&token='+tok;
            var lint = 'http://www.chabeihu.org/api/v2/search/?text=' + getMyVar('xyqzywcjtext') + '&type=0&from=' + spl[1] * 24 + '&size=24&douban_id=0&token='+tok;
            var pn = spl[1] * 1 + 1;
            try{
            var urlo = JSON.parse(request(lin, {}));
            var urlt = JSON.parse(fetch(lin.replace('type=0', 'type=1'), {}));
             } catch (e) {
            var urlo = JSON.parse(request(lint, {}));
            var urlt = JSON.parse(fetch(lint.replace('type=0', 'type=1'), {}));
             }
            //log(urlo);
            if (urlo.resources.length < 1 && urlt.resources.length < 1) {
                d.push({
                    title: '当前关键字  ' + getMyVar('xyqzywcjtext') + '  无搜索结果',
                    col_type: 'text_center_1'
                });
            }
            if (urlo.resources.length > 0) {
                d.push({
                    title: '♥当前第' + pn + '页',
                    col_type: 'text_center_1'
                });

                for (var i = 0; i < urlo.resources.length; i++) {
                    var title = urlo.resources[i].text.replace(/\<.*?\>/g, '');
                    var url = urlo.resources[i].url;
                    var desc = urlo.resources[i].website;
                    d.push({
                        title: title.replace(getMyVar('xyqzywcjtext'), '““' + getMyVar('xyqzywcjtext') + '””') + '  ' + desc + '  在线',
                        url: url,
                        //desc: '在线搜索结果',
                        col_type: 'text_1'
                    });
                }
            }

            if (urlt.resources.length > 0) {
                for (var j = 0; j < urlt.resources.length; j++) {
                    var title = urlt.resources[j].text.replace(/\<.*?\>/g, '');
                    var url = urlt.resources[j].url;
                    var desc = urlt.resources[j].website;
                    d.push({
                        title: title.replace(getMyVar('xyqzywcjtext'), '““' + getMyVar('xyqzywcjtext') + '””') + '  ' + desc + '  下载',
                        url: url,
                        //desc: '下载搜索结果',
                        col_type: 'text_1'
                    });
                }
            }
            res.data = d;
            setResult(res);
        }),
        col_type: "flex_button"
    });
    var len = [];
    for (var i = 0; i < arr.length; i++) {
        var tabs = arr[i].match(/#.*?[\s]/g)[0].split('#')[1].replace(/\r/, '').replace(/\n/, '');
        var list = arr[i].match(/[\S]*?,.*?[\s]/g);

        items.push({
            title: tabs,
            col_type: 'text_1'

        });

        for (var j = 0; j < list.length; j++) {
            len.push({
                title: list[j].split(',')[0]
            });
            items.push({
                title: list[j].split(',')[0],
                url: list[j].split(',')[1].replace(/\r/, '').replace(/\n/, '') + '?ac=list&pg=fypage',
                col_type: 'text_3'
            });
        }
    } //for arr.length

    items.unshift({
        title: '香情影视',
        //url: 'hiker://home@香情影视||https://agit.ai/lzk23559/Rulehouse/raw/branch/master/香情影视口令.txt',
        url:$('hiker://empty').lazyRule(() => {
            var md = fetch("hiker://home@香情影视");
            if (md.length > 5) {
                return 'hiker://home@香情影视';
            } else {
                let rule=request('https://agit.ai/lzk23559/Rulehouse/raw/branch/master/香情影视口令.txt',{});
                return rule
            }
        }),
        col_type: 'flex_button'
    });
    /*
    items.unshift({
        title: 'APP影视',
        url: 'hiker://home@APP影视(P)||https://agit.ai/lzk23559/Rulehouse/raw/branch/master/APP影视口令.txt',
        col_type: 'flex_button'
    });*/
    items.unshift({
        title: '🔍设置' + '(' + (ssmd == 1 ? '聚' + ssxc : '列') + ')',
        url: $('hiker://empty#noRecordHistory#').rule(() => {
            var d = [];
            var setjson = JSON.parse(fetch('hiker://files/rules/xyq/zywset.json', {}));
            var ssmd = setjson.ssmode;
            var ssxc = setjson.sscount;
            var ssout = setjson.tmout;
            d.push({
                title: '搜索设置',
                col_type: 'text_center_1'
            });
            d.push({
                title: '当前：' + '(' + (ssmd == 1 ? '聚合结果' : '引擎列表') + ')',
                url: $('hiker://empty').lazyRule(() => {
                    var md = JSON.parse(fetch('hiker://files/rules/xyq/zywset.json', {})).ssmode;
                    if (md == 1) {
                        var fileUrl = fetch("hiker://files/rules/xyq/zywset.json", {}).replace('\"ssmode\":\"1\"', '\"ssmode\":\"0\"');
                        writeFile("hiker://files/rules/xyq/zywset.json", fileUrl);
                        back(true);
                        return 'toast://切换为搜索引擎列表单选模式成功！';
                    } else {
                        var fileUrl = fetch("hiker://files/rules/xyq/zywset.json", {}).replace('\"ssmode\":\"0\"', '\"ssmode\":\"1\"');
                        writeFile("hiker://files/rules/xyq/zywset.json", fileUrl);
                        back(true);
                        return 'toast://切换为聚合搜索模式成功！'
                    }
                }),
                col_type: 'text_2'
            })
            d.push({
                title: '搜索超时'+ssout+'',
                url: "input://" + JSON.stringify({
                    value: "3000",
                    hint: "请设置超时时间，1000为1秒。",
                    js: $.toString(() => {
                        var num = parseInt(input).toString();
                        if (num == 'NaN' || num < 100) {
                            return 'toast://输入的值好像不正确。';
                        } else {
                            var fileUrl = fetch('hiker://files/rules/xyq/zywset.json', {}).replace(/"tmout":"[\d]*"/, '"tmout":"' + num + '"');
                            writeFile('hiker://files/rules/xyq/zywset.json', fileUrl);
                            refreshPage(true);
                            return 'toast://保存设置搜索超时完成！'
                        }
                    }),
                }),
                col_type: 'text_2'
            });
            d.push({
                title: '搜索线程'+'('+ssxc+')',
                url: "input://" + JSON.stringify({
                    value: "5",
                    hint: "请输入一个整数数字，推荐最大不要超过15。",
                    js: $.toString(() => {
                        var num = parseInt(input).toString();
                        if (num == 'NaN' || num < 1) {
                            return 'toast://输入的值好像不正确。';
                        } else {
                            var fileUrl = fetch("hiker://files/rules/xyq/zywset.json", {}).replace(/"sscount":"[\d]*"/, '"sscount":"' + num + '"');
                            writeFile("hiker://files/rules/xyq/zywset.json", fileUrl);
                            refreshPage(true);
                            return 'toast://保存设置搜索线程完成！'
                        }
                    }),
                }),
                col_type: 'text_2'
            });
            d.push({
                title: '接口文件管理(支持xml与json采集接口)',
                col_type: 'text_center_1'
            });
            d.push({
                title: '打开编辑',
                url: $().lazyRule(() => {
                    return 'editFile://hiker://files/rules/xyq/ZYWCJ.txt'
                }),
                col_type: 'text_2'
            });
            d.push({
                title: '↓规则相关更新↓',
                col_type: 'text_center_1'
            });
            d.push({
                title: '更新ZYWCJ.txt(接口文件)',
                url: "confirm://确认更新此文件，会覆盖自添加接口哟？.js:" + $.toString(() => {
                    var ruletxt = fetch('https://github.moeyy.xyz/https://raw.githubusercontent.com/xyq254245/HikerRule/main/ZYWCJ.txt', {});
                    if (ruletxt.search(/provide/) != -1) {
                        writeFile("hiker://files/rules/xyq/ZYWCJ.txt", ruletxt);
                        return 'toast://更新成功。'
                    } else {
                        return 'toast://更新失败。'
                    }
                }),
                desc: '如有自添加接口可忽略。',
                col_type: 'text_center_1'
            });
            d.push({
                title: '更新zywcj.js(规则核心文件)',
                url: $().lazyRule(() => {
                    var rulejs = request('https://github.moeyy.xyz/https://raw.githubusercontent.com/xyq254245/HikerRule/main/zywcj.js', {});
                    //var parsejs = request('https://github.moeyy.xyz/https://raw.githubusercontent.com/xyq254245/HikerRule/main/parse.js', {});
                    eval(rulejs);
                    if (filter(base64Decode('5peg56CB')) && /CryptoJS/.test(parsejs)) {
                        writeFile("hiker://files/rules/xyq/zywcj.js", rulejs);
                        //writeFile("hiker://files/libs/1e7db6906ccc9c8dd92ca42cba0fc3ff.js", parsejs);
                        back(true);
                        return 'toast://应该是最新了吧。';
                    } else {
                        return 'toast://更新失败。'
                    }
                }),
                desc: '推荐更新,有益无害。',
                col_type: 'text_center_1'
            });
            setResult(d)
        }),
        col_type: 'flex_button'
    });

    res.data = items;
    setHomeResult(res);
};


//图片替换函数
function picfun() {
    if (MY_URL.indexOf("pangniaozyw") != -1 || MY_URL.indexOf("leshizyw") != -1 || MY_URL.indexOf("9191zy") != -1) {
        pic = "https://tu.tianzuida.com/pic/" + pic;
    } else if (MY_URL.indexOf("lby") != -1) {
        pic.indexOf("http") != -1 ? pic = pic : pic = "http://cj.lby.pet/" + pic;
    } else if (MY_URL.indexOf("xjiys") != -1) {
        pic = pic.replace("img.maccms.com", "xjiys.com");
    } else if (MY_URL.indexOf("shidian") != -1) {
        pic = pic.replace("img.maccms.com", "shidian.vip");
    } else if (MY_URL.indexOf("17kanju") != -1) {
        pic = pic.replace("img.maccms.com", "img.17kanju.com");
    } else if (MY_URL.indexOf("potatost") != -1) {
        pic = pic.replace("http://img.maccms.com//pic=", "");
    }
};
//列表解析函数
function listfun() {
    try {
        var list = parseDomForArray(html, "rss&&video");
        for (var j = 0; j < list.length; j++) {
            var title = parseDomForHtml(list[j], "body&&name&&Text").split('<')[0];
            var url = parseDomForHtml(list[j], "body&&id&&Text");
            var note = parseDomForHtml(list[j], "body&&note&&Text");
            var typ = parseDomForHtml(list[j], "body&&type&&Text");
            var last = parseDomForHtml(list[j], "body&&last&&Text");
            if(note==undefined){
                note="";
            }
            if (!filter(typ)) {
                if (html.indexOf("</pic>") != -1&&listmod == '0') {
                    var pic = parseDomForHtml(list[j], "body&&pic&&Text").replace("http://t.8kmm.com", "https://www.wxtv.net");
                    eval(fetch("hiker://files/rules/xyq/zywcj.js"));
                    picfun();
                    items.push({
                        title: title,
                        pic_url: pic + '@Referer=' + pic,
                        desc: note,
                        url: arrr + "?ac="+(arrr.includes('jisubt')?'detail':'videolist')+"&ids=" + url + `@rule=js:eval(fetch('hiker://files/rules/xyq/zywcj.js'));SSEJ();`,
                        col_type: "movie_3"
                    });
                } else {
                    var dt = parseDomForHtml(list[j], "body&&dt&&Text");
                    items.push({
                        title: title + "  状态:" + note,
                        desc: last + ' ' + typ + ' ' + dt,
                        url: arrr + "?ac="+(arrr.includes('jisubt')?'detail':'videolist')+"&ids=" + url + `@rule=js:eval(fetch('hiker://files/rules/xyq/zywcj.js'));SSEJ();`,
                        col_type: "text_1"
                    })
                }
            }
        }
    } catch (e) {}
};

//json列表解析函数
function jsonlist() {
    try {
        if (html.data) {
            var list = html.data;
        } else {
            var list = html.list;
        }
        for (var j = 0; j < list.length; j++) {
            var title = list[j].vod_name;
            var url = list[j].vod_id;
            if (list[j].vod_remarks) {
                var note = list[j].vod_remarks;
            } else {
                var note = list[j].vod_total;
            }
            if(note==undefined){
                note="";
            }
            var typ = list[j].type_name;
            if (list[j].vod_addtime) {
                var last = list[j].vod_addtime;
            } else {
                var last = list[j].vod_time;
            }
            if (!filter(typ)) {
                if (list[j].vod_pic&&listmod == '0') {
                    var pic = list[j].vod_pic;
                    items.push({
                        title: title,
                        pic_url: pic + '@Referer=' + pic,
                        desc: note,
                        url: arrr + "?ac="+(arrr.includes('jisubt')?'detail':'videolist')+"&ids=" + url + `@rule=js:eval(fetch('hiker://files/rules/xyq/zywcj.js'));SSEJ();`,
                        col_type: "movie_3"
                    });
                } else {
                    var dt = list[j].vod_play_from;
                    items.push({
                        title: title + "  状态:" + note,
                        desc: last + ' ' + typ + ' ' + dt,
                        url: arrr + "?ac="+(arrr.includes('jisubt')?'detail':'videolist')+"&ids=" + url + `@rule=js:eval(fetch('hiker://files/rules/xyq/zywcj.js'));SSEJ();`,
                        col_type: "text_1"
                    })
                }
            }
        }
    } catch (e) {}
};


//二级规则函数
function TWEJ() {
    var res = {};
    var items = [];
    var arrr = MY_URL.split("?")[0];
    var pn = MY_URL.split("=")[2];
    var listmod = JSON.parse(fetch('hiker://files/rules/xyq/zywset.json', {})).listmod;
    if (listmod == '1') {
        html = getResCode();
    } else {
        html = request(MY_URL.replace('ac=list', 'ac=videolist'))
    }
    //对第一页分类进行处理
    if (pn == '1') {
        try {
            if (/\<\/class\>/.test(html)) {
                rescod = getResCode();
            } else if (/type_name/.test(html)) {
                rescod = getResCode();
            } else {
                rescod = request(arrr + "?ac=list")
            }
            if (/list_name/.test(rescod)) {
                var type = JSON.parse(rescod).list;
            } else if (/type_name/.test(rescod)) {
                var type = JSON.parse(rescod).class;
            } else {
                var type = parseDomForHtml(rescod, "class&&Html").match(/<ty[\s]id[\s\S]*?<\/ty>/g);
            }
            for (var i = 0; i < type.length; i++) {
                if (/list_name/.test(rescod)) {
                    var typ = type[i].list_name;
                    var tyid = type[i].list_id;
                } else if (/vod_play_from/.test(rescod)) {
                    var typ = type[i].type_name;
                    var tyid = type[i].type_id;
                } else {
                    var typ = parseDomForHtml(type[i], "body&&Text").split('{')[0];
                    var tyid = parseDomForHtml(type[i], "body&&ty&&id");
                }
                if (!filter(typ)) {
                    items.push({
                        title: typ,
                        url: $(arrr + "?ac=list&pg=fypage&t=" + tyid).rule(() => {
                            var arrr = MY_URL.split("?")[0];
                            var pn = MY_URL.split("pg=")[1].split("&t=")[0];
                            var listmod = JSON.parse(fetch('hiker://files/rules/xyq/zywset.json', {})).listmod;
                            if (listmod == '1') {
                                html = getResCode();
                            } else {
                                html = request(MY_URL.replace('ac=list', 'ac=videolist'))
                            }
                            var res = {};
                            var items = [];
                            if (pn == '1') {
                                items.push({
                                    title: '‘‘’’<strong><font color="#ffaa64">纯文本列表</front></strong>',
                                    desc: '',
                                    url: $('hiker://empty').lazyRule(() => {
                                        var fileUrl = fetch("hiker://files/rules/xyq/zywset.json", {}).replace('\"listmod\":\"0\"', '\"listmod\":\"1\"');
                                        writeFile("hiker://files/rules/xyq/zywset.json", fileUrl);
                                        refreshPage();
                                        return 'toast://切换成功！'
                                    }),
                                    col_type: 'text_2'
                                });
                                items.push({
                                    title: '‘‘’’<strong><font color="#ffaa64">图文列表</front></strong>',
                                    desc: '',
                                    url: $('hiker://empty').lazyRule(() => {
                                        var fileUrl = fetch("hiker://files/rules/xyq/zywset.json", {}).replace('\"listmod\":\"1\"', '\"listmod\":\"0\"');
                                        writeFile("hiker://files/rules/xyq/zywset.json", fileUrl);
                                        refreshPage();
                                        return 'toast://切换成功！'
                                    }),
                                    col_type: 'text_2'
                                });
                                items.push({
                                    col_type: 'line'
                                });
                            }

                            if (/vod_play_from/.test(html)) {
                                html = JSON.parse(html);
                                eval(fetch('hiker://files/rules/xyq/zywcj.js'));
                                jsonlist();
                            } else {
                                eval(fetch('hiker://files/rules/xyq/zywcj.js'));
                                listfun();
                            }

                            res.data = items;
                            setHomeResult(res);
                        }),
                        //col_type:"text_3"
                        col_type: type.length >= 16 ? 'scroll_button' : 'flex_button'
                        //col_type:'flex_button'
                    });
                }
            }
        } catch (e) {}
        items.push({
            col_type: 'line'
        });
        items.push({
            title: '‘‘’’<strong><font color="#ffaa64">纯文本列表</front></strong>',
            desc: '',
            url: $('hiker://empty').lazyRule(() => {
                var fileUrl = fetch("hiker://files/rules/xyq/zywset.json", {}).replace('\"listmod\":\"0\"', '\"listmod\":\"1\"');
                writeFile("hiker://files/rules/xyq/zywset.json", fileUrl);
                refreshPage();
                return 'toast://切换成功！'
            }),
            col_type: 'text_2'
        });
        items.push({
            title: '‘‘’’<strong><font color="#ffaa64">图文列表</front></strong>',
            desc: '',
            url: $('hiker://empty').lazyRule(() => {
                var fileUrl = fetch("hiker://files/rules/xyq/zywset.json", {}).replace('\"listmod\":\"1\"', '\"listmod\":\"0\"');
                writeFile("hiker://files/rules/xyq/zywset.json", fileUrl);
                refreshPage();
                return 'toast://切换成功！'
            }),
            col_type: 'text_2'
        });
        items.push({
            col_type: 'line'
        });
    }
    //结束第一页分类处理

    //对列表处理开始
    if (/vod_play_from/.test(html)) {
        html = JSON.parse(html);
        eval(fetch('hiker://files/rules/xyq/zywcj.js'));
        jsonlist();
    } else {
        eval(fetch('hiker://files/rules/xyq/zywcj.js'));
        listfun();
    }
    //对列表处理结束
    res.data = items;
    setHomeResult(res);
};

function zywsea() {
    var res = {};
    var items = [];
    var ss = MY_URL.split('$$$')[1];
    var skey = MY_URL.match(/\?wd\=(.*?)\&pg/)[1];
    var ssmode = JSON.parse(fetch('hiker://files/rules/xyq/zywset.json', {})).ssmode;
    //setError(skey)
    var src = fetch(getItem('zylink', 'hiker://files/rules/xyq/ZYWCJ.txt'), {});
    //var src = fetch('https://github.moeyy.xyz/https://raw.githubusercontent.com/xyq254245/HikerRule/main//ZYWCJ.txt', {});
    var arrs = src.indexOf('http') != -1 ? src.match(/#[\s\S]*?#/g) : base64Decode(src).match(/#[\s\S]*?#/g);
    //var cc = src.indexOf('http') != -1 ? src.match(/[\S]*?,.*?[\s]/g) : base64Decode(src).match(/[\S]*?,.*?[\s]/g);
    if (ssmode == '1' || MY_TYPE == "home") {
        for (var l = 0; l < arrs.length; l++) {
            var tabs = arrs[l].match(/#.*?[\s]/g)[0].split('#')[1].replace(/\r/, '').replace(/\n/, '');
            var list = arrs[l].match(/[\S]*?,.*?[\s]/g);
            items.push({
                title: MY_TYPE == "home" ? tabs + " 点击此分类查看 ““" + skey + "”” 的搜索结果" : tabs + " 点击此分类查看 " + skey + " 的搜索结果",
                url: $('hiker://empty#noRecordHistory#$$$' + ss + '$$$fypage').rule((list,tabs) => {
                    var items = [];
                    setPageTitle(tabs);
                    eval(fetch('hiker://files/rules/xyq/zywcj.js'));
                    var timeou = JSON.parse(fetch('hiker://files/rules/xyq/zywset.json', {})).tmout;
                    //获取搜索线程数量
                    var ssxc = JSON.parse(fetch('hiker://files/rules/xyq/zywset.json', {})).sscount;
                    var skey = MY_URL.match(/\?wd\=(.*?)\&pg/)[1];
                    var ss = MY_URL.split('$$$')[1];
                    var num = MY_URL.split('$$$')[2];
                    var le = num * ssxc;
                    //log(list);
                    var Data = [];
                    var Tit = [];
                    var Ost = [];
                    let pageid = "__zyw" + num;
                    try {
                        for (var i = le - ssxc; i < le; i++) {
                            if (i < list.length) {
                                var arr = list[i].split(',')[1].replace(/\r/, '').replace(/\n/, '');
                                var arrt = list[i].split(',')[0];
                                var link = arr + ss;
                                //屏蔽不支持搜索的1717和穿梭
                                if (!/itono|888hyk|okcj|openyun|8kvod/.test(list[i])) {
                                    //Data.push({url:link,options:{headers:{'User-Agent':MOBILE_UA}}});
                                    Data.push({
                                        url: link,
                                        options: {
                                            headers: {
                                                'User-Agent': MOBILE_UA
                                            },
                                            timeout: timeou
                                        }
                                    });
                                    Tit.push({
                                        tit: arrt
                                    });
                                    Ost.push({
                                        url: arr
                                    });
                                }
                            }
                        }
                    } catch (e) {}
                    if (Data.length <= 0) {
                        setResult([]);
                    } else {
                        items.push({
                            title: "正在加载中第" + MY_PAGE + "页，进度：1/" + Data.length,
                            url: "",
                            col_type: "text_center_1",
                            desc: "",
                            pic_url: "",
                            extra: {
                                id: pageid
                            }
                        });
                        setResult(items);
                        let tasks = [];
                        for (let k in Data) {
                            let it = Data[k];
                            tasks.push({
                                func: function(param) {
                                    let items = [];
                                    let html = fetch(param.it.url, param.it.options);
                                    //log(html);
                                    if (/\<video\>/.test(html) || /vod_name/.test(html)) {
                                        if (/list_name/.test(html)) {
                                            var list = JSON.parse(html).data;
                                        } else if (/vod_name/.test(html)) {
                                            var list = JSON.parse(html).list;
                                        } else {
                                            var list = parseDomForArray(html, 'rss&&video');
                                        }
                                        //setError(list[0]);
                                        for (var j = 0; j < list.length; j++) {
                                            if (/vod_name/.test(html)) {
                                                var title = list[j].vod_name;
                                                var ids = list[j].vod_id;
                                                if (/vod_remarks/.test(html)) {
                                                    var note = list[j].vod_remarks;
                                                } else {
                                                    var note = list[j].vod_total;
                                                }
                                                var typ = list[j].type_name;
                                                var dt = list[j].vod_play_from;
                                            } else {
                                                var title = parseDomForHtml(list[j], 'body&&name&&Text');
                                                var ids = parseDomForHtml(list[j], 'body&&id&&Text');
                                                var note = parseDomForHtml(list[j], 'body&&note&&Text');
                                                var typ = parseDomForHtml(list[j], 'body&&type&&Text');
                                                var dt = parseDomForHtml(list[j], 'body&&dt&&Text');
                                            }
                                            if(note==undefined){
                                                 note="";
                                            }
                                            if (!filter(typ)) {
                                                items.push({
                                                    title: MY_TYPE == "home" ? title.replace(skey, '““' + skey + '””') + note : title + " " + ' • ' + note,
                                                    desc: ' ' + param.tit.tit + ' · ' + typ + ' · ' + dt,
                                                    url: param.ost.url + "?ac="+(param.ost.url.includes('jisubt')?'detail':'videolist')+"&ids=" + ids + `@rule=js:var erj=fetch("hiker://files/rules/xyq/zywcj.js",{});eval(erj);SSEJ();`,
                                                    col_type: 'text_center_1'
                                                });
                                            }
                                        } //for j
                                    } else {
                                        items.push({
                                            title: '““' + param.tit.tit + '””' + '未搜索到相关资源',
                                            desc:'',
                                            url: param.it.url + `@lazyRule=.js:input+'#ignoreVideo=true#'`,
                                            col_type: 'text_center_1'
                                        });
                                    };
                                    return items;
                                },
                                param: {
                                    it: it,
                                    ost: Ost[k],
                                    tit: Tit[k]
                                },
                                id: "task"
                            });
                        }
                        batchExecute(tasks, {
                            func: function(param, id, error, result) {
                                //log("listener: " + (result || []).length)
                                param.i = param.i + 1;
                                if (result) {
                                    for (let it of result) {
                                        param.j = param.j + 1;
                                        addItemBefore(pageid, {
                                            title: it.title,
                                            desc: it.desc,
                                            url: it.url,
                                            col_type: 'text_center_1',
                                            extra: {
                                                id: "__zyw" + MY_PAGE + "@" + param.j
                                            }
                                        })
                                    }

                                }
                                if (param.i >= param.all) {
                                    deleteItem(pageid)
                                } else {
                                    updateItem({
                                        title: "正在加载第" + MY_PAGE + "页，进度：" + (param.i + 1) + "/" + param.all,
                                        url: "",
                                        col_type: "text_center_1",
                                        desc: "",
                                        extra: {
                                            id: pageid
                                        }
                                    })
                                }
                            },
                            param: {
                                all: Data.length,
                                i: 0,
                                j: -1
                            }
                        })
                    }
                }, list,tabs),
                col_type: 'text_1'
            });

        }
    }; //end mode 0
    if (ssmode == '0' || MY_TYPE == "home") {
        for (var i = 0; i < arrs.length; i++) {
            var tabs = arrs[i].match(/#.*?[\s]/g)[0].split('#')[1].replace(/\r/, '').replace(/\n/, '');
            var list = arrs[i].match(/[\S]*?,.*?[\s]/g);

            items.push({
                title: MY_TYPE == "home" ? tabs + " 选择一个项目查看 ““" + skey + "”” 的搜索结果" : tabs + " 选择一个项目查看 " + skey + " 的搜索结果",
                col_type: 'text_1'
            });
            for (var j = 0; j < list.length; j++) {
                //屏蔽不支持搜索的1717和穿梭
                if (!/itono|888hyk|okcj|openyun|8kvod/.test(list[j])) {
                    items.push({
                        title: list[j].split(',')[0],
                        url: list[j].split(',')[1].replace(/\r/, '').replace(/\n/, '') + ss.replace(/pg=\d*/g, 'pg=fypage') + `@rule=js:var erj=fetch("hiker://files/rules/xyq/zywcj.js",{});eval(erj);zywerj();`,
                        col_type: 'text_3'
                    });
                }
            }
        }
    } //end mode 0
    res.data = items;
    setSearchResult(res);
};

function zywerj() {
    var res = {};
    var items = [];
    var domain = MY_URL.split('?')[0];
    var skey = MY_URL.match(/\?wd\=(.*?)\&pg/)[1];
    var html = getResCode();

    //setError(html);
    if (/\<video\>/.test(html) || /vod_name/.test(html)) {
        if (/list_name/.test(html)) {
            var list = JSON.parse(html).data;
        } else if (/vod_name/.test(html)) {
            var list = JSON.parse(html).list;
        } else {
            var list = parseDomForArray(html, 'rss&&video');
        }
        for (var j = 0; j < list.length; j++) {
            if (/vod_name/.test(html)) {
                var title = list[j].vod_name;
                var ids = list[j].vod_id;
                if (/vod_remarks/.test(html)) {
                    var note = list[j].vod_remarks;
                } else {
                    var note = list[j].vod_total;
                }                
                if (/vod_addtime/.test(html)) {
                    var last = list[j].vod_addtime;
                } else {
                    var last = list[j].vod_time;
                }
                var typ = list[j].type_name;
                var dt = list[j].vod_play_from;
            } else {
                var title = parseDomForHtml(list[j], 'body&&name&&Text');
                var ids = parseDomForHtml(list[j], 'body&&id&&Text');
                var note = parseDomForHtml(list[j], 'body&&note&&Text');
                var last = parseDomForHtml(list[j], "body&&last&&Text");
                var typ = parseDomForHtml(list[j], 'body&&type&&Text');
                var dt = parseDomForHtml(list[j], 'body&&dt&&Text');
            }
            if(note==undefined){
                note="";
            }
            if (!filter(typ)) {
                items.push({
                    title: title.replace(skey, '““' + skey + '””') + " " + ' • ' + note,
                    desc: last + ' ·  ' + typ + ' ·  ' + dt,
                    url: domain + "?ac="+(domain.includes('jisubt')?'detail':'videolist')+"&ids=" + ids + `@rule=js:var erj=fetch("hiker://files/rules/xyq/zywcj.js",{});eval(erj);SSEJ();`,
                    col_type: 'text_center_1'
                });
            }
        }
    } else {
        items.push({
            title: '未搜索到相关资源',
            url: MY_URL,
            col_type: 'text_center_1'
        });
    }

    res.data = items;
    setHomeResult(res);

};

//选集与简介规则
function SSEJ() {
    var res = {};
    var items = [];
    var tvlist = [];
    var tvtabs =[];
    refreshX5WebView("");
    items.push({
        title: '',
        desc: '255&&float',
        url: '',
        col_type: 'x5_webview_single'
    });
    var html = getResCode().replace(/\<\!\[CDATA\[/g,'').replace(/\]\]\>/g,'');
    try {
        if (/vod_play_from/.test(html)) {
        	var jhtml = JSON.parse(html);
            if (/list_name/.test(html)) {
                var pic = jhtml.data[0].vod_pic;
                var typ = jhtml.data[0].type_name;
                var vodname = jhtml.data[0].vod_name;
                var des = jhtml.data[0].vod_content;
                var act = jhtml.data[0].vod_actor;
                var dir = jhtml.data[0].vod_director;
                var tabs = jhtml.data[0].vod_play_from.split('$$$');
                var conts = jhtml.data[0].vod_play_url.split('$$$');
                var url = jhtml.data[0].vod_id;
            } else {
                var pic = jhtml.list[0].vod_pic;
                var typ = jhtml.list[0].type_name;
                var vodname = jhtml.list[0].vod_name;
                var des = jhtml.list[0].vod_content;
                var act = jhtml.list[0].vod_actor;
                var dir = jhtml.list[0].vod_director;
                var tabs = jhtml.list[0].vod_play_from.split('$$$');
                var conts = jhtml.list[0].vod_play_url.split('$$$');
                var url = jhtml.list[0].vod_id;
            }
        } else {
            var pic = parseDomForHtml(html, "rss&&pic&&Text").replace("http://t.8kmm.com", "https://www.wxtv.net");
            eval(fetch('hiker://files/rules/xyq/zywcj.js'));
            picfun();
            var typ = parseDomForHtml(html, "body&&type&&Text");
            var des = parseDomForHtml(html, "rss&&des&&Text");
            var act = parseDomForHtml(html, "rss&&actor&&Text");
            var dir = parseDomForHtml(html, "rss&&director&&Text");
            var tabs = parseDomForArray(html, 'rss&&dl&&dd');
            var conts = parseDomForArray(html, 'rss&&dl&&dd');
            var url = parseDomForHtml(html, 'rss&&id&&Text');
            var vodname = parseDomForHtml(html, 'rss&&name&&Text');

        }
        //log(tabs);

        if (!filter(typ)) {
        setPagePicUrl(pic);
            items.push({
                title: '演员：' + '\n' + act,
                desc: '导演：' + dir,
                pic_url: pic + '@Referer=' + pic,
                url: $('hiker://empty#noRecordHistory#').rule((des) => {setResult([{title: des, col_type: 'long_text'}]);}, des),
                col_type: 'movie_1_vertical_pic'
            });
            var realurl = ["v.pptv.com", "www.mgtv.com", "www.iqiyi.com", "v.youku.com", "tv.sohu.com", "www.le.com", "v.qq.com", "www.ixigua.com", "www.bilibili.com", "m.1905.com", "vip.1905.com","www.miguvideo.com"];
            for (var i in realurl) {
            if (html.search(realurl[i]) != -1) {
            var dnen = JSON.parse(fetch('hiker://files/rules/xyq/zywset.json', {})).enDn;
            items.push({
            	title:'断插：'+(dnen == 1?'““✅””':'❎'),
                url:$('hiker://empty#noRecordHistory#').lazyRule((dnen)=>{
                if (dnen == 1) {
                var fileUrl = fetch("hiker://files/rules/xyq/zywset.json", {}).replace('\"enDn\":\"1\"', '\"enDn\":\"0\"');
                writeFile("hiker://files/rules/xyq/zywset.json", fileUrl);
                refreshPage(false);
                return 'toast://已禁用断插调用！';
                } else {
                var fileUrl = fetch("hiker://files/rules/xyq/zywset.json", {}).replace('\"enDn\":\"0\"', '\"enDn\":\"1\"');
                writeFile("hiker://files/rules/xyq/zywset.json", fileUrl);
                refreshPage(false);
                return 'toast://已开启断插调用！'
                }
                },dnen),
                col_type:'flex_button'
            });
              if(dnen != 1){
               var parse = ['默认解析','默认解析弹幕版'];
               for (var k in parse){
                  items.push({
                     title: (getItem('zywparse',parse[0]) == parse[k] ? '““' + parse[k] + '””' : parse[k]),
                     url:$(parse[k]).lazyRule(()=>{setItem('zywparse',input);refreshPage(false);return 'hiker://empty'}),
                     col_type: 'flex_button'
                    })
                }
              }else{
             items.push({
              title: '线路配置',
              url: "hiker://empty#noRecordHistory#@rule=js:this.d=[];require('https://gitea.com/AI957/Hiker/raw/m/v/Route.js');Route.setParse();setResult(d);",
              col_type: 'flex_button'
            });
            items.push({
             title: '解析管理',
             url: "hiker://empty#noRecordHistory#@rule=js:this.d=[];eval(fetch('hiker://files/cache/fileLinksᴰⁿ.txt'));require(fLinks.jxItUrl);jxItem.jxList();setResult(d)",
             col_type: 'flex_button'
            });
        }
      break}
 };
            items.push({
               title: getMyVar('zywlsort','1')=='1'?'排序':'““排序””',
               url: "hiker://empty#noHistory#@lazyRule=.js:putMyVar('zywlsort', getMyVar('zywlsort','1')=='1'?'0':'1');refreshPage(false);'toast://切换成功！'",
               col_type: 'scroll_button'
          });
            var gmv=MY_URL;
            //-----简介选集分割线---//
            for (var k = 0; k < conts.length; k++) {
                if (/dd flag/.test(conts)) {
                    var flag = parseDomForHtml(tabs[k], "dd&&flag");
                } else {
                    var flag = tabs[k];
                };
                if (/dd flag/.test(conts)) {
                    var lists = conts[k].split(">\n")[1].split("\n<")[0].split("#");
                } else if (/\r/.test(conts)) {
                    var lists = conts[k].split("\r");
                } else {
                    var lists = conts[k].split("#");
                }
                items.push({
                    title: (getMyVar(gmv, '0') == k ? '““' + flag + '””' : flag),
                    url: `hiker://empty@lazyRule=.js:putMyVar('` + gmv + "', '" + k + `');refreshPage();'toast://切换成功！'`,
                    col_type: 'scroll_button'
                });
                tvlist.push(lists.join('#'));
                tvtabs.push(flag);
           };

                if (getMyVar('zywlsort', '1') == '1') {
                    var list = tvlist[getMyVar(gmv, '0')].split("#");
                } else {
                    var list = tvlist[getMyVar(gmv, '0')].split("#").reverse();
                }
                //log(list);
               var flag = tvtabs[getMyVar(gmv, '0')];

               if (list != null) {
               	 var url = {};
                    for (var j = 0; j < list.length; j++) {

                        if (list[j].split('$')[1] != null) {
                            url = list[j].split('$')[1];
                        } else {
                            url = list[j].split('$')[0];
                        }
                        if (flag == 'leduo') {
                            url = 'https://api.ldjx.cc/wp-api/ifrty.php?isDp=1&vid=' + url
                        }
                        if (MY_URL.indexOf('yparse') != -1) {
                            url = 'http://jx.yparse.com/index.php?url=' + url
                        }
                        if (MY_URL.indexOf('7kjx') != -1) {
                            url = 'https://jx.xmflv.com/?url=' + url
                        }
                        if (MY_URL.indexOf('vipm3u8') != -1) {
                            url = 'http://player.travelbooking.cc/player?vid=' + url+'&token=4732bUERfVb60lWNSLrsd5-2s1r70KeA89C3VwrGYYdByboQT9o4OzxIr5-8/cX9-sO6'
                        }
                        if (MY_URL.indexOf('ujuba') != -1) {
                            url = 'https://zy.ujuba.com/play.php?url=' + url
                        }
                        if (flag == 'ddyunp' || flag == 'xin') {
                            url = 'https://player.90mm.me/play.php?url=' + url.replace(/第.*?集/g, '')
                        }
                        if (flag == 'qdyun') {
                            url = 'http://qdy.zt6a.cn/parse?resources=' + url
                        }
                        if (flag == 'ppayun' || flag == 'gangtiexia') {
                            url = url.substring(0, 4) == 'http' ? url.replace('683d2433ee134cde8063d50506c1a1b1', '3bb24322f78b47dfb8723c13d46d45ee') : 'https://wy.mlkioiy.cn/api/GetDownUrlWy/3bb24322f78b47dfb8723c13d46d45ee/' + url
                        }
                        if (flag == 'tt10') {
                            url = 'https://wy.mlkioiy.cn/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/' + url
                        }
                        if (MY_URL.indexOf('yyid6080') != -1 || MY_URL.indexOf('p4kan') != -1) {
                            if (flag == 'xigua' || flag == 'bjm3u8') {
                                url = 'https://bbs.cnzv.cc/dp/mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id=' + url;
                            } else if (flag == 'qqkj') {
                                url = 'https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id=' + url;
                            } else if (flag == 'tudou') {
                                url = 'https://sf1-ttcdn-tos.pstatp.com/obj/' + url + '#.mp4';
                            } else {
                                url = url
                            };
                        }
                        if (flag == 'niux') {
                            url = 'https://www.shenma4480.com/jx.php?id=' + url
                        }
                        if (flag == 'mx771') {
                            url = 'http://vip.mengx.vip/home/api?type=ys&uid=2117076&key=abghklvyDEIJLNT025&url=' + url
                        }                        
                        if (flag == 'hkm3u8') {
                            url = 'https://jxn2.178du.com/hls/' + url
                        }
                        if (flag == 'xsp1') {
                            url = 'https://jx.api.xhfhttc.cn/jx/?type=xsp1&url=' + url
                        }
                        if (flag == 'bb') {
                            url = 'https://jx.api.xhfhttc.cn/jx/?url=' + url
                        }
                        if (flag == 'ltnb') {
                          url = 'https://09tv.top/jx/?url=' + url
                        }
                        if (flag == 'dym3') {
                          url = 'https://1.m3u8.shop/m3u8.php?url=' + url
                        }                        
                        if (flag == 'languang') {
                            url = 'https://j.languang.wfss100.com/?url=' + url
                        }
                        if (flag == 'msp') {
                            url = 'https://titan.mgtv.com.bowang.tv/player/?url=' + url
                        }
                        if (flag == 'kdyx' || flag == 'kdsx') {
                            url = 'http://api.kudian6.com/jm/pdplayer.php?url=' + url
                        }
                        if (flag == '789pan' || flag == 'pll') {
                        	//https://www.gudetv.com/danmu/?url=
                            url = 'https://vip.gaotian.love/api/?key=sRy0QAq8hqXRlrEtrq&url=' + url
                        }
                        if (flag == 'fanqie') {
                            url = 'https://jx.fqzy.cc/jx.php?url=' + url
                        }
                        if (flag == 'mysp' || flag == 'xmzy' || flag == 'tyun') {
                            url = 'http://jiexi.sxmj.wang/jx.php?url=' + base64Encode(url)
                        }
                        if (flag == 'lekanzyw') {
                            url = 'https://bfq.ikan6.vip/m3u8.php?url=' + url
                        }
                        if (flag == 'muxm3u8') {
                            url = 'https://jiexiheyi.naifeimi.com/api/?key=WWBdFWHgw5HkfmOHR7&url=' + url
                        }
                        if (flag == 'zbkplayer') {
                            url = 'https://analysis.yikan.one/analysis/player/?uid=8&my=fjkmoqFJLORTVZ1359&url=' + url
                        }
                        if (flag == 'yunbo'||flag == 'banyun') {
                            url = 'https://www.mayigq.com/vodzip/player.php?vid=' + url
                        }
                        if (flag == 'Tcm3u8') {
                            url = 'https://api.iopenyun.com:88/vips/?url=' + url
                        }
                        if (flag == 'kkyun'&&MY_URL.indexOf('hikan')!=-1) {
                            url = 'https://www.dmplay.xyz/d?url=' + url
                        }
                        if (!/ftqp/.test(flag)&&MY_URL.indexOf('wkfile')!=-1) {
                            url = 'https://ptwo.wkfile.com/m3u8.php?url=' + url
                        }
                        if (flag == 'VIP') {
                            url = 'https://www.yanaifei.cn/player/?url=' + url
                        }
                        if (flag == 'aly') {
                            url = 'https://jx.shigys.com/?url=' + url
                        }
                        if (flag == 'bst') {
                            url = 'https://hj.52svip.cc/bst/tmzz.php?type=bestv&url=' + url
                        }
                        if (flag == 'xyb') {
                            url = 'https://good-vip.mmiyue.com/zhichi/HaoR.php?id=' + url
                        }
                        if (flag == 'weibo') {
                            url = 'https://hj.52svip.cc/q/weibojx.php?url=' + url
                        }
                        //if (flag == 'miaoparty') {
                        //url = 'https://jiexi.msdv.cn/jiemi/?url=' + url
                        //}                        
                        var title = (list[j].split('$')[0].indexOf('http') != -1 ? [j + 1] : list[j].split('$')[0].replace(/^\s*/, ""));
                        try{
                        title = title.match(/(第|\d|-)*(集|期)/g)?title.replace(/第|集|期/g,''):title;
                        } catch (e) {}
                        if (list.length <= 4) {
                            var clt = 'text_2';
                        } else {
                            var clt = isNaN(title) ? 'flex_button' : 'text_5'
                        }
                        if (filter(base64Decode('VklQ'))) {
                            items.push({
                                title: title,
                                url: 'hiker://empty##' + flag + '##' + url.replace(/\n*/g, '') + '##' +'#noPre#'+ `@lazyRule=.js:/*refreshX5WebView*/eval(fetch('hiker://files/rules/xyq/zywcj.js'));lazyRu();`,
                                //col_type: title.length>=6?'text_2':'text_3'
                                extra: {
                                   id: 'hiker://empty##' + flag + '##' + url.replace(/\n*/g, '') + '##',
                                   longClick:[{
                                       title:'推送当前选集到TVBox',
                                       js:$.toString((title,flag,link,pic,vodname)=>{
                                       return 'hiker://page/push?rule=XYQ推送&pushurl=' + encodeURIComponent(JSON.stringify({
                                            "name": vodname,
                                            "from": flag,
                                            "pic":pic,
                                            "url": title+'$'+link
                                        }))},title,flag,url.replace(/\n*/g, ''),pic,vodname)
                                    }]
                                },
                                col_type: clt
                            });
                        } else {
                            items.push({
                                title: title,
                                url: url.replace(/\n*/g, '') + flag + `@lazyRule=.js:/*refreshX5WebView*/if(input.search(/html|bilibili/)!=-1){'http://17kyun.com/api.php?url='+input;}else{input + '#isVideo=true#'}`,
                                //col_type: title.length>=6?'text_2':'text_3'
                                col_type: clt
                            });
                        }
                    } //for j list.length
                } //if list != null    
            //} //for i conts.length
            
            items.unshift({
                title: '推送列表到TVBox',
                url: $('hiker://empty#noHistory#').lazyRule((tvlist,tvtabs,act,des,pic,vodname) => {
                    let purl = JSON.stringify({
                        url: tvlist.join('$$$'),
                        from:tvtabs.join('$$$'),
                        actor:act,
                        pic:pic,
                        content:des,
                        name:vodname
                    });
                    return 'hiker://page/push?rule=XYQ推送&pushurl=' + encodeURIComponent(purl.replace(/\&/g, '＆＆'));
                },tvlist,tvtabs,act,des,pic,vodname),
                col_type: "scroll_button"
            });
        } //!filter(typ)
    } catch (e) {}
    res.data = items;
    setHomeResult(res);
};

//动态解析
function lazyRu() {
var flag = input.split('##')[1];
var src = (input.split('##')[2]).replace(/amp;/g, "").replace(/^\s*/, "");
//x5rule强力嗅探函数
function x5rule(srcurl) {
    showLoading("正在进行X5检索，请稍候...");
    var video = 'x5Rule://' + srcurl + '@' + $.toString(() => {
        //fba.log(fba.getUrls());
        var urls = _getUrls();
        if (window.count == null || window.count == 'undefined') {
            window.count = 1
        }
        if (window.count >= 25) {
            return location.href
        }
        if (document.querySelector('body').innerText.search(/触发了防盗链|未授权|接口防盗/) != -1) {           
           location.href = location.href
        };
        if (urls.length > 0) {
            for (var i in urls) {
               if (urls[i].match(/dycdn\-tos\.pstatp|\.m3u8|\.mp4|\.flv|netease\.com|video_mp4|type\=m3u8/) && !urls[i].match(/html|m3u8\.tv|\&next|ac\=dm|\=http|https\:\/\/[\d]\.m3u8|\?url\=\/m3u8/)) {
                        //fy_bridge_app.log(urls[i])
                    if (fy_bridge_app.getHeaderUrl) {
                        if(fy_bridge_app.clearM3u8Ad){
                         if((urls[i].includes("vip.ffzy")||urls[i].includes("vip.lz")||urls[i].includes("hd.lz")||urls[i].includes(".cdnlz")||urls[i].includes("suonizy")) && urls[i].includes("index.m3u8")&&!urls[i].includes("=http")){
                             fy_bridge_app.log("尝试去视频广告");
                             let url=urls[i];
                             let m3u8=fba.fetch(url);
                             if(m3u8.includes('EXT-X-STREAM-INF')){
                               let houz=m3u8.split("\n")[2];
                               url=urls[i].replace("index.m3u8",houz);
                             }
                             return fy_bridge_app.parseLazyRule($$$(url).lazyRule(()=>{
                               toast('尝试去除视频广告中，请稍等。');
                               let f = cacheM3u8(input);
                               let c = readFile(f.split("##")[0]);
                               c = c.replace(/#EXTINF.*?\s+.*?116977.*?\.ts\s+|#EXTINF.*?\s+.*?117020.*?\.ts\s+|#EXTINF.*?\s+.*?1o.*?\.ts\s+|#EXTINF.*?\s+.*?p1ayer.*?\.ts\s+|#EXTINF.*?\s+.*?\/video\/original.*?\.ts\s+/g,'');
                               writeFile(f.split("##")[0], c);
                               return f;
                             }))
                         }
                        }
                        return fy_bridge_app.getHeaderUrl(urls[i]).replace(";{", "#ignoreImg=true##isVideo=true#;{");
                   } else {
                        if (urls[i].indexOf('bilivideo') != -1) {
                            return urls[i] + ';{Referer@https://www.bilibili.com&&User-Agent@Mozilla/5.0}';
                        } else if (urls[i].indexOf('titan.mgtv.com') != -1) {
                            return urls[i] + '#isVideo=true#' + ';{Referer@www.mgtv.com&&User-Agent@Mozilla/5.0}';
                        } else if (urls[i].indexOf('juhaokan') != -1) {
                            return urls[i] + ';{Referer@https://www.juhaokan.cc/}';
                        } else if (urls[i].indexOf('ojbk') != -1) {
                            return urls[i] + ';{Referer@https://v.ojbkjx.com/}';
                        } else if (urls[i].indexOf('wkfile') != -1) {
                            return urls[i] + ';{Referer@https://fantuan.wkfile.com/}';
                        } else {
                            return urls[i]
                        }
                   }
               }
            }
        } else {
            fba.hideLoading();
            return ''
        }
    });
    return video
}
//结束x5rule强力嗅探函数
//开始弹幕函数
function danmufun(src) {
    var danmu = [];
    try {
        //扶风弹幕接口
        //var json = JSON.parse(request("https://dmku.byteamone.cn/dmku/?ac=dm&id=" + md5(src.split('"')[0].split('?')[0]).slice(12)+ ' P', {}));
        //https://dmku.byteamone.cn/dmku/?ac=dm&id=45a5b77906d67d0bb261%20P
        //parwix解析弹幕接口
        var json = JSON.parse(request("https://dmku.thefilehosting.com/?ac=dm&url=" + src.split('"')[0].split('?')[0], {}));
        if (json.danmuku) {
            for (let i = 0; i < json.danmuku.length; i++) {
                danmu.push({
                    text: json.danmuku[i][4],
                    time: json.danmuku[i][0]
                });
            };
        } else {
            for (let i = 0; i < json.length; i++) {
                danmu.push({
                    text: json[i].text,
                    time: json[i].time
                });
            }
        }
    } catch (e) {}
    let danmt = JSON.stringify(danmu);
    writeFile("hiker://files/cache/danmu.json", danmt);
}
//结束弹幕函数    
//开始官方站
var realurl = ["v.pptv.com", "www.mgtv.com", "www.iqiyi.com", "v.youku.com", "tv.sohu.com", "www.le.com", "v.qq.com", "www.ixigua.com", "www.bilibili.com", "m.1905.com", "vip.1905.com","www.miguvideo.com"];
var dnen = JSON.parse(fetch('hiker://files/rules/xyq/zywset.json', {})).enDn;
for (var i in realurl) {
    if (src.search(realurl[i]) != -1) {
        if (dnen == '1') {
            log('调用断插解析');
            eval("var config =" + fetch("hiker://files/cache/MyParseSet.json"));
            eval(fetch(config.cj));
            return aytmParse(src.split('"')[0]);
        } else {
            let dm = getItem('zywparse','默认多线解析').includes('弹幕')?true:false;
            if(dm){
            danmufun(src)
            }
            let link = src.split('"')[0].split('?')[0];
            var jiexik = ['https://jx.jsonplayer.com/player/?url=','https://jx.xyflv.com/?url=','https://jx.quankan.app/?url=','https://jx.xmflv.com/?url=','https://www.pangujiexi.cc/jiexi.php?url='];
            let play=[];
            for (var j in jiexik) {
              play.push('video://'+jiexik[j]+link);
            }
            if(dm){
            return JSON.stringify({
                    urls: play,
                    danmu: "hiker://files/cache/danmu.json"
                });
            }else{
            return JSON.stringify({
                    urls: play
                });
            }
        } //if dnen
    } //if src
} //for i
//结束官方站    
if (src.indexOf("xmflv") != -1) {
    eval(getCryptoJS());
    //感谢墙佬提供算法代码
    var sign = function(a) {
        var b = CryptoJS.MD5(a);
        var c = CryptoJS.enc.Utf8.parse(b);
        var d = CryptoJS.enc.Utf8.parse('UVE1NTY4MDY2NQ==');
        var e = CryptoJS.AES.encrypt(a, c, {
            iv: d,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        });
        return e.toString()
    }
    var ohtml = fetch(src, {});
    var time = ohtml.match(/var time = \'(.*?)\'/)[1];
    var url = ohtml.match(/var url = \'(.*?)\'/)[1];
    var html = request('https://jx.xmflv.com/player.php?time=' + time + '&url=' + url)
    var vkey = html.match(/var vkey = \'(.*?)\'/)[1];
    var fvkey = sign(html.match(/var fvkey = \'(.*?)\'/)[1]);
    var body = 'time=' + time + '&url=' + url + '&wap=1&vkey=' + vkey + '&fvkey=' + fvkey;
    var json = fetch('https://jx.xmflv.com/xmflv-1.SVG', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body,
        method: 'POST'
    });
    //log(json);
    return JSON.parse(json).url;
} else if (/wkfile/.test(src)) {
  if(/ptwo/.test(src)){
    return x5rule(src);
  }else{
    return src + ';{Referer@https://fantuan.tv}'
  };
}else if (src.indexOf("135-cdn") != -1) {
    refreshX5WebView(src);
    return "toast://请等待加载选集！";
} else if (src.indexOf("/share/") != -1) {
    try {
        var link = src.split("/share")[0];
        var fc = fetch(src, {}).replace("var purl", "var main");
        if (fc.indexOf("main") != -1) {
            var mat = fc.match(/var main.*?;/)[0];
            eval(mat);
            var play = (main.indexOf("http") != -1 ? main : link + main);
        } else {
            var main = fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];
            var play = (main.indexOf("http") != -1 ? main : link + main)
        };
        
        if((play.includes("vip.ffzy")||play.includes("vip.lz")||play.includes("hd.lz")||play.includes(".cdnlz")||play.includes("suonizy")) && play.includes("index.m3u8")){
            let houz=request(play).split("\n")[2];
            play=play.replace("index.m3u8",houz);
            play=clearM3u8(play);
        }
        return play;
    } catch (e) {
        refreshX5WebView(src);
        return "toast://请等待加载选集！"
    };
} else if (flag=='rrm3u8') {
	function suffix(video) {
    let str = video.substring(video.indexOf(':') + 3);
    let ind = str.indexOf('/');
    let str2 = str.substring(0, ind);
    let str3 = str.substring(ind);
    let key = 'cb877c68fae08369125b645d694ed625';
    let time = Math.round(new Date().getTime()/1000).toString();
    let wsh=md5(key+str2+str3+time);
    return video+'?wsSecret='+wsh+'&wsTime='+time
    };
return suffix(src);
} else if (flag == 'duoduozy') {
   if(!src.includes('http')){
    return x5rule('https://www.ysgc.tv/static/player/dplayer.php?url='+src);
   }else{
    var html = fetch("http://120.233.84.226:5612/tvjx/?url=" + src, {headers: {"User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; PBEM00 Build/QKQ1.190918.001)"}});
    var pubk = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAOptDYA7USHJqnoWYuuSqOGyqnKo4v8z1G3K1HCpGq/9jN6rbWZOgW4nfIT1Iho3WFiGrtlJidaGG+PAFddUejuBJH8AEwKRFJEwsQ012znNgDylXHE8wtZRex3KiRmWwhEXZc7HPw6XrPCpRGSn1OEkEO7jKb3VleHgWCWpBLYLAgMBAAECgYBVuuHoFkk6YQTONyef3PeT6oH5AphZGfxC1p1QQhd3avM8b1bHxkgBH8Gi4f7BtaHCZibFYeZdpJfId3PFVqiILR2rebJ5prJpFyfHl3RVqUZ9AzPumHRRD5JIC6YA7vBCg5724T8Veg9CxTdHzybYLCwXaDYFTlW0/6nnh1gPoQJBAPqbq5gkXCh+o/DrpT7kqia2cTun45XMCmYTiKShjmMujIVPC+/O43aErRpuLbeivxI6B9XqA841mSPb8uTUpbsCQQDveECxlKfpq01q//xAXb3lL+e+P7DX18W8ek+lLtXoUDhyKEB2c6zHO9g6A/6fHgx2DJH1+vnYmjHiiH2QsoPxAkEAmNaRy0L5lZTOpSMB756DiwKfglN9ACGlgeWN42HINgLwnmi8De/uV5zI+aKSbTlrMFGF79c9pOiZUf5VX2u0+wJABk6GdabSnUbTrSO8wv01CRov4kTPJYAbRxF5k4IeRBYIxojk2bnGLSEYWr7ML+icr2c5WN8ZQWkeMzchB3SMIQJADGzV6RHvx/6DCzLvSrtHUnyfKyCh19tC5hxyVyuXMAlKdQIzRSiTIOiRY/5HwvVi8ZCVvYmHQ7n0XGYFdJ3s7Q==";
    var decurl = rsaDecrypt(html, pubk, {type: 1, long: 2});
    return decurl;
    //return 'toast://没有找到解析该直链的解析。'
   }
} else if (flag=='ddzy') {
   if(src.includes('http')){
    return cacheM3u8(src);
    }else{
    return 'toast://没有找到解析该链接的解析。'
    }
} else if (flag == 'miaoparty') {
    var miao = request('https://cache1.jhdyw.vip:8091/rrmi.php?url=' + src);
    return JSON.parse(miao).url;
} else if (src.indexOf("renrenmi-") != -1) {
    return x5rule('https://jx.blbo.cc:4433/miniku?url='+src);
} else if (src.indexOf("RongXingVR") != -1) {
//https://www.jsyb.cc/nrx/?url=
    return x5rule('http://vip.jxyanyu.com/dmplayer/?url='+src);
} else if (src.indexOf("xfy-") != -1) {
    return x5rule('https://mx.ml0513.com/?url='+src);
} else if (/fqzy\.cc/.test(src)) {
    var html = fetch(src, {
        headers: {
            "User-Agent": MOBILE_UA
        }
    });
    var play = html.match(/\"url\": \"(.*?)\"/)[1];
    return play;
} else if (/ikan6/.test(src)) {
    eval(getCryptoJS());
    var html = fetch(src, {
        headers: {
            "User-Agent": MOBILE_UA,
            "Referer": "https://www.ikan6.vip/"
        }
    });
    var urlstr = html.match(/getVideoInfo\(\"(.*?)\"\)/)[1];
    var bt_token = html.split('bt_token = "')[1].split('"')[0];
    var token_iv = CryptoJS.enc.Utf8.parse(bt_token);
    var token_key = CryptoJS.enc.Utf8.parse('0DECDC01DA6CB2C5');
    function decrypt(urlstr, token_key, token_iv) {
        return CryptoJS.AES.decrypt(urlstr, token_key, {
            'iv': token_iv
        }).toString(CryptoJS.enc.Utf8);
    }
    var bkurl = decrypt(urlstr, token_key, token_iv);
    if (/ikan6/.test(bkurl)) {
        return bkurl + ';{Referer@https://www.ikan6.vip/}';
    } else {
        return bkurl;
    }
} else if (src.indexOf("api.ldjx") != -1) {
    var purl=request(src,{}).match(/var url1=\'(.*?)\'/)[1];
    var pla=base64Decode(purl.replace(/RGlkLnBocD9WQ9WED92aWQ9WE1NVFU12awD92aWQ9WE1NVFU1TWQ9WE1NVFU1TWpaNrdt05/,''));
    return pla;
} else if (src.indexOf("aHR0c") != -1) {
    return decodeURIComponent(base64Decode(src.split("&")[0]));
} else if (src.indexOf("haodanxia") != -1 || src.indexOf("cqzyw") != -1) {
    var ul = JSON.parse(fetch(src, {
        headers: {
            "User-Agent": "Dalvik/2.1.0"
        },
        redirect: false,
        withStatusCode: true
    }));
    if (ul.statusCode == "302") {
        var play = ul.headers.location[0];
    } else {
        var play = src + "#isVideo=true#"
    };
    return play;
} else if (src.indexOf("shenma4480") != -1) {
    var sm = "https://www.shenma4480.com/" + fetch(src, {
        headers: {
            "User-Agent": MOBILE_UA,
            "Referer": "https://www.shenma4480.com"
        }
    }).match(/var u=\"(.*?)\"/)[1];
    return fetch(sm, {
        headers: {
            "User-Agent": MOBILE_UA,
            "Referer": "https://www.shenma4480.com"
        }
    }).match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace(/[+]/g, "%20");
} /*else if (src.indexOf("mlkioiy") != -1) {
    if (src.indexOf("ShowVideo") != -1) {
        var mlki = parseDomForHtml(fetch(src, {}), "body&&#dplayer&&result");
        var fileUrl = "https://github.moeyy.xyz/https://raw.githubusercontent.com/xyq254245/HikerRule/main/pako-min.js";
        eval(request(fileUrl, {}));
        return realUrl;
    } else {
        return src + "#isVideo=true#"
    };
} */else if (src.indexOf("ddyunp") != -1 || src.indexOf("90mm.me") != -1) {
    eval(getCryptoJS());
    var id = src + 'duoduo' + 'l' + (Math.floor(new Date().getTime() / 100000) * 100).toString();
    var dat = CryptoJS.MD5(id).toString(CryptoJS.enc.Hex);
    var purl = 'https://hls.90mm.me/ddyun/' + src + '/l/' + dat + '/playlist.m3u8';
    return purl;
} /*else if (src.indexOf("xsp1") != -1) {
    var pli = parseDomForHtml(fetch(src, {
        headers: {
            "User-Agent": MOBILE_UA,
            "Referer": "https://zz22x.com"
        }
    }), "body&&iframe&&src").split("url=")[1];
    try {
    var fileUrl = fetchCache("https://github.moeyy.xyz/https://raw.githubusercontent.com/xyq254245/HikerRule/main/parse.js",24);
    } catch (e) {
     fileUrl = fetch("hiker://files/libs/1e7db6906ccc9c8dd92ca42cba0fc3ff.js");
     }
    eval(fileUrl);
    var play = yqjx.toUrl(pli);
    return play != "" ? play : getUrl(pli);
} */else if (src.indexOf("kudian6.com") != -1) {
    var html = request(src);
    return html.match(/url\":.*?[\'\"](.*?)[\'\"]/)[1];
} else if (/ujuba/.test(src)) {
    var html = request(src, {});
    var play=parseDomForHtml(html,'.content&&iframe&&src');
    return play.split('url=')[1];
} else if (/wfss100/.test(src)) {
    var phtml = request(src, {});
    var ifsrc = src.split('/?url=')[0] + parseDomForHtml(phtml, "body&&iframe&&src");
    var ifsrct = ifsrc.split('?url=')[0] + parseDomForHtml(request(ifsrc, {}), "body&&iframe&&src");
    var urll = request(ifsrct, {}).match(/vodurl = \'(.*?)\'/)[1];
    return urll + ';{Referer@https://j.languang.wfss100.com/}';
} else if(src.indexOf("mayigq") != -1){
var jxhtml = request(src, {
    headers: {
        "Referer": "https://www.mayigq.com"
    }
});
var bdy = parseDomForHtml(jxhtml, '#player_swf&&lovevod');
var pthtml = request('https://www.mayigq.com/vodzip/config/token.php', {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': 'https://www.mayigq.com',
        'X-Requested-With': 'XMLHttpRequest'
    },
    body: 'menudata=' + bdy,
    method: 'POST'
});
var link = 'https://www.mayigq.com/vodzip/' + pthtml.match(/var url = \"(.*?)\"/)[1];
var play = JSON.parse(request(link, {
    headers: {
        'Referer': 'https://www.mayigq.com'
    },
    redirect: false,
    withHeaders: true
})).headers.location[0];
//log(play);
if (/gekai/.test(play)) {
    return JSON.parse(request(play, {
        headers: {
            'Referer': 'https://www.mayigq.com'
        },
        redirect: false,
        withHeaders: true
    })).headers.location[0] + '#isVideo=true#';
} else {
    return play + '#isVideo=true#';
};
}else if(flag == 'hkm3u8'){
	function getGtk(pt) {
                var count = 0x0;
                var base = 0x0;
                for (var i = 0x0; i < pt.length; i += 0x4) {
                    count += parseInt(pt[i] + pt[i + 0x1] + pt[i + 0x2] + pt[i + 0x3], 0x10);
                    count %= 0x400a;
                }
                base = count % 0xa;
                var param = 0x0;
                for (var a = 0x0; a < pt.length; a++) {
                    param += pt.charCodeAt(a) * (a + base);
                    param %= count;
                }
                return param + ''
            };

            function getBkn(sk) {
                for (var t = 0x195c, i = 0x0, length = sk.length; length > i; ++i) {
                    t += (t << 0x5) + sk.charAt(i).charCodeAt();
                }
                return (0x7fffffff & t) + ''
            };
	var html = fetch(src, {
                headers: {
                    'Referer': 'https://jxn.5408h.cn'
                },
                method: 'GET'
            });
            //log(h);
            eval(html.split('<script type="text/javascript">')[1].split('var is_normal')[0]);
            var url = 'https://jxn2.178du.com/hls/' + src + '%7C' + ti + '%7C' + sk + '%7C' + pt + '%7C' + getBkn(sk) + '%7C' + getGtk(pt) + '.m3u8';
             return cacheM3u8(url);
} else if(flag == 'kkyun'){
	var tm=(new Date).getTime()+'';
	var enc=md5('timespan'+tm+',url'+src.split('url=')[1]);
	var cs='url='+src.split('url=')[1]+'&timespan='+tm+'&urlEncry='+enc;
	var json=request('https://www.dmplay.xyz/api/v1.0/dmplay/decryptUrl', {headers:{'Referer':'https://www.dmplay.xyz/play/'},body:cs,method:'POST'});
	return JSON.parse(json).data.url;
//json解析的线路
} else if (flag == 'pll' || flag == '789pan' || flag == 'mx771' || flag == 'muxm3u8') {
    var json = JSON.parse(fetch(src, {}));
    if (json.code == '200') {
        return json.url;
    };
//x5解析的线路
}else if(flag == 'zbkplayer'||flag == 'ltnb'||flag == 'dym3'||flag == 'tpiframe'||flag=='Tcm3u8'|| flag == 'renrenmi'||flag=='VIP'||flag=='xyb'||flag=='bst'||flag=='weibo'||flag=='aly'){
return x5rule(src);
} else if (/yparse\.com|47api|travelbooking/.test(src)) {
    return x5rule(src);
} else if (src.indexOf("alizy-") != -1) {
    return x5rule('http://hong.1ren.ren/?url=' + src);
} else if (src.indexOf("//520.com") != -1) {
    return x5rule("https://titan.mgtv.com.o8tv.com/jiexi/?url=" + src);
//直链线路
} else if(/\.m3u8|obj\/tos|netease\.com|\.mp4/.test(src)){
danmufun(src);

if((src.includes("vip.ffzy")||src.includes("vip.lz")||src.includes("hd.lz")||src.includes(".cdnlz")||src.includes("suonizy")) && src.includes("index.m3u8")){
    let houz=request(src).split("\n")[2];
    src=src.replace("index.m3u8",houz);
    src=clearM3u8(src);
}

return JSON.stringify({
    urls: [src+ '#isVideo=true#'],
    danmu: "hiker://files/cache/danmu.json"
    });
} else {
    return src
}
//去量子，非凡m3u8广告
function clearM3u8(url) {
    if(url.includes("index.m3u8")){
        let m3u8=request(url);
        if(m3u8.includes('EXT-X-STREAM-INF')){
         let houz = m3u8.split("\n")[2];
         url = url.replace("index.m3u8",houz);
        }
    }
    let f = cacheM3u8(url);
    let c = readFile(f.split("##")[0]);
    c = c.replace(/#EXTINF.*?\s+.*?116977.*?\.ts\s+|#EXTINF.*?\s+.*?117020.*?\.ts\s+|#EXTINF.*?\s+.*?1o.*?\.ts\s+|#EXTINF.*?\s+.*?p1ayer.*?\.ts\s+|#EXTINF.*?\s+.*?\/video\/original.*?\.ts\s+/g,'');
    writeFile(f.split("##")[0], c);
    return f;
}

};

function chapter(){
var chp = [];
var html = getResCode().replace(/\<\!\[CDATA\[/g,'').replace(/\]\]\>/g,'');
try {
    if (/vod_play_from/.test(html)) {
        var jhtml = JSON.parse(html);
        if (/list_name/.test(html)) {
            var conts = jhtml.data[0].vod_play_url.split('$$$');
        } else {
            var conts = jhtml.list[0].vod_play_url.split('$$$');
        }
    } else {
        var conts = parseDomForArray(html, 'rss&&dl&&dd');
    };
    for (var j = 0; j < conts.length; j++) {
    if (/dd flag/.test(conts)) {
        var list = conts[j].split(">\n")[1].split("\n<")[0].split("#");
    } else if (/\r/.test(conts)) {
        var list = conts[j].split("\r");
    } else {
        var list = conts[j].split("#");
    }
    chp.push(list.length);
    }
} catch (e) {}
//log(Math.max.apply(Math,chp));
setResult('更新至:' + (Math.max.apply(Math,chp)));
}
//预处理代码
function zywpre() {
    if (!fetch('hiker://files/rules/xyq/zywset.json', {})) {
        var set = `{"ssmode":"0","listmod":"0","sscount":"5","tmout":"3000","enDn":"0"}`;
        writeFile("hiker://files/rules/xyq/zywset.json", set);
    }
    var ruleset = fetch('hiker://files/rules/xyq/zywset.json', {});
if (!JSON.parse(ruleset).enDn) {
    let set = ruleset.replace('"}', '","enDn":"0"}');
    writeFile("hiker://files/rules/xyq/zywset.json", set);
}
}