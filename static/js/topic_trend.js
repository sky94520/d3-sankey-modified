(window.webpackJsonp = window.webpackJsonp || []).push([[25], {
    "2XWQ": function(e, t, a) {
        e.exports = {
            trendProjectInfo: "antd-pro-pages-topic-trend-trend-by-id-trendProjectInfo",
            label: "antd-pro-pages-topic-trend-trend-by-id-label",
            header: "antd-pro-pages-topic-trend-trend-by-id-header",
            updatePublish: "antd-pro-pages-topic-trend-trend-by-id-updatePublish",
            name: "antd-pro-pages-topic-trend-trend-by-id-name",
            showAllHistories: "antd-pro-pages-topic-trend-trend-by-id-showAllHistories",
            history: "antd-pro-pages-topic-trend-trend-by-id-history",
            time: "antd-pro-pages-topic-trend-trend-by-id-time",
            remarks: "antd-pro-pages-topic-trend-trend-by-id-remarks",
            createTimeAndUser: "antd-pro-pages-topic-trend-trend-by-id-createTimeAndUser",
            createTime: "antd-pro-pages-topic-trend-trend-by-id-createTime",
            creator: "antd-pro-pages-topic-trend-trend-by-id-creator",
            limitMainTopic: "antd-pro-pages-topic-trend-trend-by-id-limitMainTopic",
            mainTopic: "antd-pro-pages-topic-trend-trend-by-id-mainTopic",
            expression: "antd-pro-pages-topic-trend-trend-by-id-expression",
            venues: "antd-pro-pages-topic-trend-trend-by-id-venues",
            basicInfoAndAction: "antd-pro-pages-topic-trend-trend-by-id-basicInfoAndAction",
            basicInfo: "antd-pro-pages-topic-trend-trend-by-id-basicInfo",
            keywordsOrEBs: "antd-pro-pages-topic-trend-trend-by-id-keywordsOrEBs",
            showMoreTags: "antd-pro-pages-topic-trend-trend-by-id-showMoreTags",
            action: "antd-pro-pages-topic-trend-trend-by-id-action",
            showAllKeyword: "antd-pro-pages-topic-trend-trend-by-id-showAllKeyword",
            split: "antd-pro-pages-topic-trend-trend-by-id-split",
            limitersAndAction: "antd-pro-pages-topic-trend-trend-by-id-limitersAndAction",
            limiters: "antd-pro-pages-topic-trend-trend-by-id-limiters",
            projectOperate: "antd-pro-pages-topic-trend-trend-by-id-projectOperate",
            actions: "antd-pro-pages-topic-trend-trend-by-id-actions",
            thumb: "antd-pro-pages-topic-trend-trend-by-id-thumb",
            termsContainer: "antd-pro-pages-topic-trend-trend-by-id-termsContainer"
        }
    },
    QJsF: function(e, t, a) {
        e.exports = {
            EditProjectInfo: "antd-pro-pages-topic-trend3-component-edit-project-info-EditProjectInfo",
            keys: "antd-pro-pages-topic-trend3-component-edit-project-info-keys",
            key: "antd-pro-pages-topic-trend3-component-edit-project-info-key",
            header: "antd-pro-pages-topic-trend3-component-edit-project-info-header",
            venueList: "antd-pro-pages-topic-trend3-component-edit-project-info-venueList",
            stepsAction: "antd-pro-pages-topic-trend3-component-edit-project-info-stepsAction",
            stepContent: "antd-pro-pages-topic-trend3-component-edit-project-info-stepContent",
            radioStyle: "antd-pro-pages-topic-trend3-component-edit-project-info-radioStyle"
        }
    },
    XFUC: function(e, t, a) {
        "use strict";
        a.r(t);
        a("Pwec");
        var n, r, i, s, l = a("CtXQ"), c = (a("5Dmo"),
        a("3S7+")), o = (a("+L6B"),
        a("2/Rp")), d = (a("2qtc"),
        a("kLXV")), u = (a("miYZ"),
        a("tsqr")), p = (a("p0pE"),
        a("gWZ8")), m = a.n(p), h = a("qIgq"), y = a.n(h), g = a("cDcd"), f = a.n(g), E = a("7bjz"), v = (a("cdWW"),
        a("N6R9")), b = (a("vw+V"),
        a("7Qib"),
        a("X4fA")), w = a("LvDl"), j = a("Avlv"), T = (a("IzEo"),
        a("bx4M")), S = (a("mnoV"),
        a("880l")), k = (a("AC1I"),
        a("bKGl")), O = a("ATId"), D = a.n(O), N = (a("NP8m"),
        a("9CGH")), I = (a("ASdT"),
        a("CIFD"),
        a("mc9K")), A = a("i1jn"), L = a("vgjS"), C = a.n(L), P = (a("ilzS"),
        a("21Y/")), q = Object(E.d)(Object(E.e)(function(e) {
            var t = e.trend
              , a = e.auth;
            return {
                trendDataAllTypesByModel: t.trendData,
                user: a.user
            }
        }))(function(e) {
            var t = Object(g.useState)()
              , a = y()(t, 2)
              , r = (a[0],
            a[1],
            Object(g.useState)("keywords"))
              , i = y()(r, 2)
              , s = i[0]
              , l = i[1]
              , c = Object(g.useState)(!1)
              , o = y()(c, 2)
              , d = o[0]
              , p = o[1]
              , m = Object(g.useState)({
                keywords: null,
                org: null,
                author: null,
                country: null
            })
              , h = y()(m, 2)
              , E = h[0]
              , v = h[1]
              , b = e.projectId
              , _ = e.dispatch
              , O = e.is_open
              , L = e.trendDataAllTypesByModel
              , q = e.getSelectedTerms
              , Y = e.selectedTitleUpdateQueryType
              , x = {};
            Object(g.useEffect)(function() {
                x = Object(w.cloneDeep)(L)
            }, [L]);
            Object(g.useEffect)(function() {
                x && s in x && Object(S.b)(function(e) {
                    n = e,
                    Object(S.g)("/lib/sankey-modified.js", {
                        check: ["d3", "sankey"]
                    }, function() {
                        var e, t = ["keywords", "country", "org", "author"];
                        for (var a in t) {
                            var n = t[a];
                            if (!E[n] && x[n]) {
                                if (x[n].unchoosed) {
                                    var r = !0
                                      , i = !1
                                      , s = void 0;
                                    try {
                                        for (var l, c = x[n].terms.slice(0, 10)[Symbol.iterator](); !(r = (l = c.next()).done); r = !0)
                                            l.value.selected = !0
                                    } catch (e) {
                                        i = !0,
                                        s = e
                                    } finally {
                                        try {
                                            r || null == c.return || c.return()
                                        } finally {
                                            if (i)
                                                throw s
                                        }
                                    }
                                }
                                var o = Object(k.camelizeKeys)(x[n], function(e, t) {
                                    return e.includes(" ") && !e.includes("_") || e.toLowerCase() !== e ? e : t(e)
                                });
                                (e = Object(w.cloneDeep)(E))[n] = o
                            }
                        }
                        p(!1),
                        v(JSON.parse(JSON.stringify(e)))
                    })
                })
            }, [x, e.printed]),
            Object(g.useEffect)(function() {
                _({
                    type: "trend/updateTrendDataByType",
                    payload: {
                        trendDataByType: E
                    }
                })
            }, [E]),
            Object(g.useEffect)(function() {
                _({
                    type: "trend/recordVisitOfTrendProject",
                    payload: {
                        project_id: b,
                        operate_type: "visits"
                    }
                })
            }, []);
            var B = function(e) {
                var t = e.data
                  , a = e.type;
                if (t && 0 !== t.terms.length) {
                    var n = Object(k.camelizeKeys)(t, function(e, t) {
                        return e.includes(" ") && !e.includes("_") || e.toLowerCase() !== e ? e : t(e)
                    })
                      , r = Object(w.cloneDeep)(E);
                    r[a] = n,
                    v(Object.assign({}, r))
                }
            };
            return f.a.createElement("div", {
                className: C.a.splitTrendBlock
            }, f.a.createElement(T.a, {
                className: C.a.cardContent
            }, f.a.createElement(j.b, {
                loading: d
            }), E[s] && E[s].terms && n && f.a.createElement("div", {
                className: C.a.mainContent
            }, f.a.createElement(A.a, {
                trendDataByType: E,
                queryType: s,
                updateQueryType: function(e) {
                    l(e),
                    Y(e),
                    x && x[e] ? B({
                        data: x[e],
                        type: e
                    }) : _({
                        type: "trend/getTrendByProjectsId",
                        payload: {
                            id: b,
                            query_type: e,
                            is_open: O
                        }
                    })
                },
                updateTrendDataByType: function(e) {
                    var t = Object(P.a)(E);
                    t[s].terms.map(function(t) {
                        e[s].includes(t.t) ? t.selected = !0 : t.selected = !1
                    }),
                    t[s].unchoosed = !1,
                    B({
                        data: t[s],
                        type: s
                    }),
                    q(t, s)
                },
                DEFAULT_SELECTED: 10
            }), f.a.createElement(N.a, {
                queryType: s,
                trendData: E[s],
                defaultSelect: 10,
                setPapers: e.getPapers,
                projectId: b,
                d3: n,
                saveImageClick: function(e, t) {
                    if (!e || !t || "keywords" == t) {
                        var a = document.querySelector("#chart svg")
                          , n = function(e) {
                            var t = document.createElement("div");
                            t.appendChild(e);
                            var a = t.innerHTML;
                            return t = null,
                            a
                        }(a)
                          , r = document.createElement("canvas");
                        r.width = 4e3,
                        r.height = r.width / a.attributes.width.value * a.attributes.height.value,
                        r.height = r.height,
                        D()(r, n, {
                            ignoreMouse: !0,
                            ignoreDimensions: !0,
                            scaleWidth: r.width
                        });
                        var i = document.createElement("canvas")
                          , s = [r.width, r.height];
                        i.width = s[0],
                        i.height = s[1];
                        var l = i.getContext("2d");
                        l.fillStyle = "#fff",
                        l.fillRect(0, 0, i.width, i.height),
                        l.drawImage(r, 0, 0);
                        var c = new Image;
                        c.src = i.toDataURL("image/jpeg", 1),
                        c.width = 540,
                        c.onload = function() {
                            l.drawImage(c, 0, 0, 330, 130);
                            for (var t = i.toDataURL("image/png"), a = window.atob(t.split(",")[1]), n = new ArrayBuffer(a.length), r = new Uint8Array(n), s = 0; s < a.length; s++)
                                r[s] = a.charCodeAt(s);
                            var o = new Blob([n],{
                                type: "image/png"
                            })
                              , d = new FormData;
                            d.append("action", "trend_project.UploadAvatar"),
                            d.append("parameters", JSON.stringify({
                                id: e
                            })),
                            d.append("file", o, e + ".jpg"),
                            fetch("https://analyse-api.aminer.cn/magic?", {
                                method: "post",
                                body: d
                            }).then(function(e) {
                                return e.json()
                            }).then(function(e) {
                                u.a.success("图片保存成功"),
                                window.location.reload()
                            })
                        }
                    }
                },
                user: e.user
            }), f.a.createElement(I.a, {
                query: e.keyWords,
                trendData: E[s],
                queryType: s
            }))))
        }), Y = (a("M+CC"),
        a("nbfz")), x = a("2XWQ"), B = a.n(x), M = a("jehZ"), F = a.n(M), R = (a("+BJd"),
        a("mr32")), V = (a("O3gP"),
        a("lrIw")), K = (a("aHsQ"),
        a("sGsY")), U = (a("y8nQ"),
        a("Vl3Y")), z = (a("iQDF"),
        a("+eQT")), Q = (a("sRBo"),
        a("kaz8")), W = (a("OaEy"),
        a("2fM7")), G = (a("5NDa"),
        a("5rEg")), J = a("tvKq"), H = (a("dBBL"),
        a("4/ND"),
        a("wd/R")), X = a.n(H), Z = a("LvOd"), $ = a("QJsF"), ee = a.n($), te = G.a.TextArea, ae = (W.a.Option,
        Q.a.Group,
        z.a.RangePicker), ne = null, re = null, ie = Object(E.d)(E.o, Object(E.e)(function(e) {
            var t = e.trend
              , a = e.loading
              , n = e.auth;
            return {
                eblist: t.eblist,
                getKeywordsOrVenues: t.getKeywordsOrVenues,
                loading: a.effects["trend/createTrendProject"],
                loadingKeywordsOrVenues: a.effects["trend/genVenues"],
                user: n.user
            }
        }), Object(E.a)())(function(e) {
            var t = e.form
              , a = e.dispatch
              , n = e.loading
              , r = e.theProjectInfo
              , i = e.id
              , s = (e.user,
            e.getKeywordsOrVenues,
            Object(g.useState)())
              , d = y()(s, 2)
              , p = d[0]
              , m = d[1]
              , h = Object(g.useState)([])
              , E = y()(h, 2)
              , v = E[0]
              , b = E[1]
              , w = Object(g.useState)("论文")
              , j = y()(w, 2)
              , T = j[0]
              , S = (j[1],
            Object(g.useState)(["keywords"]))
              , k = y()(S, 2)
              , _ = (k[0],
            k[1],
            Object(g.useState)([]))
              , O = y()(_, 2)
              , D = O[0]
              , N = (O[1],
            Object(g.useState)())
              , I = y()(N, 2)
              , A = I[0]
              , L = I[1]
              , C = Object(g.useState)()
              , P = y()(C, 2)
              , q = P[0]
              , Y = P[1]
              , x = Object(g.useState)([X()("1950", "YYYY"), X()("2019", "YYYY")])
              , B = y()(x, 2)
              , M = B[0]
              , z = B[1]
              , Q = Object(g.useState)()
              , W = y()(Q, 2)
              , H = (W[0],
            W[1])
              , $ = Object(g.useState)([])
              , ie = y()($, 2)
              , se = ie[0]
              , le = ie[1]
              , ce = Object(g.useState)([])
              , oe = y()(ce, 2)
              , de = (oe[0],
            oe[1],
            Object(g.useState)(""))
              , ue = y()(de, 2)
              , pe = (ue[0],
            ue[1])
              , me = Object(g.useState)("")
              , he = y()(me, 2)
              , ye = he[0]
              , ge = he[1]
              , fe = Object(g.useState)([])
              , Ee = y()(fe, 2)
              , ve = Ee[0]
              , be = Ee[1]
              , we = Object(g.useState)(!1)
              , je = y()(we, 2)
              , Te = je[0]
              , Se = je[1]
              , ke = Object(g.useState)(0)
              , _e = y()(ke, 2)
              , Oe = _e[0]
              , De = _e[1]
              , Ne = Object(g.useState)(!1)
              , Ie = y()(Ne, 2)
              , Ae = (Ie[0],
            Ie[1],
            Object(g.useState)(!1))
              , Le = y()(Ae, 2)
              , Ce = (Le[0],
            Le[1],
            Object(g.useState)(0))
              , Pe = y()(Ce, 2)
              , qe = Pe[0];
            Pe[1];
            Object(g.useEffect)(function() {
                var e = r.start_year
                  , a = r.end_year
                  , n = r.keywords
                  , i = (r.keywords_map,
                r.venue_map)
                  , s = r.main_topic
                  , l = r.searches
                  , c = (r.pubbase_type,
                r.created_eb);
                r.orgs,
                r.countrys,
                r.provinces,
                r.author_ids,
                e && a && (L(e),
                Y(a),
                z([X()(e.toString(), "YYYY"), X()(a.toString(), "YYYY")])),
                c && setNeedGenEB(c),
                t.setFieldsValue({
                    name: r.name,
                    desc: r.desc || "",
                    keywords: r.keywords ? r.keywords.join(";") : ""
                }),
                l && ge(l),
                s && m({
                    query: s
                }),
                n && n.length > 0 && pe(n.join(";")),
                le(i || []),
                H(s || "")
            }, [r]),
            Object(g.useEffect)(function() {
                null !== ne && clearTimeout(ne),
                ne = setTimeout(function() {
                    Me()
                }, 400)
            }, [ye, A, q, se, T, Te]);
            var Ye = t.getFieldDecorator
              , xe = (t.setFormFieldsVale,
            function(e) {
                z(e),
                2 == e.length && (L(parseInt(e[0].format("YYYY"))),
                Y(parseInt(e[1].format("YYYY"))))
            }
            )
              , Be = function(e) {
                e && (null !== re && clearTimeout(re),
                re = setTimeout(function() {
                    ge(e.replace(/;/g, " OR ")),
                    function(e) {
                        if (e && 0 != e.length) {
                            var t = e.replace(/；/g, ";").split(";")
                              , a = t[t.length - 1].trim().toLowerCase()
                              , n = t.slice(0, t.length - 1).join(";").trim().toLowerCase();
                            n.length > 0 && (n += ";"),
                            0 != a.length && Object(J.b)(a).then(function(e) {
                                var t = e;
                                if (t.data && t.data.topic && t.data.topic.length > 0) {
                                    var a = t.data.topic.slice(0, 6).map(function(e) {
                                        return e.text ? n + e.text : n
                                    });
                                    b(a)
                                }
                            }, function(e) {}).catch(function(e) {})
                        }
                    }(e)
                }, 400))
            }
              , Me = function() {
                if (ye.replace(" ", "").indexOf("()") >= 0)
                    De("检索式错误");
                else {
                    var e = {
                        searches: ye,
                        start_year: A,
                        end_year: q,
                        venue_map: se,
                        pubRange: qe,
                        ebids: qe > 1 ? [i] : []
                    };
                    "学者" == T && (e.need_authors = !0),
                    "引用" == T && (e.need_citation = !0),
                    Te && (e.need_tips = !0),
                    a({
                        type: "trend/genStaticResultBySearches",
                        payload: e
                    }).then(function(e) {
                        if (e.keyValues && (De(e.keyValues.total),
                        "学者" == T && De(e.keyValues.n_citation),
                        "引用" == T && De(e.keyValues.n_citation),
                        Te && e.items)) {
                            var t = [];
                            e.items.map(function(e) {
                                e.term && -1 == t.indexOf(e.term) && t.push(e.term)
                            }),
                            be(t)
                        }
                    })
                }
            };
            return f.a.createElement("div", {
                className: ee.a.EditProjectInfo
            }, f.a.createElement(U.a, F()({}, {
                labelCol: {
                    xs: {
                        span: 12
                    },
                    sm: {
                        span: 4
                    }
                },
                wrapperCol: {
                    xs: {
                        span: 12
                    },
                    sm: {
                        span: 20
                    }
                }
            }, {
                onSubmit: function(e) {
                    e.preventDefault(),
                    t.validateFields(function(e, t) {
                        if (!e) {
                            var n = [];
                            n.push({
                                field: "id",
                                value: i
                            }),
                            Object.entries(t).map(function(e) {
                                var t = y()(e, 2)
                                  , a = t[0]
                                  , r = t[1];
                                "main_topic" === a ? n.push({
                                    field: a,
                                    value: p && p.query || main_topic
                                }) : "trend_type" !== a && r && n.push({
                                    field: a,
                                    value: "keywords" !== a ? r : r.split(";")
                                })
                            }),
                            D && D.length > 0 && n.push({
                                field: "venues",
                                value: D
                            }),
                            n.push({
                                field: "is_translate",
                                value: !1
                            }),
                            n.push({
                                field: "pubbase_type",
                                value: 1
                            }),
                            n.push({
                                field: "searches",
                                value: ye
                            }),
                            n.push({
                                field: "start_year",
                                value: A || 1950
                            }),
                            n.push({
                                field: "end_year",
                                value: q || (new Date).getFullYear()
                            }),
                            n.push({
                                field: "venue_map",
                                value: se
                            }),
                            n.push({
                                field: "is_temporary",
                                value: !1
                            }),
                            n.push({
                                field: "is_public",
                                value: !1
                            }),
                            n.push({
                                field: "is_edited",
                                value: !1
                            }),
                            a({
                                type: "trend/createTrendProject",
                                payload: {
                                    fields: n,
                                    operator: "upsert"
                                }
                            }).then(function(e) {
                                u.a.success("修改成功！"),
                                setTimeout(function() {
                                    return window.location.reload()
                                }, 1e3)
                            })
                        }
                    })
                }
            }), f.a.createElement(U.a.Item, {
                label: "项目名称"
            }, Ye("name", {
                rules: [{
                    required: !0,
                    message: "请输入项目名称"
                }]
            })(f.a.createElement(G.a, {
                placeholder: "项目名称..."
            }))), f.a.createElement(U.a.Item, {
                label: "项目简介"
            }, Ye("desc", {
                rules: [{
                    men: 250,
                    max: 250,
                    min: 0,
                    message: "请输入0到251个字符"
                }]
            })(f.a.createElement(te, {
                placeholder: "项目简介..."
            }))), f.a.createElement(U.a.Item, {
                label: T + "数量"
            }, f.a.createElement(U.a.Item, {
                style: {
                    display: "inline-block",
                    width: "500px",
                    margin: "0px"
                }
            }, "string" == typeof Oe ? f.a.createElement(K.a, {
                valueStyle: {
                    color: "#cf1322"
                },
                value: Oe
            }) : f.a.createElement("div", null, f.a.createElement(K.a, {
                value: Oe,
                valueStyle: {
                    color: "#3f8600"
                },
                suffix: "论文" == T ? "篇" : ""
            })))), f.a.createElement(U.a.Item, {
                label: "关键词"
            }, f.a.createElement("div", {
                style: {
                    display: "flex"
                }
            }, Ye("keywords", {
                rules: []
            })(f.a.createElement(V.a, {
                dataSource: v,
                onChange: function(e) {
                    return Be(e)
                },
                onSelect: function(e) {
                    ge(e.replace(/;/g, " OR "))
                },
                allowClear: !0,
                placeholder: "关键词之间用分号隔开"
            })), f.a.createElement(c.a, {
                title: "找不到领域关键词吗？点我试试！！"
            }, f.a.createElement(o.a, {
                onClick: function() {
                    Se(!Te)
                }
            }, f.a.createElement(l.a, {
                type: "deployment-unit"
            }))))), Te && f.a.createElement(U.a.Item, {
                label: "扩展关键词"
            }, f.a.createElement("div", {
                className: ee.a.keys
            }, ve && ve.length > 0 && ve.slice(0, 20).map(function(e, t) {
                return f.a.createElement(R.a, {
                    className: ee.a.key,
                    key: e
                }, e)
            }))), f.a.createElement(U.a.Item, {
                label: "年份"
            }, f.a.createElement(U.a.Item, {
                style: {
                    display: "inline-block",
                    width: "500px",
                    margin: "0px"
                }
            }, f.a.createElement(ae, {
                showTime: {
                    format: "YYYY"
                },
                picker: "year",
                mode: ["year", "year"],
                allowClear: !1,
                value: M,
                format: "YYYY",
                onPanelChange: xe,
                onOk: xe
            }))), f.a.createElement(U.a.Item, {
                label: f.a.createElement("span", null, "检索式 ", f.a.createElement(c.a, {
                    title: "作用：用于编辑关键词之间的关系；语法：使用关键词 AND OR 以及英文(), 非模糊匹配在末尾加 $，支持多层嵌套，同一级AND优先级大于OR,为了保证速度，要尽量减少嵌套层数"
                }, f.a.createElement(l.a, {
                    type: "question-circle"
                })))
            }, f.a.createElement(te, {
                value: ye,
                onChange: function(e) {
                    var t = e.target.value;
                    ge(t)
                },
                placeholder: "请输入检索式子",
                autoSize: {
                    minRows: 3,
                    maxRows: 5
                }
            })), f.a.createElement(U.a.Item, {
                label: f.a.createElement("span", null, "期刊 ", f.a.createElement(c.a, {
                    title: "仅支持utf-8的格式，表格中的论文数以及引用数仅仅代表设定时间段内的论文数和引用数，以作参考"
                }, f.a.createElement(l.a, {
                    type: "question-circle"
                })))
            }, f.a.createElement(Z.a, {
                dataSource: se,
                updateVenuesList: function(e) {
                    le(e)
                },
                startYear: A,
                endYear: q
            })), f.a.createElement(U.a.Item, {
                wrapperCol: {
                    span: 12,
                    offset: 6,
                    textAlign: "right"
                }
            }, f.a.createElement(o.a, {
                type: "primary",
                htmlType: "submit",
                style: {
                    width: "200px"
                },
                loading: n
            }, "保存"))))
        }), se = a("jRge"), le = a("gLzp"), ce = a("2Taf"), oe = a.n(ce), de = a("vZ4D"), ue = a.n(de), pe = a("l4Ni"), me = a.n(pe), he = a("ujKo"), ye = a.n(he), ge = a("MhPg"), fe = a.n(ge), Ee = a("FL9I"), ve = a("iDGq"), be = a("c5kp"), we = a.n(be), je = function(e) {
            function t(e) {
                var a;
                return oe()(this, t),
                (a = me()(this, ye()(t).call(this, e))).dom2String = function(e) {
                    var t = document.createElement("div");
                    t.appendChild(e);
                    var a = t.innerHTML;
                    return t = null,
                    a
                }
                ,
                a.saveTrendAsImage = function() {
                    var e = document.querySelector("#paintPlace #chart svg")
                      , t = a.dom2String(e)
                      , n = document.createElement("canvas");
                    n.width = 2e3,
                    n.height = n.width / e.attributes.width.value * e.attributes.height.value,
                    n.height = n.height,
                    D()(n, t, {
                        ignoreMouse: !0,
                        ignoreDimensions: !0,
                        scaleWidth: n.width
                    });
                    var r = document.createElement("canvas")
                      , i = [n.width, n.height];
                    r.width = i[0],
                    r.height = i[1];
                    var s = r.getContext("2d");
                    s.fillStyle = "#fff",
                    s.fillRect(0, 0, r.width, r.height),
                    s.drawImage(n, 0, 0);
                    var l = new Image;
                    l.src = r.toDataURL("image/jpeg", 1),
                    l.width = 750,
                    a.imageTrendList.push(l),
                    a.state.painting < 4 ? a.setState({
                        painting: a.state.painting + 2
                    }) : a.setState({
                        painting: -2,
                        prepared: !0
                    })
                }
                ,
                a.saveLineAsImage = function() {
                    var e = document.querySelector("#paintPlace #graph")
                      , t = e.querySelector("svg");
                    e.setAttribute("style", "border: none"),
                    a.lineAddStyle(t),
                    i(document.querySelector("#paintPlace #graph")).then(function(e) {
                        var t = new Image;
                        t.src = e.toDataURL("image/jpeg", 1),
                        t.width = 750,
                        a.imageLineList.push(t),
                        a.state.painting < 5 ? a.setState({
                            painting: a.state.painting + 1
                        }) : a.setState({
                            painting: -2,
                            prepared: !0
                        })
                    })
                }
                ,
                a.lineAddStyle = function(e) {
                    e.querySelector("rect").setAttribute("style", "fill: #edf4f8;");
                    for (var t = e.querySelectorAll("g.line path"), a = 0; a < t.length; a++) {
                        t[a].setAttribute("style", "stroke-width: 3px; fill: none;")
                    }
                    for (var n = e.querySelectorAll("g.axis line"), r = 0; r < n.length; r++) {
                        n[r].setAttribute("style", "stroke: #666; stroke-dasharray: 2, 3; stroke-width: 0.3px;")
                    }
                }
                ,
                a.print = function() {
                    window.print(),
                    a.setState({
                        prepared: !1
                    })
                }
                ,
                a.listSums = function(e) {
                    var t = []
                      , a = [];
                    return e.map(function(e) {
                        e.selected && (t.push(e.t),
                        a.push(e.freq))
                    }),
                    [t, a]
                }
                ,
                a.total = function(e) {
                    var t = 0;
                    return e.map(function(e) {
                        return t += e,
                        0
                    }),
                    t
                }
                ,
                a.isDupGap = function(e, t) {
                    return e < .3 && t < .3 || e > 1 && t > 1 || e >= .3 && t >= .3 && e <= 1 && t <= 1
                }
                ,
                a.tableMaker = function(e, t, n) {
                    var r = e.length;
                    r != t.length && window.alert("ERROR in TrendPDF listsums!");
                    for (var i = [], s = 0; s < r; s++)
                        i.push(f.a.createElement("tr", null, f.a.createElement("td", null, String(s + 1)), f.a.createElement("td", null, e[s]), f.a.createElement("td", null, a.commaNumber(t[s]))));
                    return i
                }
                ,
                a.printTimeout = function() {
                    -1 != a.state.painting || a.state.prepared || (a.setState({
                        painting: -1,
                        prepared: !1
                    }),
                    setTimeout(a.props.printTimeout, 1e3))
                }
                ,
                a.genCountryAnalysis = function(e) {
                    return e > 1 ? f.a.createElement("span", null, "在各国中遥遥领先。") : e < .3 ? f.a.createElement("span", null, "前两名国家实力相差不大。") : f.a.createElement("span", null, "是第二名 ", a.countryList[1], " 的 ", Number(a.countrySums[0] / a.countrySums[1]).toFixed(1), " 倍。")
                }
                ,
                a.genOrgAnalysis = function(e) {
                    return e > 1 ? f.a.createElement("span", null, "在各机构中遥遥领先。") : e < .3 ? f.a.createElement("span", null, "前两名机构实力相差不大。") : f.a.createElement("span", null, "是第二名 ", a.countryList[1], " 的 ", Number(a.countrySums[0] / a.countrySums[1]).toFixed(1), " 倍。")
                }
                ,
                a.commaNumber = function(e) {
                    return parseFloat(e).toLocaleString()
                }
                ,
                a.genningTip = function() {
                    var e = "";
                    switch (a.state.painting) {
                    case 0:
                        e = "正在绘制技术领域河流图..";
                        break;
                    case 1:
                        e = "正在绘制技术领域折线图..";
                        break;
                    case 2:
                        e = "正在绘制国家发展河流图..";
                        break;
                    case 3:
                        e = "正在绘制国家发展折线图..";
                        break;
                    case 4:
                        e = "正在绘制机构发展河流图..";
                        break;
                    case 5:
                        e = "正在绘制机构发展折线图..";
                        break;
                    case 6:
                        e = "你知道的太多了..";
                        break;
                    default:
                        e = "正在自动生成报告，请稍候.."
                    }
                    return e
                }
                ,
                a.usedComponents = function() {
                    f.a.createElement("div", {
                        className: we.a.toa4v
                    }, function(e) {
                        for (var t = [], a = 0, n = 0; n < e && (0 == a && 83 == n ? (t.push(f.a.createElement("div", {
                            className: we.a.newpage
                        }, "new page~")),
                        n = 0,
                        a++) : 84 == n && (t.push(f.a.createElement("div", {
                            className: we.a.newpage
                        }, "new page~")),
                        n = 0,
                        a++),
                        t.push(f.a.createElement("div", {
                            className: we.a.toa4vs
                        }, "toafour" + String(n + 1))),
                        10 != a); n++)
                            ;
                        return t
                    }(a.rows)),
                    f.a.createElement("p", {
                        className: we.a.toa4
                    }, "这里有很大一段话，用于调试A4纸的大小。0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789"),
                    f.a.createElement("div", {
                        className: we.a.sankeyContainer
                    }, f.a.createElement(Ee.a, {
                        trendData: a.keywordsData,
                        isInit: !1,
                        d3: a.props.d3,
                        query: a.query,
                        onKeywordClick: a.props.onKeywordClick,
                        defaultSelect: a.props.DEFAULT_SELECTED
                    }))
                }
                ,
                a.preList = ["keywords", "country", "org", "author"],
                a.state = {
                    painting: -1,
                    prepared: !1
                },
                Object(S.b)(function(e) {
                    r = e,
                    Object(S.g)("/lib/sankey-modified.js", {
                        check: ["d3", "sankey"]
                    })
                }),
                Object(S.f)(function(e) {
                    i = e
                }),
                a
            }
            return fe()(t, e),
            ue()(t, [{
                key: "dataProcess",
                value: function(e) {
                    this.query = e.keywords.query,
                    this.keywordsData = e.keywords,
                    this.countryData = e.country,
                    this.orgData = e.org;
                    var t = this.listSums(this.keywordsData.terms)
                      , a = y()(t, 2);
                    this.keywordsList = a[0],
                    _ = a[1];
                    var n = this.listSums(this.countryData.terms)
                      , r = y()(n, 2);
                    this.countryList = r[0],
                    this.countrySums = r[1];
                    var i = this.listSums(this.orgData.terms)
                      , s = y()(i, 2);
                    this.orgList = s[0],
                    this.orgSums = s[1],
                    this.numC = this.countryList.length,
                    this.numO = this.orgList.length,
                    this.totalO = this.total(this.orgSums),
                    this.startTime = this.keywordsData.startTime,
                    this.endTime = this.keywordsData.endTime - 1,
                    this.duringTime = this.endTime - this.startTime + 1,
                    this.gapCountry = this.countrySums[0] / this.countrySums[1] - 1,
                    this.gapOrg = this.orgSums[0] / this.orgSums[1] - 1,
                    this.dupGap = this.isDupGap(this.gapCountry, this.gapOrg)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this.props.trendDataByType
                      , t = !0;
                    for (var a in this.preList) {
                        var n = this.preList[a];
                        e && e[n] || (t = !1)
                    }
                    t && -1 == this.state.painting && this.setState({
                        painting: 0
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    var a = this;
                    this.props.trendDataByType,
                    e.trendDataByType;
                    var n = this.state.painting;
                    if (n != t.painting && (0 == n && (this.imageTrendList = [],
                    this.imageLineList = [],
                    this.dataProcess(this.props.trendDataByType)),
                    n >= 0 && (u.a.info(this.genningTip()),
                    setTimeout(function() {
                        n % 2 ? a.saveLineAsImage() : a.saveTrendAsImage()
                    }, 1e3))),
                    this.state.prepared != t.prepared)
                        if (1 == this.state.prepared) {
                            for (var r = 0; r < 6; r++)
                                if (!(r % 2)) {
                                    var i = "#imagediv" + String(r + 1);
                                    document.querySelector(i).appendChild(r % 2 ? this.imageLineList[Math.floor(r / 2)] : this.imageTrendList[r / 2])
                                }
                            setTimeout(this.print, 500)
                        } else
                            0 == this.state.prepared && this.props.printed()
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.state, a = t.painting, n = t.prepared, i = this.preList[Math.floor(a / 2)];
                    return n && (e = this.keywordsList.length),
                    f.a.createElement("div", {
                        className: we.a.genTrendPDF
                    }, !n && a >= 0 && f.a.createElement("div", null, f.a.createElement("div", {
                        id: "paintPlace",
                        style: {
                            display: "flex"
                        }
                    }, a % 2 == 0 && f.a.createElement(Ee.a, {
                        queryType: i,
                        trendData: this.props.trendDataByType[i],
                        d3: r,
                        defaultSelect: 10
                    }), a % 2 == 1 && f.a.createElement(ve.a, {
                        trendData: this.props.trendDataByType[i],
                        isInit: !1,
                        d3: r,
                        defaultSelect: 10
                    }), f.a.createElement("div", {
                        style: {
                            width: window.innerWidth - 750,
                            height: 10
                        }
                    })), f.a.createElement("div", {
                        className: we.a.mask
                    })), n && f.a.createElement("div", {
                        id: "TrendPDF",
                        className: we.a.trendPDF
                    }, f.a.createElement("h1", null, this.query, " 领域发展趋势分析报告"), f.a.createElement("p", null, "本报告基于AMiner平台大数据，对 ", f.a.createElement("span", null, this.query), " 领域的技术发展情况进行自动分析生成。"), f.a.createElement("p", null, "数据研究方法：", f.a.createElement("br", null), "        在AMiner大数据中挖掘出这些期刊/会议在 ", f.a.createElement("span", null, String(this.startTime)), " - ", f.a.createElement("span", null, String(this.endTime)), " 年间收录的论文，并对这些论文进行涉及研究方向、作者所属国家、所属机构等维度的分析，得出该领域的整体发展趋势、以及国家和机构维度的对比分析。"), f.a.createElement("p", null, "本次研究共获得 ", f.a.createElement("span", null, this.query), " 领域 ", f.a.createElement("span", null, String(this.startTime)), " - ", f.a.createElement("span", null, String(this.endTime)), " 年 ", f.a.createElement("span", null, String(this.duringTime)), " 年间论文 ", f.a.createElement("span", null, this.commaNumber(this.keywordsData.total)), " 篇。"), f.a.createElement("h3", null, "一、 ", f.a.createElement("span", null, this.query), " 发展整体趋势"), f.a.createElement("p", null, "我们通过 ", f.a.createElement("span", null, this.query), " 领域相关论文绘制研究热点趋势图，旨在基于历史的科研成果数据的基础上，对 ", f.a.createElement("span", null, this.query), " 各个时间段的热度和发展趋势进行研究。图中每个色彩分支表示一个关键词领域，其宽度表示关键词的研究热度，各关键词在每一年份（纵轴）的位置是按照这一时间点上所有关键词的热度高低进行排序的。河流图可以直观的展示每个子领域的研究热度变化。"), f.a.createElement("p", null, "下图重点展示了以下各关键子领域的研究趋势："), f.a.createElement("div", {
                        className: we.a.selectedList
                    }, f.a.createElement("ul", null, this.keywordsList.map(function(e) {
                        return f.a.createElement("li", null, e)
                    }))), f.a.createElement("div", {
                        className: we.a.imagediv
                    }, f.a.createElement("div", {
                        id: "imagediv1"
                    }), f.a.createElement("div", {
                        className: we.a.figure
                    }, "图1 ", this.query, "领域发展趋势")), f.a.createElement("p", null, "可以看出，最近 ", String(this.duringTime), " 年研究热度最高的", e > 3 ? 3 : e, "个子领域是：", f.a.createElement("span", null, this.keywordsList[0], e > 1 ? "，" + this.keywordsList[1] : "", e > 2 ? "，" + this.keywordsList[2] : ""), "。"), f.a.createElement("h3", null, "二、 ", f.a.createElement("span", null, this.query), " 发展趋势各国情况对比"), f.a.createElement("p", null, "我们通过统计论文中作者的单位信息，将作者映射到各个国家中，进而统计出各个国家的论文数量，并据此绘制国家发展河流图。"), f.a.createElement("div", {
                        className: we.a.imagediv
                    }, f.a.createElement("div", {
                        id: "imagediv3"
                    }), f.a.createElement("div", {
                        className: we.a.figure
                    }, "图3 ", this.query, "领域各国发展趋势图")), f.a.createElement("p", null, "下图展示了选出的 ", f.a.createElement("span", null, this.numC), " 个国家在 ", f.a.createElement("span", null, String(this.startTime)), " 年- ", f.a.createElement("span", null, String(this.endTime)), " 年间在 ", f.a.createElement("span", null, this.query), " 领域发表的论文数。"), f.a.createElement("div", {
                        className: we.a.tableContainer
                    }, f.a.createElement("div", {
                        className: we.a.chart
                    }, "表1 ", this.query, "领域各国论文数排名TOP", this.numC), f.a.createElement("table", null, f.a.createElement("tr", null, f.a.createElement("th", null, "序号"), f.a.createElement("th", null, "国家"), f.a.createElement("th", null, "论文发表数量")), this.tableMaker(this.countryList, this.countrySums, 10))), f.a.createElement("p", null, "可以看出，排名第一的国家是 ", f.a.createElement("span", null, this.countryList[0]), " ，累计发表论文 ", f.a.createElement("span", null, this.commaNumber(this.countrySums[0])), " 篇，占到论文总数的 ", f.a.createElement("span", null, " ", Number(this.countrySums[0] / this.keywordsData.total * 100).toFixed(2), "% ，"), this.numC > 1 ? this.genCountryAnalysis(this.gapCountry) : ""), f.a.createElement("h3", null, "三、 ", f.a.createElement("span", null, this.query), " 发展趋势机构对比"), f.a.createElement("p", null, "我们通过统计论文中作者的单位信息，将作者映射到所属单位中，进而统计出各个机构的论文数量，并据此绘制机构发展河流图。"), f.a.createElement("div", {
                        className: we.a.imagediv
                    }, f.a.createElement("div", {
                        id: "imagediv5"
                    }), f.a.createElement("div", {
                        className: we.a.figure
                    }, "图5 ", this.query, "领域发展趋势机构图")), f.a.createElement("p", null, "下图展示了选出的 ", f.a.createElement("span", null, this.numO), " 个研究机构在 ", f.a.createElement("span", null, String(this.startTime)), " 年- ", f.a.createElement("span", null, String(this.endTime)), " 年间在 ", f.a.createElement("span", null, this.query), " 领域发表的论文数。"), f.a.createElement("div", {
                        className: we.a.tableContainer
                    }, f.a.createElement("div", {
                        className: we.a.chart
                    }, "表2 ", this.query, "领域机构论文数排名TOP", this.numO), f.a.createElement("table", null, f.a.createElement("tr", null, f.a.createElement("th", null, "序号"), f.a.createElement("th", null, "机构"), f.a.createElement("th", null, "论文发表数量")), this.tableMaker(this.orgList, this.orgSums, 10))), this.isDupGap ? f.a.createElement("p", null, f.a.createElement("span", null, "排名前 ", f.a.createElement("span", null, this.numO), " 的机构论文数占到总论文数的 ", f.a.createElement("span", null, Number(this.totalO / this.keywordsData.total * 100).toFixed(2), "%"), " 。", this.numO > 3 ? f.a.createElement("span", null, "从上表可以看出，排名前三的机构分别是 ", f.a.createElement("span", null, this.orgList[0], "，", this.orgList[1], " 和 ", this.orgList[2]), " ，他们的发表的论文数分别为 ", f.a.createElement("span", null, this.commaNumber(this.orgSums[0]), "、", this.commaNumber(this.orgSums[1]), "、", this.commaNumber(this.orgSums[2])), " 。") : "")) : f.a.createElement("p", null, "可以看出，排名第一的机构是 ", f.a.createElement("span", null, this.orgList[0]), " ，累计发表论文 ", f.a.createElement("span", null, String(this.orgSums[0])), " 篇，占到论文总数的 ", f.a.createElement("span", null, " ", Number(this.orgSums[0] / this.keywordsData.total * 100).toFixed(2), "% ，"), this.genOrgAnalysis(this.gapOrg)), f.a.createElement("br", null), f.a.createElement("div", {
                        className: we.a.tail
                    }, "AMiner咨询产品是AMiner团队的研究与统计成果，其性质是供用户内部参考的资料。", f.a.createElement("br", null), "AMiner研究报告版权为AMiner团队独家所有，拥有唯一著作权。")))
                }
            }]),
            t
        }(f.a.Component), Te = Object(E.d)(Object(E.e)(function(e) {
            return {
                trendDataByType: e.trend.trendDataByType
            }
        }))(je);
        a("veNH"),
        t.default = Object(E.d)(Object(E.e)(function(e) {
            var t = e.trend
              , a = e.loading
              , n = e.auth;
            return {
                theProjectInfo: t.theProjectInfo,
                trendData: t.trendData,
                loadingTrend: a.effects["trend/getTrendByProjectsId"],
                loadingProjectInfo: a.effects["trend/getTrendProjects"],
                user: n.user,
                trendDataByType: t.trendDataByType
            }
        }))(function(e) {
            var t = Object(g.useState)(!1)
              , a = y()(t, 2)
              , n = a[0]
              , r = a[1]
              , i = Object(g.useState)("top0")
              , p = y()(i, 2)
              , h = p[0]
              , E = p[1]
              , T = Object(g.useState)({})
              , S = y()(T, 2)
              , k = S[0]
              , _ = S[1]
              , O = Object(g.useState)("keywords")
              , D = y()(O, 2)
              , N = D[0]
              , I = D[1]
              , A = Object(g.useState)(!1)
              , L = y()(A, 2)
              , C = (L[0],
            L[1],
            Object(g.useState)(!1))
              , P = y()(C, 2)
              , x = (P[0],
            P[1],
            Object(g.useState)(!1))
              , M = y()(x, 2)
              , F = M[0]
              , R = M[1]
              , V = e.dispatch
              , K = e.theProjectInfo
              , U = void 0 === K ? {} : K
              , z = e.match
              , Q = (e.keywordsTrendData,
            e.trendData)
              , W = e.loadingTrend
              , G = (e.loadingProjectInfo,
            e.user)
              , J = z.params.id
              , H = null;
            if (U && U.sub_setting) {
                var X = U.sub_setting;
                H = (void 0 === X ? {} : X).keywords
            }
            Object(g.useEffect)(function() {
                if (U && U.sub_setting) {
                    var e = U.sub_setting;
                    (H = (void 0 === e ? {} : e).keywords) && (r(H.open_search),
                    E(H.top_type))
                }
                U && U.edit_historys && U.edit_historys.length > 0 && (s = m()(U.edit_historys)).reverse()
            }, [U]),
            Object(g.useEffect)(function() {
                if (U && Q[N]) {
                    var e = [];
                    Q[N].terms.map(function(t) {
                        t.selected && e.push(t.t)
                    }),
                    k[N] ? k[N] = e : (k[N] = [],
                    k[N] = e),
                    _(k)
                }
            }, [U, Q]),
            Object(g.useEffect)(function() {
                V({
                    type: "trend/getTrendByProjectsId",
                    payload: {
                        id: J,
                        query_type: N
                    }
                }),
                V({
                    type: "trend/getTrendProjects",
                    payload: {
                        size: 20,
                        offset: 0,
                        ids: [J]
                    }
                })
            }, [J]),
            Object(g.useEffect)(function() {
                return function() {
                    V({
                        type: "trend/clearTrendData"
                    })
                }
            }, []);
            var Z = ["keywords", "country", "org", "author"]
              , $ = Object(g.useState)(!1)
              , ee = y()($, 2)
              , te = ee[0]
              , ae = ee[1]
              , ne = Object(g.useState)(!1)
              , re = y()(ne, 2)
              , ce = re[0]
              , oe = re[1];
            Object(g.useEffect)(function() {
                var t = e.trendDataByType
                  , a = !0;
                for (var n in Z)
                    t && t[Z[n]] || (a = !1);
                a && te && (ae(!1),
                ue())
            }, [e.trendDataByType]);
            var de = function() {
                !function() {
                    ae(!0);
                    var t = !0;
                    for (var a in Z) {
                        var n = Z[a];
                        e.trendDataByType && e.trendDataByType[n] || (t = !1,
                        V({
                            type: "trend/getTrendByProjectsId",
                            payload: {
                                id: J,
                                query_type: n
                            }
                        }))
                    }
                    t && (ae(!1),
                    ue())
                }(),
                V({
                    type: "trend/recordVisitOfTrendProject",
                    payload: {
                        project_id: J,
                        operate_type: "pdf_downloads"
                    }
                })
            }
              , ue = function() {
                window.fakeData = "fakeData",
                window.pdfData = e.trendDataByType,
                window.theProjectInfo = e.theProjectInfo,
                window.open("about:blank").location.href = "/trendPdf"
            }
              , pe = function(e) {
                var t = e.is_temporary
                  , a = e.creator_id
                  , n = e.is_edited
                  , r = e.is_public;
                return !(t || r && n || G && G.id === a)
            };
            return f.a.createElement("div", null, ce && f.a.createElement(Te, {
                printed: function() {
                    oe(!1)
                },
                projectId: J,
                printTimeout: function() {
                    oe(!1),
                    window.alert("下载失败，请稍候重试。。")
                }
            }), f.a.createElement("div", {
                style: ce ? {
                    display: "none"
                } : {}
            }, f.a.createElement(v.a, null, f.a.createElement("div", {
                className: B.a.trendProjectInfo,
                id: "projectInfo"
            }, U && f.a.createElement("div", null, f.a.createElement(d.a, {
                title: "编辑项目",
                visible: F,
                footer: null,
                onCancel: function(e) {
                    R(!F)
                }
            }, f.a.createElement(ie, {
                theProjectInfo: U,
                id: J
            })), f.a.createElement("div", {
                className: B.a.basicInfoAndAction
            }, f.a.createElement("div", {
                className: B.a.basicInfo
            }, f.a.createElement("div", {
                className: B.a.header
            }, f.a.createElement("h1", null, U.name), f.a.createElement("div", {
                className: B.a.action
            }, !pe({
                is_temporary: U.is_temporary,
                creator_id: U.creator_id,
                is_edited: U.is_edited,
                is_public: U.is_public
            }) && f.a.createElement(c.a, {
                title: "项目编辑"
            }, f.a.createElement(o.a, {
                size: "small",
                onClick: function() {
                    Object(b.j)(G) ? R(!F) : V({
                        type: "modal/login"
                    })
                }
                .bind()
            }, "编辑")), !pe({
                is_temporary: U.is_temporary,
                creator_id: U.creator_id,
                is_edited: U.is_edited,
                is_public: U.is_public
            }) && f.a.createElement(c.a, {
                title: "保存当前页面的编辑"
            }, f.a.createElement(o.a, {
                size: "small",
                onClick: function() {
                    if (Object(b.j)(G)) {
                        var e = {
                            field: "sub_setting",
                            value: {
                                keywords: {
                                    open_search: n,
                                    top_type: h
                                }
                            }
                        };
                        k.country && (e.value.country = {
                            choosed: k.country
                        }),
                        k.org && (e.value.org = {
                            choosed: k.org
                        }),
                        k.author && (e.value.author = {
                            choosed: k.author
                        });
                        var t = Object(w.cloneDeep)(U.edit_historys) || [];
                        U.is_temporary && (a.push({
                            field: "creator",
                            value: G.name
                        }),
                        t.push({
                            editor_id: G.id,
                            editor_name: G.name,
                            remarks: "初始化创建"
                        })),
                        t.push({
                            editor_id: G.id,
                            editor_name: G.name,
                            remarks: "场景保存"
                        });
                        var a = [{
                            field: "id",
                            value: J
                        }, e, {
                            field: "edit_historys",
                            value: t
                        }];
                        e.value.keywords = {
                            related: U.sub_setting.related,
                            removed: U.sub_setting.removed
                        },
                        k.keywords && (e.value.keywords.choosed = k.keywords),
                        V({
                            type: "trend/updateTrendProject",
                            payload: {
                                operator: "upsert",
                                fields: a
                            }
                        }).then(function(e) {
                            u.a.success("保存成功")
                        })
                    } else
                        V({
                            type: "modal/login"
                        })
                }
                .bind()
            }, "保存场景")))), f.a.createElement("div", null, U.desc && U.desc.length > 80 ? "".concat(U.desc.slice(0, 80), "...") : U.desc), (U.created_time || U.creator) && f.a.createElement("div", {
                className: B.a.createTimeAndUser
            }, U.created_time && f.a.createElement("div", {
                className: B.a.createTime
            }, f.a.createElement("span", {
                className: B.a.label
            }, "创建时间:"), f.a.createElement("span", null, U.created_time.split("T")[0])), U.creator && f.a.createElement("div", {
                className: B.a.creator
            }, f.a.createElement("span", {
                className: B.a.label
            }, "创建人:"), f.a.createElement("span", null, U.creator))), U.edit_historys && U.edit_historys.length >= 1 && f.a.createElement(f.a.Fragment, null, f.a.createElement("div", {
                className: B.a.updatePublish
            }, f.a.createElement("svg", {
                className: "icon",
                "aria-hidden": "true"
            }, f.a.createElement("use", {
                xlinkHref: "#icon-shijian1"
            })), f.a.createElement("span", {
                className: B.a.label
            }, "历史记录：", f.a.createElement("div", {
                className: B.a.showAllHistories
            }, s && s.length > 0 && s.map(function(e, t) {
                var a = !0;
                return 0 !== t && (a = e.updated_time.split("T")[0] !== s[t - 1].updated_time.split("T")[0]),
                f.a.createElement("div", {
                    className: B.a.history
                }, f.a.createElement("span", {
                    className: B.a.time
                }, a ? e.updated_time.split("T")[0] : ""), f.a.createElement("span", {
                    className: B.a.name
                }, e.editor_name), f.a.createElement("span", {
                    className: B.a.remarks
                }, e.remarks ? e.remarks : "初始化创建"))
            }))), U.edit_historys[0].updated_time.split("T")[0], " ", f.a.createElement("span", {
                className: B.a.name
            }, U.edit_historys[0].editor_name))), f.a.createElement("div", {
                className: B.a.split
            }), f.a.createElement("div", {
                className: B.a.limitersAndAction
            }, f.a.createElement("div", {
                className: B.a.limiters
            }, f.a.createElement("div", {
                className: B.a.limitMainTopic
            }, f.a.createElement("span", {
                className: B.a.label
            }, "领域关键词:"), U.keywords && U.keywords.slice(0, 5).map(function(e) {
                if ("" != e)
                    return f.a.createElement("span", {
                        className: B.a.mainTopic,
                        key: "".concat(e, "_").concat(Math.random())
                    }, e)
            }), !U.keywords && U.searches && U.searches.replace("(", "").replace(")", "").split("OR").slice(0, 5).map(function(e) {
                if ("" != e)
                    return f.a.createElement("span", {
                        className: B.a.mainTopic,
                        key: "".concat(e, "_").concat(Math.random())
                    }, e)
            }), U.searches && f.a.createElement(c.a, {
                placement: "bottom",
                title: U.searches
            }, f.a.createElement("span", {
                className: B.a.expression
            }, "检索式"))), f.a.createElement("div", null, f.a.createElement("span", {
                className: B.a.label
            }, "限定年份:"), U.start_year, "年——", U.end_year, "年"), U.venue_map && U.venue_map.length > 0 && f.a.createElement("div", {
                className: B.a.venues
            }, f.a.createElement("span", {
                className: B.a.label
            }, "限定期刊:"), U.venue_map.slice(0, 3).map(function(e) {
                return f.a.createElement("div", {
                    key: e.short_name || e.name || e.name_zh
                }, e.short_name || e.name || e.name_zh)
            }))), f.a.createElement("div", {
                className: B.a.projectOperate
            }, f.a.createElement(c.a, {
                title: "自动生成技术趋势报告"
            }, f.a.createElement(o.a, {
                type: "default",
                loading: te,
                onClick: de,
                style: {
                    height: "21px",
                    padding: "1px",
                    border: 0
                }
            }, f.a.createElement(l.a, {
                type: "file-pdf"
            }))), f.a.createElement(se.a, {
                theProjectInfo: U,
                isJumpToNewWindow: !0
            })))), f.a.createElement("div", {
                className: B.a.actions
            }, f.a.createElement("div", {
                className: B.a.thumb
            }, f.a.createElement(le.a, {
                data: {
                    num_downvoted: U.thumb_downs,
                    num_upvoted: U.thumb_ups,
                    tumbs_up: U.current_thumb_up,
                    tumbs_down: U.current_thumb_down
                },
                id: J,
                componentType: "TREND_PROJECT"
            })), f.a.createElement(Y.a, {
                id: J
            }))))), f.a.createElement("div", {
                className: B.a.termsContainer
            }, f.a.createElement(j.b, {
                loading: W
            }), U && f.a.createElement(q, {
                onKeywordClick: function(e) {
                    helper.routeTo((void 0).props, {
                        query: e && e.query
                    }),
                    window.location.reload()
                },
                getSelectedTerms: function(e, t) {
                    for (var a = [], n = e[N].terms, r = 0; r < n.length; r++)
                        n[r].selected && a.push(n[r].t);
                    k[t] = [].concat(a),
                    _(k),
                    I(t)
                },
                selectedTitleUpdateQueryType: function(e) {
                    I(e)
                },
                choosedByType: k,
                projectId: J,
                is_open: n,
                downloadPDF: de,
                printed: ce,
                loadingPdf: te,
                keyWords: U.keywords && U.keywords.length > 0 ? U.keywords[0] : U.name
            })))))
        })
    }
}]);
