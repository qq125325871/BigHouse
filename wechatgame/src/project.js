var n = {logEvent:function(){}};
var logCenter =  {
    login_page_event: function () {
        n.logEvent("on_login_page")
    }, game_page_event: function () {
        n.logEvent("on_game_page")
    }, login_share_event: function () {
        n.logEvent("login_share")
    }, speed_up_click_event: function () {
        n.logEvent("speed_up_click")
    }, share_speed_up_event: function () {
        n.logEvent("share_speed_up")
    }, share_speed_up_success_event: function () {
        n.logEvent("share_speed_up_success")
    }, watch_video_speed_up_event: function () {
        n.logEvent("watch_video_speed_up")
    }, watch_video_speed_up_success_event: function () {
        n.logEvent("watch_video_speed_up_success")
    }, share_get_bonus_coin_event: function () {
        n.logEvent("share_get_bonus_coin")
    }, share_get_bonus_coin_success_event: function () {
        n.logEvent("share_get_bonus_coin_success")
    }, watch_video_get_bonus_coin_event: function () {
        n.logEvent("watch_video_get_bonus_coin")
    }, watch_video_get_bonus_coin_success_event: function () {
        n.logEvent("watch_video_get_bonus_coin_success")
    }, share_get_bonus_box_event: function () {
        n.logEvent("share_get_bonus_box")
    }, share_get_bonus_box_success_event: function () {
        n.logEvent("share_get_bonus_box_success")
    }, watch_video_get_bonus_box_event: function () {
        n.logEvent("watch_video_get_bonus_box")
    }, watch_video_get_bonus_box_success_event: function () {
        n.logEvent("watch_video_get_bonus_box_success")
    }, share_get_bonus_all_event: function () {
        n.logEvent("share_get_bonus_all")
    }, share_get_bonus_all_success_event: function () {
        n.logEvent("share_get_bonus_all_success")
    }, watch_video_get_bonus_all_white_event: function () {
        n.logEvent("watch_video_get_bonus_all_white")
    }, watch_video_get_bonus_all_white_success_event: function () {
        n.logEvent("watch_video_get_bonus_all_white_success")
    }, watch_video_get_bonus_all_black_event: function () {
        n.logEvent("watch_video_get_bonus_all_black")
    }, watch_video_get_bonus_all_black_success_event: function () {
        n.logEvent("watch_video_get_bonus_all_black_success")
    }, share_spin_get_ticket_event: function () {
        n.logEvent("share_spin_get_ticket")
    }, share_spin_get_ticket_success_event: function () {
        n.logEvent("share_spin_get_ticket_success")
    }, watch_video_spin_get_ticket_event: function () {
        n.logEvent("watch_video_spin_get_ticket")
    }, watch_video_spin_get_ticket_success_event: function () {
        n.logEvent("watch_video_spin_get_ticket_success")
    }, spin_click_event: function () {
        n.logEvent("spin_click")
    }, spin_click_lack_event: function () {
        n.logEvent("spin_click_lack")
    }, share_spin_click_lack_get_ticket_event: function () {
        n.logEvent("share_spin_click_lack_get_ticket")
    }, share_spin_click_lack_get_ticket_success_event: function () {
        n.logEvent("share_spin_click_lack_get_ticket_success")
    }, watch_video_spin_click_lack_get_ticket_event: function () {
        n.logEvent("watch_video_spin_click_lack_get_ticket")
    }, watch_video_spin_click_lack_get_ticket_success_event: function () {
        n.logEvent("watch_video_spin_click_lack_get_ticket_success")
    }, game_share_event: function () {
    }, game_share_success_event: function () {
    }, game_share_fail_event: function (e) {
    }, speed_up_with_share_event: function () {
        n.logEvent("speed_up_with_share")
    }, speed_up_without_share_event: function () {
        n.logEvent("speed_up_without_share")
    }, watch_video_event: function (e) {
    }, watch_video_success_event: function (e) {
    }, watch_video_shop_event: function (e) {
        n.logEvent("watch_video_shop")
    }, watch_video_shop_success_event: function (e) {
        n.logEvent("watch_video_shop_success")
    }, share_get_coin_event: function () {
        n.logEvent("share_get_coin")
    }, share_get_coin_success_event: function () {
        n.logEvent("share_get_coin_success")
    }, watch_video_get_coin_white_event: function () {
        n.logEvent("watch_video_get_coin_white")
    }, watch_video_get_coin_success_white_event: function () {
        n.logEvent("watch_video_get_coin_white_success")
    }, watch_video_get_coin_black_event: function () {
        n.logEvent("watch_video_get_coin_black")
    }, watch_video_get_coin_black_success_event: function () {
        n.logEvent("watch_video_get_coin_black_success")
    }, share_get_coin_fail_event: function (e) {
        "limit" == e ? n.logEvent("share_get_coin_limit") : n.logEvent("share_get_coin_fail")
    }, entry_with_type_event: function (e) {
        "share" == e ? n.logEvent("entry_with_share") : "update" == e && n.logEvent("entry_with_update")
    }, entry_with_context_event: function (e, t) {
        e && n.logEvent("entry_with_context", null, {contextId: e, group: t})
    }, offline_coin_click_event: function () {
        n.logEvent("offline_coin_click")
    }, spin_share_event: function () {
        n.logEvent("share_spin")
    }, spin_share_success_event: function () {
        n.logEvent("share_spin_success")
    }, upgrade_share_event: function () {
    }, upgrade_share_success_event: function () {
    }, share_levelup_event: function () {
        n.logEvent("level_up_share")
    }, share_levelup_success_event: function () {
        n.logEvent("level_up_share_success")
    }, share_offline_coin_event: function (e) {
        n.logEvent("share_offline_coin", null, {isShare: e})
    }, share_offline_coin_success_event: function () {
        n.logEvent("share_offline_coin_success")
    }, watch_video_offiline_coin_event: function () {
        n.logEvent("watch_video_offiline_coin")
    }, watch_video_offiline_coin_success_event: function () {
        n.logEvent("watch_video_offiline_coin_success")
    }, share_offline_coin_fail_event: function (e) {
        "limit" == e ? n.logEvent("share_offline_coin_limit") : n.logEvent("share_offline_coin_fail")
    }, get_offline_coin_without_share_event: function () {
        n.logEvent("offline_coin_without_share")
    }, create_shortcut_event: function (e) {
        n.logEvent("create_shortcut", null, {platform: n.getPlatform(), type: e})
    }, player_link_click_event: function (e) {
        n.logEvent("player_link_click", null, {type: e})
    }, new_player_link_click_event: function (e) {
        n.logEvent("new_player_link_click", null, {type: e})
    }, new_player_switch_click_event: function (e) {
        n.logEvent("new_player_switch_click", null, {game_name: e})
    }, fb_set_data_fail_event: function (e) {
        n.logEvent("fb_set_data_fail", null, {msg: e})
    }, fb_get_data_fail_event: function (e) {
        n.logEvent("fb_get_data_fail", null, {msg: e})
    }, achieve_level_event: function (e) {
        if (e) switch (e) {
            case 4:
                this.achieve_level_5_event();
                break;
            case 9:
                this.achieve_level_10_event();
                break;
            case 19:
                this.achieve_level_20_event();
                break;
            case 29:
                this.achieve_level_30_event();
                break;
            case 34:
                n.logEvent("achieve_level_35");
                break;
            case 39:
                n.logEvent("achieve_level_40");
                break;
            case 44:
                n.logEvent("achieve_level_45")
        }
    }, achieve_character_level_event: function (e) {
        if (e) switch (e) {
            case 4:
                n.logEvent("achieve_character_level_5_event");
                break;
            case 9:
                n.logEvent("achieve_character_level_10_event");
                break;
            case 19:
                n.logEvent("achieve_character_level_20_event");
                break;
            case 29:
                n.logEvent("achieve_character_level_30_event");
                break;
            case 34:
                n.logEvent("achieve_character_level_35_event");
                break;
            case 39:
                n.logEvent("achieve_character_level_40_event");
                break;
            case 44:
                n.logEvent("achieve_character_level_45_event")
        }
    }, achieve_level_5_event: function () {
        n.logEvent("achieve_level_5")
    }, achieve_level_10_event: function () {
        n.logEvent("achieve_level_10")
    }, achieve_level_20_event: function () {
        n.logEvent("achieve_level_20")
    }, achieve_level_30_event: function () {
        n.logEvent("achieve_level_30")
    }, data_loading_event: function () {
        n.logEvent("data_loading")
    }, invite_friends_info_start_event: function () {
        n.logEvent("invite_friends_info_start")
    }, invite_friends_info_success_event: function () {
        n.logEvent("invite_friends_info_success")
    }, invite_friends_info_err_event: function (e) {
        n.logEvent("invite_friends_info_err", null, {code: e})
    }, invite_friends_event: function () {
        n.logEvent("invite_friends_share")
    }, invite_friends_success_event: function () {
        n.logEvent("invite_friends_success_share")
    }, invite_new_success_event: function () {
        n.logEvent("invite_new_success")
    }, unlock_fish_share_event: function () {
        n.logEvent("unlock_house_share")
    }, task_btn_start_event: function (e) {
        e = e || "undefined", n.logEvent("task_btn_start_" + e)
    }, task_btn_claim_event: function (e) {
        e = e || "undefined", n.logEvent("task_btn_claim_" + e)
    }, gift_claim_event: function (e) {
        n.logEvent("gift_claim_" + e)
    }, switchgameasync_event: function (e) {
        n.logEvent("click_to_" + e)
    }, all_share_click_event: function () {
        n.logEvent("all_share_click")
    }, reset_data_event: function () {
        n.logEvent("reset_data")
    }, bot_recall_event: function (e) {
        n.logEvent("bot_recall_" + e)
    }, switch_hugefish_from_dialog_event: function () {
        n.logEvent("switch_hugefish_from_dialog")
    }, recommend_icon_click_event: function (e) {
        n.logEvent("recommend_icon_click", null, {name: e})
    }, catch_fish_click_event: function () {
        n.logEvent("catch_fish_click")
    }, catch_fish_share_event: function () {
        n.logEvent("catch_fish_share")
    }, catch_fish_claim_event: function () {
        n.logEvent("catch_fish_claim")
    }, share_free_upgrade_event: function () {
        n.logEvent("share_free_upgrade")
    }, share_free_upgrade_success_event: function () {
        n.logEvent("share_free_upgrade_success")
    }, watch_video_free_upgrade_event: function () {
        n.logEvent("watch_video_free_upgrade")
    }, watch_video_free_upgrade_success_event: function () {
        n.logEvent("watch_video_free_upgrade_success")
    }, shop_page_click_event: function () {
        n.logEvent("shop_page_click")
    }, quick_purchase_click_event: function () {
        n.logEvent("quick_purchase_click")
    }, blacklist_login_event: function () {
        n.logEvent("blacklist_login")
    }, whitelist_login_event: function () {
        n.logEvent("whitelist_login")
    }, share_spin_x6_event: function () {
        n.logEvent("share_spin_x6")
    }, share_spin_x6_success_event: function () {
        n.logEvent("share_spin_x6_success")
    }, watch_video_spin_x6_event: function () {
        n.logEvent("watch_video_spin_x6")
    }, watch_video_spin_x6_success_event: function () {
        n.logEvent("watch_video_spin_x6_success")
    }, stay_time_length_event: function (e) {
        cc.log("stay_time_length_event=" + e), n.logEvent("stay_time_length", null, {time: e})
    }, game_from_uc_event: function (e, t) {
        n.logEvent("game_switch_form_uc", null, {name: e, act_appid: t})
    }, reward_click_event: function () {
        n.logEvent("reward_click")
    }, daily_reward_collect_click_event: function (e) {
        n.logEvent("daily_reward_collect_click", null, {type: e})
    }, bank_invite_friend_share_event: function () {
        n.logEvent("bank_invite_friend_share")
    }, bank_invite_friend_share_success_event: function () {
        n.logEvent("bank_invite_friend_share_success")
    }, share_bank_x2_event: function () {
        n.logEvent("share_bank_x2")
    }, share_bank_x2_success_event: function () {
        n.logEvent("share_bank_x2_success")
    }, watch_video_bank_x2_event: function () {
        n.logEvent("watch_video_bank_x2", null)
    }, watch_video_bank_x2_success_event: function () {
        n.logEvent("watch_video_bank_x2_success", null)
    }, share_bank_event: function () {
        n.logEvent("share_bank", null)
    }, share_bank_success_event: function () {
        n.logEvent("share_bank_success", null)
    }, watch_video_bank_event: function () {
        n.logEvent("watch_video_bank", null)
    }, watch_video_bank_success_event: function () {
        n.logEvent("watch_video_bank_success", null)
    }, subscribe_bot_click_event: function (e) {
        n.logEvent("subscribe_bot_click", null, {type: e})
    }, subscribe_bot_success_event: function (e) {
        n.logEvent("subscribe_bot_success", null, {type: e})
    }
}

require = function r(o, s, c) {
    function l(t, e) {
        if (!s[t]) {
            if (!o[t]) {
                var a = "function" == typeof require && require;
                if (!e && a) return a(t, !0);
                if (u) return u(t, !0);
                var n = new Error("Cannot find module '" + t + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            var i = s[t] = {exports: {}};
            o[t][0].call(i.exports, function (e) {
                return l(o[t][1][e] || e)
            }, i, i.exports, r, o, s, c)
        }
        return s[t].exports
    }

    for (var u = "function" == typeof require && require, e = 0; e < c.length; e++) l(c[e]);
    return l
}({
    1: [function (e, t, a) {
        "use strict";
        a.byteLength = function (e) {
            return 3 * e.length / 4 - d(e)
        }, a.toByteArray = function (e) {
            var t, a, n, i, r, o = e.length;
            i = d(e), r = new u(3 * o / 4 - i), a = 0 < i ? o - 4 : o;
            var s = 0;
            for (t = 0; t < a; t += 4) n = c[e.charCodeAt(t)] << 18 | c[e.charCodeAt(t + 1)] << 12 | c[e.charCodeAt(t + 2)] << 6 | c[e.charCodeAt(t + 3)], r[s++] = n >> 16 & 255, r[s++] = n >> 8 & 255, r[s++] = 255 & n;
            2 === i ? (n = c[e.charCodeAt(t)] << 2 | c[e.charCodeAt(t + 1)] >> 4, r[s++] = 255 & n) : 1 === i && (n = c[e.charCodeAt(t)] << 10 | c[e.charCodeAt(t + 1)] << 4 | c[e.charCodeAt(t + 2)] >> 2, r[s++] = n >> 8 & 255, r[s++] = 255 & n);
            return r
        }, a.fromByteArray = function (e) {
            for (var t, a = e.length, n = a % 3, i = "", r = [], o = 16383, s = 0, c = a - n; s < c; s += o) r.push(h(e, s, c < s + o ? c : s + o));
            1 === n ? (t = e[a - 1], i += l[t >> 2], i += l[t << 4 & 63], i += "==") : 2 === n && (t = (e[a - 2] << 8) + e[a - 1], i += l[t >> 10], i += l[t >> 4 & 63], i += l[t << 2 & 63], i += "=");
            return r.push(i), r.join("")
        };
        for (var l = [], c = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, r = n.length; i < r; ++i) l[i] = n[i], c[n.charCodeAt(i)] = i;

        function d(e) {
            var t = e.length;
            if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
            return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
        }

        function h(e, t, a) {
            for (var n, i, r = [], o = t; o < a; o += 3) n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), r.push(l[(i = n) >> 18 & 63] + l[i >> 12 & 63] + l[i >> 6 & 63] + l[63 & i]);
            return r.join("")
        }

        c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63
    }, {}],
    2: [function (t, e, U) {
        (function (e) {
            "use strict";
            var n = t("base64-js"), r = t("ieee754"), o = t("isarray");

            function a() {
                return d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function s(e, t) {
                if (a() < t) throw new RangeError("Invalid typed array length");
                return d.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = d.prototype : (null === e && (e = new d(t)), e.length = t), e
            }

            function d(e, t, a) {
                if (!(d.TYPED_ARRAY_SUPPORT || this instanceof d)) return new d(e, t, a);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, e)
                }
                return i(this, e, t, a)
            }

            function i(e, t, a, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, a, n) {
                    if (t.byteLength, a < 0 || t.byteLength < a) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < a + (n || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === a && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, a) : new Uint8Array(t, a, n);
                    d.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = d.prototype : e = u(e, t);
                    return e
                }(e, t, a, n) : "string" == typeof t ? function (e, t, a) {
                    "string" == typeof a && "" !== a || (a = "utf8");
                    if (!d.isEncoding(a)) throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | g(t, a), i = (e = s(e, n)).write(t, a);
                    i !== n && (e = e.slice(0, i));
                    return e
                }(e, t, a) : function (e, t) {
                    if (d.isBuffer(t)) {
                        var a = 0 | h(t.length);
                        return 0 === (e = s(e, a)).length || t.copy(e, 0, 0, a), e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : u(e, t);
                        if ("Buffer" === t.type && o(t.data)) return u(e, t.data)
                    }
                    var n;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function c(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function l(e, t) {
                if (c(t), e = s(e, t < 0 ? 0 : 0 | h(t)), !d.TYPED_ARRAY_SUPPORT) for (var a = 0; a < t; ++a) e[a] = 0;
                return e
            }

            function u(e, t) {
                var a = t.length < 0 ? 0 : 0 | h(t.length);
                e = s(e, a);
                for (var n = 0; n < a; n += 1) e[n] = 255 & t[n];
                return e
            }

            function h(e) {
                if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e
            }

            function g(e, t) {
                if (d.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var a = e.length;
                if (0 === a) return 0;
                for (var n = !1; ;) switch (t) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return a;
                    case"utf8":
                    case"utf-8":
                    case void 0:
                        return B(e).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * a;
                    case"hex":
                        return a >>> 1;
                    case"base64":
                        return L(e).length;
                    default:
                        if (n) return B(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function p(e, t, a) {
                var n = e[t];
                e[t] = e[a], e[a] = n
            }

            function f(e, t, a, n, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof a ? (n = a, a = 0) : 2147483647 < a ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, isNaN(a) && (a = i ? 0 : e.length - 1), a < 0 && (a = e.length + a), a >= e.length) {
                    if (i) return -1;
                    a = e.length - 1
                } else if (a < 0) {
                    if (!i) return -1;
                    a = 0
                }
                if ("string" == typeof t && (t = d.from(t, n)), d.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, a, n, i);
                if ("number" == typeof t) return t &= 255, d.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, a) : Uint8Array.prototype.lastIndexOf.call(e, t, a) : m(e, [t], a, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function m(e, t, a, n, i) {
                var r, o = 1, s = e.length, c = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s /= o = 2, c /= 2, a /= 2
                }

                function l(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }

                if (i) {
                    var u = -1;
                    for (r = a; r < s; r++) if (l(e, r) === l(t, -1 === u ? 0 : r - u)) {
                        if (-1 === u && (u = r), r - u + 1 === c) return u * o
                    } else -1 !== u && (r -= r - u), u = -1
                } else for (s < a + c && (a = s - c), r = a; 0 <= r; r--) {
                    for (var d = !0, h = 0; h < c; h++) if (l(e, r + h) !== l(t, h)) {
                        d = !1;
                        break
                    }
                    if (d) return r
                }
                return -1
            }

            function v(e, t, a, n) {
                a = Number(a) || 0;
                var i = e.length - a;
                n ? i < (n = Number(n)) && (n = i) : n = i;
                var r = t.length;
                if (r % 2 != 0) throw new TypeError("Invalid hex string");
                r / 2 < n && (n = r / 2);
                for (var o = 0; o < n; ++o) {
                    var s = parseInt(t.substr(2 * o, 2), 16);
                    if (isNaN(s)) return o;
                    e[a + o] = s
                }
                return o
            }

            function y(e, t, a, n) {
                return E(function (e) {
                    for (var t = [], a = 0; a < e.length; ++a) t.push(255 & e.charCodeAt(a));
                    return t
                }(t), e, a, n)
            }

            function b(e, t, a) {
                return 0 === t && a === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, a))
            }

            function _(e, t, a) {
                a = Math.min(e.length, a);
                for (var n = [], i = t; i < a;) {
                    var r, o, s, c, l = e[i], u = null, d = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1;
                    if (i + d <= a) switch (d) {
                        case 1:
                            l < 128 && (u = l);
                            break;
                        case 2:
                            128 == (192 & (r = e[i + 1])) && 127 < (c = (31 & l) << 6 | 63 & r) && (u = c);
                            break;
                        case 3:
                            r = e[i + 1], o = e[i + 2], 128 == (192 & r) && 128 == (192 & o) && 2047 < (c = (15 & l) << 12 | (63 & r) << 6 | 63 & o) && (c < 55296 || 57343 < c) && (u = c);
                            break;
                        case 4:
                            r = e[i + 1], o = e[i + 2], s = e[i + 3], 128 == (192 & r) && 128 == (192 & o) && 128 == (192 & s) && 65535 < (c = (15 & l) << 18 | (63 & r) << 12 | (63 & o) << 6 | 63 & s) && c < 1114112 && (u = c)
                    }
                    null === u ? (u = 65533, d = 1) : 65535 < u && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), n.push(u), i += d
                }
                return function (e) {
                    var t = e.length;
                    if (t <= C) return String.fromCharCode.apply(String, e);
                    var a = "", n = 0;
                    for (; n < t;) a += String.fromCharCode.apply(String, e.slice(n, n += C));
                    return a
                }(n)
            }

            U.Buffer = d, U.SlowBuffer = function (e) {
                +e != e && (e = 0);
                return d.alloc(+e)
            }, U.INSPECT_MAX_BYTES = 50, d.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype, foo: function () {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), U.kMaxLength = a(), d.poolSize = 8192, d._augment = function (e) {
                return e.__proto__ = d.prototype, e
            }, d.from = function (e, t, a) {
                return i(null, e, t, a)
            }, d.TYPED_ARRAY_SUPPORT && (d.prototype.__proto__ = Uint8Array.prototype, d.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && d[Symbol.species] === d && Object.defineProperty(d, Symbol.species, {
                value: null,
                configurable: !0
            })), d.alloc = function (e, t, a) {
                return n = null, r = t, o = a, c(i = e), i <= 0 ? s(n, i) : void 0 !== r ? "string" == typeof o ? s(n, i).fill(r, o) : s(n, i).fill(r) : s(n, i);
                var n, i, r, o
            }, d.allocUnsafe = function (e) {
                return l(null, e)
            }, d.allocUnsafeSlow = function (e) {
                return l(null, e)
            }, d.isBuffer = function (e) {
                return !(null == e || !e._isBuffer)
            }, d.compare = function (e, t) {
                if (!d.isBuffer(e) || !d.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var a = e.length, n = t.length, i = 0, r = Math.min(a, n); i < r; ++i) if (e[i] !== t[i]) {
                    a = e[i], n = t[i];
                    break
                }
                return a < n ? -1 : n < a ? 1 : 0
            }, d.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, d.concat = function (e, t) {
                if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return d.alloc(0);
                var a;
                if (void 0 === t) for (a = t = 0; a < e.length; ++a) t += e[a].length;
                var n = d.allocUnsafe(t), i = 0;
                for (a = 0; a < e.length; ++a) {
                    var r = e[a];
                    if (!d.isBuffer(r)) throw new TypeError('"list" argument must be an Array of Buffers');
                    r.copy(n, i), i += r.length
                }
                return n
            }, d.byteLength = g, d.prototype._isBuffer = !0, d.prototype.swap16 = function () {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                return this
            }, d.prototype.swap32 = function () {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
                return this
            }, d.prototype.swap64 = function () {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
                return this
            }, d.prototype.toString = function () {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? _(this, 0, e) : function (e, t, a) {
                    var n = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === a || a > this.length) && (a = this.length), a <= 0) return "";
                    if ((a >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8"); ;) switch (e) {
                        case"hex":
                            return D(this, t, a);
                        case"utf8":
                        case"utf-8":
                            return _(this, t, a);
                        case"ascii":
                            return w(this, t, a);
                        case"latin1":
                        case"binary":
                            return S(this, t, a);
                        case"base64":
                            return b(this, t, a);
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return k(this, t, a);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), n = !0
                    }
                }.apply(this, arguments)
            }, d.prototype.equals = function (e) {
                if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === d.compare(this, e)
            }, d.prototype.inspect = function () {
                var e = "", t = U.INSPECT_MAX_BYTES;
                return 0 < this.length && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
            }, d.prototype.compare = function (e, t, a, n, i) {
                if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === a && (a = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || a > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (i <= n && a <= t) return 0;
                if (i <= n) return -1;
                if (a <= t) return 1;
                if (this === e) return 0;
                for (var r = (i >>>= 0) - (n >>>= 0), o = (a >>>= 0) - (t >>>= 0), s = Math.min(r, o), c = this.slice(n, i), l = e.slice(t, a), u = 0; u < s; ++u) if (c[u] !== l[u]) {
                    r = c[u], o = l[u];
                    break
                }
                return r < o ? -1 : o < r ? 1 : 0
            }, d.prototype.includes = function (e, t, a) {
                return -1 !== this.indexOf(e, t, a)
            }, d.prototype.indexOf = function (e, t, a) {
                return f(this, e, t, a, !0)
            }, d.prototype.lastIndexOf = function (e, t, a) {
                return f(this, e, t, a, !1)
            }, d.prototype.write = function (e, t, a, n) {
                if (void 0 === t) n = "utf8", a = this.length, t = 0; else if (void 0 === a && "string" == typeof t) n = t, a = this.length, t = 0; else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(a) ? (a |= 0, void 0 === n && (n = "utf8")) : (n = a, a = void 0)
                }
                var i = this.length - t;
                if ((void 0 === a || i < a) && (a = i), 0 < e.length && (a < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var r, o, s, c, l, u, d, h, g, p = !1; ;) switch (n) {
                    case"hex":
                        return v(this, e, t, a);
                    case"utf8":
                    case"utf-8":
                        return h = t, g = a, E(B(e, (d = this).length - h), d, h, g);
                    case"ascii":
                        return y(this, e, t, a);
                    case"latin1":
                    case"binary":
                        return y(this, e, t, a);
                    case"base64":
                        return c = this, l = t, u = a, E(L(e), c, l, u);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return o = t, s = a, E(function (e, t) {
                            for (var a, n, i, r = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) a = e.charCodeAt(o), n = a >> 8, i = a % 256, r.push(i), r.push(n);
                            return r
                        }(e, (r = this).length - o), r, o, s);
                    default:
                        if (p) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), p = !0
                }
            }, d.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            var C = 4096;

            function w(e, t, a) {
                var n = "";
                a = Math.min(e.length, a);
                for (var i = t; i < a; ++i) n += String.fromCharCode(127 & e[i]);
                return n
            }

            function S(e, t, a) {
                var n = "";
                a = Math.min(e.length, a);
                for (var i = t; i < a; ++i) n += String.fromCharCode(e[i]);
                return n
            }

            function D(e, t, a) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!a || a < 0 || n < a) && (a = n);
                for (var i = "", r = t; r < a; ++r) i += F(e[r]);
                return i
            }

            function k(e, t, a) {
                for (var n = e.slice(t, a), i = "", r = 0; r < n.length; r += 2) i += String.fromCharCode(n[r] + 256 * n[r + 1]);
                return i
            }

            function A(e, t, a) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (a < e + t) throw new RangeError("Trying to access beyond buffer length")
            }

            function I(e, t, a, n, i, r) {
                if (!d.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (i < t || t < r) throw new RangeError('"value" argument is out of bounds');
                if (a + n > e.length) throw new RangeError("Index out of range")
            }

            function N(e, t, a, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, r = Math.min(e.length - a, 2); i < r; ++i) e[a + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }

            function T(e, t, a, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, r = Math.min(e.length - a, 4); i < r; ++i) e[a + i] = t >>> 8 * (n ? i : 3 - i) & 255
            }

            function x(e, t, a, n, i, r) {
                if (a + n > e.length) throw new RangeError("Index out of range");
                if (a < 0) throw new RangeError("Index out of range")
            }

            function P(e, t, a, n, i) {
                return i || x(e, 0, a, 4), r.write(e, t, a, n, 23, 4), a + 4
            }

            function M(e, t, a, n, i) {
                return i || x(e, 0, a, 8), r.write(e, t, a, n, 52, 8), a + 8
            }

            d.prototype.slice = function (e, t) {
                var a, n = this.length;
                if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n), t < e && (t = e), d.TYPED_ARRAY_SUPPORT) (a = this.subarray(e, t)).__proto__ = d.prototype; else {
                    var i = t - e;
                    a = new d(i, void 0);
                    for (var r = 0; r < i; ++r) a[r] = this[r + e]
                }
                return a
            }, d.prototype.readUIntLE = function (e, t, a) {
                e |= 0, t |= 0, a || A(e, t, this.length);
                for (var n = this[e], i = 1, r = 0; ++r < t && (i *= 256);) n += this[e + r] * i;
                return n
            }, d.prototype.readUIntBE = function (e, t, a) {
                e |= 0, t |= 0, a || A(e, t, this.length);
                for (var n = this[e + --t], i = 1; 0 < t && (i *= 256);) n += this[e + --t] * i;
                return n
            }, d.prototype.readUInt8 = function (e, t) {
                return t || A(e, 1, this.length), this[e]
            }, d.prototype.readUInt16LE = function (e, t) {
                return t || A(e, 2, this.length), this[e] | this[e + 1] << 8
            }, d.prototype.readUInt16BE = function (e, t) {
                return t || A(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, d.prototype.readUInt32LE = function (e, t) {
                return t || A(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, d.prototype.readUInt32BE = function (e, t) {
                return t || A(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, d.prototype.readIntLE = function (e, t, a) {
                e |= 0, t |= 0, a || A(e, t, this.length);
                for (var n = this[e], i = 1, r = 0; ++r < t && (i *= 256);) n += this[e + r] * i;
                return (i *= 128) <= n && (n -= Math.pow(2, 8 * t)), n
            }, d.prototype.readIntBE = function (e, t, a) {
                e |= 0, t |= 0, a || A(e, t, this.length);
                for (var n = t, i = 1, r = this[e + --n]; 0 < n && (i *= 256);) r += this[e + --n] * i;
                return (i *= 128) <= r && (r -= Math.pow(2, 8 * t)), r
            }, d.prototype.readInt8 = function (e, t) {
                return t || A(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, d.prototype.readInt16LE = function (e, t) {
                t || A(e, 2, this.length);
                var a = this[e] | this[e + 1] << 8;
                return 32768 & a ? 4294901760 | a : a
            }, d.prototype.readInt16BE = function (e, t) {
                t || A(e, 2, this.length);
                var a = this[e + 1] | this[e] << 8;
                return 32768 & a ? 4294901760 | a : a
            }, d.prototype.readInt32LE = function (e, t) {
                return t || A(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, d.prototype.readInt32BE = function (e, t) {
                return t || A(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, d.prototype.readFloatLE = function (e, t) {
                return t || A(e, 4, this.length), r.read(this, e, !0, 23, 4)
            }, d.prototype.readFloatBE = function (e, t) {
                return t || A(e, 4, this.length), r.read(this, e, !1, 23, 4)
            }, d.prototype.readDoubleLE = function (e, t) {
                return t || A(e, 8, this.length), r.read(this, e, !0, 52, 8)
            }, d.prototype.readDoubleBE = function (e, t) {
                return t || A(e, 8, this.length), r.read(this, e, !1, 52, 8)
            }, d.prototype.writeUIntLE = function (e, t, a, n) {
                (e = +e, t |= 0, a |= 0, n) || I(this, e, t, a, Math.pow(2, 8 * a) - 1, 0);
                var i = 1, r = 0;
                for (this[t] = 255 & e; ++r < a && (i *= 256);) this[t + r] = e / i & 255;
                return t + a
            }, d.prototype.writeUIntBE = function (e, t, a, n) {
                (e = +e, t |= 0, a |= 0, n) || I(this, e, t, a, Math.pow(2, 8 * a) - 1, 0);
                var i = a - 1, r = 1;
                for (this[t + i] = 255 & e; 0 <= --i && (r *= 256);) this[t + i] = e / r & 255;
                return t + a
            }, d.prototype.writeUInt8 = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 1, 255, 0), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, d.prototype.writeUInt16LE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : N(this, e, t, !0), t + 2
            }, d.prototype.writeUInt16BE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : N(this, e, t, !1), t + 2
            }, d.prototype.writeUInt32LE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : T(this, e, t, !0), t + 4
            }, d.prototype.writeUInt32BE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : T(this, e, t, !1), t + 4
            }, d.prototype.writeIntLE = function (e, t, a, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * a - 1);
                    I(this, e, t, a, i - 1, -i)
                }
                var r = 0, o = 1, s = 0;
                for (this[t] = 255 & e; ++r < a && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + r - 1] && (s = 1), this[t + r] = (e / o >> 0) - s & 255;
                return t + a
            }, d.prototype.writeIntBE = function (e, t, a, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * a - 1);
                    I(this, e, t, a, i - 1, -i)
                }
                var r = a - 1, o = 1, s = 0;
                for (this[t + r] = 255 & e; 0 <= --r && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + r + 1] && (s = 1), this[t + r] = (e / o >> 0) - s & 255;
                return t + a
            }, d.prototype.writeInt8 = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 1, 127, -128), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, d.prototype.writeInt16LE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : N(this, e, t, !0), t + 2
            }, d.prototype.writeInt16BE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : N(this, e, t, !1), t + 2
            }, d.prototype.writeInt32LE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 4, 2147483647, -2147483648), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : T(this, e, t, !0), t + 4
            }, d.prototype.writeInt32BE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : T(this, e, t, !1), t + 4
            }, d.prototype.writeFloatLE = function (e, t, a) {
                return P(this, e, t, !0, a)
            }, d.prototype.writeFloatBE = function (e, t, a) {
                return P(this, e, t, !1, a)
            }, d.prototype.writeDoubleLE = function (e, t, a) {
                return M(this, e, t, !0, a)
            }, d.prototype.writeDoubleBE = function (e, t, a) {
                return M(this, e, t, !1, a)
            }, d.prototype.copy = function (e, t, a, n) {
                if (a || (a = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), 0 < n && n < a && (n = a), n === a) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (a < 0 || a >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - a && (n = e.length - t + a);
                var i, r = n - a;
                if (this === e && a < t && t < n) for (i = r - 1; 0 <= i; --i) e[i + t] = this[i + a]; else if (r < 1e3 || !d.TYPED_ARRAY_SUPPORT) for (i = 0; i < r; ++i) e[i + t] = this[i + a]; else Uint8Array.prototype.set.call(e, this.subarray(a, a + r), t);
                return r
            }, d.prototype.fill = function (e, t, a, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, a = this.length) : "string" == typeof a && (n = a, a = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !d.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < a) throw new RangeError("Out of range index");
                if (a <= t) return this;
                var r;
                if (t >>>= 0, a = void 0 === a ? this.length : a >>> 0, e || (e = 0), "number" == typeof e) for (r = t; r < a; ++r) this[r] = e; else {
                    var o = d.isBuffer(e) ? e : B(new d(e, n).toString()), s = o.length;
                    for (r = 0; r < a - t; ++r) this[r + t] = o[r % s]
                }
                return this
            };
            var R = /[^+\/0-9A-Za-z-_]/g;

            function F(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function B(e, t) {
                var a;
                t = t || 1 / 0;
                for (var n = e.length, i = null, r = [], o = 0; o < n; ++o) {
                    if (55295 < (a = e.charCodeAt(o)) && a < 57344) {
                        if (!i) {
                            if (56319 < a) {
                                -1 < (t -= 3) && r.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === n) {
                                -1 < (t -= 3) && r.push(239, 191, 189);
                                continue
                            }
                            i = a;
                            continue
                        }
                        if (a < 56320) {
                            -1 < (t -= 3) && r.push(239, 191, 189), i = a;
                            continue
                        }
                        a = 65536 + (i - 55296 << 10 | a - 56320)
                    } else i && -1 < (t -= 3) && r.push(239, 191, 189);
                    if (i = null, a < 128) {
                        if ((t -= 1) < 0) break;
                        r.push(a)
                    } else if (a < 2048) {
                        if ((t -= 2) < 0) break;
                        r.push(a >> 6 | 192, 63 & a | 128)
                    } else if (a < 65536) {
                        if ((t -= 3) < 0) break;
                        r.push(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128)
                    } else {
                        if (!(a < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        r.push(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, 63 & a | 128)
                    }
                }
                return r
            }

            function L(e) {
                return n.toByteArray(function (e) {
                    var t;
                    if ((e = (t = e, t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")).replace(R, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function E(e, t, a, n) {
                for (var i = 0; i < n && !(i + a >= t.length || i >= e.length); ++i) t[i + a] = e[i];
                return i
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"base64-js": 1, ieee754: 4, isarray: 3}],
    3: [function (e, t, a) {
        var n = {}.toString;
        t.exports = Array.isArray || function (e) {
            return "[object Array]" == n.call(e)
        }
    }, {}],
    4: [function (e, t, a) {
        a.read = function (e, t, a, n, i) {
            var r, o, s = 8 * i - n - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = a ? i - 1 : 0, h = a ? -1 : 1,
                g = e[t + d];
            for (d += h, r = g & (1 << -u) - 1, g >>= -u, u += s; 0 < u; r = 256 * r + e[t + d], d += h, u -= 8) ;
            for (o = r & (1 << -u) - 1, r >>= -u, u += n; 0 < u; o = 256 * o + e[t + d], d += h, u -= 8) ;
            if (0 === r) r = 1 - l; else {
                if (r === c) return o ? NaN : 1 / 0 * (g ? -1 : 1);
                o += Math.pow(2, n), r -= l
            }
            return (g ? -1 : 1) * o * Math.pow(2, r - n)
        }, a.write = function (e, t, a, n, i, r) {
            var o, s, c, l = 8 * r - i - 1, u = (1 << l) - 1, d = u >> 1,
                h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = n ? 0 : r - 1, p = n ? 1 : -1,
                f = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), 2 <= (t += 1 <= o + d ? h / c : h * Math.pow(2, 1 - d)) * c && (o++, c /= 2), u <= o + d ? (s = 0, o = u) : 1 <= o + d ? (s = (t * c - 1) * Math.pow(2, i), o += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); 8 <= i; e[a + g] = 255 & s, g += p, s /= 256, i -= 8) ;
            for (o = o << i | s, l += i; 0 < l; e[a + g] = 255 & o, g += p, o /= 256, l -= 8) ;
            e[a + g - p] |= 128 * f
        }
    }, {}],
    AddCoin1: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "325c9IQba9ERrKG+tQk7wVc", "AddCoin1");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
            }, animOver: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").overAddCoinEffect()
            }
        }), cc._RF.pop()
    }, {}],
    AndroidPaymentExecutor: [function (e, t, a) {
        "use strict";

        function n() {
            this.className = "com/bianfeng/platform/jssupport/PaymentInterfaceExecutor"
        }

        cc._RF.push(t, "1ba84ZawxRMR7HWrl0NABOT", "AndroidPaymentExecutor"), n.prototype.payForProduct = function (e) {
            jsb.reflection.callStaticMethod(this.className, "payForProduct", "(Ljava/lang/String;)V", e)
        }, n.prototype.payForProduct = function (e, t, a, n, i, r, o, s, c, l, u, d) {
            var h = new Object;
            h.orderId = e, h.productId = t, h.productName = a, h.productPrice = n, h.productCount = i, h.roleId = r, h.roleName = o, h.roleGrade = s, h.roleBalance = c, h.serverId = l, h.notifyUrl = u, h.ext = d;
            var g = JSON.stringify(h);
            jsb.reflection.callStaticMethod(this.className, "payForProduct", "(Ljava/lang/String;)V", g)
        }, n.prototype.payForSingle = function (e, t, a, n, i, r) {
            var o = new Object;
            o.orderId = e, o.productId = t, o.productName = a, o.productPrice = n, o.productCount = i, o.ext = r;
            var s = JSON.stringify(o);
            jsb.reflection.callStaticMethod(this.className, "payForProduct", "(Ljava/lang/String;)V", s)
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    AndroidPlatformExecutor: [function (a, e, t) {
        "use strict";

        function n() {
            this.className = "com/bianfeng/platform/jssupport/PlatformSdkExecutor"
        }

        cc._RF.push(e, "968c0o8cBhNf4GILwMAFtzE", "AndroidPlatformExecutor"), n.prototype.init = function () {
            jsb.reflection.callStaticMethod(this.className, "init", "()V")
        }, n.prototype.setListener = function (e) {
            this.listener = e, jsb.reflection.callStaticMethod(this.className, "setListener", "(Ljava/lang/String;)V", "androidCallBack")
        }, n.prototype.callback = function (e, t) {
            this.listener(e, t)
        }, n.prototype.getSdkVersion = function () {
            return jsb.reflection.callStaticMethod(this.className, "getSdkVersion", "()Ljava/lang/String;")
        }, n.prototype.getPlatformId = function () {
            return jsb.reflection.callStaticMethod(this.className, "getPlatformId", "()Ljava/lang/String;")
        }, n.prototype.getPlatformName = function () {
            return jsb.reflection.callStaticMethod(this.className, "getPlatformName", "()Ljava/lang/String;")
        }, n.prototype.getPlatformVersion = function () {
            return jsb.reflection.callStaticMethod(this.className, "getPlatformVersion", "()Ljava/lang/String;")
        }, e.exports = new n, window.androidCallBack = function (e, t) {
            a("AndroidPlatformExecutor").callback(e, t)
        }, cc._RF.pop()
    }, {AndroidPlatformExecutor: "AndroidPlatformExecutor"}],
    AndroidUserExecutor: [function (e, t, a) {
        "use strict";

        function n() {
            this.className = "com/bianfeng/platform/jssupport/UserInterfaceExecutor"
        }

        cc._RF.push(t, "b2bdaNwiS9JE4yqgvPCgvJV", "AndroidUserExecutor"), n.prototype.login = function () {
            jsb.reflection.callStaticMethod(this.className, "login", "()V")
        }, n.prototype.isSupportFunction = function (e) {
            return jsb.reflection.callStaticMethod(this.className, "isSupportFunction", "(Ljava/lang/String;)Z", e)
        }, n.prototype.callFunction = function (e) {
            jsb.reflection.callStaticMethod(this.className, "callFunction", "(Ljava/lang/String;)V", e)
        }, n.prototype.callFunctionArray = function (e, t) {
            jsb.reflection.callStaticMethod(this.className, "callFunction", "(Ljava/lang/String;Ljava/lang/String;)V", e, t)
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    Bank_BonusX2: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "016f9glAxFKq7xa7Rq3APrk", "Bank_BonusX2");
        var o = logCenter, s = e("instant-util"), c = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                greySprite: cc.Sprite,
                shareBtn: cc.Button,
                videoBtn: cc.Button,
                btnNode: cc.Node,
                descself: cc.Label
            },
            onLoad: function () {
                var e = cc.view.getFrameSize(), t = 1334 * e.width / 750 / e.height;
                this.btnNode.scale = 1 < t ? 1 : t, this.shareBtn.node.active = !1, this.videoBtn.node.active = !1, this.greySprite.node.active = !1, globalManager.canShare(globalManager.shareType.bankX2, {level: playerManager.getNumData("UnlockLevel")}) ? (this.shareBtn.node.active = !0, this.videoBtn.node.active = !0) : (this.videoBtn.node.active = !0, this.shareBtn.node.x = 0, this.videoBtn.node.x = 0), "WEB" == s.getPlatform() && (this.greySprite.node.active = !0, this.videoBtn.interactable = !1);
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playSound("congratulations")
            },
            onDestroy: function () {
            },
            setData: function (e, t) {
                this.fatherSrc = e, this.rewardValue = t, this.descself.string = "+" + c.unit_format(t)
            },
            onButtonShare: function (e, t) {
                var a = this, n = {type: globalManager.shareType.bankX2, inviter: s.getPlayerID(), rewards: "1"},
                    i = globalManager.getShareConfig(globalManager.shareType.bankX2),
                    r = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                o.share_bank_x2_event(), s.chooseContext(function () {
                    o.share_bank_x2_success_event();
                    var e = a.rewardValue;
                    e = c.galaxyMut(e, 2), playerManager.addNumData("Coin", e), cc.director.emit("updateCoin"), r.showToast("+" + c.unit_format(e) + " 金币"), a.fatherSrc.closeBankBonusX2()
                }.bind(this), function (e, t) {
                    r.showToast(t)
                }, n, i.text, i.img)
            },
            onButtonVideo: function (e, t) {
                console.log("视频333",this.node);
                var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                o.watch_video_bank_x2_event(), s.showRewardAd(function () {
                    o.watch_video_bank_x2_success_event();
                    var e = a.rewardValue;
                    e = c.galaxyMut(e, 2), playerManager.addNumData("Coin", e), cc.director.emit("updateCoin"), n.showToast("+" + c.unit_format(e) + " coins"), a.fatherSrc.closeBankBonusX2()
                }.bind(this), function () {
                    cc.log("RewardAd load err"), n.showToast("No available Ad right now, try again later.")
                })
            },
            closeDialog: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), t = this.rewardValue;
                playerManager.addNumData("Coin", t), cc.director.emit("updateCoin"), e.showToast("+" + c.unit_format(t) + " coins"), this.fatherSrc.closeBankBonusX2()
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    Bank: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "b658213fqpG97uY2r9MK9km", "Bank");
        var o = logCenter, s = e("instant-util"), c = e("number-util"), r = e("webimg-util"),
            n = "inviteData2", l = [1, 1, 2, 3], u = [2, 3, 5, 8];
        cc.Class({
            extends: cc.Component,
            properties: {
                rewardNode: cc.Node,
                videoCD: cc.Label,
                inviteBtn: [cc.Button],
                bonusNode: [cc.Node],
                iconSprite: [cc.Sprite],
                namelabel: [cc.Label],
                bonuslabel: [cc.Label],
                desclabel: [cc.Label],
                bankbonusX2: cc.Prefab,
                cdProgress: cc.ProgressBar,
                collectBtn: cc.Button,
                descself: cc.Label
            },
            onLoad: function () {
                var e = this;
                globalManager.canShare(globalManager.shareType.bank, {level: playerManager.getNumData("UnlockLevel")}) ? this.rewardType = 1 : this.rewardType = 2;
                var t = cc.sys.localStorage.getItem(n);
                t = t == "" ? "{}" : t;
                t = (t = JSON.parse(t)) && t.length ? t : [], this.inviteData = t, this.setData(this.inviteData), this.checkTimeCD(this.inviteData), this.schedule(function () {
                    e.setData(e.inviteData), e.checkTimeCD(e.inviteData)
                }, .5), this.startBankTimeCDCol = !1
            },
            onEnable: function () {
                var t = this;
                o.invite_friends_info_start_event(), server_util.workingList(function (e) {
                    if (o.invite_friends_info_success_event(), e.list.length) {
                        cc.sys.localStorage.setItem(n, JSON.stringify(e.list)), t.inviteData = e.list;
                        this.setData(e.list)
                    }
                }.bind(this), function (e) {
                    e.code && o.invite_friends_info_err_event(e.code)
                }.bind(this))
            },
            onDisable: function () {
            },
            onDestroy: function () {
            },
            checkTimeCD: function (e) {
                var a = this, n = this.getRewardValue(), t = void 0;
                if (t = 0 == e.length ? 1 : 1 <= e.length && e.length <= 4 ? u[e.length - 1] : u[3], n = c.galaxyMut(n, t), n = c.unit_format(n), 0 < playerManager.getNumData("BankTimeCDCol")) {
                    a.descself.string = "+" + n + " after " + c.time_format_day(playerManager.getNumData("BankTimeCDCol")) + ".", a.collectBtn.interactable = !1;
                    var i = playerManager.getNumData("BankTimeCDCol") / globalManager.bankCD;
                    a.cdProgress.progress = 1 - i, 0 == this.startBankTimeCDCol && (this.startBankTimeCDCol = !0, c.playerdataCountDown("BankTimeCDCol", 1, function (e) {
                        if (a.descself && (a.descself.string = "+" + n + " after " + c.time_format_day(e) + "."), a.collectBtn && (a.collectBtn.interactable = !1), a.cdProgress) {
                            var t = playerManager.getNumData("BankTimeCDCol") / globalManager.bankCD;
                            a.cdProgress.progress = 1 - t
                        }
                        0 == e && (a.descself && (a.descself.string = "+" + n + " now."), a.collectBtn && (a.collectBtn.interactable = !0), a.cdProgress && (a.cdProgress.progress = 1))
                    }))
                } else a.descself.string = "+" + n + " now.", a.collectBtn.interactable = !0, a.cdProgress.progress = 1;
                // var r = s.getPlatform();
                // 2 == this.rewardType && ("WEB" == r || 0 < playerManager.getNumData("TimeCD2") && (a.videoCD.string = c.time_format_day(playerManager.getNumData("TimeCD2")), c.playerdataCountDown("TimeCD2", 1, function (e) {
                //     a.videoCD && (a.videoCD.string = c.time_format_day(playerManager.getNumData("TimeCD2")))
                // })))
            },
            setData: function (e) {
                for (var t = e.length - 1; 0 <= t; t--) -1 == this.checkCDTime(e[t].time) && e.splice(t, 1);
                var a = !1;
                for (t = 0; t < this.bonusNode.length; t++) if (null != e[t]) {
                    this.inviteBtn[t].node.active = !1, (i = this.inviteBtn[t].node.getComponent(cc.Animation)) && i.stop("bubblescale"), this.bonusNode[t].active = !0, e[t].avatar && r.load_webimg(e[t].avatar, this.iconSprite[t]), this.namelabel[t].string = e[t].nickname;
                    var n = this.getRewardValue();
                    n = c.galaxyMut(n, l[t]), n = c.unit_format(n), this.bonuslabel[t].string = "+" + n, this.desclabel[t].string = c.time_format_day(this.checkCDTime(e[t].time))
                } else {
                    var i;
                    if (this.inviteBtn[t].node.active = !0, 0 == a) (i = this.inviteBtn[t].node.getComponent(cc.Animation)) && i.play("bubblescale", 0), a = !0;
                    this.bonusNode[t].active = !1, this.namelabel[t].string = "邀请朋友", this.desclabel[t].string = "X" + u[t] + " 收入."
                }
            },
            checkCDTime: function (e) {
                var t = parseInt(e) + 86400 - globalManager.serverLoginTime - globalManager.keepTime;
                return t < 0 && (t = -1), t
            },
            getRewardValue: function () {
                var e = playerManager.getNumData("UnlockLevel") - 4;
                return e = 0 <= e ? e : 0, playerManager.getObjData("Price" + e)
            },
            aquireReward: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), t = this.inviteData,
                    a = this.getRewardValue(), n = void 0;
                n = 0 == t.length ? 1 : 1 <= t.length && t.length <= 4 ? u[t.length - 1] : u[3], a = c.galaxyMut(a, n), playerManager.setNumData("BankTimeCDCol", globalManager.bankCD), this.showBankBonusX2(a), this.checkTimeCD(t), e.checkDaily(), cc.director.emit("dailybank_updateRed")
            },
            inviteNewClick: function () {
                var e = {type: globalManager.shareType.friendWorking, inviter: s.getPlayerID(), rewards: "1"},
                    t = globalManager.getShareConfig(globalManager.shareType.friendWorking),
                    a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                o.bank_invite_friend_share_event(), s.share(function () {
                    a.setUserCenterEvent("share"), a.showToast("Wait your friends enter game!")
                }.bind(this), t.img, t.text, e)
            },
            onButtonShare: function (e, t) {
                var a = this, n = {type: globalManager.shareType.bank, inviter: s.getPlayerID(), rewards: "1"},
                    i = globalManager.getShareConfig(globalManager.shareType.bank),
                    r = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                o.share_bank_event(), s.chooseContext(function () {
                    o.share_bank_success_event();
                    a.inviteData;
                    var e = a.getRewardValue();
                    playerManager.addNumData("Coin", e), cc.director.emit("updateCoin"), r.showToast("+" + c.unit_format(e) + " coins"), a.checkTimeCD(a.inviteData)
                }.bind(this), function (e, t) {
                    r.showToast(t)
                }, n, i.text, i.img)
            },
            onButtonVideo: function (e, t) {
                console.log("视频444",this.node);
                var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                o.watch_video_bank_event(), s.showRewardAd(function () {
                    o.watch_video_bank_success_event();
                    a.inviteData;
                    var e = a.getRewardValue();
                    playerManager.addNumData("Coin", e), cc.director.emit("updateCoin"), playerManager.setNumData("TimeCD2", globalManager.bankVideoCD), n.showToast("+" + c.unit_format(e) + " coins"), a.checkTimeCD(a.inviteData)
                }.bind(this), function () {
                    cc.log("RewardAd load err"), n.showToast("No available Ad right now, try again later.")
                })
            },
            showBankBonusX2: function (e) {
                null != this.bankbonusX2_dlg && (this.bankbonusX2_dlg.destroy(!0), this.bankbonusX2_dlg = null), this.bankbonusX2_dlg = cc.instantiate(this.bankbonusX2), this.bankbonusX2_dlg.parent = this.node, this.bankbonusX2_dlg.getComponent("Bank_BonusX2").setData(this, e)
            },
            closeBankBonusX2: function () {
                null != this.bankbonusX2_dlg && (this.bankbonusX2_dlg.destroy(!0), this.bankbonusX2_dlg = null)
            }
        }), cc._RF.pop()
    }, {

        "instant-util": "instant-util",
        "number-util": "number-util",
        "webimg-util": "webimg-util"
    }],
    BrowserPaymentExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "66882gdHe9DS6VDeHeHDEpw", "BrowserPaymentExecutor"), n.prototype.payForProduct = function (e, t, a, n, i, r, o, s, c, l, u, d) {
            var h = new Object;
            h.orderId = e, h.productId = t, h.productName = a, h.productPrice = n, h.productCount = i, h.roleId = r, h.roleName = o, h.roleGrade = s, h.roleBalance = c, h.serverId = l, h.notifyUrl = u, h.ext = d;
            JSON.stringify(h)
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    BrowserPlatformExecutor: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "96c2bL8C65DDKYJtbdI5ntA", "BrowserPlatformExecutor");
        var n = e("UserWrapper");

        function i() {
            i.androidClass = "org/cocos2dx/javascript/AppActivity"
        }

        i.androidClass = "org/cocos2dx/javascript/AppActivity", i.prototype.init = function () {
            this.listener(n.ACTION_RET_INIT_FAIL, "unimpl")
        }, i.prototype.setListener = function (e) {
            this.listener = e
        }, i.prototype.callback = function (e, t) {
            this.listener(e, t)
        }, i.prototype.getSdkVersion = function () {
            return 0
        }, i.prototype.getPlatformId = function () {
            return 0
        }, i.prototype.getPlatformName = function () {
            return "browser"
        }, i.prototype.getPlatformVersion = function () {
            return 0
        }, t.exports = new i, cc._RF.pop()
    }, {BrowserPlatformExecutor: "BrowserPlatformExecutor", UserWrapper: "UserWrapper"}],
    BrowserUserExecutor: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "92235ohiBBCI7Js0PHzEdQ4", "BrowserUserExecutor");
        var n = e("UserWrapper"), i = e("BrowserPlatformExecutor");

        function r() {
        }

        var o = new r;
        r.prototype.login = function () {
            i.listener(n.ACTION_RET_LOGIN_FAIL, "unimpl")
        }, r.prototype.isSupportFunction = function (e) {
            return !1
        }, r.prototype.callFunction = function (e) {
        }, r.prototype.callFunctionArray = function (e, t) {
            cc.log(t)
        }, t.exports = o, cc._RF.pop()
    }, {BrowserPlatformExecutor: "BrowserPlatformExecutor", UserWrapper: "UserWrapper"}],
    Daily_And_Bank: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "1206342SUdKkrAYst2Yuyc2", "Daily_And_Bank");
        logCenter, e("instant-util"), e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                rewardNode: cc.Node,
                redSpNode: [cc.Node],
                clickNode: [cc.Node],
                clickSprite: [cc.Sprite],
                clickBtn: [cc.Button]
            },
            onLoad: function () {
                var e = this, a = this;
                this.customEvent = {dailybank_updateRed: "updateRedSp"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            },
            onDestroy: function () {
                for (var e in cc.log("onDestory"), this.customEvent) cc.director.off(e)
            },
            setData: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments[1];
                this.callback = t;
                var a = cc.view.getFrameSize(), n = 1334 * a.width / 750 / a.height;
                this.rewardNode.scale = 1 < n ? 1 : n;
                for (var i = 0; i < this.clickNode.length; i++) this.clickNode[i].active = !1;
                for (i = 0; i < this.clickSprite.length; i++) this.clickSprite[i].node.active = !1;
                for (i = 0; i < this.clickBtn.length; i++) this.clickBtn[i].node.active = !0;
                this.clickNode[e].active = !0, this.clickSprite[e].node.active = !0, this.clickBtn[e].node.active = !1, this.updateRedSp()
            },
            updateRedSp: function () {
                1 == playerManager.getNumData("dailyRewardCan") ? this.redSpNode[1].active = !1 : this.redSpNode[1].active = !0, 0 < playerManager.getNumData("BankTimeCDCol") ? this.redSpNode[0].active = !1 : this.redSpNode[0].active = !0
            },
            onClickButton: function (e, t) {
                this.setData(t)
            },
            closeDialog: function () {
                this.callback && this.callback(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeDailyCheckinPopUp()
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    Daily_CheckIn: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "cb84dwVoURJn7Y5ap/KxwKw", "Daily_CheckIn");
        var o = logCenter, s = (e("instant-util"), e("number-util"));
        cc.Class({
            extends: cc.Component,
            properties: {
                getSprite: cc.Sprite,
                rewardNode: cc.Node,
                shareBtn: cc.Button,
                dailyres: cc.Prefab,
                rewardFrame: [cc.SpriteFrame],
                getBtn: [cc.Button],
                bgSprites: [cc.Sprite],
                ylSprite: [cc.Sprite],
                gouSprite: [cc.Sprite],
                coinSprite: [cc.Sprite],
                valuelabel: [cc.Label]
            },
            onLoad: function () {
                this.setData()
            },
            setData: function () {
                for (var e = 0; e < this.gouSprite.length; e++) this.gouSprite[e].node.active = !1, this.getBtn[e].node.active = !1;
                for (e = 0; e < this.gouSprite.length; e++) this.valuelabel[e].string = this.getRewardValue(gameData.getDailyBonusReward(e)), this.coinSprite[e].spriteFrame = this.rewardFrame[gameData.getDailyBonusReward(e).type];
                var t = playerManager.getNumData("dailyReward");
                t < 0 && (t = 0);
                var a = t % this.gouSprite.length;
                0 == a && 1 == playerManager.getNumData("dailyRewardCan") && (a = 7);
                for (e = 0; e < a; e++) this.gouSprite[e].node.active = !0;
                1 == playerManager.getNumData("dailyRewardCan") ? (this.gouSprite[a - 1].node.active = !0, this.getBtn[a - 1].node.active = !0, this.ylSprite[a - 1].node.active = !0, this.shareBtn.node.active = !1, this.getSprite.node.active = !0) : (this.gouSprite[a].node.active = !1, this.getBtn[a].node.active = !0, this.ylSprite[a].node.active = !0, this.shareBtn.node.active = !0, this.getSprite.node.active = !1)
            },
            getRewardValue: function (e) {
                var t = "";
                if (0 == e.type) {
                    var a = playerManager.getNumData("UnlockLevel") - 4;
                    a = 0 <= a ? a : 0;
                    var n = playerManager.getObjData("Price" + a);
                    n = s.galaxyMut(n, e.value), t = "x " + s.unit_format(n)
                } else 1 == e.type ? t = "x " + e.value : 2 == e.type ? t = "x " + e.value : 3 == e.type && (t = "x " + Math.floor(e.value / 3600) + "h");
                return cc.log("reward desc=" + t), t
            },
            aquireReward: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (0 == playerManager.getNumData("dailyRewardCan")) {
                    var t = playerManager.getNumData("dailyReward");
                    t < 0 && (t = 0);
                    var a = t % this.gouSprite.length, n = gameData.getDailyBonusReward(a);
                    if (0 == n.type) {
                        var i = playerManager.getNumData("UnlockLevel") - 4;
                        i = 0 <= i ? i : 0;
                        var r = playerManager.getObjData("Price" + i);
                        r = s.galaxyMut(r, n.value), playerManager.addNumData("Coin", r), cc.director.emit("updateCoin"), e.startAddCoinEffect()
                    } else 1 == n.type ? playerManager.addNumData("Ticket", n.value) : 2 == n.type ? globalManager.GoldenBox += n.value : 3 == n.type && (playerManager.addNumData("AcelTime", n.value), e.check2XCD());
                    playerManager.addNumData("dailyReward", 1), playerManager.setNumData("dailyRewardCan", 1), this.showDailyRes(n), e.checkDaily(), cc.director.emit("dailybank_updateRed"), o.daily_reward_collect_click_event(a + 1)
                }
                this.setData()
            },
            showDailyRes: function (e) {
                null != this.dailyres_dlg && (this.dailyres_dlg.destroy(!0), this.dailyres_dlg = null), this.dailyres_dlg = cc.instantiate(this.dailyres), this.dailyres_dlg.parent = this.node, this.dailyres_dlg.getComponent("Daily_Reward").setData(this, e)
            },
            closeDailyRes: function () {
                null != this.dailyres_dlg && (this.dailyres_dlg.destroy(!0), this.dailyres_dlg = null)
            },
            onButtonShare: function (e, t) {
                this.aquireReward()
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    Daily_Reward: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "d46d7EeJftGVYh5CSP8jGfR", "Daily_Reward");
        logCenter, e("instant-util");
        var i = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                coinNode: cc.Node,
                coinNode1: cc.Node,
                congtittlenode: cc.Node,
                okNode: cc.Node,
                coinlabel: [cc.Label],
                rewardNode: [cc.Node]
            },
            onLoad: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playSound("congratulations")
            },
            setData: function (e, t) {
                this.rewardType = t, this.fartherSrc = e, 0 <= t.type && t.type <= this.rewardNode.length - 1 && (this.coinlabel[t.type].string = this.getRewardValue(t), this.rewardNode[t.type].active = !0)
            },
            getRewardValue: function (e) {
                var t = 0;
                if (0 == e.type) {
                    var a = playerManager.getNumData("UnlockLevel") - 4;
                    a = 0 <= a ? a : 0;
                    var n = playerManager.getObjData("Price" + a);
                    n = i.galaxyMut(n, e.value), t = "x " + i.unit_format(n), 1 < e.value ? this.coinNode1.active = !0 : this.coinNode.active = !0
                } else 1 == e.type ? t = "x " + e.value : 2 == e.type ? t = "x " + e.value : 3 == e.type && (t = "x " + Math.floor(e.value / 3600) + "h");
                return cc.log("reward desc=" + t), t
            },
            OKDialog: function () {
                this.fartherSrc.closeDailyRes()
            },
            closeDialog: function () {
                this.fartherSrc.closeDailyRes()
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    FbInstantUtil: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "9209aVTnXBF8rQm+ItV9/RH", "FbInstantUtil");
        var n = e("fbinstant-util");
        t.exports = n, cc._RF.pop()
    }, {"fbinstant-util": "fbinstant-util"}],
    GameItemNodeCache: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "e152d9C35tFTprqe+GejRVR", "GameItemNodeCache");
        cc.Class({
            extends: cc.Component, properties: {itemFrame2: [cc.SpriteFrame]}, onLoad: function () {
            }, loadRes: function (o) {
                var s = this;
                cc.loader.loadResDir("P", cc.SpriteFrame, function (e, t, a) {
                    for (var n in t) {
                        var i = t[n], r = i._name;
                        r = r.slice(1), r = parseInt(r) - 1, s.itemFrame2[r] = i
                    }
                    o && o()
                })
            }, getItemFrame: function (e) {
                return this.itemFrame2[e]
            }
        }), cc._RF.pop()
    }, {}],
    GameItemNode: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "05338ua06pJnI5SNuFb3D/7", "GameItemNode");
        e("GameItemNodeCache");
        var i = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeId: 0,
                startnode: cc.Prefab,
                opennode: cc.Prefab,
                effectupgrade: cc.Prefab,
                hc_oknode: cc.Prefab,
                hc_startnode: cc.Prefab,
                expanimpre: cc.Prefab,
                spItem: cc.Sprite,
                skinSp: cc.Sprite,
                addlabel: cc.Label,
                levellabel: cc.Label,
                brandNode: cc.Node,
                addcoinanim: cc.Animation
            },
            onLoad: function () {
                this.oriOpacity = 150, this.oriScale = this.spItem.node.scale, this.addTouchEvent(this.spItem), this.isCanPut = !0, this.isBoxNode = !1, this.spItem.node.active = !1, this.spItem.node.opacity = 255, this.brandNode.active = !1, this.canTouch = !1, this.itemId = -1, this.curTime = 0, this.maxTime = 0
            },
            update: function (e) {
                -1 != this.itemId && 0 < this.maxTime && (this.curTime += e, 0 < playerManager.getNumData("AcelTime") && (this.curTime += e / 2), this.curTime >= this.maxTime && (this.curTime = 0, this.addCoin()))
            },
            addCoin: function () {
                var e = fish_data[this.itemId].coinround;
                if (0 < playerManager.getNumData("AcelTime") && (e = i.galaxyMut(e, 1.3333)), 50 != this.node.getLocalZOrder()) {
                    this.addlabel.string = "+" + i.unit_format(e), this.addcoinanim.play("house_addcoin", 0);
                    cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playSound("coins")
                }
                playerManager.addNumData("Coin", fish_data[this.itemId].coinround), cc.director.emit("updateCoin"), cc.director.emit("effectCoin")
            },
            addHCOK: function (e, t) {
                this.removeHCOK(), this.hc_oknodeeff = cc.instantiate(this.hc_oknode), this.hc_oknodeeff.getComponent("HC_OK").setData(e, t), this.node.addChild(this.hc_oknodeeff, 1)
            },
            removeHCOK: function () {
                null != this.hc_oknodeeff && (this.hc_oknodeeff.destroy(), this.hc_oknodeeff = null)
            },
            addHCStart: function () {
                null != this.hc_startnodeeff && (cc.log("addHCStart"), this.hc_startnodeeff = cc.instantiate(this.hc_startnode), this.node.addChild(this.hc_startnodeeff, 1))
            },
            removeHCStart: function () {
                null != this.hc_startnodeeff && (cc.log("removeHCStart"), this.hc_startnodeeff.destroy(), this.hc_startnodeeff = null)
            },
            addTouchEvent: function (o) {
                var s, c, l = this, u = 10;
                o.node.on("touchstart", function (e) {
                    1 == l.canTouch && (1 == playerManager.getObjData("animTutorial") && 0 == l.nodeId || (s = o.node.x, c = o.node.y))
                }, o), o.node.on("touchmove", function (e) {
                    if (1 == l.canTouch && (1 != playerManager.getObjData("animTutorial") || 0 != l.nodeId)) {
                        var t = e.getDeltaX(), a = e.getDeltaY();
                        if (o.node.x += t, o.node.y += a, 50 != o.node.getLocalZOrder()) {
                            var n = cc.v2(o.node.x, o.node.y), i = cc.v2(s, c), r = cc.pDistance(n, i);
                            u < r && l.node.setLocalZOrder(50)
                        } else o.node.getLocalZOrder()
                    }
                }, o), o.node.on("touchend", function (e) {
                    if (cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playButtonSound(), 50 != l.node.getLocalZOrder()) 255 != l.spItem.node.opacity && (l.spItem.node.opacity = 255, l.canTouch = !0, l.father.removeItemFromPaodao(l.itemId, l.nodeId)), l.node.setLocalZOrder(l.nodeId); else if (50 == l.node.getLocalZOrder()) {
                        var t = l.getDragPosId({x: o.node.x, y: o.node.y});
                        -2 == t && 1 != playerManager.getObjData("animTutorial") ? l.dragToRecycle() : -1 == t || (0 <= t && t <= 14 && 1 != playerManager.getObjData("animTutorial") || 0 == t && 1 == playerManager.getObjData("animTutorial") ? l.dragToOther(t, function () {
                            o.node.y = l.oriPos.y, o.node.x = l.oriPos.x, l.node.setLocalZOrder(l.nodeId)
                        }) : (o.node.y = l.oriPos.y, o.node.x = l.oriPos.x, l.node.setLocalZOrder(l.nodeId)))
                    }
                    l.removeHCStart()
                }, o)
            },
            setParam: function (e, t, a, n) {
                this.father = e, this.node.setLocalZOrder(this.nodeId), this.refreshSellMatrix(a), this.refreshposition(), null == this.oriPos && (this.oriPos = {}, this.oriPos.x = this.spItem.node.x, this.oriPos.y = this.spItem.node.y, this.oriPos.w = this.spItem.node.width, this.oriPos.h = this.spItem.node.height, this.oriOpacity = 150, this.oriScale = this.spItem.node.scale, this.isCanPut = !0, this.isBoxNode = !1, this.spItem.node.active = !1, this.spItem.node.opacity = 255, this.canTouch = !1, this.itemId = -1, this.maxTime = 0)
            },
            refreshposition: function () {
                var e, t = gameData.getPlayerLevel(playerManager.getObjData("PlayerExp"));
                4 == gameData.getPlayerLevelData(t.level).unlockland ? null != (e = [{x: -156, y: 104}, {
                    x: 156,
                    y: 104
                }, {x: -156, y: -172}, {
                    x: 156,
                    y: -172
                }][this.nodeId]) && (this.node.x = e.x, this.node.y = e.y) : null != (e = [{x: -222, y: 205}, {
                    x: 0,
                    y: 205
                }, {x: 222, y: 205}, {x: -222, y: 70}][this.nodeId]) && (this.node.x = e.x, this.node.y = e.y);
                this.expStarPos = {
                    x: -168 - this.node.x,
                    y: 598 - this.node.y
                }, this.dragMatrix = this.getDragMatrix(this.nodeId)
            },
            refreshSellMatrix: function (e) {
                this.laySellSize = e, this.laySellMatrix = {
                    bl: {
                        x: this.laySellSize.x - this.node.x - this.laySellSize.width / 2,
                        y: this.laySellSize.y - this.node.y - this.laySellSize.height / 2
                    },
                    tr: {
                        x: this.laySellSize.x - this.node.x + this.laySellSize.width / 2,
                        y: this.laySellSize.y - this.node.y + this.laySellSize.height / 2
                    }
                }
            },
            refreshBrand: function () {
                0 <= this.itemId ? (this.levellabel.string = this.itemId + 1 + "", this.brandNode.active = !0) : (this.levellabel.string = "", this.brandNode.active = !1)
            },
            refreshLand: function (e) {
                this.node.active = e
            },
            getDragMatrix: function (e) {
                var t = [], a = gameData.getPlayerLevel(playerManager.getObjData("PlayerExp"));
                if (4 == gameData.getPlayerLevelData(a.level).unlockland) for (var n = -1 * Math.floor(e / 2), i = e % 2 * -1, r = 0; r <= 3; r++) {
                    var o = Math.floor(r / 2), s = r % 2;
                    (c = {
                        index: r,
                        pos: {x: 0, y: 0},
                        bl: {x: 0, y: 0},
                        tr: {x: 0, y: 0}
                    }).pos.x = 312 * (i + s), c.pos.y = -276 * (n + o), c.bl.x = 312 * (i + s) - 208 / 1.5, c.bl.y = -276 * (n + o) - 118 / 1.5, c.tr.x = 312 * (i + s) + 208 / 1.5, c.tr.y = -276 * (n + o) + 118 / 1.5, t.push(c)
                } else for (n = -1 * Math.floor(e / 3), i = e % 3 * -1, r = 0; r <= 14; r++) {
                    var c;
                    o = Math.floor(r / 3), s = r % 3;
                    (c = {
                        index: r,
                        pos: {x: 0, y: 0},
                        bl: {x: 0, y: 0},
                        tr: {x: 0, y: 0}
                    }).pos.x = 222 * (i + s), c.pos.y = -135 * (n + o), c.bl.x = 222 * (i + s) - 181 / 1.5, c.bl.y = -135 * (n + o) - 103 / 1.5, c.tr.x = 222 * (i + s) + 181 / 1.5, c.tr.y = -135 * (n + o) + 103 / 1.5, t.push(c)
                }
                return t
            },
            getDragPosId: function (e) {
                var t = -100;
                if (this.father.refreshSellMatrix(), 1 == this.isInRect(e, this.laySellMatrix)) return -2;
                for (var a = this.dragMatrix.length - 1; 0 <= a; a--) {
                    var n = this.dragMatrix[a];
                    if (1 == this.isInRect(e, n)) {
                        t = n.index;
                        break
                    }
                }
                return t
            },
            isInRect: function (e, t) {
                return e.x >= t.bl.x && e.y >= t.bl.y && e.x <= t.tr.x && e.y <= t.tr.y
            },
            dragToRecycle: function () {
                var e = playerManager.getObjData("Panel" + this.nodeId).price;
                e = "-" == e.substring(0, 1) ? i.galaxyMut(e.substring(1, e.length - 1), .8) : i.galaxyMut(e, .85), playerManager.addNumData("Coin", e), cc.director.emit("updateCoin");
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    a = cc.instantiate(t.effgetcoinPre);
                a.parent = this.node, a.x = (this.laySellMatrix.bl.x + this.laySellMatrix.tr.x) / 2, a.y = (this.laySellMatrix.bl.y + this.laySellMatrix.tr.y) / 2, this.removeItemFromPanel()
            },
            dragToOther: function (e, t) {
                var a = this, n = this.father.getItemNodeByNodeId(e), i = playerManager.getObjData("Panel" + a.nodeId);
                if (-1 == n.itemId && 1 == n.node.active) {
                    n.moveItemToPanel(a.itemId, i.price);
                    var r = cc.sequence(cc.scaleTo(.03, 1 * this.oriScale, 1 * this.oriScale), cc.scaleTo(.03, 1.2 * this.oriScale, 1.2 * this.oriScale), cc.scaleTo(.05, 1 * this.oriScale, 1 * this.oriScale), cc.moveTo(.03, this.dragMatrix[e].pos.x, this.dragMatrix[e].pos.y), cc.callFunc(function () {
                        n.spItem.node.opacity = 255, a.itemId = -1, a.removeItemFromPanel()
                    }, a));
                    this.spItem.node.runAction(r)
                } else if (this.itemId == n.itemId && 255 == n.spItem.node.opacity && n.itemId != fish_data.length - 1 && e != a.nodeId && 1 == n.node.active && 0 == n.isBoxNode) {
                    var o = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    o.playMergeSound();
                    var s = fish_data[a.itemId + 1].price;
                    n.moveItemToPanel(a.itemId + 1, "-" + s), n.node.setLocalZOrder(50), this.conbinAnimation(e, this.itemId, function () {
                        n.spItem.node.opacity = 0, n.node.setLocalZOrder(n.nodeId), a.itemId = -1, a.removeItemFromPanel(), n.addHCOK(n.itemId, function () {
                            n.spItem.node.opacity = 255, n.removeHCOK(), 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial2")
                        })
                    }, function () {
                        n.getExp(), n.itemId > playerManager.getNumData("UnlockLevel") && (playerManager.addNumData("UnlockLevel", 1), o.showUnlockDialog(playerManager.getNumData("UnlockLevel")), o.playUnlockSound())
                    })
                } else if (this.itemId != n.itemId && 255 == n.spItem.node.opacity && e != a.nodeId && 1 == n.node.active && 0 == n.isBoxNode) {
                    var c = n.itemId;
                    i = playerManager.getObjData("Panel" + a.nodeId);
                    n.moveItemToPanel(a.itemId, i.price), n.spItem.node.opacity = 255, i = playerManager.getObjData("Panel" + e), this.moveItemToPanel(c, i.price), this.spItem.node.opacity = 255
                } else t && t()
            },
            checkMerge: function (e) {
                var t = this.father.getItemNodeByNodeId(e);
                playerManager.getObjData("Panel" + this.nodeId);
                if (-1 == t.itemId && 1 == t.node.active) ; else if (this.itemId == t.itemId && 255 == t.spItem.node.opacity && t.itemId != fish_data.length - 1 && e != this.nodeId && 1 == t.node.active) return t.addHCStart(), !0;
                return !1
            },
            conbinAnimation: function (e, t, a, n) {
                var i = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache"),
                    r = (this.father.getItemNodeByNodeId(e), new cc.Node("effectNode1")), o = r.addComponent(cc.Sprite);
                o.spriteFrame = i.getItemFrame(t), o.type = cc.Sprite.Type.SIMPLE, o.sizeMode = cc.Sprite.SizeMode.TRIMMED, r.scaleX = 1.2, r.scaleY = 1.2, r.x = this.dragMatrix[e].pos.x, r.y = this.spItem.node.y, r.anchorY = 0, this.node.addChild(r);
                var s = cc.sequence(cc.moveTo(.1, r.x - 100, r.y), cc.moveTo(.2, r.x, r.y), cc.removeSelf());
                r.runAction(s);
                var c = new cc.Node("effectNode2"), l = c.addComponent(cc.Sprite);
                l.spriteFrame = i.getItemFrame(t), l.type = cc.Sprite.Type.SIMPLE, l.sizeMode = cc.Sprite.SizeMode.TRIMMED, c.scaleX = 1.2, c.scaleY = 1.2, c.x = this.dragMatrix[e].pos.x, c.y = this.spItem.node.y, c.anchorY = 0, this.node.addChild(c);
                var u = cc.sequence(cc.callFunc(function () {
                    n && n()
                }, this), cc.moveTo(.1, c.x + 100, c.y), cc.moveTo(.2, c.x, c.y), cc.callFunc(function () {
                    a && a()
                }, this), cc.removeSelf());
                c.runAction(u)
            },
            addExpAnimation: function () {
                var e = cc.instantiate(this.expanimpre);
                e.parent = this.node;
                var t = cc.sequence(cc.moveTo(.4, this.expStarPos.x, this.expStarPos.y), cc.delayTime(1), cc.removeSelf());
                e.runAction(t)
            },
            loadItemToPanel: function (e) {
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.itemId = e, this.maxTime = fish_data[e].time, this.spItem.spriteFrame = t.getItemFrame(e), this.spItem.node.active = !0, this.refreshBrand(), this.isCanPut = !1, this.canTouch = !0;
                var a = gameData.getHousePanelPos(e);
                this.oriPos.x = a.posX, this.oriPos.y = a.posY, this.spItem.node.x = this.oriPos.x, this.spItem.node.y = this.oriPos.y, this.node.setLocalZOrder(this.nodeId)
            },
            addItemToPanel: function (n, e, i, r) {
                var o = this, s = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache"),
                    c = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.itemId = n, this.maxTime = fish_data[n].time, this.spItem.spriteFrame = s.getItemFrame(n), this.spItem.node.active = !0, this.isCanPut = !1, this.canTouch = !0;
                var t = gameData.getHousePanelPos(n);
                this.oriPos.x = t.posX, this.oriPos.y = t.posY, this.spItem.node.x = this.father.btnBuy.node.x - this.node.x, this.spItem.node.y = this.father.btnBuy.node.y - this.node.y, this.node.setLocalZOrder(50);
                var a = cc.sequence(cc.moveTo(.15, this.oriPos.x, this.oriPos.y), cc.callFunc(function () {
                    o.refreshBrand();
                    var e = playerManager.getNumData("UnlockLevel");
                    if ("buy" == i && 4 <= e) {
                        var t = 100 * Math.random();
                        cc.log("buy random" + t);
                        var a = t <= globalManager.UpgradeBuy;
                        1 == r ? c.showUpgradeCarPopUp(n, 2, function (e) {
                            o.itemId = e, o.spItem.spriteFrame = s.getItemFrame(e), playerManager.setObjData("Panel" + o.nodeId, {
                                level: e,
                                state: 0,
                                price: "0"
                            }), o.addUpgradeEffect(), c.scriptGamePaodao.refreshCoin(), o.refreshBrand()
                        }) : a && c.showUpgradeCarPopUp(n, 1, function (e) {
                            o.itemId = e, o.spItem.spriteFrame = s.getItemFrame(e), playerManager.setObjData("Panel" + o.nodeId, {
                                level: e,
                                state: 0,
                                price: "0"
                            }), o.addUpgradeEffect(), c.scriptGamePaodao.refreshCoin(), o.refreshBrand()
                        })
                    }
                }, o), cc.scaleTo(.1, 1 * this.oriScale, 1 * this.oriScale), cc.scaleTo(.1, 1.2 * this.oriScale, 1.2 * this.oriScale), cc.scaleTo(.2, 1 * this.oriScale, 1 * this.oriScale), cc.callFunc(function () {
                    o.node.setLocalZOrder(o.nodeId)
                }, o));
                this.spItem.node.runAction(a), playerManager.setObjData("Panel" + o.nodeId, {
                    level: n,
                    state: 0,
                    price: "" + e
                })
            },
            addItemToPanelFromBox: function (a, t) {
                var n = this, i = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.itemId = a, this.spItem.spriteFrame = i.getItemFrame(a), this.spItem.node.active = !1, this.isCanPut = !1, this.isBoxNode = !0, this.canTouch = !0;
                var e = gameData.getHousePanelPos(a);
                this.oriPos.x = e.posX, this.oriPos.y = e.posY, this.spItem.node.x = this.oriPos.x, this.spItem.node.y = this.oriPos.y, this.node.setLocalZOrder(this.nodeId);
                var r = function () {
                    n.spItem.node.active = !0;
                    var e = playerManager.getNumData("UnlockLevel");
                    if (n.refreshBrand(), n.isBoxNode = !1, 4 <= e) {
                        var t = 100 * Math.random();
                        if (cc.log("box random" + t), t <= globalManager.UpgradeBox) cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showUpgradeCarPopUp(a, 2, function (e) {
                            n.itemId = e, n.spItem.spriteFrame = i.getItemFrame(e), playerManager.setObjData("Panel" + n.nodeId, {
                                level: e,
                                state: 0,
                                price: "0"
                            }), n.addUpgradeEffect(), n.refreshBrand()
                        })
                    }
                }, o = cc.instantiate(this.startnode);
                o.parent = this.node, o.y = 40, o.getComponent("HZ_start").setData(t, function () {
                    if (o.removeFromParent(!0), 1 == playerManager.getObjData("animTutorial")) r(); else {
                        var e = cc.instantiate(n.opennode);
                        e.parent = n.node, e.y = 40, e.getComponent("HZ_open").setData(t, function () {
                            e.removeFromParent(!0), r()
                        })
                    }
                }), playerManager.setObjData("Panel" + n.nodeId, {level: a, state: 0, price: "0"})
            },
            moveItemToPanel: function (e, t) {
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.itemId = e, this.maxTime = fish_data[e].time, this.spItem.spriteFrame = a.getItemFrame(e), this.spItem.node.active = !0, this.refreshBrand(), this.isCanPut = !1, this.canTouch = !0, this.spItem.node.opacity = this.oriOpacity;
                var n = gameData.getHousePanelPos(e);
                this.oriPos.x = n.posX, this.oriPos.y = n.posY, this.spItem.node.x = this.oriPos.x, this.spItem.node.y = this.oriPos.y, this.node.setLocalZOrder(this.nodeId), playerManager.setObjData("Panel" + this.nodeId, {
                    level: e,
                    state: 0,
                    price: "" + t
                })
            },
            removeItemFromPanel: function () {
                this.spItem.node.active = !1, this.canTouch = !1, this.spItem.node.opacity = 255, this.isCanPut = !0, this.itemId = -1, this.maxTime = 0, this.spItem.node.x = 0, this.spItem.node.y = 0, this.node.setLocalZOrder(this.nodeId), playerManager.setObjData("Panel" + this.nodeId, {
                    level: -1,
                    state: 0,
                    price: "0"
                }), this.refreshBrand()
            },
            getExp: function () {
                var e = fish_data[this.itemId].combiexp,
                    t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (0 <= this.itemId && 0 < i.cmpBigInt(e, 0)) {
                    var a = gameData.getPlayerLevel(playerManager.getObjData("PlayerExp")).level;
                    playerManager.addNumData("PlayerExp", e);
                    var n = gameData.getPlayerLevel(playerManager.getObjData("PlayerExp")).level;
                    a < n && t.showLevelupReward(n), cc.director.emit("updateExp"), this.father.refreshLand(), this.addExpAnimation()
                }
            },
            addUpgradeEffect: function () {
            },
            canPut: function () {
                return this.isCanPut && 1 == this.node.active
            }
        }), cc._RF.pop()
    }, {GameItemNodeCache: "GameItemNodeCache", "number-util": "number-util"}],
    GameItemPaodao: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "0078c+hSQ5GuL31PpZH7MSC", "GameItemPaodao");
        cc.Class({
            extends: cc.Component, properties: {itemFrame: [cc.SpriteFrame]}, onLoad: function () {
                var e = this;
                this.beginPos = {x: -290, y: 242}, this.coinPos = {
                    x: 290,
                    y: 6
                }, this.curState = 0, this.schedule(function () {
                    e.checkAcelTime()
                }, 1)
            }, onDestroy: function () {
            }, update: function (e) {
            }, checkAcelTime: function (e) {
                if (null != this.itemId) if (playerManager.getNumData("AcelTime") <= 0 && 1 == this.curState) {
                    var t = 2 / fish_data[this.itemId].time;
                    this.getComponent(cc.Animation).getAnimationState("fish_swim_anim").speed = t, this.curState = 0
                } else if (0 < playerManager.getNumData("AcelTime") && 0 == this.curState) {
                    t = 2 / fish_data[this.itemId].time;
                    t *= 2, this.curState = 1, this.getComponent(cc.Animation).getAnimationState("fish_swim_anim").speed = t
                }
            }, setParam: function (e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                this.beginPos = {x: -290, y: 242}, this.coinPos = {
                    x: 290,
                    y: 6
                }, this.father = e, this.itemId = t, this.node.x = this.beginPos.x, this.node.y = this.beginPos.y, this.node.rotation = 180, this.getComponent(cc.Sprite).spriteFrame = this.itemFrame[t];
                var n = 2 / fish_data[t].time;
                0 < playerManager.getNumData("AcelTime") && (cc.log("speed up"), n *= 2, this.curState = 1);
                var i = this.getComponent(cc.Animation);
                i.getAnimationState("fish_swim_anim").speed = n, i.play("fish_swim_anim", a)
            }, getCoin: function () {
            }
        }), cc._RF.pop()
    }, {}],
    GamePaodao: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "b9a2d6X7IdI4JrR8yrC0rRi", "GamePaodao");
        var n = e("GameItemNode"), f = e("number-util"), m = logCenter;
        cc.Class({
            extends: cc.Component,
            properties: {
                btnSelect: cc.Button,
                btnBuy: cc.Button,
                labelCoin: cc.Label,
                labelBuyCoin: cc.Label,
                labelBuyLevel: cc.Label,
                labelProduct: cc.Label,
                layoutSell: cc.Layout,
                scriptGameItemNode: [n],
                effdoublecoinPre: cc.Prefab,
                spOh: cc.Sprite
            },
            onLoad: function () {
                console.log("11",this.node)
                var e = this, a = this, t = cc.view.getFrameSize(), n = 1334 * t.width / 750 / t.height;
                this.node.scale = 1 < n ? 1 : n, this.customEvent = {
                    updateCoin: "refreshCoin",
                    effectCoin: "playCoinEffect"
                };
                var i = function () {
                    var t = e.customEvent[r];
                    cc.director.on(r, function (e) {
                        a[t]()
                    })
                };
                for (var r in this.customEvent) i();
                this.itemPrefabArr = [], this.laySellSize = {}, this.isCoinEffectPlay = !1, this.STATE = {
                    Ready: 0,
                    BuyItem: 1
                }, this.state = this.STATE.Ready;
                for (var o = this.scriptGameItemNode.length - 1; 0 <= o; o--) this.scriptGameItemNode[o] = this.node.getChildByName("bgSprite" + (o + 1)).getComponent("GameItemNode"), this.scriptGameItemNode[o].setParam(this, this.layPutSize, this.laySellSize, o);
                this.refreshSellMatrix(), this.refreshCoin(), this.refreshLand(), this.state = this.STATE.Ready, cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache").loadRes(function () {
                    a.loadItemNode(), a.state = a.STATE.Ready
                }), this.curState = 0, this.schedule(function () {
                    a.checkAcelTime(), a.checkCanFree()
                }, 1)
            },
            onDestroy: function () {
                for (var e in this.customEvent) cc.director.off(e)
            },
            update: function (e) {
                if (0 < globalManager.GoldenBox && 1 != this.isPoolFull(!0)) {
                    var t = playerManager.getNumData("UnlockLevel"), a = gameData.getBoxLevel(t) + 1;
                    this.boxItem(a, 1)
                }
            },
            checkAcelTime: function (e) {
                playerManager.getNumData("AcelTime") <= 0 && 1 == this.curState ? (this.curState = 0, this.removeDoubleCoinEffect()) : 0 < playerManager.getNumData("AcelTime") && 0 == this.curState && (this.curState = 1, this.playDoubleCoinEffect())
            },
            checkCanFree: function () {
                playerManager.getNumData("UnlockLevel") < 7 ? this.spOh.node.active = !1 : ((new Date).getTime() - playerManager.getNumData("FreeHouseTime")) / 1e3 < globalManager.storeFreeHouseCD ? this.spOh.node.active = !1 : this.spOh.node.active = !0
            },
            refreshSellMatrix: function () {
                this.laySellSize.x = this.layoutSell.node.x, this.laySellSize.y = this.layoutSell.node.y, this.laySellSize.width = this.layoutSell.node.width, this.laySellSize.height = this.layoutSell.node.height;
                for (var e = this.scriptGameItemNode.length - 1; 0 <= e; e--) this.scriptGameItemNode[e].refreshSellMatrix(this.laySellSize)
            },
            refreshLand: function () {
                for (var e = gameData.getPlayerLevel(playerManager.getObjData("PlayerExp")), t = gameData.getPlayerLevelData(e.level), a = this.scriptGameItemNode.length - 1; 0 <= a; a--) a <= t.unlockland - 1 ? this.scriptGameItemNode[a].refreshLand(!0) : this.scriptGameItemNode[a].refreshLand(!1), this.scriptGameItemNode[a].refreshposition()
            },
            refreshCoin: function () {
                var e = playerManager.getNumData("UnlockLevel") - 7;
                e = 0 <= e ? e : 0, cc.log("unlockFishbegin=" + e);
                var t = playerManager.getNumData("UnlockLevel") - 4;
                t = 0 <= t ? t : 0, cc.log("unlockFish=" + t), this.labelCoin.string = f.unit_format(playerManager.getObjData("Coin"));
                for (var a = playerManager.getObjData("Price" + e), n = e, i = Math.pow(2, n), r = f.galaxyDiv(a, i), o = e + 1; o <= t; o++) {
                    a = playerManager.getObjData("Price" + o), i = Math.pow(2, o);
                    var s = f.galaxyDiv(a, i);
                    f.cmpBigInt(s, r) < 0 && (r = s, n = o)
                }
                t = n, this.labelBuyCoin.string = f.unit_format(playerManager.getObjData("Price" + t)), this.labelBuyLevel.string = "LV " + (t + 1);
                for (var c = 0, l = this.scriptGameItemNode.length - 1; 0 <= l; l--) {
                    var u = this.scriptGameItemNode[l].getComponent("GameItemNode");
                    0 <= u.itemId && (c = f.galaxyAdd(c, fish_data[u.itemId].coinsec))
                }
                0 < playerManager.getNumData("AcelTime") && (c = f.galaxyMut(c, 2)), this.labelProduct.string = f.unit_format(c) + " /sec"
            },
            playCoinEffect: function () {
                this.labelCoin.node.getComponent(cc.Animation).play("house_addcoin1", 0)
            },
            playDoubleCoinEffect: function () {
                this.removeDoubleCoinEffect(), this.effdoublecoin = cc.instantiate(this.effdoublecoinPre), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").node.addChild(this.effdoublecoin, 120)
            },
            removeDoubleCoinEffect: function () {
                null != this.effdoublecoin && (this.effdoublecoin.removeFromParent(!0), this.effdoublecoin = null)
            },
            refreshPaodaoCount: function () {
                for (var e = 0, t = this.itemPrefabArr.length - 1; 0 <= t; t--) {
                    var a = this.itemPrefabArr[t].getComponent("GameItemPaodao");
                    e = f.galaxyAdd(e, fish_data[a.itemId].coinsec)
                }
                0 < playerManager.getNumData("AcelTime") && (e = f.galaxyAdd(e, 2)), this.labelProduct.string = f.unit_format(e) + " /sec"
            },
            loadItemNode: function () {
                for (var e = 0; e <= 14; e++) {
                    var t = playerManager.getObjData("Panel" + e), a = this.scriptGameItemNode[e];
                    0 <= t.level && a.loadItemToPanel(t.level)
                }
            },
            removeItemFromPaodao: function (e, t) {
            },
            getItemNodeByNodeId: function (e) {
                return this.scriptGameItemNode[e]
            },
            catchFish: function (e) {
                if (e < 0 || this.isPoolFull() || this.state == this.STATE.BuyItem) return !1;
                this.state = this.STATE.BuyItem, cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playPurchaseSound();
                for (var t = 0; t < this.scriptGameItemNode.length; t++) {
                    var a = this.scriptGameItemNode[t];
                    if (1 == a.canPut()) {
                        var n = playerManager.getObjData("Price" + e);
                        a.addItemToPanel(e, n, "catchFish");
                        break
                    }
                }
                return this.state = this.STATE.Ready, !0
            },
            onButtonBuy: function (e, t) {
                if (this.isPoolFull() || this.state == this.STATE.BuyItem) return !1;
                this.state = this.STATE.BuyItem;
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                a.playPurchaseSound(), m.quick_purchase_click_event();
                for (var n = 0; n < this.scriptGameItemNode.length; n++) {
                    var i = this.scriptGameItemNode[n];
                    if (1 == i.canPut()) {
                        var r = playerManager.getNumData("UnlockLevel") - 7;
                        r = 0 <= r ? r : 0, cc.log("unlockFishbegin=" + r);
                        var o = playerManager.getNumData("UnlockLevel") - 4;
                        o = 0 <= o ? o : 0, cc.log("unlockFish=" + o);
                        for (var s = playerManager.getObjData("Price" + r), c = r, l = Math.pow(2, c), u = f.galaxyDiv(s, l), d = r + 1; d <= o; d++) {
                            s = playerManager.getObjData("Price" + d), l = Math.pow(2, d);
                            var h = f.galaxyDiv(s, l);
                            f.cmpBigInt(h, u) < 0 && (u = h, c = d)
                        }
                        o = c;
                        var g = fish_data[o], p = playerManager.getObjData("Price" + o);
                        cc.log("fishprice=" + p), 1 == playerManager.coinEnough(p) && (playerManager.setObjData("Coin", f.galaxySub(playerManager.getObjData("Coin"), p)), i.addItemToPanel(o, p, "buy", g.price == p), p = f.galaxyMut(p, 1 + g.rise), playerManager.setNumData("Price" + o, p), null != a.fishdialog && a.fishdialog.getComponent("fishlist-dialog").refreshCoin(playerManager.getObjData("Coin")), this.refreshCoin());
                        break
                    }
                }
                return this.state = this.STATE.Ready, !0
            },
            boxItem: function (e, t) {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                for (var a = 0; a < this.scriptGameItemNode.length; a++) {
                    var n = this.scriptGameItemNode[a];
                    if (1 == n.canPut()) {
                        cc.log("box put on panel" + (a + 1) + " box left:" + globalManager.GoldenBox), n.addItemToPanelFromBox(e, t), 0 < globalManager.GoldenBox && globalManager.GoldenBox--;
                        break
                    }
                }
            },
            buyItem: function (e, t) {
                for (var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), n = 0; n < this.scriptGameItemNode.length; n++) {
                    var i = this.scriptGameItemNode[n];
                    if (1 == i.canPut()) {
                        var r = playerManager.getObjData("Price" + e);
                        1 == playerManager.coinEnough(r) && (playerManager.setObjData("Coin", f.galaxySub(playerManager.getObjData("Coin"), r)), i.addItemToPanel(e, r, "buy", t), null != a.fishdialog && a.fishdialog.getComponent("fishlist-dialog").refreshCoin(playerManager.getObjData("Coin")));
                        break
                    }
                }
            },
            putItem: function (e) {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                for (var t = 0; t < this.scriptGameItemNode.length; t++) {
                    var a = this.scriptGameItemNode[t];
                    if (1 == a.canPut()) {
                        var n = playerManager.getObjData("Price" + e);
                        a.addItemToPanel(e, n);
                        break
                    }
                }
            },
            isPoolFull: function () {
                for (var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0], t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), a = !0, n = 0; n < this.scriptGameItemNode.length; n++) {
                    if (1 == this.scriptGameItemNode[n].canPut()) {
                        a = !1;
                        break
                    }
                }
                return 1 == a && 0 == e && t.showToast("土地不足"), a
            },
            isRiverFull: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                return 10 <= this.itemPrefabArr.length && (e.showToast("The river is full"), !0)
            },
            addCoinInPaodao: function (e) {
            }
        }), cc._RF.pop()
    }, {GameItemNode: "GameItemNode",  "number-util": "number-util"}],
    GameScene: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a34c5fSLgFJYaRfVBIvePAa", "GameScene");
        var n = e("GamePaodao"), i = e("audioManager"), l = e("instant-util"), u = e("number-util"),
            r = logCenter, o = (e("WidgetUtil"), "sfx_button"), s = "sfx_merge", c = "sfx_purchase",
            d = "sfx_race_start", h = "sfx_unlock";
        cc.Class({
            extends: cc.Component, properties: {
                btnBack: cc.Button,
                btnStore: cc.Button,
                btnShare: cc.Button,
                btnTutorial: cc.Button,
                btnMoregame: cc.Button,
                btnSpin: cc.Button,
                btnBank: cc.Button,
                bgShare: cc.Node,
                rewardTime: cc.Node,
                toolNode: cc.Node,
                effUFONode: cc.Node,
                labelZuan: cc.Label,
                labelCD: cc.Label,
                giftPoint: cc.Node,
                coinAddNode: cc.Node,
                coinAddAnim: cc.Animation,
                spinAnim: cc.Animation,
                catchFishLayout: cc.Node,
                fishSprite: cc.Sprite,
                spinredSp: cc.Sprite,
                dailyredSp: cc.Sprite,
                skinSp: cc.Sprite,
                prefabListDialog: cc.Prefab,
                noCoinDlg: cc.Prefab,
                alertDlg: cc.Prefab,
                notification: cc.Prefab,
                unlockDlg: cc.Prefab,
                inviteFriendsDlg: cc.Prefab,
                speedUpDlg: cc.Prefab,
                tutotialPre: cc.Prefab,
                offcoinPre: cc.Prefab,
                bonustimePre: cc.Prefab,
                carUpgradePre: cc.Prefab,
                levelupRewardPre: cc.Prefab,
                luckyspinPre: cc.Prefab,
                UFOrewardPre: cc.Prefab,
                bombPre: cc.Prefab,
                dailycheckinPre: cc.Prefab,
                tutorialPre: [cc.Prefab],
                tutorial3Pre: [cc.Prefab],
                tutorial5Pre: [cc.Prefab],
                rewardCoinsPre: cc.Prefab,
                effgetcoinPre: cc.Prefab,
                scriptGamePaodao: n,
                audioManager: i,
                customSharePre: cc.Prefab,
                customSharePre1: cc.Prefab,
                moregameDlg: cc.Prefab,
                recommendPre: cc.Prefab,
                _dailyData: null
            }, onLoad: function () {
                console.log("555555", this.node);
                uiManager.seekNodeWithName("backButton", this.node).active = false;
                // uiManager.seekNodeWithName("user-center-floatball", this.node).active = false;
                var e = this, a = this;
                // l.getPlayerInfo(function (e) {
                //     var t = "";
                //     t = fish_data.length - 1 == playerManager.getNumData("UnlockLevel") ? e.playerName + " has the biggest House! Catch up with " + e.playerName + "!" : e.playerName + " almost has House #" + (playerManager.getNumData("UnlockLevel") + 2) + "! Unlock it first!", l.updateContext(function () {
                //     }, function () {
                //     }, {type: "endGame"}, t, null, globalManager.updateStrategy.LAST, !0), a.loadTestBtn(e)
                // }),
                r.game_page_event(), this.shareAnim = this.bgShare.getComponent(cc.Animation), this.shareAnim.play(), this.btnMoregame.node.active = !1, this.updateCDTimeWithOffline(["AcelTimeCD", "AcelTime"]), 0 < playerManager.getNumData("AcelTimeCD") && (a.setShareBtnEnable(!1), a.rewardTime.getComponent("count-down-node").setData(playerManager.getNumData("AcelTimeCD"), function (e) {
                    playerManager.setNumData("AcelTimeCD", e), 0 == e && a.setShareBtnEnable(!0)
                })), this.labelCD.node.active = !1, this.check2XCD(), this.checkUnlockStatus(), 1 == playerManager.getObjData("animTutorial") && (this.tutorialCount = 0, this.startTutorial(this.tutorialCount)), this.customEvent = {
                    game_eventshow: "getOfflineCoin",
                    catch_fish: "setCatchFishIcon",
                    hide_catch_fish: "hideCatchFishIcon"
                };
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t();
                this.getOfflineCoin(), this.getMessageReward(), this.getShareLinkReward(), this.loadUserCenter(), playerManager.getNumData("UnlockLevel"), this.schedule(function () {
                    r.invite_friends_info_start_event(), server_util.getActivityList(function (e) {
                        r.invite_friends_info_success_event(), e && (cc.sys.localStorage.setItem("dailyData1", JSON.stringify(e)), a.setGiftPoint(e), a.setCatchFishIcon(e))
                    }.bind(this), function (e) {
                        a.giftPoint.active = !1, e.code && r.invite_friends_info_err_event(e.code)
                    }.bind(this))
                }, 300, null, .1), server_util.getGameList("1", function (e) {
                    globalManager.gameListInGame = e.list
                }), this.offlineClock = 0, this.offlineCD = 1, globalManager.firstInGame = !1, this.checkLuckySpin(), this.checkDaily(), this.playBGMusic(), this.overAddCoinEffect(), this.coinAddNode.setLocalZOrder(101)
            }, update: function (e) {
                this.offlineClock += e, this.offlineClock >= this.offlineCD && (playerManager.setObjData("lastOffline", Math.floor((new Date).getTime() / 1e3)), this.offlineClock = 0)
            }, onDestroy: function () {
                for (var e in cc.log("onDestory"), this.customEvent) cc.director.off(e);
                this.stopBGMusic(), u.playerdataCountDownClear("AcelTime"), playerManager.setObjData("lastOffline", Math.floor((new Date).getTime() / 1e3)), /*l.setLeaderboardScore(playerManager.getScore()),*/ server_util.setLeaderboardScore(playerManager.getScore())
            }, check2XCD: function () {
                var t = this;
                0 < playerManager.getNumData("AcelTime") ? (t.labelCD.node.active = !0, t.labelCD.string = "coins 2x " + u.time_format(playerManager.getNumData("AcelTime")), u.playerdataCountDown("AcelTime", 1, function (e) {
                    t.labelCD && (t.labelCD.string = "coins 2x " + u.time_format(e)), 0 == e && t.labelCD && (t.labelCD.node.active = !1)
                })) : t.labelCD.node.active = !1
            }, checkUnlockStatus: function () {
                var e = gameData.getUnlockStatus("Accelarate");
                this.btnShare.node.active = e, 1 == playerManager.getObjData("animTutorial3") && 1 == e && (this.tutorial3Count = 0, this.startTutorial3(this.tutorial3Count)), e = gameData.getUnlockStatus("Spin"), this.btnSpin.node.active = e, 1 == playerManager.getObjData("animTutorial5") && 1 == e && (this.tutorial5Count = 0, this.startTutorial5(this.tutorial5Count)), e = gameData.getUnlockStatus("UFO"), this.effUFONode.getComponent("effectUFO").setUFOEnable(e)
            }, checkLuckySpin: function () {
                u.isOneDay(playerManager.getNumData("getFreeTime"), Date.parse(new Date)) || (playerManager.addNumData("Ticket", 5), playerManager.setNumData("TicketAdsTimes", 3), playerManager.setNumData("getFreeTime", Date.parse(new Date))), this.spinredSp.node.active = 0 < playerManager.getNumData("Ticket"), this.updateLuckySpin()
            }, checkDaily: function () {
                1 == playerManager.getObjData("animTutorial5") ? this.btnBank.node.active = !1 : this.btnBank.node.active = !0, 1 == playerManager.getNumData("dailyRewardCan") && 0 < playerManager.getNumData("BankTimeCDCol") ? this.dailyredSp.node.active = !1 : this.dailyredSp.node.active = !0
            }, updateLuckySpin: function () {
                var e = playerManager.getNumData("Ticket");
                playerManager.getNumData("TicketAdsTimes") <= 0 && e <= 0 ? this.spinAnim.stop() : this.spinAnim.play("more_btn_anim", 0)
            }, updateCDTimeWithOffline: function (e) {
                var t = Math.floor((new Date).getTime() / 1e3), a = playerManager.getObjData("lastOffline");
                if (0 < t - a && -1 != a) {
                    var n = t - a;
                    for (var i in e) playerManager.setNumData(e[i], playerManager.getNumData(e[i]) - n), playerManager.getNumData(e[i]) < 0 && playerManager.setNumData(e[i], 0)
                }
            }, startAddCoinEffect: function () {
                this.coinAddNode.active = !0, this.coinAddAnim.play("coin-ef", 0)
            }, overAddCoinEffect: function () {
                this.coinAddNode.active = !1
            }, getOfflineCoin: function () {
                var e = Math.floor((new Date).getTime() / 1e3), t = playerManager.getObjData("lastOffline");
                if (0 < e - t && -1 != t) {
                    for (var a = 10800 < e - t ? 10800 : e - t, n = 0, i = 0; i <= 14; i++) {
                        var r = playerManager.getObjData("Panel" + i);
                        0 <= r.level && (n = u.galaxyAdd(n, fish_data[r.level].coinsec))
                    }
                    n = u.galaxyMut(n, .5), 0 < u.cmpBigInt(n, 0) && 60 < a ? (null != this.offcoin_dialog && this.offcoin_dialog.getComponent("getoffcoin_dlg").closeDialog(), this.offcoin_dialog = cc.instantiate(this.offcoinPre), this.offcoin_dialog.parent = this.node, 1 == playerManager.getObjData("animTutorial") || 1 == playerManager.getObjData("animTutorial3") || 1 == playerManager.getObjData("animTutorial5") ? this.offcoin_dialog.setLocalZOrder(101) : this.offcoin_dialog.setLocalZOrder(98)) : 0 < u.cmpBigInt(n, 0) && (n = u.galaxyMut(n, a), playerManager.addNumData("Coin", n), cc.director.emit("updateCoin"), 0 == playerManager.getNumData("dailyRewardCan") && gameData.getUnlockStatus("DailyBonus") && this.showDailyCheckinPopUp(null, 1))
                }
            }, onButtonBack: function (e, t) {
                cc.director.loadScene("LoginScene")
            }, onButtonTutorial: function (e, t) {
                this.showTutorialDialog()
            }, onButtonBomb: function (e, t) {
                this.showBombDialog()
            }, onButtonStore: function (e, t) {
            }, onButtonWatchVideo: function () {
                var t = this;
                if (r.speed_up_click_event(), 1 == playerManager.getObjData("animTutorial3")) return t.showSpeedUpDialog(), t.setShareBtnEnable(!1), playerManager.addNumData("AcelTime", globalManager.AccelarateTime), t.check2XCD(), t.rewardTime.getComponent("count-down-node").setData(globalManager.AccelarateCD, function (e) {
                    playerManager.setNumData("AcelTimeCD", e), 0 == e && t.setShareBtnEnable(!0)
                }), t.closeBonusTimeDlg(), void cc.director.emit("nextTutorial6");
                globalManager.canShare(globalManager.shareType.speedUp, {
                    level: playerManager.getNumData("UnlockLevel"),
                    isFirst: globalManager.isNewPlayer
                }) ? this.onButtonShare() : (r.watch_video_event("speed_up"), r.watch_video_speed_up_event("watch_video_speed_up"), l.showRewardAd(function () {
                    cc.log("showAd success"), t.setUserCenterEvent("ad"), r.watch_video_success_event("speed_up"), r.watch_video_speed_up_success_event("watch_video_speed_up_success"), t.showSpeedUpDialog(), t.setShareBtnEnable(!1), playerManager.addNumData("AcelTime", globalManager.AccelarateTime), t.check2XCD(), t.rewardTime.getComponent("count-down-node").setData(globalManager.AccelarateCD, function (e) {
                        playerManager.setNumData("AcelTimeCD", e), 0 == e && t.setShareBtnEnable(!0)
                    }), t.closeBonusTimeDlg()
                }, function () {
                    cc.log("RewardAd load err"), t.showSpeedUpDialog(), t.setShareBtnEnable(!1), playerManager.addNumData("AcelTime", globalManager.AccelarateTime1), t.check2XCD(), t.rewardTime.getComponent("count-down-node").setData(globalManager.AccelarateCD, function (e) {
                        playerManager.setNumData("AcelTimeCD", e), 0 == e && t.setShareBtnEnable(!0)
                    }), t.closeBonusTimeDlg(), t.showToast("No available Ad, 30s bonus time for free.")
                }))
            }, onButtonShare: function (e, t) {
                var a = this, n = {type: globalManager.shareType.speedUp, inviter: l.getPlayerID(), rewards: "1"},
                    i = globalManager.getShareConfig(globalManager.shareType.speedUp);
                r.game_share_event(), r.share_speed_up_event("share_speed_up"), l.chooseContext(function (e) {
                    a.setUserCenterEvent("share"), r.game_share_success_event(), r.share_speed_up_success_event("share_speed_up_success"), a.showSpeedUpDialog(), a.setShareBtnEnable(!1), playerManager.addNumData("AcelTime", globalManager.AccelarateTime), a.check2XCD(), a.rewardTime.getComponent("count-down-node").setData(globalManager.AccelarateCD, function (e) {
                        playerManager.setNumData("AcelTimeCD", e), 0 == e && a.setShareBtnEnable(!0)
                    }), a.closeBonusTimeDlg()
                }, function (e, t) {
                    r.game_share_fail_event(e), a.showToast(t)
                }.bind(a), n, i.text, i.img)
            }, setShareBtnEnable: function (e) {
                e ? (this.bgShare.opacity = 255, this.btnShare.interactable = !0, this.shareAnim.play()) : (this.bgShare.opacity = 167, this.btnShare.interactable = !1, this.shareAnim.stop())
            }, onButtonListDialog: function (e, t) {
                r.shop_page_click_event(), 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial3"), this.fishdialog ? (this.fishdialog.parent = this.node, this.fishdialog.getComponent("fishlist-dialog").refreshListData(), this.fishdialog.active = !0) : (this.fishdialog = cc.instantiate(this.prefabListDialog), this.fishdialog.parent = this.node), 1 == playerManager.getObjData("animTutorial") ? this.fishdialog.setLocalZOrder(98) : this.fishdialog.setLocalZOrder(100)
            }, showToast: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2.5;
                e && (this.toast && this.toast.removeFromParent(), this.toast = cc.instantiate(this.alertDlg), this.toast.getComponent("toast").setData(e), this.toast.parent = this.node, this.toast.runAction(cc.sequence(cc.delayTime(t), cc.removeSelf(!0))), this.toast.setLocalZOrder(101))
            }, showNotification: function (e, t) {
                var a = this;
                this.notificationDlg && this.notificationDlg.getComponent("notification").closedlg(), this.notificationDlg = cc.instantiate(this.notification), this.notificationDlg.getComponent("notification").setData(e, t, function () {
                    a.notificationDlg = null
                }), this.notificationDlg.parent = this.node, this.notificationDlg.setLocalZOrder(100)
            }, showTutorialDialog: function () {
                var e = cc.instantiate(this.tutotialPre);
                e.parent = this.node, e.setLocalZOrder(100)
            }, showNoCoinDialog: function () {
                if (null == this.NoCoinPopUp) {
                    var e = cc.instantiate(this.noCoinDlg);
                    e.parent = this.node, e.setLocalZOrder(100), this.NoCoinPopUp = e
                }
            }, closeNoCoinDialog: function () {
                null != this.NoCoinPopUp && (this.NoCoinPopUp.destroy(), this.NoCoinPopUp = null)
            }, showUnlockDialog: function (e) {
                var t = cc.instantiate(this.unlockDlg);
                t.getComponent("unlock-dialog").setData(e), t.parent = this.node, t.setLocalZOrder(100), r.achieve_level_event(e)
            }, showInviteFriendsDialog: function () {
            }, showSpeedUpDialog: function () {
                var e = cc.instantiate(this.speedUpDlg);
                e.parent = this.node, e.setLocalZOrder(100), e.runAction(cc.sequence(cc.delayTime(1), cc.removeSelf(!0)))
            }, showBombDialog: function (e) {
                null == this.BombPopUp && (this.BombPopUp = cc.instantiate(this.bombPre), this.BombPopUp.parent = this.node, this.BombPopUp.setLocalZOrder(100))
            }, closeBombDialog: function () {
                null != this.BombPopUp && (this.BombPopUp.destroy(), this.BombPopUp = null)
            }, showLevelupReward: function (e) {
                this.checkUnlockStatus(), r.achieve_character_level_event(e), null == this.leveluprewardPopUp && (this.leveluprewardPopUp = cc.instantiate(this.levelupRewardPre), this.leveluprewardPopUp.parent = this.node, this.leveluprewardPopUp.setLocalZOrder(100))
            }, closeLevelupReward: function () {
                null != this.leveluprewardPopUp && (this.leveluprewardPopUp.destroy(), this.leveluprewardPopUp = null)
            }, startTutorial: function (e) {
                cc.log("GameScene startTutorial:" + e);
                var t = cc.instantiate(this.tutorialPre[e]);
                this.node.addChild(t), t.setLocalZOrder(99)
            }, nextTutorial: function () {
                this.tutorialCount++, this.tutorialCount < this.tutorialPre.length && this.startTutorial(this.tutorialCount)
            }, startTutorial3: function (e) {
                cc.log("GameScene startTutorial3:" + e);
                var t = cc.instantiate(this.tutorial3Pre[e]);
                this.node.addChild(t), t.setLocalZOrder(99)
            }, nextTutorial3: function () {
                this.tutorial3Count++, this.tutorial3Count < this.tutorial3Pre.length && this.startTutorial3(this.tutorial3Count)
            }, startTutorial5: function (e) {
                cc.log("GameScene startTutorial5:" + e);
                var t = cc.instantiate(this.tutorial5Pre[e]);
                this.node.addChild(t), t.setLocalZOrder(99)
            }, nextTutorial5: function () {
                this.tutorial5Count++, this.tutorial5Count < this.tutorial5Pre.length && this.startTutorial5(this.tutorial5Count)
            }, playUnlockSound: function () {
                this.audioManager.playSound(h)
            }, playPurchaseSound: function () {
                this.audioManager.playSound(c)
            }, playMergeSound: function () {
                this.audioManager.playSound(s)
            }, playRaceStartSound: function () {
                this.audioManager.playSound(d)
            }, playButtonSound: function () {
                this.audioManager.playSound(o)
            }, playBGMusic: function () {
                this.audioManager.playBGSound()
            }, stopBGMusic: function () {
                this.audioManager.stopBGSound()
            }, playSound: function (e) {
                this.audioManager.playSound(e)
            }, showCustomShare: function (e, t, a) {
                // var n = [this.customSharePre, this.customSharePre1], i = cc.instantiate(n[e]),
                //     r = playerManager.getNumData("UnlockLevel");
                // l.customImageShare(i, function (e) {
                //     i.getComponent("customShare").setIcon(e, r)
                // }, t, a)
                wxHelper.shareMessage();
            }, showBonusTimeDlg: function (e, t) {
                null != this.bonustime_dlg && (this.bonustime_dlg.removeFromParent(!0), this.bonustime_dlg = null), this.bonustime_dlg = cc.instantiate(this.bonustimePre), this.bonustime_dlg.parent = this.node, this.bonustime_dlg.setLocalZOrder(100), this.bonustime_dlg.getComponent("bonustime_dlg").setData(e, t)
            }, closeBonusTimeDlg: function () {
                null != this.bonustime_dlg && (this.bonustime_dlg.removeFromParent(!0), this.bonustime_dlg = null)
            }, getMessageReward: function () {
                /*var e = l.getEntryPointData();
                if (cc.log("ext=" + JSON.stringify(e)), e && e.type && "messenger" == e.type && e.player_id == l.getPlayerID()) {
                    var t = playerManager.getObjData("messageRewardIds");
                    cc.log("messageIds=" + JSON.stringify(t));
                    for (var a = !1, n = 0; n < t.length; n++) if (t[n] == e.task_id) {
                        a = !0;
                        break
                    }
                    if (!a) {
                        var i = parseInt(e.coin);
                        playerManager.addNumData("Coin", i), cc.director.emit("updateCoin"), t.push(e.task_id), playerManager.setObjData("messageRewardIds", t), this.showNotification("Compensation Gifts\n+" + u.unit_format(i) + " coins", 5)
                    }
                }*/
            }, getShareLinkReward: function () {
                if (0 != globalManager.firstInGame) {
                    /*var e = l.getEntryPointData();
                    if (cc.log("ext=" + JSON.stringify(e)), e && e.type && e.rewards && e.inviter) {
                        var t = e.inviter + l.getContextID(), a = playerManager.getObjData("shareLinkRewardIds"),
                            n = [];
                        cc.log("shareIds=" + JSON.stringify(a));
                        for (var i = !1, r = 0; r < a.length; r++) {
                            var o = a[r];
                            u.isOneDay(o.claimTime, Date.parse(new Date)) && (n.push(o), o.playerId == t && (i = !0))
                        }
                        if (10 <= n.length) this.showNotification("10 times already, please wait tomorrow.", 5); else if (i) this.showNotification("Clicked before, try other shared links to get rewards!", 5); else {
                            var s = playerManager.getNumData("UnlockLevel") - 4;
                            s = 0 <= s ? s : 0, cc.log("price=" + playerManager.getObjData("Price" + s));
                            var c = u.galaxyMut(playerManager.getObjData("Price" + s), .5);
                            playerManager.addNumData("Coin", c), cc.director.emit("updateCoin"), n.push({
                                claimTime: Date.parse(new Date),
                                playerId: t
                            }), playerManager.setObjData("shareLinkRewardIds", n), this.showNotification("Rewards from shared link!\n+" + u.unit_format(c) + " coins", 5)
                        }
                    }*/
                }
            }, showUpgradeCarPopUp: function (e, t, a) {
                null == this.upgradeCarPopUp && (this.upgradeCarPopUp = cc.instantiate(this.carUpgradePre), this.upgradeCarPopUp.parent = this.node, this.upgradeCarPopUp.getComponent("upgradeCarPopUp").setData(e, t, a), this.upgradeCarPopUp.setLocalZOrder(100))
            }, closeUpgradeCarPopUp: function () {
                null != this.upgradeCarPopUp && (this.upgradeCarPopUp.removeFromParent(!0), this.upgradeCarPopUp = null)
            }, showLuckySpinPopUp: function () {
                1 == playerManager.getObjData("animTutorial5") && cc.director.emit("nextTutorial7"), null == this.luckyspinPopUp && (this.luckyspinPopUp = cc.instantiate(this.luckyspinPre), this.luckyspinPopUp.parent = this.node, this.luckyspinPopUp.getComponent("luckyspin").setData(), 1 == playerManager.getObjData("animTutorial5") ? this.luckyspinPopUp.setLocalZOrder(98) : this.luckyspinPopUp.setLocalZOrder(100))
            }, closeLuckySpinPopUp: function () {
                null != this.luckyspinPopUp && (this.luckyspinPopUp.removeFromParent(!0), this.luckyspinPopUp = null)
            }, showUFOrewardPopUp: function (e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "ufo";
                null == this.UFOrewardPopUp && (this.UFOrewardPopUp = cc.instantiate(this.UFOrewardPre), this.UFOrewardPopUp.parent = this.node, this.UFOrewardPopUp.getComponent("UFO_reward").setData(e, t, a), this.UFOrewardPopUp.setLocalZOrder(100))
            }, closeUFOrewardPopUp: function () {
                null != this.UFOrewardPopUp && (this.UFOrewardPopUp.removeFromParent(!0), this.UFOrewardPopUp = null)
            }, showDailyCheckinPopUp: function (e, t, a) {
                r.reward_click_event(), null == this.DailyCheckinPopUp && (this.DailyCheckinPopUp = cc.instantiate(this.dailycheckinPre), this.DailyCheckinPopUp.parent = this.node, this.DailyCheckinPopUp.getComponent("Daily_And_Bank").setData(t, a), this.DailyCheckinPopUp.setLocalZOrder(100))
            }, closeDailyCheckinPopUp: function () {
                null != this.DailyCheckinPopUp && (this.DailyCheckinPopUp.removeFromParent(!0), this.DailyCheckinPopUp = null)
            }, moreGameClick: function () {
                this.moregamedialog ? (this.moregamedialog.parent = this.node, this.moregamedialog.active = !0) : (this.moregamedialog = cc.instantiate(this.moregameDlg), this.moregamedialog.parent = this.node, this.moregamedialog.getComponent("moregame-dialog").setData(2))
            }, showRecommendDialog: function () {
            }, setGiftPoint: function (e) {
                var t = !1;
                if ((e = e || JSON.parse(cc.sys.localStorage.getItem("dailyData1"))).length <= 0) this.giftPoint.active = t; else {
                    var a = playerManager.getObjData("dailyTask");
                    if (!u.isOneDay(a.taskTime, Date.parse(new Date))) return t = !0, void (this.giftPoint.active = t);
                    for (var n = a.taskProgress, i = 0; i < e.length; i++) {
                        var r = e[i];
                        if ("2" == r.task_obj_type) {
                            r.reward_num = 1, r.do_num = 1;
                            for (var o = 0; o < n.length; o++) if (n[o].task_id == r.task_id) {
                                r.reward_num = n[o].reward_num, r.do_num = n[o].do_num;
                                break
                            }
                        }
                        if ("6" == r.task_obj_type) break;
                        if (0 < parseInt(r.reward_num)) return t = !0, void (this.giftPoint.active = t)
                    }
                    for (var s = playerManager.getObjData("dailyPoint").rewardState, c = 0; c < s.length; c++) if (!s[c]) return t = !0, void (this.giftPoint.active = t);
                    this.giftPoint.active = t
                }
            }, setCatchFishIcon: function (e) {
                var data = cc.sys.localStorage.getItem("dailyData1");
                data = data == "" ? "{}" : data;
                if (!(playerManager.getNumData("UnlockLevel") < 4) && 0 < (e = e || JSON.parse(data)).length) for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    if ("6" == a.task_obj_type) if (1 <= parseInt(a.task_times) && 0 == parseInt(a.reward_num)) this.catchFishLayout.active = !1; else {
                        var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache"),
                            i = playerManager.getObjData("catchFish");
                        null != i.catchLevel && u.isOneDay(i.resetTime, globalManager.serverLoginTime) ? this.fishSprite.spriteFrame = n.getItemFrame(i.catchLevel) : (this.fishSprite.spriteFrame = n.getItemFrame(playerManager.getNumData("UnlockLevel")), playerManager.setObjData("catchFish", {
                            catchLevel: playerManager.getNumData("UnlockLevel"),
                            taskId: a.task_id,
                            resetTime: globalManager.serverResetTime
                        })), this.catchFishLayout.active = !0;
                        var r = cc.director.getWinSize().width - 30 - this.catchFishLayout.width,
                            o = cc.director.getWinSize().height - 240 - this.catchFishLayout.height;
                        cc.log("delY=" + cc.director.getWinSize().height + "  delX=" + cc.director.getWinSize().width);
                        var s = cc.sequence(cc.moveBy(5, 0, -o), cc.moveBy(2.5, r, 0), cc.moveBy(5, 0, o), cc.moveBy(2.5, -r, 0));
                        this.catchFishLayout.runAction(s)
                    } else this.catchFishLayout.active = !1
                }
            }, hideCatchFishIcon: function () {
                this.catchFishLayout.active = !1
            }, loadTestBtn: function (n) {
                var i = this;
                cc.loader.loadRes("testDialog/test-dialog", function (e, t) {
                    var a = cc.instantiate(t);
                    a.parent = i.node, a.setLocalZOrder(96), a.getComponent("TestDialog").setRewardCallback(n, function () {
                        var e = playerManager.getNumData("UnlockLevel") - 4;
                        return e = 0 <= e ? e : 0, playerManager.getObjData("Price" + e)
                    }, function (e) {
                        cc.log("rewardCoins=" + e);
                        var t = cc.instantiate(i.rewardCoinsPre);
                        t.parent = i.node, t.getComponent("reward-dialog").setData(e), t.setLocalZOrder(96)
                    })
                })
            }, loadUserCenter: function () {
                // var a = this;
                // console.log("loadUserCenter=" + globalManager.isUcBlackList), globalManager.isUcBlackList || cc.loader.loadRes("usercenter/prefab/user-center-floatball", function (e, t) {
                //     e || (a.userCenterNode = cc.instantiate(t), a.userCenterNode.parent = a.node, a.userCenterNode.setLocalZOrder(97), a.userCenterNode.getComponent("user-center-floatball").initUserCenter(globalManager.appId, "bighouse", function () {
                //         var e = playerManager.getNumData("UnlockLevel") - 4;
                //         return e = 0 <= e ? e : 0, playerManager.getObjData("Price" + e)
                //     }, function (e) {
                //         cc.log("rewardCoins=" + e), playerManager.addNumData("Coin", e), cc.director.emit("updateCoin"), a.showToast("+" + u.unit_format(e) + " coins")
                //     }))
                // })
            }, setUserCenterEvent: function (e, t, a) {
                cc.log("eventTpye=" + e), this.userCenterNode && this.userCenterNode.getComponent("user-center-floatball").sendVipEvent(e, t, a)
            }
        }), cc._RF.pop()
    }, {
        GamePaodao: "GamePaodao",
        WidgetUtil: "WidgetUtil",

        audioManager: "audioManager",
        "instant-util": "instant-util",
        "number-util": "number-util"
    }],
    HC_OK_animnode: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "96f033tzVpMqY4v5DEQ2pun", "HC_OK_animnode");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
            }, setData: function (e) {
                this.overcb = e
            }, animOver: function () {
                this.overcb && this.overcb()
            }
        }), cc._RF.pop()
    }, {}],
    HC_OK: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "bccccOVVahPgYtAz8n8yoBb", "HC_OK");
        cc.Class({
            extends: cc.Component,
            properties: {spItem: cc.Sprite, rootNode: cc.Node, animlist: cc.Animation},
            onLoad: function () {
            },
            setData: function (e, t) {
                this.itemId = e;
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.spItem.spriteFrame = a.getItemFrame(e);
                var n = gameData.getHousePanelPos(e);
                this.rootNode.y = n.posY + this.spItem.node.height / 2 - 6.8, this.animlist.play("hc-ok", 0), this.rootNode.getComponent("HC_OK_animnode").setData(t)
            }
        }), cc._RF.pop()
    }, {}],
    HZ_open: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "1764fK3PQpLH457lxrfh1W5", "HZ_open");
        cc.Class({
            extends: cc.Component,
            properties: {spItem: cc.Sprite, spCache: [cc.SpriteFrame], animlist: [cc.Animation]},
            onLoad: function () {
                this.curcd = 0, this.MaxCD = 1
            },
            setData: function (e, t) {
                this.callback = t, this.spItem.spriteFrame = this.spCache[e]
            },
            clickBox: function () {
                this.callback && this.callback()
            },
            update: function (e) {
                this.curcd >= this.MaxCD && this.clickBox(), this.curcd += e
            }
        }), cc._RF.pop()
    }, {}],
    HZ_start: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "848abWHEAJPIKYo9JMelyI2", "HZ_start");
        cc.Class({
            extends: cc.Component,
            properties: {spItem: cc.Sprite, spCache: [cc.SpriteFrame], animlist: [cc.Animation]},
            onLoad: function () {
                this.curcd = 0, this.MaxCD = 10
            },
            setData: function (e, t) {
                this.callback = t, this.spItem.spriteFrame = this.spCache[e]
            },
            clickBox: function () {
                this.callback && this.callback(), 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial2_1")
            },
            update: function (e) {
                this.curcd >= this.MaxCD && this.clickBox(), this.curcd += e
            }
        }), cc._RF.pop()
    }, {}],
    IosPaymentExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "637a4HiycRKWLtNihBUgN5U", "IosPaymentExecutor"), n.prototype.payForProduct = function (e, t, a, n, i, r, o, s, c, l, u, d) {
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    IosPlatformExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "32773vK6hdCeZLShZooooQk", "IosPlatformExecutor"), n.prototype.init = function () {
            jsb.reflection.callStaticMethod("YmnSdk", "init")
        }, n.prototype.setListener = function (e) {
            window.callbackCode = e
        }, n.prototype.getSdkVersion = function () {
            return 1
        }, n.prototype.getPlatformId = function () {
            return 2
        }, n.prototype.getPlatformName = function () {
            return 3
        }, n.prototype.getPlatformVersion = function () {
            return 4
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    IosUserExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "dc284OuxRVJwoRHZhspDNlx", "IosUserExecutor"), n.prototype.login = function () {
            jsb.reflection.callStaticMethod("YmnSdkHelper", "callfunction:", "facebook_auto_login")
        }, n.prototype.isSupportFunction = function (e) {
            return jsb.reflection.callStaticMethod("YmnSdk", "isSupportFunction:", e)
        }, n.prototype.callFunction = function (e) {
            jsb.reflection.callStaticMethod("YmnSdkHelper", "callfunction:", e)
        }, n.prototype.callFunctionArray = function (e, t) {
            console.log("call here");
            jsb.reflection.callStaticMethod("YmnSdkHelper", "callfunction:withData:", e, t)
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    LanguageData: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var n = e("polyglot.min"), i = null;

        function r(e) {
            return window.i18n.languages[e]
        }

        function o(e) {
            e && (i ? i.replace(e) : i = new n({phrases: e, allowMissing: !0}))
        }

        window.i18n || (window.i18n = {languages: {}, curLang: ""}), t.exports = {
            init: function (e) {
                if (e !== window.i18n.curLang) {
                    var t = r(e) || {};
                    window.i18n.curLang = e, o(t), this.inst = i
                }
            }, t: function (e, t) {
                if (i) return i.t(e, t)
            }, inst: i, updateSceneRenderers: function () {
                for (var e = cc.director.getScene().children, t = [], a = 0; a < e.length; ++a) {
                    var n = e[a].getComponentsInChildren("LocalizedLabel");
                    Array.prototype.push.apply(t, n)
                }
                for (var i = 0; i < t.length; ++i) {
                    var r = t[i];
                    r.node.active && r.updateLabel()
                }
                for (var o = [], s = 0; s < e.length; ++s) {
                    var c = e[s].getComponentsInChildren("LocalizedSprite");
                    Array.prototype.push.apply(o, c)
                }
                for (var l = 0; l < o.length; ++l) {
                    var u = o[l];
                    u.node.active && u.updateSprite(window.i18n.curLang)
                }
            }
        }, cc._RF.pop()
    }, {"polyglot.min": "polyglot.min"}],
    LevelupReward: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7b4b1NWygNH0qyEE9mprb69", "LevelupReward");
        var i = e("number-util"), r = e("instant-util"), o = logCenter;
        cc.Class({
            extends: cc.Component,
            properties: {
                btnback: cc.Button,
                shareBtn: cc.Node,
                videoBtn: cc.Node,
                reward1Node: cc.Node,
                reward2Node: cc.Node,
                coinlabrl: cc.Label,
                landlabrl: cc.Label,
                levellabrl: cc.Label
            },
            onLoad: function () {
                var e = gameData.getPlayerLevel(playerManager.getObjData("PlayerExp")),
                    t = gameData.getLevelUpReward(e.level);
                this.levelreward = t, this.levelRes = e, this.levellabrl.string = e.level + 1 + "", 2 == t.count ? (this.coinlabrl.string = "+ " + i.unit_format(t.coin), this.landlabrl.string = "+ " + t.land) : 1 == t.count && (null != t.coin && (this.coinlabrl.string = "+ " + i.unit_format(t.coin), this.reward1Node.x = 0, this.reward2Node.active = !1), null != t.land && (this.landlabrl.string = "+ " + t.land, this.reward2Node.x = 0, this.reward1Node.active = !1)), this.shareBtn.active = !1, this.videoBtn.active = !1, this.rewardType = 1, this.shareBtn.active = !0;
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playSound("congratulations")
            },
            animOver: function () {
            },
            watchVideo: function () {
                var e = this;
                o.watch_video_event("levelup");
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                r.showRewardAd(function () {
                    cc.log("showAd success"), t.setUserCenterEvent("ad"), o.watch_video_success_event("levelup"), e.closeDialog(null, !1)
                }, function () {
                    cc.log("RewardAd load err"), t.showToast("No available Ad right now, try again later.")
                })
            },
            shareClick: function () {
                var n = this;
                o.share_levelup_event(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showCustomShare(1, function (a) {
                    r.getPlayerInfo(function (e) {
                        var t = e.playerName + " has reached Lv." + (n.levelRes.level + 1) + "!";
                        r.share(function () {
                            n.closeDialog()
                        }, a, t)
                    })
                }, function () {
                    n.closeDialog()
                })
            },
            doubleClick: function () {
                o.offline_coin_click_event(), 1 == this.rewardType ? this.shareClick() : 2 == this.rewardType && this.watchVideo()
            },
            closeDialog: function (e) {
                !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                null != this.levelreward.coin && (playerManager.addNumData("Coin", this.levelreward.coin), t.startAddCoinEffect(), cc.director.emit("updateCoin"));
                var a = gameData.getPlayerLevel(playerManager.getObjData("PlayerExp")),
                    n = cc.sys.localStorage.getItem("createshortcut");
                !(3 <= a.level) || n && i.isOneDay(n, Date.parse(new Date)) || (cc.sys.localStorage.setItem("createshortcut", Date.parse(new Date)), r.createShortcut(function () {
                    o.create_shortcut_event("level4")
                })), t.closeLevelupReward()
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    LocalizedLabel: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var n = e("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {executeInEditMode: !0, menu: "i18n/LocalizedLabel"},
            properties: {
                dataID: {
                    get: function () {
                        return this._dataID
                    }, set: function (e) {
                        this._dataID !== e && (this._dataID = e, this.updateLabel())
                    }
                }, _dataID: ""
            },
            onLoad: function () {
                n.inst || n.init(), this.fetchRender()
            },
            fetchRender: function () {
                var e = this.getComponent(cc.Label);
                if (e) return this.label = e, void this.updateLabel()
            },
            updateLabel: function () {
                this.label ? n.t(this.dataID) && (this.label.string = n.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }), cc._RF.pop()
    }, {LanguageData: "LanguageData"}],
    LocalizedSprite: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var n = e("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {spriteFrameSet: {default: [], type: n}},
            onLoad: function () {
                this.fetchRender()
            },
            fetchRender: function () {
                var e = this.getComponent(cc.Sprite);
                if (e) return this.sprite = e, void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function (e) {
                for (var t = 0; t < this.spriteFrameSet.length; ++t) if (this.spriteFrameSet[t].language === e) return this.spriteFrameSet[t].spriteFrame
            },
            updateSprite: function (e) {
                if (this.sprite) {
                    var t = this.getSpriteFrameByLang(e);
                    !t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame), this.sprite.spriteFrame = t
                } else cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }), cc._RF.pop()
    }, {SpriteFrameSet: "SpriteFrameSet"}],
    NumberUtil: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "320aenrYE9E+6nxpBi3THPS", "NumberUtil");
        var n = e("number-util");
        t.exports = n, cc._RF.pop()
    }, {"number-util": "number-util"}],
    OsUtil: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "c0ef6VDcdlGeqeXR0m0WSfx", "OsUtil"), n.prototype.getOsName = function () {
            return cc.sys.isBrowser ? "Browser" : cc.sys.os == cc.sys.OS_ANDROID ? "Android" : cc.sys.os == cc.sys.OS_IOS ? "Ios" : cc.sys.os == cc.sys.OS_WINDOWS ? "Windows" : null
        }, n.prototype.getOsTarget = function (e) {
            return this.getOsName() + e
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    PaymentInterface: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "ff47c150VVGZrIoqmVp1YdF", "PaymentInterface");
        var h = e(e("OsUtil").getOsTarget("PaymentExecutor"));

        function n() {
        }

        n.prototype.payForProduct = function (e) {
            h.payForProduct(e)
        }, n.prototype.payForProduct = function (e, t, a, n, i, r, o, s, c, l, u, d) {
            h.payForProduct(e, t, a, n, i, r, o, s, c, l, u, d)
        }, n.prototype.payForSingle = function (e, t, a, n, i, r) {
            h.payForSingle(e, t, a, n, i, r)
        }, t.exports = new n, cc._RF.pop()
    }, {OsUtil: "OsUtil"}],
    PaymentWrapper: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "cabd3sG1MhFtacuoHOQ2snb", "PaymentWrapper"), t.exports = new function () {
            this.PAYRESULT_SUCCESS = 200, this.PAYRESULT_FAIL = 201, this.PAYRESULT_CANCEL = 202, this.PAYRESULT_NETWORK_ERROR = 203, this.PAYRESULT_PRODUCTIONINFOR_INCOMPLETE = 204, this.PAYRESULT_INIT_SUCCESS = 205, this.PAYRESULT_INIT_FAIL = 206, this.PAYRESULT_NOW_PAYING = 207
        }, cc._RF.pop()
    }, {}],
    PlatformSdk: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "0dbc4vqxo5LQZKSFslHj1rv", "PlatformSdk");
        var n = e(e("OsUtil").getOsTarget("PlatformExecutor"));

        function i() {
        }

        i.prototype.init = function () {
            n.init()
        }, i.prototype.setListener = function (e) {
            n.setListener(e)
        }, i.prototype.getSdkVersion = function () {
            return n.getSdkVersion()
        }, i.prototype.getPlatformId = function () {
            return n.getPlatformId()
        }, i.prototype.getPlatformName = function () {
            return n.getPlatformName()
        }, i.prototype.getPlatformVersion = function () {
            return n.getPlatformVersion()
        }, t.exports = new i, cc._RF.pop()
    }, {OsUtil: "OsUtil"}],
    SpriteFrameSet: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var n = cc.Class({name: "SpriteFrameSet", properties: {language: "", spriteFrame: cc.SpriteFrame}});
        t.exports = n, cc._RF.pop()
    }, {}],
    TestDialog: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "e4b14zrZidFhJQVmC0UwxdB", "TestDialog");
        var n = e("instant-util"), i = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                test_icon: {default: null, type: cc.Node},
                red_point: {default: null, type: cc.Node},
                test_layout: {default: null, type: cc.Node},
                testList: {default: [], type: cc.Node},
                btn_claim: {default: null, type: cc.Button},
                btn_label: {default: null, type: cc.Label},
                coins_label: {default: null, type: cc.Label},
                head_img: {default: null, type: cc.Sprite},
                name_label: {default: null, type: cc.Label},
                capture_node: {default: null, type: cc.Node},
                month_layout: {default: null, type: cc.Node},
                share_number_label: {default: null, type: cc.Label},
                share_btn: {default: null, type: cc.Node},
                toast_node: {default: null, type: cc.Node},
                start_game_node: {default: null, type: cc.Node},
                _resultCfg: null,
                _curResult: null,
                _rewardCallback: null,
                _getCoinsCallback: null,
                _curIndex: 0,
                _rewardCoins: 0,
                _isReceived: !1
            },
            onLoad: function () {
                var a = this;
                cc.loader.loadRes("testDialog/TestCfg", function (e, t) {
                    e || (a._resultCfg = t, this.setResult())
                }.bind(this))
            },
            start: function () {
                this.test_layout.active = !1, this.start_game_node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1.1, 1.1), cc.scaleTo(.2, 1, 1), cc.delayTime(.6)))), this.share_btn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1.1, 1.1), cc.scaleTo(.2, 1, 1), cc.delayTime(.6))));
                var e = playerManager.getObjData("test2019Received");
                this.setIconAnim(!e)
            },
            setIconAnim: function (e) {
                e ? this.test_icon.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.25, 1.1, 1.1), cc.scaleTo(.25, 1, 1), cc.scaleTo(.25, 1.1, 1.1), cc.scaleTo(.25, 1, 1), cc.delayTime(.5)))) : this.test_icon.stopAllActions(), this.red_point.active = e
            },
            claimClick: function () {
                var e = 6 * this._rewardCoins;
                this._rewardCallback && this._rewardCallback(e), playerManager.setObjData("test2019Received", !0), this.setIconAnim(!1), this.changeBtnState(!0, !1), this.test_layout.active = !1
            },
            testBtnClick: function () {
                0 == this.test_layout.active && (n.logEvent("2019_test_click"), this.test_layout.active = !0, this.changePage(0), this._resultCfg && this.setResult(), this.setRewardData())
            },
            changeBtnState: function (e, t) {
                this._isReceived = e, this.btn_claim.interactable = t, this.btn_label.string = e ? "Received" : "Claim"
            },
            setResult: function () {
                var e = i.randomNum(0, this._resultCfg.length - 1);
                this._curResult = this._resultCfg[e], cc.log("result=" + JSON.stringify(this._curResult));
                for (var t = this.month_layout.children, a = 0; a < t.length; a++) {
                    t[a].getChildByName("label").getComponent(cc.Label).string = this._curResult[a]
                }
                var n = 31 * Math.floor(((new Date).getTime() - 1545287974e3) / 1e3 / 60) + 542055;
                this.share_number_label.string = i.number_format(n, 0, ",")
            },
            setRewardData: function () {
                this._rewardCoins = this._getCoinsCallback();
                var e = playerManager.getNumData("test2019Reward");
                this.coins_label.string = i.unit_format(0 < e ? e : 6 * this._rewardCoins);
                var t = playerManager.getObjData("test2019Received"), a = !1;
                e && (a = !t), this.changeBtnState(t, a)
            },
            btnClick: function (e, t) {
                0 == parseInt(t) && n.logEvent("2019_test_start");
                var a = parseInt(t) + 1;
                this.changePage(a)
            },
            shareClick: function () {
                cc.log("test=My 2019 fortune is '" + this._curResult[0] + "'");
                var a = this;
                n.logEvent("2019_test_share"), n.captureScreen(this.capture_node, this.capture_node.width, this.capture_node.height, function (e, t) {
                    cc.log("iconbase=" + e), n.share(function () {
                    }, e, "My 2019 fortune is '" + a._curResult[0] + "'", {type: "test2019"})
                })
            },
            backClick: function () {
                this._curIndex != this.testList.length - 1 || this._isReceived || this.claimClick(), this.test_layout.active = !1
            },
            changePage: function (e) {
                this.testList.map(function (e) {
                    e.active = !1
                }), this.testList[e].active = !0, this._curIndex = e, this._curIndex != this.testList.length - 1 || this._isReceived || (n.logEvent("2019_test_result"), playerManager.setNumData("test2019Reward", 6 * this._rewardCoins), this.showToast())
            },
            showToast: function () {
                var e = this;
                e.toast_node.active = !0, this.toast_node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
                    e.toast_node.active = !1
                })))
            },
            setRewardCallback: function (e, t, a) {
                this._getCoinsCallback = t, this._rewardCallback = a, cc.loader.load({
                    url: e.photo,
                    type: "png"
                }, function (e, t) {
                    e ? cc.log("load head img err: " + JSON.stringify(e)) : (this.head_img.spriteFrame = new cc.SpriteFrame(t), this.head_img.type = cc.Sprite.Type.SIMPLE, this.head_img.sizeMode = cc.Sprite.SizeMode.CUSTOM)
                }.bind(this)), this.name_label.string = e.playerName
            }
        }), cc._RF.pop()
    }, {"instant-util": "instant-util", "number-util": "number-util"}],
    Tutorial0_1: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "b7765gCM2xDpJYvTEDEf1jr", "Tutorial0_1");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                1 == globalManager.tutorialVersion && this.onButtonBuy()
            }, onButtonBuy: function (e, t) {
                this.node.destroy(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial0_2: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "89cc8/o8NxHHbvP+YF5+haR", "Tutorial0_2");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
            }, onButtonBuy: function (e, t) {
                playerManager.setObjData("animTutorial", !1), this.node.destroy(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial0: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "75b53ve3ElD7LQnbY+hZ7ko", "Tutorial0");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                1 == globalManager.tutorialVersion && this.onButtonBuy()
            }, onButtonBuy: function (e, t) {
                this.node.destroy(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial1: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "77bc4oS4JRHuoV3Xlp5Ab9H", "Tutorial1");
        cc.Class({
            extends: cc.Component, properties: {labelTip: cc.Label}, onLoad: function () {
                this.count = 0;
                var e = this.getComponent(cc.Animation);
                e.getAnimationState("tutorial_anim1");
                e.play("tutorial_anim1"), this.clicktime = 0
            }, update: function (e) {
                0 < this.clicktime && (this.clicktime = this.clicktime - e)
            }, onButtonBuy: function (e, t) {
                if (!(0 < this.clicktime)) {
                    var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    a.scriptGamePaodao.onButtonBuy(), this.count++, this.labelTip.string = "再买一个.", 2 <= this.count && (cc.log("Tutorial1 nextTutorial"), this.node.destroy(), a.nextTutorial()), this.clicktime = .2
                }
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial2_1: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "1b2034g/35DxK1p06mXx1i1", "Tutorial2_1");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                var e = this, a = this;
                this.customEvent = {nextTutorial2_1: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t();
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").scriptGamePaodao.boxItem(1, 0)
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial2_1"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.destroy(), e.nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial2: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a63b4JzW0dCSbRMgEi2/Xof", "Tutorial2");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                var e = this, a = this;
                this.count = 0;
                var t = this.getComponent(cc.Animation);
                t.getAnimationState("tutorial_anim2");
                t.play("tutorial_anim2"), this.customEvent = {nextTutorial2: "nexttutorial"};
                var n = function () {
                    var t = e.customEvent[i];
                    cc.director.on(i, function (e) {
                        a[t]()
                    })
                };
                for (var i in this.customEvent) n()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial2"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.destroy(), e.nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial3: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "ffb59WbB/VIUJSH6tqUc++Y", "Tutorial3");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                var e = this, a = this;
                this.customEvent = {nextTutorial3: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial3"), this.customEvent) cc.director.off(e)
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.destroy(), e.nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial4: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "77c5aGp/n1E37W1RDJUEmm1", "Tutorial4");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                var e = this, a = this;
                this.customEvent = {nextTutorial4: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial4"), this.customEvent) cc.director.off(e)
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.destroy(), e.nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial5: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "2a9e2y0e3JMyrSpO31iybHz", "Tutorial5");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                var e = this, a = this;
                this.customEvent = {nextTutorial5: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial5"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.destroy(!0), e.nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial6: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "85b404eFWBNCZQlHd9Z7OEn", "Tutorial6");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                var e = this, a = this;
                this.customEvent = {nextTutorial6: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial6"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.destroy(!0), e.nextTutorial3(), playerManager.setObjData("animTutorial3", !1)
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial7_1: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "4616creIVtNxKpHm33VJaOn", "Tutorial7_1");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                var e = this, a = this;
                this.customEvent = {nextTutorial7_1: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial7_1"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.removeFromParent(!0), e.nextTutorial5(), playerManager.setObjData("animTutorial5", !1)
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial7: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "f1527h9bj5Gnqy+K6VrGoBc", "Tutorial7");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                var e = this, a = this;
                this.customEvent = {nextTutorial7: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial7"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.removeFromParent(!0), e.nextTutorial5()
            }
        }), cc._RF.pop()
    }, {}],
    UFO_reward: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "484c6Iwvn9PyZrtVNJYL+Ai", "UFO_reward");
        var o = logCenter, s = e("instant-util"), i = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                greySprite: cc.Sprite,
                shareNode: cc.Node,
                videoNode: cc.Node,
                getlabel: cc.Label,
                labelCD: cc.Label,
                videolabel: cc.Label,
                coinlabel: [cc.Label],
                videoFrame: [cc.SpriteFrame],
                spItem: cc.Sprite,
                tittleNode: [cc.Node],
                rewardNode: [cc.Node]
            },
            onLoad: function () {
                this.greySprite.node.active = false;
                var e = this;
                this.scheduleOnce(function () {
                    e.node.getComponent(cc.Animation).play("UFO_reward", 0)
                }, .01), this.checkTimeCD()
            },
            onDestroy: function () {
            },
            setData: function (e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "ufo";
                cc.log("reward=" + e), this.callback = t, this.startFrom = a, this.setReward(e)
            },
            setReward: function (e) {
                this.rewardType = e;
                for (var t = 0; t < this.rewardNode.length; t++) this.rewardNode[t].active = !1;
                0 <= e && e <= this.rewardNode.length - 1 && (this.coinlabel[e].string = this.getRewardValue(e), this.rewardNode[e].active = !0), this.shareNode.active = !1, this.videoNode.active = !1, this.shareNode.x = 0, this.videoNode.x = 0, globalManager.canShare(globalManager.shareType.UFOShare, {level: playerManager.getNumData("UnlockLevel")}) ? (this.getRewardType = 1, this.shareNode.active = !0, this.videoNode.active = !0, this.shareNode.x = -168, this.videoNode.x = 168) : (this.getRewardType = 2, this.videoNode.active = !0, this.getlabel.string = "Claim"), /*"WEB" ==BU s.getPlatform() && */(/*this.greySprite.node.active = !0, */this.videoNode.getComponent(cc.Button).interactable = !0)
            },
            checkTimeCD: function () {
                var t = this;
               /* 0 < playerManager.getNumData("TimeCD0") ? (this.videoNode.getComponent(cc.Button).interactable = false, t.labelCD.node.active = !0, t.videolabel.node.active = !1, this.videoNode.getComponent(cc.Button).interactable = !1, t.spItem.spriteFrame = t.videoFrame[1], t.labelCD.string = i.time_format(playerManager.getNumData("TimeCD0")), i.playerdataCountDown("TimeCD0", 1, function (e) {
                    t.labelCD && (t.labelCD.string = i.time_format(e)), 0 == e && t.labelCD && (t.labelCD.node.active = !1, t.videolabel.node.active = !0, t.videoNode.getComponent(cc.Button).interactable = !0, t.spItem.spriteFrame = t.videoFrame[0])
                })) : */(this.videoNode.getComponent(cc.Button).interactable = true, t.labelCD.node.active = !1, t.videolabel.node.active = !0, this.videoNode.getComponent(cc.Button).interactable = !0, t.spItem.spriteFrame = t.videoFrame[0])
            },
            getRewardValue: function (e) {
                var t = 0;
                if (0 == e) {
                    var a = playerManager.getNumData("UnlockLevel") - 4;
                    a = 0 <= a ? a : 0;
                    var n = playerManager.getObjData("Price" + a);
                    t = "+ " + i.unit_format(n)
                } else 1 == e && (t = "Golden Box!");
                return t
            },
            aquireReward: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), t = this.rewardType;
                if (0 == t) {
                    var a = playerManager.getNumData("UnlockLevel") - 4;
                    a = 0 <= a ? a : 0;
                    var n = playerManager.getObjData("Price" + a);
                    playerManager.addNumData("Coin", n), cc.director.emit("updateCoin"), e.startAddCoinEffect()
                } else 1 == t && (globalManager.GoldenBox += 4)
            },
            onButtonShare: function (e, t) {
                var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    i = {type: globalManager.shareType.UFOShare, inviter: s.getPlayerID(), rewards: "1"},
                    r = globalManager.getShareConfig(globalManager.shareType.UFOShare);
                o.share_get_bonus_all_event(), 0 == this.rewardType ? o.share_get_bonus_coin_event() : 1 == this.rewardType && o.share_get_bonus_box_event(), s.chooseContext(function (e) {
                    n.setUserCenterEvent("share"), o.share_get_bonus_all_success_event(), 0 == a.rewardType ? o.share_get_bonus_coin_success_event() : 1 == a.rewardType && o.share_get_bonus_box_success_event(), a.aquireReward(), a.callback && a.callback(), a.closeDialog()
                }, function (e, t) {
                    null != t && n.showToast(t)
                }.bind(a), i, r.text, r.img)
            },
            onButtonVideo: function (e, t) {
                console.log("视频UFO",e);
                var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                globalManager.shareType.UFOShare, /*s.getPlayerID()*/"";
                o.watch_video_event(), 1 == this.getRewardType ? o.watch_video_get_bonus_all_white_event() : 2 == this.getRewardType && o.watch_video_get_bonus_all_black_event(), s.showRewardAd(function () {
                    cc.log("showAd success"), n.setUserCenterEvent("ad"), o.watch_video_success_event(), 0 == a.rewardType ? o.watch_video_get_bonus_coin_success_event() : 1 == a.rewardType && o.watch_video_get_bonus_box_success_event(), 1 == a.getRewardType ? o.watch_video_get_bonus_all_white_success_event() : 2 == a.getRewardType && o.watch_video_get_bonus_all_black_success_event(), a.aquireReward(), playerManager.addNumData("TimeCD0", globalManager.videoTime), a.checkTimeCD(), a.callback && a.callback(), a.closeDialog()
                }, function () {
                    cc.log("RewardAd load err"), n.showToast("No available Ad right now, try again later.")
                })
            },
            subscribeClick: function () {
                var t = this;
                o.subscribe_bot_click_event(t.startFrom), s.subscribeBotAsync(function () {
                    globalManager.hasSubcribe = !0;
                    var e = playerManager.getObjData("subscribeReward");
                    o.subscribe_bot_success_event(t.startFrom), playerManager.setObjData("subscribeReward", {
                        time: (new Date).getTime(),
                        count: e.count + 1
                    }), t.aquireReward(), t.checkTimeCD(), t.callback && t.callback(), t.closeDialog()
                }, function () {
                    t.closeDialog()
                })
            },
            closeDialog: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeUFOrewardPopUp()
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    UserInterface: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "9b79eg56/lIsYpDoef0ucNk", "UserInterface");
        var n = e(e("OsUtil").getOsTarget("UserExecutor"));

        function i() {
        }

        i.prototype.login = function () {
            n.login()
        }, i.prototype.isSupportFunction = function (e) {
            return n.isSupportFunction(e)
        }, i.prototype.callFunction = function (e) {
            n.callFunction(e)
        }, i.prototype.callFunctionArray = function (e, t) {
            n.callFunctionArray(e, t)
        }, t.exports = new i, cc._RF.pop()
    }, {OsUtil: "OsUtil"}],
    UserWrapper: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "63cd4LqAVdHtoViVeFb6i96", "UserWrapper"), t.exports = new function () {
            this.ACTION_RET_INIT_SUCCESS = 100, this.ACTION_RET_INIT_FAIL = 101, this.ACTION_RET_LOGIN_SUCCESS = 102, this.ACTION_RET_LOGIN_TIMEOUT = 103, this.ACTION_RET_LOGIN_NO_NEED = 104, this.ACTION_RET_LOGIN_FAIL = 105, this.ACTION_RET_LOGIN_CANCEL = 106, this.ACTION_RET_LOGOUT_SUCCESS = 107, this.ACTION_RET_LOGOUT_FAIL = 108, this.ACTION_RET_PLATFORM_ENTER = 109, this.ACTION_RET_PLATFORM_BACK = 110, this.ACTION_RET_PAUSE_PAGE = 111, this.ACTION_RET_EXIT_PAGE = 112, this.ACTION_RET_ANTIADDICTIONQUERY = 113, this.ACTION_RET_REALNAMEREGISTER = 114, this.ACTION_RET_ACCOUNTSWITCH_SUCCESS = 115, this.ACTION_RET_ACCOUNTSWITCH_FAIL = 116
        }, cc._RF.pop()
    }, {}],
    WShaderUtil: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "eae072h2XFDy4j0uFOBkeSo", "WShaderUtil"), Object.defineProperty(a, "__esModule", {value: !0});
        var n, i, r, o, s, c, l, u, d, h, g, p, f, m, v = function () {
            function n(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && n(e.prototype, t), a && n(e, a), e
            }
        }();

        function y(e, t, a, n) {
            a && Object.defineProperty(e, t, {
                enumerable: a.enumerable,
                configurable: a.configurable,
                writable: a.writable,
                value: a.initializer ? a.initializer.call(n) : void 0
            })
        }

        function b(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function _(a, n, e, t, i) {
            var r = {};
            return Object.keys(t).forEach(function (e) {
                r[e] = t[e]
            }), r.enumerable = !!r.enumerable, r.configurable = !!r.configurable, ("value" in r || r.initializer) && (r.writable = !0), r = e.slice().reverse().reduce(function (e, t) {
                return t(a, n, e) || e
            }, r), i && void 0 !== r.initializer && (r.value = r.initializer ? r.initializer.call(i) : void 0, r.initializer = void 0), void 0 === r.initializer && (Object.defineProperty(a, n, r), r = null), r
        }

        var C = cc._decorator, w = C.ccclass, S = C.property, D = (n = S({
            type: cc.String,
            displayName: "Vert No MVP Native",
            tooltip: "native顶点着色器的代码模块名称（文件名），比如：gray_vsh。"
        }), i = S({
            type: cc.String,
            displayName: "Vert Web",
            tooltip: "web顶点着色器的代码模块名称（文件名），比如：gray_vsh。"
        }), r = S({
            type: cc.String,
            displayName: "Frag",
            tooltip: "片元着色器的代码模块名称（文件名），比如：gray_fsh。"
        }), o = S({type: cc.Boolean, displayName: "need update", tooltip: "是否update"}), s = S({
            type: cc.Boolean,
            displayName: "Show Debug Logs",
            tooltip: "是否显示调试日志"
        }), c = S({type: cc.Boolean, displayName: "Is Enable Shader", tooltip: "是否默认使用shader"}), w((u = function (e) {
            function o() {
                var e, t, a;
                (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, o);
                for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                return y(t = a = b(this, (e = o.__proto__ || Object.getPrototypeOf(o)).call.apply(e, [this].concat(i))), "vert_no_mvp", d, a), y(a, "vert", h, a), y(a, "frag", g, a), y(a, "isFlowlight", p, a), y(a, "isShowDebugLogs", f, a), y(a, "isEnableShader", m, a), b(a, t)
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(o, cc.Component), v(o, [{
                key: "onLoad", value: function () {
                    if (cc.sys.isNative) {
                        if (null === this.frag || null === this.vert) return void (this.isShowDebugLogs && cc.log("【WShaderUtil】vert or frag is null."))
                    } else if (null === this.frag || null === this.vert_no_mvp) return void (this.isShowDebugLogs && cc.log("【WShaderUtil】vert or frag is null."));
                    this.glNode = this.getComponent("cc.Sprite")._sgNode, this.loadShaderCode(), this.onInitGLProgram(), this.initFlowlight()
                }
            }, {
                key: "update", value: function (e) {
                    this.updateFlowlight(e)
                }
            }, {
                key: "initFlowlight", value: function () {
                    this.isFlowlight && (this._time = 0, this._sin = 0)
                }
            }, {
                key: "updateFlowlight", value: function (e) {
                    this.isFlowlight && (this._time += e, this._program.use(), this._sin = Math.sin(this._time), .99 < this._sin && (this._sin = 0, this._time = 0), cc.sys.isNative ? cc.GLProgramState.getOrCreateWithGLProgram(this._program).setUniformFloat("sys_time", this._sin) : this._program.setUniformLocationWith1f(this._program.getUniformLocationForName("sys_time"), this._sin))
                }
            }, {
                key: "loadShaderCode", value: function () {
                    if (this.isShowDebugLogs && cc.log("【WShaderUtil】require GL code from module."), cc.sys.isNative ? (this.isShowDebugLogs && cc.log("【WShaderUtil】require vert_no_mvp from module."), this._default_vert_no_mvp = t(this.vert_no_mvp)) : (this.isShowDebugLogs && cc.log("【WShaderUtil】require vert from module."), this._default_vert = t(this.vert)), this.isShowDebugLogs && cc.log("【WShaderUtil】require frag from module."), this._black_white_frag = t(this.frag), cc.sys.isNative) {
                        var e = cc.GLProgramState.getOrCreateWithGLProgram();
                        this.origlProgram = e
                    } else this.origlProgram = this.glNode.getShaderProgram()
                }
            }, {
                key: "onInitGLProgram", value: function () {
                    this.isShowDebugLogs && cc.log("【WShaderUtil】init GL Program."), this._program = new cc.GLProgram, cc.sys.isNative ? (this.isShowDebugLogs && cc.log("【WShaderUtil】use native GLProgram"), this._program.initWithString(this._default_vert_no_mvp, this._black_white_frag)) : (this.isShowDebugLogs && cc.log("【WShaderUtil】use webGL GLProgram"), this._program.initWithVertexShaderByteArray(this._default_vert, this._black_white_frag), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS)), this._program.link(), this._program.updateUniforms(), 1 == this.isEnableShader ? this.setProgram(this.glNode, this._program) : this.setProgram(this.glNode, this.origlProgram), this.isShowDebugLogs && cc.log("【WShaderUtil】use GL Program success.")
                }
            }, {
                key: "setProgram", value: function (e, t) {
                    if (this.isShowDebugLogs && cc.log("【WShaderUtil】set GL Program."), cc.sys.isNative) {
                        var a = cc.GLProgramState.getOrCreateWithGLProgram(t);
                        e.setGLProgramState(a)
                    } else e.setShaderProgram(t);
                    var n = e.children;
                    if (n) for (var i = 0; i < n.length; i++) this.setProgram(n[i], t)
                }
            }, {
                key: "enableShader", value: function (e) {
                    null == this.glNode && (this.glNode = this.getComponent("cc.Sprite")._sgNode), this.isShowDebugLogs && cc.log("【WShaderUtil】enableShader " + e + "."), 1 == e ? (this.isEnableShader = !0, this.setProgram(this.glNode, this._program)) : (this.isEnableShader = !1, this.setProgram(this.glNode, this.origlProgram))
                }
            }]), o
        }(), d = _(u.prototype, "vert_no_mvp", [n], {
            enumerable: !0, initializer: function () {
                return ""
            }
        }), h = _(u.prototype, "vert", [i], {
            enumerable: !0, initializer: function () {
                return ""
            }
        }), g = _(u.prototype, "frag", [r], {
            enumerable: !0, initializer: function () {
                return ""
            }
        }), p = _(u.prototype, "isFlowlight", [o], {
            enumerable: !0, initializer: function () {
                return !1
            }
        }), f = _(u.prototype, "isShowDebugLogs", [s], {
            enumerable: !0, initializer: function () {
                return !1
            }
        }), m = _(u.prototype, "isEnableShader", [c], {
            enumerable: !0, initializer: function () {
                return !0
            }
        }), l = u)) || l);
        a.default = D, e.exports = a.default, cc._RF.pop()
    }, {}],
    WebimgUtil: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "31149iOFIBOZLlCyhnxWSiA", "WebimgUtil");
        var n = e("webimg-util");
        t.exports = n, cc._RF.pop()
    }, {"webimg-util": "webimg-util"}],
    WidgetUtil: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "0c7deTDuuBEOrc9lRo9PXTM", "WidgetUtil"), t.exports = {
            screenWidget: function (e, t) {
                cc.log("screenWidget"), (e = e || 750) / (t = t || 1334) < cc.director.getWinSize().width / cc.director.getWinSize().height ? (cc.director.getScene().getChildByName("Canvas").getComponent(cc.Canvas).fitHeight = !0, cc.director.getScene().getChildByName("Canvas").getComponent(cc.Canvas).fitWidth = !1) : (cc.director.getScene().getChildByName("Canvas").getComponent(cc.Canvas).fitHeight = !1, cc.director.getScene().getChildByName("Canvas").getComponent(cc.Canvas).fitWidth = !0)
            }
        }, cc._RF.pop()
    }, {}],
    WindowsPaymentExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "004b8AyghFCuY1tLrNZTBsh", "WindowsPaymentExecutor"), n.prototype.payForProduct = function (e, t, a, n, i, r, o, s, c, l, u, d) {
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    WindowsPlatformExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "760c7cWcRJGmqq4yIxOXqie", "WindowsPlatformExecutor"), n.prototype.init = function () {
        }, n.prototype.setListener = function (e) {
        }, n.prototype.getSdkVersion = function () {
            return 1
        }, n.prototype.getPlatformId = function () {
            return 2
        }, n.prototype.getPlatformName = function () {
            return 3
        }, n.prototype.getPlatformVersion = function () {
            return 4
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    WindowsUserExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "66010SrVAxKl7uwTZPgnIqV", "WindowsUserExecutor"), n.prototype.login = function () {
        }, n.prototype.isSupportFunction = function (e) {
            return !1
        }, n.prototype.callFunction = function (e) {
        }, n.prototype.callFunction = function (e, t) {
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    addcoin: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "3cb1d5uYcBCErO7VXUkY20a", "addcoin");
        var i = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {layoutPut: cc.Layout, effgetcoinPre: cc.Prefab, effNode: cc.Node, coinLabel: cc.Label},
            onLoad: function () {
                this.layPutSize = {}, this.layPutSize.x = this.layoutPut.node.x, this.layPutSize.y = this.layoutPut.node.y, this.layPutSize.width = this.layoutPut.node.width, this.layPutSize.height = this.layoutPut.node.height, this.layPutMatrix = {
                    bl: {
                        x: this.layPutSize.x - this.node.x - this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y - this.layPutSize.height / 2
                    },
                    tr: {
                        x: this.layPutSize.x - this.node.x + this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y + this.layPutSize.height / 2
                    }
                }
            },
            setData: function (e) {
                this.layPutSize = {}, this.layPutSize.x = this.layoutPut.node.x, this.layPutSize.y = this.layoutPut.node.y, this.layPutSize.width = this.layoutPut.node.width, this.layPutSize.height = this.layoutPut.node.height, this.layPutMatrix = {
                    bl: {
                        x: this.layPutSize.x - this.node.x - this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y - this.layPutSize.height / 2
                    },
                    tr: {
                        x: this.layPutSize.x - this.node.x + this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y + this.layPutSize.height / 2
                    }
                };
                var t = parseInt(Math.random() * (this.layPutMatrix.tr.x + .9999 - this.layPutMatrix.bl.x) + this.layPutMatrix.bl.x, 10),
                    a = parseInt(Math.random() * (this.layPutMatrix.tr.y + .9999 - this.layPutMatrix.bl.y) + this.layPutMatrix.bl.y, 10);
                this.coinLabel.string = "+" + i.unit_format(e), this.coinLabel.node.x = t, this.coinLabel.node.y = a;
                var n = cc.sequence(cc.moveBy(.8, 0, 20), cc.removeSelf());
                this.node.runAction(n), playerManager.addNumData("Coin", e), cc.director.emit("updateCoin"), cc.director.emit("effectCoin"), cc.instantiate(this.effgetcoinPre).parent = this.effNode
            },
            update: function (e) {
            }
        }), cc._RF.pop()
    }, {"number-util": "number-util"}],
    "analytics-data": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "806eftFF+5E2KrsoycKWvm+", "analytics-data");
        console.log("analytics-data=========")
        var n = {
            logEvent: function () {

            }
        };
        console.log("analytics-data=========logEvent")
        t.exports = {
            login_page_event: function () {
                n.logEvent("on_login_page")
            }, game_page_event: function () {
                n.logEvent("on_game_page")
            }, login_share_event: function () {
                n.logEvent("login_share")
            }, speed_up_click_event: function () {
                n.logEvent("speed_up_click")
            }, share_speed_up_event: function () {
                n.logEvent("share_speed_up")
            }, share_speed_up_success_event: function () {
                n.logEvent("share_speed_up_success")
            }, watch_video_speed_up_event: function () {
                n.logEvent("watch_video_speed_up")
            }, watch_video_speed_up_success_event: function () {
                n.logEvent("watch_video_speed_up_success")
            }, share_get_bonus_coin_event: function () {
                n.logEvent("share_get_bonus_coin")
            }, share_get_bonus_coin_success_event: function () {
                n.logEvent("share_get_bonus_coin_success")
            }, watch_video_get_bonus_coin_event: function () {
                n.logEvent("watch_video_get_bonus_coin")
            }, watch_video_get_bonus_coin_success_event: function () {
                n.logEvent("watch_video_get_bonus_coin_success")
            }, share_get_bonus_box_event: function () {
                n.logEvent("share_get_bonus_box")
            }, share_get_bonus_box_success_event: function () {
                n.logEvent("share_get_bonus_box_success")
            }, watch_video_get_bonus_box_event: function () {
                n.logEvent("watch_video_get_bonus_box")
            }, watch_video_get_bonus_box_success_event: function () {
                n.logEvent("watch_video_get_bonus_box_success")
            }, share_get_bonus_all_event: function () {
                n.logEvent("share_get_bonus_all")
            }, share_get_bonus_all_success_event: function () {
                n.logEvent("share_get_bonus_all_success")
            }, watch_video_get_bonus_all_white_event: function () {
                n.logEvent("watch_video_get_bonus_all_white")
            }, watch_video_get_bonus_all_white_success_event: function () {
                n.logEvent("watch_video_get_bonus_all_white_success")
            }, watch_video_get_bonus_all_black_event: function () {
                n.logEvent("watch_video_get_bonus_all_black")
            }, watch_video_get_bonus_all_black_success_event: function () {
                n.logEvent("watch_video_get_bonus_all_black_success")
            }, share_spin_get_ticket_event: function () {
                n.logEvent("share_spin_get_ticket")
            }, share_spin_get_ticket_success_event: function () {
                n.logEvent("share_spin_get_ticket_success")
            }, watch_video_spin_get_ticket_event: function () {
                n.logEvent("watch_video_spin_get_ticket")
            }, watch_video_spin_get_ticket_success_event: function () {
                n.logEvent("watch_video_spin_get_ticket_success")
            }, spin_click_event: function () {
                n.logEvent("spin_click")
            }, spin_click_lack_event: function () {
                n.logEvent("spin_click_lack")
            }, share_spin_click_lack_get_ticket_event: function () {
                n.logEvent("share_spin_click_lack_get_ticket")
            }, share_spin_click_lack_get_ticket_success_event: function () {
                n.logEvent("share_spin_click_lack_get_ticket_success")
            }, watch_video_spin_click_lack_get_ticket_event: function () {
                n.logEvent("watch_video_spin_click_lack_get_ticket")
            }, watch_video_spin_click_lack_get_ticket_success_event: function () {
                n.logEvent("watch_video_spin_click_lack_get_ticket_success")
            }, game_share_event: function () {
            }, game_share_success_event: function () {
            }, game_share_fail_event: function (e) {
            }, speed_up_with_share_event: function () {
                n.logEvent("speed_up_with_share")
            }, speed_up_without_share_event: function () {
                n.logEvent("speed_up_without_share")
            }, watch_video_event: function (e) {
            }, watch_video_success_event: function (e) {
            }, watch_video_shop_event: function (e) {
                n.logEvent("watch_video_shop")
            }, watch_video_shop_success_event: function (e) {
                n.logEvent("watch_video_shop_success")
            }, share_get_coin_event: function () {
                n.logEvent("share_get_coin")
            }, share_get_coin_success_event: function () {
                n.logEvent("share_get_coin_success")
            }, watch_video_get_coin_white_event: function () {
                n.logEvent("watch_video_get_coin_white")
            }, watch_video_get_coin_success_white_event: function () {
                n.logEvent("watch_video_get_coin_white_success")
            }, watch_video_get_coin_black_event: function () {
                n.logEvent("watch_video_get_coin_black")
            }, watch_video_get_coin_black_success_event: function () {
                n.logEvent("watch_video_get_coin_black_success")
            }, share_get_coin_fail_event: function (e) {
                "limit" == e ? n.logEvent("share_get_coin_limit") : n.logEvent("share_get_coin_fail")
            }, entry_with_type_event: function (e) {
                "share" == e ? n.logEvent("entry_with_share") : "update" == e && n.logEvent("entry_with_update")
            }, entry_with_context_event: function (e, t) {
                e && n.logEvent("entry_with_context", null, {contextId: e, group: t})
            }, offline_coin_click_event: function () {
                n.logEvent("offline_coin_click")
            }, spin_share_event: function () {
                n.logEvent("share_spin")
            }, spin_share_success_event: function () {
                n.logEvent("share_spin_success")
            }, upgrade_share_event: function () {
            }, upgrade_share_success_event: function () {
            }, share_levelup_event: function () {
                n.logEvent("level_up_share")
            }, share_levelup_success_event: function () {
                n.logEvent("level_up_share_success")
            }, share_offline_coin_event: function (e) {
                n.logEvent("share_offline_coin", null, {isShare: e})
            }, share_offline_coin_success_event: function () {
                n.logEvent("share_offline_coin_success")
            }, watch_video_offiline_coin_event: function () {
                n.logEvent("watch_video_offiline_coin")
            }, watch_video_offiline_coin_success_event: function () {
                n.logEvent("watch_video_offiline_coin_success")
            }, share_offline_coin_fail_event: function (e) {
                "limit" == e ? n.logEvent("share_offline_coin_limit") : n.logEvent("share_offline_coin_fail")
            }, get_offline_coin_without_share_event: function () {
                n.logEvent("offline_coin_without_share")
            }, create_shortcut_event: function (e) {
                n.logEvent("create_shortcut", null, {platform: n.getPlatform(), type: e})
            }, player_link_click_event: function (e) {
                n.logEvent("player_link_click", null, {type: e})
            }, new_player_link_click_event: function (e) {
                n.logEvent("new_player_link_click", null, {type: e})
            }, new_player_switch_click_event: function (e) {
                n.logEvent("new_player_switch_click", null, {game_name: e})
            }, fb_set_data_fail_event: function (e) {
                n.logEvent("fb_set_data_fail", null, {msg: e})
            }, fb_get_data_fail_event: function (e) {
                n.logEvent("fb_get_data_fail", null, {msg: e})
            }, achieve_level_event: function (e) {
                if (e) switch (e) {
                    case 4:
                        this.achieve_level_5_event();
                        break;
                    case 9:
                        this.achieve_level_10_event();
                        break;
                    case 19:
                        this.achieve_level_20_event();
                        break;
                    case 29:
                        this.achieve_level_30_event();
                        break;
                    case 34:
                        n.logEvent("achieve_level_35");
                        break;
                    case 39:
                        n.logEvent("achieve_level_40");
                        break;
                    case 44:
                        n.logEvent("achieve_level_45")
                }
            }, achieve_character_level_event: function (e) {
                if (e) switch (e) {
                    case 4:
                        n.logEvent("achieve_character_level_5_event");
                        break;
                    case 9:
                        n.logEvent("achieve_character_level_10_event");
                        break;
                    case 19:
                        n.logEvent("achieve_character_level_20_event");
                        break;
                    case 29:
                        n.logEvent("achieve_character_level_30_event");
                        break;
                    case 34:
                        n.logEvent("achieve_character_level_35_event");
                        break;
                    case 39:
                        n.logEvent("achieve_character_level_40_event");
                        break;
                    case 44:
                        n.logEvent("achieve_character_level_45_event")
                }
            }, achieve_level_5_event: function () {
                n.logEvent("achieve_level_5")
            }, achieve_level_10_event: function () {
                n.logEvent("achieve_level_10")
            }, achieve_level_20_event: function () {
                n.logEvent("achieve_level_20")
            }, achieve_level_30_event: function () {
                n.logEvent("achieve_level_30")
            }, data_loading_event: function () {
                n.logEvent("data_loading")
            }, invite_friends_info_start_event: function () {
                n.logEvent("invite_friends_info_start")
            }, invite_friends_info_success_event: function () {
                n.logEvent("invite_friends_info_success")
            }, invite_friends_info_err_event: function (e) {
                n.logEvent("invite_friends_info_err", null, {code: e})
            }, invite_friends_event: function () {
                n.logEvent("invite_friends_share")
            }, invite_friends_success_event: function () {
                n.logEvent("invite_friends_success_share")
            }, invite_new_success_event: function () {
                n.logEvent("invite_new_success")
            }, unlock_fish_share_event: function () {
                n.logEvent("unlock_house_share")
            }, task_btn_start_event: function (e) {
                e = e || "undefined", n.logEvent("task_btn_start_" + e)
            }, task_btn_claim_event: function (e) {
                e = e || "undefined", n.logEvent("task_btn_claim_" + e)
            }, gift_claim_event: function (e) {
                n.logEvent("gift_claim_" + e)
            }, switchgameasync_event: function (e) {
                n.logEvent("click_to_" + e)
            }, all_share_click_event: function () {
                n.logEvent("all_share_click")
            }, reset_data_event: function () {
                n.logEvent("reset_data")
            }, bot_recall_event: function (e) {
                n.logEvent("bot_recall_" + e)
            }, switch_hugefish_from_dialog_event: function () {
                n.logEvent("switch_hugefish_from_dialog")
            }, recommend_icon_click_event: function (e) {
                n.logEvent("recommend_icon_click", null, {name: e})
            }, catch_fish_click_event: function () {
                n.logEvent("catch_fish_click")
            }, catch_fish_share_event: function () {
                n.logEvent("catch_fish_share")
            }, catch_fish_claim_event: function () {
                n.logEvent("catch_fish_claim")
            }, share_free_upgrade_event: function () {
                n.logEvent("share_free_upgrade")
            }, share_free_upgrade_success_event: function () {
                n.logEvent("share_free_upgrade_success")
            }, watch_video_free_upgrade_event: function () {
                n.logEvent("watch_video_free_upgrade")
            }, watch_video_free_upgrade_success_event: function () {
                n.logEvent("watch_video_free_upgrade_success")
            }, shop_page_click_event: function () {
                n.logEvent("shop_page_click")
            }, quick_purchase_click_event: function () {
                n.logEvent("quick_purchase_click")
            }, blacklist_login_event: function () {
                n.logEvent("blacklist_login")
            }, whitelist_login_event: function () {
                n.logEvent("whitelist_login")
            }, share_spin_x6_event: function () {
                n.logEvent("share_spin_x6")
            }, share_spin_x6_success_event: function () {
                n.logEvent("share_spin_x6_success")
            }, watch_video_spin_x6_event: function () {
                n.logEvent("watch_video_spin_x6")
            }, watch_video_spin_x6_success_event: function () {
                n.logEvent("watch_video_spin_x6_success")
            }, stay_time_length_event: function (e) {
                cc.log("stay_time_length_event=" + e), n.logEvent("stay_time_length", null, {time: e})
            }, game_from_uc_event: function (e, t) {
                n.logEvent("game_switch_form_uc", null, {name: e, act_appid: t})
            }, reward_click_event: function () {
                n.logEvent("reward_click")
            }, daily_reward_collect_click_event: function (e) {
                n.logEvent("daily_reward_collect_click", null, {type: e})
            }, bank_invite_friend_share_event: function () {
                n.logEvent("bank_invite_friend_share")
            }, bank_invite_friend_share_success_event: function () {
                n.logEvent("bank_invite_friend_share_success")
            }, share_bank_x2_event: function () {
                n.logEvent("share_bank_x2")
            }, share_bank_x2_success_event: function () {
                n.logEvent("share_bank_x2_success")
            }, watch_video_bank_x2_event: function () {
                n.logEvent("watch_video_bank_x2", null)
            }, watch_video_bank_x2_success_event: function () {
                n.logEvent("watch_video_bank_x2_success", null)
            }, share_bank_event: function () {
                n.logEvent("share_bank", null)
            }, share_bank_success_event: function () {
                n.logEvent("share_bank_success", null)
            }, watch_video_bank_event: function () {
                n.logEvent("watch_video_bank", null)
            }, watch_video_bank_success_event: function () {
                n.logEvent("watch_video_bank_success", null)
            }, subscribe_bot_click_event: function (e) {
                n.logEvent("subscribe_bot_click", null, {type: e})
            }, subscribe_bot_success_event: function (e) {
                n.logEvent("subscribe_bot_success", null, {type: e})
            }
        }, cc._RF.pop()
    }, {}],
    arrowIcon: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "c017aj/2mhB664BY7B82c2y", "arrowIcon"), cc.Class({
            extends: cc.Component,
            properties: {arrowSprite: [cc.Sprite]},
            onLoad: function () {
            },
            update: function (e) {
            },
            setData: function (e) {
                for (var t = 0; t < this.arrowSprite.length; t++) this.arrowSprite[t].node.active = !1;
                for (t = 0; t < e; t++) this.arrowSprite[t].node.active = !0
            }
        }), cc._RF.pop()
    }, {}],
    audioManager: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "94b4eNTDqVDVIlSfE32YTHX", "audioManager");
        var s = {
            sfx_button: 0,
            sfx_finish: 1,
            sfx_merge: 2,
            sfx_purchase: 3,
            sfx_race_start: 4,
            sfx_unlock: 5,
            coins: 6,
            congratulations: 7,
            bgm: 8
        };
        cc.Class({
            extends: cc.Component,
            properties: {sounds: {url: cc.AudioClip, default: []}, bgm: {url: cc.AudioClip, default: null}},
            onLoad: function () {
                var o = this;
                cc.loader.loadResDir("sound", cc.AudioClip, function (e, t, a) {
                    for (var n in t) {
                        var i = t[n], r = i;
                        "bgm" == (r = (r = r.replace(/res\/raw-assets\/resources\/sound\//, "")).replace(/.mp3/, "")) && null == o.bgm ? (o.bgm = i, o.bgmCB && o.bgmCB()) : null != s[r] && null == o.sounds[s[r]] && (o.sounds[s[r]] = i)
                    }
                })
            },
            playSound: function (e) {
                playerManager.getObjData("enableSound") && null != s[e] && null != this.sounds[s[e]] && cc.audioEngine.play(this.sounds[s[e]], !1, 1)
            },
            playBGSound: function () {
                var e = this;
                this.stopBGSound(), playerManager.getObjData("enableSound") && (null != this.bgm ? this.bgsoundId = cc.audioEngine.play(this.bgm, !0, 1) : this.bgmCB = function () {
                    e.bgsoundId = cc.audioEngine.play(e.bgm, !0, 1)
                })
            },
            stopBGSound: function () {
                null != this.bgsoundId && (cc.audioEngine.stop(this.bgsoundId), this.bgsoundId = null)
            }
        }), cc._RF.pop()
    }, {}],
    bonustime_dlg: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "6d0f7+TO+NKv4VSYO4b5yNB", "bonustime_dlg");
        cc.Class({
            extends: cc.Component,
            properties: {btnback: cc.Button, shareBtn: cc.Node, share_toggle: {default: null, type: cc.Toggle}},
            onLoad: function () {
            },
            setData: function (e, t) {
                this.callback = e, this.callback1 = t
            },
            shareClick: function () {
                this.share_toggle.isChecked ? this.callback && this.callback() : this.callback1 && this.callback1()
            },
            closeDialog: function () {
                this.node.removeFromParent(!1)
            }
        }), cc._RF.pop()
    }, {}],
    boxnode: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "f70f68G7axAGaC26R8hpTp8", "boxnode");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                this.curcd = 0, this.MaxCD = 10, this.noUpdate = !1, this.offsettime = globalManager.BoxCD / 10
            }, updateState: function () {
            }, clickBox: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if ((this.curcd < 10 || 1 != t.scriptGamePaodao.isPoolFull(e)) && this.curcd++, 10 <= this.curcd && 1 != t.scriptGamePaodao.isPoolFull(e)) {
                    this.curcd = 0, t.playPurchaseSound();
                    fish_data[this.index];
                    var a = playerManager.getNumData("UnlockLevel"), n = gameData.getBoxLevel(a) - 1;
                    t.scriptGamePaodao.boxItem(n, 0), this.noUpdate = !1
                } else 10 <= this.curcd && 1 == t.scriptGamePaodao.isPoolFull(e) ? this.noUpdate = !0 : this.noUpdate = !1
            }, update: function (e) {
                1 != playerManager.getObjData("animTutorial") && (1 != this.noUpdate ? (10 <= this.curcd && this.clickBox(!0), this.curcd += e / this.offsettime) : 1 != cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").scriptGamePaodao.isPoolFull(!0) && (this.noUpdate = !1))
            }
        }), cc._RF.pop()
    }, {}],
    "catch-fish-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "871e8DroIVOPZFIiutCRwK8", "catch-fish-dialog");
        var n = e("instant-util"), i = logCenter;
        cc.Class({
            extends: cc.Component,
            properties: {
                btn_label: {default: null, type: cc.Label},
                count_label: {default: null, type: cc.Label},
                count_down_label: {default: null, type: cc.Label},
                count_down_layout: {default: null, type: cc.Node},
                _canClaim: !1,
                _taskData: null,
                _countDownId: null
            },
            onLoad: function () {
                i.catch_fish_click_event();
                var e = cc.sys.localStorage.getItem("dailyData1");
                e && (e = JSON.parse(cc.sys.localStorage.getItem("dailyData1")), this.setData(e)), server_util.getActivityList(function (e) {
                    e && (this.setData(e), cc.sys.localStorage.setItem("dailyData1", JSON.stringify(e)))
                }.bind(this), function (e) {
                }.bind(this)), this.count_down_layout.active = !1;
                var t = globalManager.serverResetTime - globalManager.serverLoginTime;
                if (cc.log("globalManager.resetCd=" + t), 0 < t && 0 < globalManager.loginTime) {
                    this.count_down_layout.active = !0;
                    var a = t - (Math.floor(Date.parse(new Date) / 1e3) - globalManager.loginTime);
                    a = a < 0 ? 86400 + a : a, this.countDownTime(a), this._countDownId = setInterval(function () {
                        a -= 1, cc.log("remainTime=" + a), a <= 0 && (clearInterval(this._countDownId), this.onLoad()), this.countDownTime(a)
                    }.bind(this), 1e3)
                }
            },
            setData: function (e) {
                for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    "6" == a.task_obj_type && (1 <= (this._taskData = a).reward_num ? (this.btn_label.string = "Claim", this.count_label.string = "(3/3)", this._canClaim = !0) : (this.btn_label.string = "Share", this.count_label.string = "(" + a.progress + "/" + a.total_progress + ")", this._canClaim = !1))
                }
            },
            btnClick: function () {
                if (this._canClaim) {
                    var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    t.scriptGamePaodao.isPoolFull() ? this.node.destroy() : server_util.receiveTask(this._taskData.task_id, function () {
                        i.catch_fish_claim_event();
                        var e = playerManager.getObjData("catchFish");
                        t.scriptGamePaodao.catchFish(e.catchLevel), playerManager.setObjData("catchFish", {}), cc.director.emit("hide_catch_fish"), this.node.destroy()
                    }.bind(this))
                } else {
                    i.catch_fish_share_event();
                    var e = globalManager.getShareConfig(globalManager.shareType.catchFish), a = {
                        type: globalManager.shareType.catchFish,
                        inviter: n.getPlayerID(),
                        taskId: this._taskData.task_id,
                        rewards: "1"
                    };
                    n.share(function () {
                    }, e.img, e.text, a)
                }
            },
            closeBtn: function () {
                this.node.destroy()
            },
            countDownTime: function (e) {
                var t = parseInt(e / 3600), a = parseInt((e - 3600 * t) / 60), n = e - 3600 * t - 60 * a;
                this.count_down_label.string = (t < 10 ? "0" + t : t) + ":" + (a < 10 ? "0" + a : a) + ":" + (n < 10 ? "0" + n : n)
            },
            onDestroy: function () {
                clearInterval(this._countDownId)
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util"}],
    "count-down-node": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "f3376OGyF9MuYe1ZY+sZ8dN", "count-down-node");
        var r = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {count_time_label: {default: null, type: cc.Label}},
            setData: function (e, n) {
                var i = this;
                i.node.active = !0;
                var t = parseInt(e / 60), a = e - 60 * t;
                i.count_time_label.string = t + ":" + (a < 10 ? "0" + a : a), this.countDownId = r.countTime(e, function (e) {
                    if (cc.isValid(i.node)) {
                        var t = parseInt(e / 60), a = e - 60 * t;
                        i.count_time_label && (i.count_time_label.string = t + ":" + (a < 10 ? "0" + a : a)), n(e), 0 == e && i.node && (i.node.active = !1)
                    } else r.clearInterval(this.countDownId)
                }.bind(this))
            }
        }), cc._RF.pop()
    }, {"number-util": "number-util"}],
    customShare: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "dee5fVbOYBH0YTTqqs1ZvIS", "customShare");
        e("webimg-util");
        cc.Class({
            extends: cc.Component, properties: {playerIcon: cc.Sprite, fishIcon: cc.Sprite}, onLoad: function () {
            }, update: function (e) {
            }, setIcon: function (e, t) {
                if (null != this.playerIcon && (this.playerIcon.spriteFrame = new cc.SpriteFrame(e)), null != this.fishIcon) {
                    var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                    this.fishIcon.spriteFrame = a.getItemFrame(t)
                }
            }
        }), cc._RF.pop()
    }, {"webimg-util": "webimg-util"}],
    "daily-bonus-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "2ac00wO7yFBRK430rmFeBr/", "daily-bonus-dialog");
        var u = e("number-util"), d = (e("instant-util"), logCenter), n = [{
            task_id: "1013",
            task_title: "Ask friends for help",
            task_desc: "Earn points with a friend's click.",
            task_obj_type: "5",
            total_progress: "1",
            total_task_times: "9999",
            scene: "0",
            config: {},
            reward: [{
                reward_id: "1024",
                reward_type: "1",
                reward_title: "",
                reward_desc: "",
                number: "1000"
            }, {reward_id: "1025", reward_type: "2", reward_title: "", reward_desc: "", number: "20"}],
            progress: "0",
            task_times: "2",
            reward_num: "0"
        }, {
            task_id: "1004",
            task_title: "Login game",
            task_desc: "",
            task_obj_type: "2",
            total_progress: "1",
            total_task_times: "1",
            scene: "0",
            config: {},
            reward: [{
                reward_id: "1010",
                reward_type: "1",
                reward_title: "",
                reward_desc: "",
                number: "1000"
            }, {reward_id: "1011", reward_type: "2", reward_title: "", reward_desc: "", number: "5"}],
            progress: "0",
            task_times: "0",
            reward_num: "0"
        }, {
            task_id: "1005",
            task_title: "Watch video",
            task_desc: "",
            task_obj_type: "3",
            total_progress: "1",
            total_task_times: "9",
            scene: "0",
            config: {interval: 600},
            reward: [{
                reward_id: "1012",
                reward_type: "1",
                reward_title: "",
                reward_desc: "",
                number: "1000"
            }, {reward_id: "1013", reward_type: "2", reward_title: "", reward_desc: "", number: "10"}],
            progress: "0",
            task_times: "0",
            reward_num: "0"
        }], i = "dailyData1", h = [15, 30, 60, 100], g = [.25, .5, 1, 2];
        cc.Class({
            extends: cc.Component,
            properties: {
                gifts_btns: {default: [], type: cc.Node},
                daily_bonus_prefab: {default: null, type: cc.Prefab},
                task_layout: {default: null, type: cc.Node},
                progress: {default: null, type: cc.ProgressBar},
                point_label: {default: null, type: cc.RichText},
                hint_label: {default: null, type: cc.Node}
            },
            onLoad: function () {
                this.addPoint(0);
                var e = cc.sys.localStorage.getItem(i);
                cc.log("localData=" + e), e = e ? JSON.parse(e) : n;
                var t = this.setData(e);
                this.task_layout.getComponent("list-adapter").initListView(this.daily_bonus_prefab, "daily-node", t, this.addPoint.bind(this)), d.invite_friends_info_start_event(), server_util.getActivityList(function (e) {
                    if (d.invite_friends_info_success_event(), e) {
                        cc.sys.localStorage.setItem(i, JSON.stringify(e));
                        var t = this.setData(e);
                        this.task_layout.getComponent("list-adapter").refreshListView(t), cc.log("this.task_layout.getChildren().length=" + this.task_layout.getChildren().length), this.hint_label.active = this.task_layout.getChildren().length < 4
                    }
                }.bind(this), function (e) {
                    e.code && d.invite_friends_info_err_event(e.code), this.hint_label.active = !0
                }.bind(this))
            },
            setData: function (e) {
                if (e && !(e.length <= 0)) {
                    var t = playerManager.getObjData("dailyTask"), a = t.taskProgress;
                    return cc.log("dailyTask=" + JSON.stringify(t)), u.isOneDay(t.taskTime, Date.parse(new Date)) ? e.map(function (e) {
                        "2" == e.task_obj_type && (e.reward_num = 1, e.do_num = 1);
                        for (var t = 0; t < a.length; t++) if ("5" != e.task_obj_type && a[t].task_id == e.task_id) {
                            e.reward_num = a[t].reward_num, e.do_num = a[t].do_num;
                            break
                        }
                    }) : (playerManager.setObjData("dailyTask", {
                        taskTime: Date.parse(new Date),
                        taskProgress: a
                    }), e.map(function (e) {
                        "2" == e.task_obj_type && (e.reward_num = 1, e.do_num = 1)
                    })), e
                }
            },
            start: function () {
                this.progress.totalLength = cc.director.getWinSize().width - 240, cc.log("totalL=" + this.progress.totalLength)
            },
            addPoint: function (e) {
                var t = playerManager.getObjData("dailyPoint"), a = t.point + e;
                this.point_label.string = "<i>" + a + "</i>", cc.log("point=" + a);
                var n = t.rewardState;
                if (a < 100) {
                    for (var i = 0; i < h.length; i++) if (a < h[i]) {
                        var r = 0 < i ? h[i - 1] : 0, o = .25 / (h[i] - r) * (a - r) + .25 * i;
                        cc.log("progress=" + o), this.progress.progress = o;
                        break
                    }
                } else this.progress.progress = 1;
                for (var s = n.length; s < h.length; s++) h[s] <= a && n.push(!1);
                for (var c = 0; c < n.length; c++) n[c] ? this.giftState(c, !0, !0) : this.giftState(c, !0, !1);
                playerManager.setObjData("dailyPoint", {point: a, rewardState: n})
            },
            giftClick: function (e, t) {
                d.gift_claim_event(t);
                var a = playerManager.getNumData("UnlockLevel") - 4;
                a = 0 <= a ? a : 0;
                var n = playerManager.getObjData("Price" + a);
                n = u.galaxyMut(n, g[t]), playerManager.addNumData("Coin", n), cc.director.emit("updateCoin");
                var i = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                i.showToast("+" + u.unit_format(n) + " coins"), this.giftState(t, !0, !1);
                var r = playerManager.getObjData("dailyPoint"), o = r.point, s = r.rewardState;
                if (s[t] = !0, 4 == s.length) {
                    var c = !0;
                    if (s.map(function (e) {
                        e || (c = !1)
                    }), c) {
                        o -= 100, s = [];
                        for (var l = 0; l < h.length; l++) this.giftState(l, !1, !0)
                    }
                }
                playerManager.setObjData("dailyPoint", {point: o, rewardState: s}), this.addPoint(0), i.setGiftPoint()
            },
            giftState: function (e, t, a) {
                this.gifts_btns[e].getComponent("gift-node").setState(t, a), this.gifts_btns[e].getComponent(cc.Button).interactable = !a
            },
            closeClick: function () {
                this.node.destroy()
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    "daily-node": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7ab54DNQcdB/7Y3WiDKITmS", "daily-node");
        var n = e("instant-util"), i = e("number-util"), r = logCenter, o = 2, s = 1, c = 2, l = 3, u = 4,
            d = 5, h = 0, g = 1, p = 2;
        cc.Class({
            extends: cc.Component,
            properties: {
                title_label: {default: null, type: cc.Label},
                des_label: {default: null, type: cc.Label},
                reward_label: {default: null, type: cc.Label},
                reward_layout: {default: null, type: cc.Node},
                point_label: {default: null, type: cc.Label},
                coins_label: {default: null, type: cc.Label},
                count_label: {default: null, type: cc.Label},
                task_sprite: {default: null, type: cc.Sprite},
                task_icons: {default: [], type: cc.SpriteFrame},
                btn_states: {default: [], type: cc.SpriteFrame},
                btn_bg: {default: null, type: cc.Sprite},
                btn_node: {default: null, type: cc.Button},
                btn_label: {default: null, type: cc.Label},
                btn_count_down: {default: null, type: cc.Node},
                _task: null,
                _adTimeCd: 0,
                _point: null,
                _price: null,
                _btnState: null,
                _totalProgress: null,
                _doNum: null,
                _rewardNum: null,
                _callback: null
            },
            onLoad: function () {
            },
            start: function () {
            },
            setData: function (e, t) {
                this._task = e, t && (this._callback = t), this.saveData(e), this._totalProgress = parseInt(e.total_task_times), this._doNum = parseInt(e.do_num ? e.do_num : 0), this._rewardNum = parseInt(e.reward_num), this.title_label.string = e.task_title, this.des_label.string = e.task_desc, e.reward.map(function (e) {
                    e.reward_type == o && (this._point = parseInt(e.number), this.point_label.string = e.number + " points")
                }.bind(this));
                var a = playerManager.getNumData("UnlockLevel") - 4;
                a = 0 <= a ? a : 0, this._price = playerManager.getObjData("Price" + a), this.coins_label.string = i.unit_format(this._price);
                var n = parseInt(e.task_obj_type);
                switch (this.task_sprite.spriteFrame = this.task_icons[n - 1], this.btn_node.interactable = !0, cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").setGiftPoint(), n) {
                    case s:
                        this.count_label.node.active = 0 < e.task_times, this.count_label.string = "(" + e.task_times + ")", 0 < this._rewardNum ? (this._btnState = h, this.btn_bg.spriteFrame = this.btn_states[h], this.btn_label.string = "Claim") : (this._btnState = p, this.btn_bg.spriteFrame = this.btn_states[p], this.btn_label.string = "Request");
                        break;
                    case d:
                        this.count_label.node.active = 0 < this._rewardNum, this.count_label.string = "(" + this._rewardNum + ")", 0 < this._rewardNum ? (this._btnState = h, this.btn_bg.spriteFrame = this.btn_states[h], this.btn_label.string = "Claim") : (this._btnState = p, this.btn_bg.spriteFrame = this.btn_states[p], this.btn_label.string = "Request"), this.btn_node.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1.05, 1.05), cc.scaleTo(.2, 1, 1), cc.delayTime(.5))));
                        break;
                    case l:
                        0 < this._rewardNum ? (this._btnState = h, this.btn_bg.spriteFrame = this.btn_states[h], this.btn_label.string = "Claim") : this._doNum >= this._totalProgress ? (this._btnState = g, this.btn_bg.spriteFrame = this.btn_states[g], this.btn_node.interactable = !1, this.btn_label.string = "Tomorrow") : (this._btnState = p, this.btn_bg.spriteFrame = this.btn_states[p], this.btn_label.string = "Watch", this.startCountDown(l));
                        break;
                    case u:
                        this.coins_label.string = i.unit_format(i.galaxyMut(this._price, .75)), 0 < this._rewardNum ? (this._btnState = h, this.btn_bg.spriteFrame = this.btn_states[h], this.btn_label.string = "Claim") : this._doNum >= this._totalProgress ? (this._btnState = g, this.btn_bg.spriteFrame = this.btn_states[g], this.btn_node.interactable = !1, this.btn_label.string = "Tomorrow") : (this._btnState = p, this.btn_bg.spriteFrame = this.btn_states[h], this.btn_label.string = "Claim", this.startCountDown(u));
                        break;
                    case c:
                        this.coins_label.string = i.unit_format(i.galaxyMut(this._price, .5)), 0 < this._rewardNum ? (this._btnState = h, this.btn_bg.spriteFrame = this.btn_states[h], this.btn_label.string = "Claim") : (this._btnState = g, this.btn_bg.spriteFrame = this.btn_states[g], this.btn_node.interactable = !1, this.btn_label.string = "Tomorrow");
                        break;
                    default:
                        this.node.removeFromParent(!0)
                }
            },
            claimClick: function () {
                var e = parseInt(this._task.task_obj_type);
                if (this._btnState == h) {
                    r.task_btn_claim_event(e), this._callback(this._point);
                    var t = 0;
                    switch (e) {
                        case s:
                        case d:
                            t = this._price, server_util.receiveTask(this._task.task_id), this._rewardNum--, this._task.reward_num = this._rewardNum, this.setData(this._task);
                            break;
                        case l:
                            0 < this._rewardNum && (t = i.galaxyMut(this._price, this._rewardNum), this._rewardNum = 0, this._task.reward_num = this._rewardNum, this.setData(this._task));
                            break;
                        case u:
                            0 < this._rewardNum && (t = i.galaxyMut(this._price, .75 * this._rewardNum), this._rewardNum = 0, this._task.reward_num = this._rewardNum, this.setData(this._task));
                            break;
                        case c:
                            t = i.galaxyMut(this._price, .5), this._rewardNum--, this._task.reward_num = this._rewardNum, this.setData(this._task)
                    }
                    playerManager.addNumData("Coin", t), cc.director.emit("updateCoin"), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("+" + i.unit_format(t) + " coins")
                } else if (this._btnState == p) switch (r.task_btn_start_event(e), e) {
                    case s:
                    case d:
                        this.inviteClick();
                        break;
                    case l:
                        this.watchVideo();
                        break;
                    case u:
                        this.shareClick()
                }
            },
            watchVideo: function () {
                r.watch_video_event("");
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                n.showRewardAd(function () {
                    cc.log("showAd success"), t.setUserCenterEvent("ad"), r.watch_video_success_event();
                    var e = 600;
                    this._task.config && (e = parseInt(this._task.config.interval)), this.setCountDownTime(e, l), this._rewardNum++, this._doNum++, this._task.reward_num = this._rewardNum, this._task.do_num = this._doNum, cc.log("this._task.reward_num=" + this._task.reward_num), this.setData(this._task), this.claimClick()
                }.bind(this), function () {
                    cc.log("RewardAd load err"), t.showToast("No available Ad right now, try again later.")
                })
            },
            startCountDown: function (e) {
                var t = Math.floor((new Date).getTime() / 1e3);
                if (e == l) {
                    if (t - (n = playerManager.getNumData("ADTime")) < 0) return;
                    var a = playerManager.getNumData("ADTimeCD") - (t - n);
                    this._adTimeCd = a
                } else if (e == u) {
                    var n;
                    if (t - (n = playerManager.getNumData("ShareTime")) < 0) return;
                    a = playerManager.getNumData("ShareTimeCD") - (t - n);
                    this._adTimeCd = a
                }
                cc.log("type=" + e + "   cd=" + a), 0 < this._adTimeCd && (this._btnState = g, this.btn_bg.spriteFrame = this.btn_states[g], this.btn_node.interactable = !1, this.btn_count_down.getComponent("count-down-node").setData(this._adTimeCd, function (e) {
                    0 == (this._adTimeCd = e) && (cc.log("time=0"), this.setData(this._task))
                }.bind(this)))
            },
            setCountDownTime: function (e, t) {
                t == l ? (playerManager.setNumData("ADTime", Math.floor((new Date).getTime() / 1e3)), playerManager.setNumData("ADTimeCD", e)) : t == u && (playerManager.setNumData("ShareTime", Math.floor((new Date).getTime() / 1e3)), playerManager.setNumData("ShareTimeCD", e))
            },
            shareClick: function () {
                // var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                //     e = {type: globalManager.shareType.playWithFriend, inviter: n.getPlayerID(), rewards: "1"},
                //     t = globalManager.getShareConfig(globalManager.shareType.playWithFriend);
                // n.chooseContext(function () {
                //     a.setUserCenterEvent("share");
                //     var e = 30;
                //     this._task.config && this._task.config.interval && (e = parseInt(this._task.config.interval)), this.setCountDownTime(e, u), this._rewardNum++, this._doNum++, this._task.reward_num = this._rewardNum, this._task.do_num = this._doNum, cc.log("this._task.reward_num=" + this._task.reward_num), this.setData(this._task), this.claimClick()
                // }.bind(this), function (e, t) {
                //     a.showToast(t)
                // }, e, t.text, t.img)
                wxHelper.shareMessage()
            },
            inviteNewClick: function () {
                var e = {type: globalManager.shareType.inviteNewFriend, inviter: n.getPlayerID(), rewards: "1"},
                    t = globalManager.getShareConfig(globalManager.shareType.inviteNewFriend),
                    a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                n.chooseContext(function () {
                    a.setUserCenterEvent("share"), a.showToast("Wait your friends enter game!")
                }.bind(this), function (e, t) {
                    a.showToast(t)
                }, e, t.text, t.img)
            },
            inviteClick: function () {
                var e = {type: globalManager.shareType.inviteFriend, inviter: n.getPlayerID()},
                    t = globalManager.getShareConfig(globalManager.shareType.inviteFriend);
                n.share(function () {
                    cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("Wait your friends enter game!")
                }, t.img, t.text, e)
            },
            saveData: function (e) {
                for (var t = playerManager.getObjData("dailyTask"), a = t.taskProgress, n = t.taskTime, i = [], r = !1, o = 0; o < a.length; o++) if (a[o].task_id == e.task_id) {
                    var s = {task_id: e.task_id, reward_num: e.reward_num, do_num: e.do_num};
                    i.push(s), r = !0
                } else i.push(a[o]);
                if (!r) {
                    var c = {task_id: e.task_id, reward_num: e.reward_num, do_num: e.do_num};
                    i.push(c)
                }
                playerManager.setObjData("dailyTask", {taskTime: n, taskProgress: i})
            },
            onDestroy: function () {
                var e = parseInt(this._task.task_obj_type);
                this.setCountDownTime(this._adTimeCd, e)
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    effectDoubleCoin: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "32b0bPaNXVHcIedhKsEyEii", "effectDoubleCoin");
        cc.Class({
            extends: cc.Component, properties: {effFrame: cc.SpriteFrame}, onLoad: function () {
                for (var i = this, e = 0; e < 120; e++) {
                    (function e() {
                        var t = new cc.Node("effectNode1");
                        t.addComponent(cc.Sprite).spriteFrame = i.effFrame, t.x = 1200 * Math.random() - 600, t.y = 1e3, t.scale = Math.random() + .5, i.node.addChild(t);
                        var a = 5 * Math.random(),
                            n = cc.sequence(cc.delayTime(a), cc.spawn(cc.moveTo(2, t.x, -1e3), cc.repeat(cc.sequence(cc.scaleTo(.2, -1, 1), cc.scaleTo(.2, 1, 1)), 10)), cc.callFunc(function () {
                                e(), t.removeFromParent(!0)
                            }, i));
                        t.runAction(n)
                    })()
                }
            }, update: function (e) {
            }
        }), cc._RF.pop()
    }, {}],
    effectGetCoin: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "cde11yaJ1BOVL7De6jvSoCc", "effectGetCoin");
        cc.Class({
            extends: cc.Component, properties: {effFrame: cc.SpriteFrame}, onLoad: function () {
                for (var e = this, t = 0; t < 10; t++) {
                    var a = new cc.Node("effectNode1");
                    a.addComponent(cc.Sprite).spriteFrame = this.effFrame, a.x = 100 * Math.random() - 50, a.y = 100 * Math.random() - 50, this.node.addChild(a), a.opacity = 0;
                    var n = .2 * Math.random(),
                        i = cc.sequence(cc.delayTime(n), cc.fadeIn(.05), cc.scaleTo(.1, 1.4, 1.4), cc.scaleTo(.1, .5, .5), cc.removeSelf());
                    a.runAction(i)
                }
                this.scheduleOnce(function () {
                    e.node.removeFromParent(!0)
                }, .6)
            }, update: function (e) {
            }
        }), cc._RF.pop()
    }, {}],
    effectUFO: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "057ac5/YXRL2bX0IJQuNYjE", "effectUFO");
        e("instant-util"), e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {UFOEnable: !1, btnNode: cc.Node, moveanim: cc.Animation, ejectanim: cc.Animation},
            onLoad: function () {
                this.alreadySchedule = !1, this.rewarddata = null
            },
            startUFO: function () {
                this.btnNode.active = !0, this.moveanim.stop("UFOmove"), this.moveanim.play("UFOmove", 0)
            },
            removeUFO: function () {
                this.btnNode.active = !1, this.moveanim.stop("UFOmove")
            },
            setUFOEnable: function (e) {
                var t = this;
                1 == (this.UFOEnable = e) && 1 != this.alreadySchedule && (this.alreadySchedule = !0, this.unscheduleAllCallbacks(), this.schedule(function () {
                    1 == t.UFOEnable && t.startUFO()
                }, 60), 1 == t.UFOEnable && t.startUFO())
            },
            animOver: function () {
                this.rewarddata = null
            },
            clickUFO: function () {
                var e = this, t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    a = this.getUFOReward();
                t.showUFOrewardPopUp(a.type, function () {
                    e.removeUFO()
                })
            },
            getUFOReward: function () {
                return null == this.rewarddata && (this.rewarddata = gameData.getUFOReward()), this.rewarddata
            }
        }), cc._RF.pop()
    }, {"instant-util": "instant-util", "number-util": "number-util"}],
    effectupgrade: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "3b943sSI3hAT79Wacl5aYjZ", "effectupgrade");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                this.curcd = 0, this.MaxCD = 1
            }, update: function (e) {
                this.curcd >= this.MaxCD && this.node.destroy(), this.curcd += e
            }
        }), cc._RF.pop()
    }, {}],
    emitter: [function (e, t, a) {
        "use strict";

        function n(e) {
            if (e) return function (e) {
                for (var t in n.prototype) e[t] = n.prototype[t];
                return e
            }(e)
        }

        cc._RF.push(t, "8b01eKYHK9C9LN75m3JCn6O", "emitter"), t.exports = n, (window.EventEmitter = n).prototype.on = n.prototype.addEventListener = function (e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
        }, n.prototype.once = function (e, t) {
            var a = this;

            function n() {
                a.off(e, n), t.apply(this, arguments)
            }

            return this._callbacks = this._callbacks || {}, n.fn = t, this.on(e, n), this
        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var a, n = this._callbacks[e];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks[e], this;
            for (var i = 0; i < n.length; i++) if ((a = n[i]) === t || a.fn === t) {
                n.splice(i, 1);
                break
            }
            return this
        }, n.prototype.emit = function (e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1), a = this._callbacks[e];
            if (a) for (var n = 0, i = (a = a.slice(0)).length; n < i; ++n) a[n].apply(this, t);
            return this
        }, n.prototype.listeners = function (e) {
            return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
        }, n.prototype.hasListeners = function (e) {
            return !!this.listeners(e).length
        }, cc._RF.pop()
    }, {}],
    expNode: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7cf3fqS98lEu79wpR/mDOb9", "expNode");
        var n = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {expProgress: cc.ProgressBar, expLabel: cc.Label},
            onLoad: function () {
                var e = this, a = this;
                this.customEvent = {updateExp: "refreshExp"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t();
                this.refreshExp()
            },
            onDestroy: function () {
                for (var e in this.customEvent) cc.director.off(e)
            },
            refreshExp: function () {
                var e = gameData.getPlayerLevel(playerManager.getObjData("PlayerExp")), t = n.galaxyMut(e.curexp, 100),
                    a = n.galaxyDiv(t, e.nextexp);
                a = parseInt(a), this.expProgress.progress = a / 100, this.expLabel.string = e.level + 1 + ""
            }
        }), cc._RF.pop()
    }, {"number-util": "number-util"}],
    "fbinstant-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "0f0380alQhPE6h2GVgM4q4j", "fbinstant-util"), e("globalManager");
        var l = "data:image/jpeg;base64,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",
            u = "Can you surpass me?";
        globalManager.RewardAdId, e("number-util");
        t.exports = {
            getSupportedAPIs: function () {
                return "undefined" == typeof FBInstant ? [] : FBInstant.getSupportedAPIs()
            }, getPlayerID: function () {
                if ("undefined" == typeof FBInstant) return "13524679";
                var e = FBInstant.player.getID();
                return cc.log("playerID=" + e), e
            }, getPlayerInfo: function (e) {
                if ("undefined" != typeof FBInstant) {
                    var t = {};
                    t.playerId = FBInstant.player.getID(), t.playerName = FBInstant.player.getName(), t.photo = FBInstant.player.getPhoto(), e && e(t)
                } else e && e({
                    playerId: "13524679",
                    playerName: "bibibabibobi",
                    photo: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/32713932_168979427273388_4735634539752194048_n.jpg?_nc_cat=0&oh=3187ef52a84de863937b566048026fbb&oe=5C0CE0C5"
                })
            }, getPlayerFrineds: function (n) {
                if ("undefined" != typeof FBInstant) {
                    var i = [];
                    FBInstant.player.getConnectedPlayersAsync().then(function (e) {
                        for (var t in e) {
                            var a = e[t];
                            i.push[{id: a.getID(), name: a.getName()}]
                        }
                        n && n(i)
                    })
                } else n && n([{id: "123456789test1", name: "zyq"}, {id: "123456789test", name: "bibibabibobi"}])
            }, getContextLeaderboard: function (t) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync(this.getLeaderboardName()).then(function (e) {
                    return e.getEntriesAsync()
                }).then(function (e) {
                    t(e)
                })
            }, getFriendsLeaderboard: function (t) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync("global-leaderboard").then(function (e) {
                    return e.getConnectedPlayerEntriesAsync()
                }).then(function (e) {
                    cc.log("getFriendsLeaderboard=" + JSON.stringify(e)), t(e)
                })
            }, getSelfLeaderboard: function (t) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync(this.getLeaderboardName()).then(function (e) {
                    return e.getPlayerEntryAsync()
                }).then(function (e) {
                    t(e)
                })
            }, setLeaderboardScore: function (t, a) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync("global-leaderboard").then(function (e) {
                    return cc.log("getLeaderboardAsync success"), e.setScoreAsync(t, a)
                }).then(function (e) {
                })
            }, getLeaderboardName: function () {
                if ("undefined" != typeof FBInstant) return cc.log("getLeaderboardName = friend-leaderboard." + FBInstant.context.getID()), "friend-leaderboard." + FBInstant.context.getID()
            }, chooseContext: function (a, n, i, r, o) {
                // if ("undefined" != typeof FBInstant) {
                //     var s = this, c = playerManager.getObjData("sharedContextIds");
                //     cc.log("sharedContextIds=" + JSON.stringify(c));
                //     var e = {};
                //     globalManager.publicConfig && (globalManager.publicConfig.UpdateContextFilter && (e.filters = [globalManager.publicConfig.UpdateContextFilter]), globalManager.publicConfig.UpdateContextMinSize && (e.minSize = parseInt(globalManager.publicConfig.UpdateContextMinSize))), cc.log("filter=" + JSON.stringify(e)), FBInstant.context.chooseAsync(e).then(function () {
                //         var e = s.getContextID();
                //         e ? s.isSharedToday(e) ? n("limit", "Only one time each group in 2 hours.") : (c[e] = Date.parse(new Date), playerManager.setObjData("sharedContextIds", c), s.updateContext(a, n, i, r, o)) : n("limit", "Only one time each group in 2 hours.")
                //     }, function (e) {
                //         if (cc.log("chooseContext=" + JSON.stringify(e)), "SAME_CONTEXT" == e.code) {
                //             var t = s.getContextID();
                //             s.isSharedToday(t) ? n("limit", "Only one time each group in 2 hours.") : (c[t] = Date.parse(new Date), playerManager.setObjData("sharedContextIds", c), s.updateContext(a, n, i, r, o))
                //         } else n()
                //     })
                // } else a && a()
                wxHelper.shareMessage(function () {
                    a && a();
                })
            }, isSharedToday: function (e) {
                var t = playerManager.getObjData("sharedContextIds");
                if (t) for (var a in t) {
                    if (a == e) return Date.parse(new Date) - t[a] < 72e5
                }
                return !1
            }, updateContext: function (e, t, a, n, i, r, o) {
                if ("undefined" != typeof FBInstant) {
                    if (o || (this.logEvent("all_share_click"), this.logEvent("user_value_start")), !n || !i) {
                        var s = globalManager.getShareConfig("common");
                        n = n || s.text, i = i || s.img
                    }
                    var c = this;
                    FBInstant.updateAsync({
                        action: "CUSTOM",
                        cta: "Play",
                        image: i || l,
                        text: {default: n || u},
                        template: "play_turn",
                        data: a || {type: "update"},
                        strategy: r || "IMMEDIATE",
                        notification: "NO_PUSH"
                    }).then(function () {
                        cc.log("updateContext success"), o || c.logEvent("user_value_success"), e && e()
                    }, function (e) {
                        cc.log("updateContext fail=" + JSON.stringify(e)), t && t()
                    })
                }
            }, createContext: function (e, t) {
                "undefined" != typeof FBInstant && FBInstant.context.createAsync(this.getPlayerID()).then(function () {
                    cc.log("ContextID=" + FBInstant.context.getID()), e()
                }, function () {
                    cc.log("createContext fail"), t()
                })
            }, share: function (t, e, a, n) {
                if ("undefined" != typeof FBInstant) {
                    if (!a || !e) {
                        var i = globalManager.getShareConfig("common");
                        a = a || i.text, e = e || i.img
                    }
                    this.logEvent("all_share_click"), this.logEvent("user_value_start"), FBInstant.shareAsync({
                        intent: "REQUEST",
                        image: e || l,
                        text: a || u,
                        data: n || {type: "share"}
                    }).then(function (e) {
                        t(e)
                    })
                }
            }, requestInterstitialAd: function (e, t) {
                if ("undefined" != typeof FBInstant) {
                    var a = this;
                    a.interstitial = null, FBInstant.getInterstitialAdAsync(globalManager.InterstitialAdId).then(function (e) {
                        if (void 0 !== e) return (a.interstitial = e).loadAsync()
                    }).then(function () {
                        cc.log("requestInterstitialAd success"), t && t()
                    }).catch(function (e) {
                        cc.log("requestInterstitialAd err  msg=" + JSON.stringify(e))
                    })
                }
            }, showInterstitialAd: function (e, t, a) {
                var n = this, i = a ? "secondPicAd" : "picAd";
                a || (n.logEvent("all_ad_click", null, {type: i}), n.logEvent("user_value_start")), this.interstitial ? this.interstitial.showAsync().then(function () {
                    cc.log("showInterstitialAd success"), a || (n.logEvent("all_ad_click_success", null, {type: i}), n.logEvent("user_value_success")), n.interstitial = null, e && e(), n.requestInterstitialAd()
                }).catch(function (e) {
                    cc.log("showInterstitialAd err  msg=" + JSON.stringify(e)), t && t(), n.requestInterstitialAd()
                }) : (cc.log("showInterstitialAd err  rewardedVideo=null"), t && t(), n.requestInterstitialAd())
            }, requestRewardAd: function (e, t) {
                if ("undefined" == typeof FBInstant) return cc.log("requestRewardAd"), this.isRequestVideo = !0, this.rewardedVideo = {}, void setTimeout(function () {
                    this.isRequestVideo = !1, this.requestVideoCallback && this.requestVideoCallback(!0)
                }.bind(this), 1e4);
                var a = this;
                FBInstant.getRewardedVideoAsync(globalManager.RewardAdId).then(function (e) {
                    if (void 0 !== e) return a.rewardedVideo = e, a.isRequestVideo = !0, a.logEvent("ad_request_start"), e.loadAsync()
                }).then(function () {
                    cc.log("requestRewardAd success"), a.logEvent("ad_request_success"), a.isRequestVideo = !1, a.requestVideoCallback && a.requestVideoCallback(!0), e && e()
                }).catch(function (e) {
                    cc.log("requestRewardAd err  msg=" + JSON.stringify(e)), a.isRequestVideo = !1, a.requestVideoCallback && a.requestVideoCallback(!1), t && t()
                })
            }, setRequestAdEvent: function (e, t) {
            }, getRewardedVideoAsync: function (t, a, e) {
                if ("undefined" != typeof FBInstant) {
                    var n = this;
                    n.rewardedVideo = null, FBInstant.getRewardedVideoAsync(t).then(function (e) {
                        if (void 0 !== e) return (n.rewardedVideo = e).loadAsync()
                    }).then(function () {
                        e && e()
                    }).catch(function (e) {
                        cc.log("requestRewardAd err =" + t + "   msg=" + e), n.rewardedVideo = null, n.isRequestVideo = !1, n.requestVideoCallback && n.requestVideoCallback(!0), a && a()
                    })
                } else e && e()
            }, showRewardAd: function (t, a, e) {
                console.log("showRewardAd==", this.node);
                // if ("undefined" != typeof FBInstant) {
                //     var n = this;
                //     e || (n.logEvent("all_ad_click"), n.logEvent("user_value_start")), n.rewardedVideo ? n.isRequestVideo ? (n.requestVideoCallback = function (e) {
                //         (null != n.waitNode || cc.isValid(n.waitNode)) && (n.waitNode.destroy(), n.waitNode = null, n.requestVideoCallback = null, clearTimeout(n.waitTimeId), e ? a && a() : n.showRewardAd(t, a, !0), n.requestVideoCallback = null, clearTimeout(n.waitTimeId))
                //     }, cc.loader.loadRes("loading/loading-node", function (e, t) {
                //         (null != n.waitNode || cc.isValid(n.waitNode)) && n.waitNode.destroy(), n.waitNode = cc.instantiate(t), n.waitNode.parent = cc.director.getScene().getChildByName("Canvas"), cc.log("load prefab"), n.waitTimeId = setTimeout(function () {
                //             n.requestVideoCallback && n.requestVideoCallback(!1)
                //         }, 3900)
                //     })) : n.rewardedVideo.showAsync().then(function () {
                //         cc.log("showRewardAd success"), n.logEvent("user_value_success"), n.logEvent("all_ad_click_success", null, {type: "rewardAd"}), n.rewardedVideo = null, t && t(), n.requestRewardAd()
                //     }).catch(function (e) {
                //         n.requestRewardAd(), n.logEvent("all_ad_click_fail", null, {msg: e}), a && a(e)
                //     }) : (cc.log("showRewardAd err  rewardedVideo=null"), n.logEvent("all_ad_click_fail", null, {msg: "null"}), n.requestRewardAd(), a && a())
                // } else t && t()
                wxHelper.showVideoAd(function () {
                    t && t();
                }, function () {
                    a && a();
                })
            }, isRewardAdReady: function () {
                return true;
                // return !!this.rewardedVideo
            }, setData: function (e) {
                // if ("undefined" != typeof FBInstant) {
                //     var t = this;
                //     FBInstant.player.setDataAsync(e).then(function () {
                //         cc.log("setData success")
                //     }).catch(function (e) {
                //         cc.log("fb_set_data_fail:" + JSON.stringify(e)), t.logEvent("fb_set_data_fail", null, {msg: e})
                //     })
                // }
                wxHelper.saveLocalData(e);
            }, getData: function (e, t) {
                // if ("undefined" != typeof FBInstant) {
                //     var a = this;
                //     FBInstant.player.getDataAsync(e).then(function (e) {
                //         cc.log("load data success = " + JSON.stringify(e)), t && t(e)
                //     }).catch(function (e) {
                //         cc.log("get data err"), a.logEvent("fb_get_data_fail", null, {msg: e})
                //     })
                // }
                var e = wxHelper.getLocalData(e);
                t && t(e)
            }, getStats: function (e, t) {
                "undefined" != typeof FBInstant && FBInstant.player.getStatsAsync(e).then(function (e) {
                    t && t(e)
                })
            }, setStats: function (e, t) {
                "undefined" != typeof FBInstant && FBInstant.player.setStatsAsync(e).then(function () {
                    t && t()
                })
            }, incrementStats: function (e, t) {
                "undefined" != typeof FBInstant && FBInstant.player.incrementStatsAsync(e).then(function (e) {
                    t && t(e)
                })
            }, quite: function () {
                "undefined" != typeof FBInstant && FBInstant.quit()
            }, pause: function (e) {
                "undefined" != typeof FBInstant && FBInstant.onPause(function () {
                    e && e()
                })
            }, logEvent: function (e, t, a) {
                if ("undefined" != typeof FBInstant) return FBInstant.logEvent(e, t, a)
            }, getContextID: function () {
                if ("undefined" != typeof FBInstant) {
                    var e = FBInstant.context.getID();
                    return cc.log("getContextID=" + e), e
                }
            }, getType: function () {
                if ("undefined" != typeof FBInstant) {
                    var e = FBInstant.context.getType();
                    return cc.log("getType=" + e), e
                }
            }, startGame: function (e) {
                "undefined" != typeof FBInstant ? FBInstant.startGameAsync().then(function () {
                    e()
                }) : e && e()
            }, getFriends: function (a) {
                if ("undefined" != typeof FBInstant) {
                    var n = this;
                    FBInstant.player.getConnectedPlayersAsync().then(function (e) {
                        var t = [];
                        e.map(function (e) {
                            cc.log("get ig friends list = " + e.getID()), t.push({
                                id: e.getID(),
                                name: e.getName(),
                                photo: e.getPhoto()
                            })
                        }), n.getPlayerInfo(function (e) {
                            cc.log("get ig friends list = " + e.playerName), t.push({
                                id: e.playerId,
                                name: e.playerName,
                                photo: e.photo
                            }), a && a(t)
                        })
                    })
                } else a && a([{id: "123456789test1", name: "zyq"}, {id: "123456789test", name: "bibibabibobi"}])
            }, getEntryPointData: function () {
                if ("undefined" != typeof FBInstant) return FBInstant.getEntryPointData()
            }, createShortcut: function (t) {
                "undefined" != typeof FBInstant && (cc.log("call createShortcut"), FBInstant.canCreateShortcutAsync().then(function (e) {
                    cc.log("canCreateShortcut=" + e), e && FBInstant.createShortcutAsync().then(function () {
                        t(), cc.sys.localStorage.setItem("createShortcut_success", 1)
                    }).catch(function () {
                    })
                }))
            }, getPlatform: function () {
                return "undefined" == typeof FBInstant ? "WEB" : (cc.log("FBInstant.getPlatform()=" + FBInstant.getPlatform()), FBInstant.getPlatform())
            }, customImageShare: function (a, n, i, e) {
                var r = this;
                "undefined" != typeof FBInstant ? cc.loader.load(FBInstant.player.getPhoto(), function (e, t) {
                    n && n(t), cc.director.getScene().addChild(a), a.setLocalZOrder(-1), r.captureScreen(a, a.width, a.height, function (e, t) {
                        a.removeFromParent(!0), i && i(e)
                    })
                }) : i && i()
            }, captureScreen: function (e, o, s, c, t, l) {
                var a = window.gl, n = e._sgNode || e, u = a || cc._renderContext;
                o = Math.floor(o), s = Math.floor(s);
                var d = new cc.RenderTexture(o, s, cc.Texture2D.PIXEL_FORMAT_RGBA8888, cc.sys.isBrowser ? u.DEPTH_STENCIL : u.DEPTH24_STENCIL8_OES);
                cc.sys.isBrowser && d.setAutoDraw(!0);
                var h = e.y;
                e.scaleY = -e.scaleY, e.y = s;
                var i = cc.macro.ENABLE_CULLING;
                cc.macro.ENABLE_CULLING = !1, d.beginWithClear(0, 0, 0, 255, 0, 0), n.visit(), d.end(), cc.macro.ENABLE_CULLING = i, e.scaleY = -e.scaleY, e.y = h, cc.sys.isBrowser && (d.scaleY = -1, t && t());
                var g = "";
                cc.sys.isBrowser ? setTimeout(function () {
                    try {
                        var t = null, a = null;
                        if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) g = d.sprite.getTexture().getHtmlElementObj().toDataURL("image/png"); else {
                            var e = d.sprite.getTexture()._glID;
                            h = s - (l = l || 0), t = u.getParameter(u.FRAMEBUFFER_BINDING);
                            var n = u.createFramebuffer();
                            a = n, u.bindFramebuffer(u.FRAMEBUFFER, n), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, e, 0);
                            var i = new Uint8Array(o * h * 4);
                            u.readPixels(0, 0, o, h, u.RGBA, u.UNSIGNED_BYTE, i), u.deleteFramebuffer(n), a = null;
                            var r = document.createElement("canvas");
                            r.id = "captureCanvas", r.width = o, r.height = h, r.getContext("2d").putImageData(new ImageData(Uint8ClampedArray.from(i), o, h), 0, 0), g = r.toDataURL("image/png")
                        }
                        c && c(g, d)
                    } catch (e) {
                        console.log(e), a && (u.deleteFramebuffer(a), a = null), t && (u.bindFramebuffer(u.FRAMEBUFFER, t), t = null), c && c(g, d)
                    }
                }, 0) : c && c(g, d)
            }, switchGameAsync: function (e, t, a) {
                "undefined" != typeof FBInstant && FBInstant.switchGameAsync(e, a).catch(function (e) {
                    t && t(e)
                })
            }, canSubscribeBotAsync: function (t) {
                "undefined" != typeof FBInstant ? FBInstant.player.canSubscribeBotAsync().then(function (e) {
                    cc.log("can_subscribe=" + e), t && t(e)
                }).catch(function (e) {
                    t && t(!1)
                }) : t && t(!0)
            }, getLocale: function () {
                return "undefined" == typeof FBInstant ? "en_US" : FBInstant.getLocale()
            }, subscribeBotAsync: function (t, a) {
                "undefined" != typeof FBInstant ? FBInstant.player.canSubscribeBotAsync().then(function (e) {
                    cc.log("can_subscribe=" + e), e && FBInstant.player.subscribeBotAsync().then(function () {
                        cc.log(" subscribed to the bot"), t && t(), cc.sys.localStorage.setItem("subscribeBot_success", 1)
                    }).catch(function (e) {
                        cc.log(" subscription failure"), a && a()
                    })
                }) : t && t()
            }
        }, cc._RF.pop()
    }, {globalManager: "globalManager", "number-util": "number-util"}],
    "fish-cfg": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "40244FMFCRPPbAWyL8iSG95", "fish-cfg");
        e("number-util");
        (function () {
            if (window.fish_data) t.exports = window.fish_data; else {
                var e = [{
                    level: 1,
                    price: "100",
                    coinsec: "5",
                    coinround: "26",
                    time: 5.2,
                    boxlimit: 1,
                    combireward: "0",
                    combiexp: "0",
                    name: "董事会",
                    rise: .07
                }, {
                    level: 2,
                    price: "1500",
                    coinsec: "10",
                    coinround: "52",
                    time: 5.2,
                    boxlimit: 1,
                    combireward: "0",
                    combiexp: "2",
                    name: "帐篷",
                    rise: .175
                }, {
                    level: 3,
                    price: "4800",
                    coinsec: "20",
                    coinround: "105",
                    time: 5.25,
                    boxlimit: 1,
                    combireward: "0",
                    combiexp: "4",
                    name: "舱室",
                    rise: .175
                }, {
                    level: 4,
                    price: "14880",
                    coinsec: "42",
                    coinround: "210",
                    time: 5,
                    boxlimit: 1,
                    combireward: "0",
                    combiexp: "8",
                    name: "富豪舱",
                    rise: .175
                }, {
                    level: 5,
                    price: "46130",
                    coinsec: "89",
                    coinround: "420",
                    time: 4.7191011,
                    boxlimit: 2,
                    combireward: "1000",
                    combiexp: "16",
                    name: "农舍",
                    rise: .175
                }, {
                    level: 6,
                    price: "147616",
                    coinsec: "187",
                    coinround: "840",
                    time: 4.4919786,
                    boxlimit: 2,
                    combireward: "2000",
                    combiexp: "32",
                    name: "别墅",
                    rise: .175
                }, {
                    level: 7,
                    price: "472371",
                    coinsec: "394",
                    coinround: "1679",
                    time: 4.2614213,
                    boxlimit: 2,
                    combireward: "5000",
                    combiexp: "64",
                    name: "粮仓",
                    rise: .175
                }, {
                    level: 8,
                    price: "1511000",
                    coinsec: "830",
                    coinround: "3360",
                    time: 4.0481928,
                    boxlimit: 2,
                    combireward: "15000",
                    combiexp: "128",
                    name: "便利店",
                    rise: .175
                }, {
                    level: 9,
                    price: "4837000",
                    coinsec: "1746",
                    coinround: "6724",
                    time: 3.8510882,
                    boxlimit: 3,
                    combireward: "44000",
                    combiexp: "256",
                    name: "精品店",
                    rise: .175
                }, {
                    level: 10,
                    price: "15478000",
                    coinsec: "3677",
                    coinround: "13457",
                    time: 3.659777,
                    boxlimit: 3,
                    combireward: "136000",
                    combiexp: "512",
                    name: "酒店",
                    rise: .175
                }, {
                    level: 11,
                    price: "49531000",
                    coinsec: "7740",
                    coinround: "26859",
                    time: 3.470155,
                    boxlimit: 3,
                    combireward: "421000",
                    combiexp: "1024",
                    name: "鞋厂",
                    rise: .175
                }, {
                    level: 12,
                    price: "158501000",
                    coinsec: "16296",
                    coinround: "53776",
                    time: 3.2999509,
                    boxlimit: 3,
                    combireward: "1306000",
                    combiexp: "2048",
                    name: "电影院",
                    rise: .175
                }, {
                    level: 13,
                    price: "507204000",
                    coinsec: "34307",
                    coinround: "107380",
                    time: 3.1299735,
                    boxlimit: 4,
                    combireward: "4178000",
                    combiexp: "4096",
                    name: "教堂",
                    rise: .175
                }, {
                    level: 14,
                    price: "1623055000",
                    coinsec: "72224",
                    coinround: "215229",
                    time: 2.9800205,
                    boxlimit: 4,
                    combireward: "13786000",
                    combiexp: "8192",
                    name: "富教会",
                    rise: .175
                }, {
                    level: 15,
                    price: "5193000000",
                    coinsec: "152031",
                    coinround: "430306",
                    time: 2.8303833,
                    boxlimit: 4,
                    combireward: "41939000",
                    combiexp: "16384",
                    name: "大富教会",
                    rise: .175
                }, {
                    level: 16,
                    price: "16620000000",
                    coinsec: "320026",
                    coinround: "861092",
                    time: 2.6906939,
                    boxlimit: 5,
                    combireward: "130010000",
                    combiexp: "32768",
                    name: "市政厅",
                    rise: .175
                }, {
                    level: 17,
                    price: "52640000000",
                    coinsec: "673655",
                    coinround: "1718000",
                    time: 2.5502668,
                    boxlimit: 5,
                    combireward: "403033000",
                    combiexp: "65536",
                    name: "办公中心",
                    rise: .175
                }, {
                    level: 18,
                    price: "168448000000",
                    coinsec: "1418000",
                    coinround: "3447000",
                    time: 2.4308886,
                    boxlimit: 5,
                    combireward: "1249000000",
                    combiexp: "131072",
                    name: "住宅综合体",
                    rise: .175
                }, {
                    level: 19,
                    price: "539033600000",
                    coinsec: "2984000",
                    coinround: "6871000",
                    time: 2.3026139,
                    boxlimit: 6,
                    combireward: "3873000000",
                    combiexp: "262144",
                    name: "富户综合楼",
                    rise: .175
                }, {
                    level: 20,
                    price: "1724907000000",
                    coinsec: "6288000",
                    coinround: "13772000",
                    time: 2.1902036,
                    boxlimit: 6,
                    combireward: "12006000000",
                    combiexp: "524288",
                    name: "星块",
                    rise: .175
                }, {
                    level: 21,
                    price: "5519000000000",
                    coinsec: "13238000",
                    coinround: "27536000",
                    time: 2.0800725,
                    boxlimit: 7,
                    combireward: "39480000000",
                    combiexp: "1048576",
                    name: "摩天大楼",
                    rise: .175
                }, {
                    level: 22,
                    price: "17663000000000",
                    coinsec: "27870000",
                    coinround: "55150000",
                    time: 1.9788303,
                    boxlimit: 7,
                    combireward: "122388000000",
                    combiexp: "2097152",
                    name: "螺旋大厦",
                    rise: .175
                }, {
                    level: 23,
                    price: "56773000000000",
                    coinsec: "58666000",
                    coinround: "110300000",
                    time: 1.880135,
                    boxlimit: 8,
                    combireward: "318207000000",
                    combiexp: "4194304",
                    name: "装甲大厦",
                    rise: .175
                }, {
                    level: 24,
                    price: "170319000000000",
                    coinsec: "123523000",
                    coinround: "219871000",
                    time: 1.7800005,
                    boxlimit: 9,
                    combireward: "1018000000000",
                    combiexp: "8388608",
                    name: "悉尼歌剧院",
                    rise: .175
                }, {
                    level: 25,
                    price: "545020000000000",
                    coinsec: "260015000",
                    coinround: "439742000",
                    time: 1.6912178,
                    boxlimit: 10,
                    combireward: "3360000000000",
                    combiexp: "16777216",
                    name: "自由女神像",
                    rise: .175
                }, {
                    level: 26,
                    price: "1744000000000000",
                    coinsec: "547500000",
                    coinround: "881500000",
                    time: 1.6100457,
                    boxlimit: 11,
                    combireward: "11425000000000",
                    combiexp: "33554432",
                    name: "埃菲尔铁塔",
                    rise: .175
                }, {
                    level: 27,
                    price: "5581000000000000",
                    coinsec: "1153000000",
                    coinround: "1764000000",
                    time: 1.5299219,
                    boxlimit: 12,
                    combireward: "38845000000000",
                    combiexp: "67108864",
                    name: "阿拉伯伯杰酒店",
                    rise: .175
                }, {
                    level: 28,
                    price: "17859000000000000",
                    coinsec: "2427000000",
                    coinround: "3518000000",
                    time: 1.4495262,
                    boxlimit: 13,
                    combireward: "89641000000000",
                    combiexp: "134217728",
                    name: "世纪花园",
                    rise: .175
                }, {
                    level: 29,
                    price: "57149000000000000",
                    coinsec: "5108000000",
                    coinround: "7050000000",
                    time: 1.3801879,
                    boxlimit: 14,
                    combireward: "286853000000000",
                    combiexp: "268435456",
                    name: "皇家玻璃",
                    rise: .175
                }, {
                    level: 30,
                    price: "182878000000000000",
                    coinsec: "10754000000",
                    coinround: "14088000000",
                    time: 1.3100242,
                    boxlimit: 15,
                    combireward: "717312000000000",
                    combiexp: "536870912",
                    name: "马石油双塔",
                    rise: .175
                }];
                window.fish_data = e, t.exports = e
            }
        })(), cc._RF.pop()
    }, {"number-util": "number-util"}],
    "fish-item": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "e63dcFbkOFGwKtFkmnXrxgJ", "fish-item");
        var n = e("number-util"), i = e("instant-util"), r = logCenter,
            o = cc.Enum({Lock: 0, UnLock: 1, Free: 2});
        cc.Class({
            extends: cc.Component,
            properties: {
                img_bg: {default: null, type: cc.Sprite},
                img_fish: {default: null, type: cc.Sprite},
                price_label: {default: null, type: cc.Label},
                brand_node: {default: null, type: cc.Node},
                level_label: {default: null, type: cc.Label},
                lock_btn: {default: null, type: cc.Node},
                unlock_btn: {default: null, type: cc.Node},
                unlock_icon: {default: null, type: cc.Sprite},
                unlock_level: {default: null, type: cc.Label},
                name_level: {default: null, type: cc.Label},
                toast_prefab: {default: null, type: cc.Prefab},
                get_one_btn: {default: null, type: cc.Node},
                get_coin_btn: {default: null, type: cc.Node}
            },
            setData: function (e, t) {
                this.index = e.index, this.itemID = e.index, this.callback = t, this.loadRes(this.index, this.img_fish), this.showBtnState(e.state), this.index <= playerManager.getNumData("UnlockLevel") ? (this.img_fish.node.color = new cc.Color(255, 255, 255), this.img_bg.node.active = !0, this.name_level.string = fish_data[this.index].name, this.level_label.string = e.index + 1 + "", this.brand_node.active = !0) : (this.img_fish.node.color = new cc.Color(0, 0, 0), this.img_fish.node.x = gameData.getHouseStorePos(this.index).posX, this.img_fish.node.y = gameData.getHouseStorePos(this.index).posY, this.img_fish.node.anchorY = 0, this.img_bg.node.active = !1, this.name_level.string = "??????", this.brand_node.active = !1)
            },
            buyClick: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (e.playPurchaseSound(), !e.scriptGamePaodao.isPoolFull()) {
                    var t = fish_data[this.index], a = playerManager.getObjData("Price" + this.index);
                    cc.log("fish.rise=" + JSON.stringify(fish_data[this.index])), 1 == playerManager.coinEnough(a) && (a = n.galaxyMut(a, 1 + t.rise), this.price_label.string = n.unit_format(a), e.scriptGamePaodao.buyItem(this.index, t.price == playerManager.getObjData("Price" + this.index)), playerManager.setNumData("Price" + this.index, a), e.scriptGamePaodao.refreshCoin(), 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial4"))
                }
            },
            getOneClick: function () {
                var e = this, t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                r.watch_video_shop_event(), i.showRewardAd(function () {
                    cc.log("showAd success"), t.setUserCenterEvent("ad"), r.watch_video_shop_success_event(), t.scriptGamePaodao.putItem(e.index), playerManager.setNumData("FreeHouseTime", (new Date).getTime()), e.get_one_btn.active = !1, e.updateBtnState()
                }.bind(this), function () {
                    cc.log("RewardAd load err"), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("No available Ad right now."), e.get_one_btn.active = !1, e.showBtnState(o.UnLock)
                })
            },
            getCoinClick: function () {
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                i.chooseContext(function (e) {
                    a.setUserCenterEvent("share"), a.showToast("share success");
                    var t = playerManager.getObjData("Price" + this.index);
                    t = n.galaxyMut(t, .8), this.price_label.string = n.unit_format(t), playerManager.setNumData("Price" + this.index, t), a.scriptGamePaodao.refreshCoin(), playerManager.setNumData("getCoinTime", Date.parse(new Date)), this.get_coin_btn.active = !1
                }.bind(this), function (e, t) {
                    a.showToast(t)
                }.bind(this))
            },
            updateBtnState: function () {
                var e = playerManager.getNumData("UnlockLevel") - 4;
                e = 0 <= e ? e : 0;
                var t = this.index <= e ? 1 : 0;
                this.showBtnState(t)
            },
            showBtnState: function (e) {
                switch (this.lock_btn.active = !1, this.unlock_btn.active = !1, this.get_one_btn.active = !1, e) {
                    case o.Lock:
                        this.lock_btn.active = !0;
                        var t = this.index + 4 >= fish_data.length ? fish_data.length - 1 : this.index + 4;
                        this.unlock_level.string = this.index + 4 >= fish_data.length ? "?" : t + 1 + "";
                        break;
                    case o.UnLock:
                        this.unlock_btn.active = !0;
                        var a = playerManager.getObjData("Price" + this.index);
                        this.price_label.string = n.unit_format(a);
                        break;
                    case o.Free:
                        this.get_one_btn.active = !0;
                        a = playerManager.getObjData("Price" + this.index);
                        this.price_label.string = n.unit_format(a)
                }
            },
            loadRes: function (e, t) {
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                t.spriteFrame = a.getItemFrame(e);
                var n = gameData.getHousePanelPos(e);
                t.node.x = n.posX * t.node.scaleX, t.node.y = n.posY * t.node.scaleY
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    "fishlist-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7c7e8vBqhdP7IXPso/dQdVG", "fishlist-dialog");
        logCenter, e("instant-util");
        var i = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                coin_label: {default: null, type: cc.Label},
                list_layout: {default: null, type: cc.Node},
                fish_item_prefab: {default: null, type: cc.Prefab},
                scroll_view: cc.ScrollView
            },
            onLoad: function () {
                var e = this, a = this;
                this.customEvent = {updateCoin: "refreshCoin"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t();
                this.setListData(), this.scheduleOnce(function () {
                    var e = playerManager.getNumData("UnlockLevel") - 4;
                    e = 0 <= e ? e : 0, e -= 3;
                    var t = this.list_layout.children[0].height * e + 25 * (e - 1);
                    0 < t && this.scroll_view.scrollToOffset(cc.v2(0, t), .8)
                }.bind(this), 0)
            },
            onDestroy: function () {
                for (var e in this.customEvent) cc.director.off(e)
            },
            setListData: function () {
                this.list_layout.getComponent("list-adapter-auto").removeAllListView(), this.coin_label.string = i.unit_format(playerManager.getObjData("Coin"));
                var e = [], t = playerManager.getNumData("UnlockLevel") - 4;
                t = 0 <= t ? t : 0;
                for (var a = 0; a < fish_data.length; a++) {
                    var n = a <= t ? 1 : 0;
                    1 == this.checkCanFree(a) && (n = 2), e.push({index: a, state: n})
                }
                this.list_layout.getComponent("list-adapter-auto").initListView(this.fish_item_prefab, "fish-item", e)
            },
            refreshListData: function () {
                var e = [], t = playerManager.getNumData("UnlockLevel") - 4;
                t = 0 <= t ? t : 0;
                for (var a = 0; a < fish_data.length; a++) {
                    var n = a <= t ? 1 : 0;
                    1 == this.checkCanFree(a) && (n = 2), e.push({index: a, state: n})
                }
                this.list_layout.getComponent("list-adapter-auto").refreshListView(e)
            },
            checkCanFree: function (e) {
                return !(playerManager.getNumData("UnlockLevel") < 7) && (!(((new Date).getTime() - playerManager.getNumData("FreeHouseTime")) / 1e3 < globalManager.storeFreeHouseCD) && e == playerManager.getNumData("UnlockLevel") - 4 - globalManager.storeFreeHouse)
            },
            refreshCoin: function (e) {
                e = null == e ? i.unit_format(playerManager.getObjData("Coin")) : i.unit_format(e), this.coin_label.string = e
            },
            closeDialog: function () {
                this.node.active = !1, 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial5")
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    flowlight_fsh: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7e5e2KVB91EqosGZ/j/ieVO", "flowlight_fsh");
        t.exports = "precision mediump float;varying vec2 v_texCoord;uniform float sys_time;void main(){    vec4 src_color = texture2D(CC_Texture0, v_texCoord).rgba;    float width = 0.3;    float start = sys_time * 1.2;    float strength = 0.005;    float offset = 0.4;        if( v_texCoord.x < (start - offset * v_texCoord.y) &&  v_texCoord.x > (start - offset * v_texCoord.y - width))    {        vec3 improve = strength * vec3(255, 255, 255);        vec3 result = improve * vec3( src_color.r, src_color.g, src_color.b);        gl_FragColor = vec4(result, src_color.a);    } else {        gl_FragColor = src_color;    }}", cc._RF.pop()
    }, {}],
    flowlight_vsh: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "d3a53MPQ71B6oI3WFXmvzRR", "flowlight_vsh");
        t.exports = "attribute vec4 a_position;attribute vec2 a_texCoord;attribute vec4 a_color;varying vec2 v_texCoord;varying vec4 v_fragmentColor;void main(){gl_Position = CC_PMatrix * a_position;v_fragmentColor = a_color;v_texCoord = a_texCoord;}", cc._RF.pop()
    }, {}],
    gameData: [function (e, u, t) {
        "use strict";
        cc._RF.push(u, "e9854ut2KpC9Lu+9dcTVxnG", "gameData");
        var d = e("number-util");
        (function () {
            if (window.gameData) u.exports = window.gameData; else {
                var i = {}, t = [{name: "P1", posX: 0, posY: -3}, {name: "P2", posX: 0, posY: -12}, {
                        name: "P3",
                        posX: -3,
                        posY: -17
                    }, {name: "P4", posX: -1, posY: -19}, {name: "P5", posX: 4, posY: -12}, {
                        name: "P6",
                        posX: 6,
                        posY: -12
                    }, {name: "P7", posX: -3, posY: -16}, {name: "P8", posX: 3, posY: -22}, {
                        name: "P9",
                        posX: 0,
                        posY: -24
                    }, {name: "P10", posX: -7, posY: -12}, {name: "P11", posX: 1, posY: -4}, {
                        name: "P12",
                        posX: -3,
                        posY: -7
                    }, {name: "P13", posX: -3, posY: -9}, {name: "P14", posX: 1, posY: -29}, {
                        name: "P15",
                        posX: 1,
                        posY: -29
                    }, {name: "P16", posX: -1, posY: -18}, {name: "P17", posX: 1, posY: -28}, {
                        name: "P18",
                        posX: 1,
                        posY: -21
                    }, {name: "P19", posX: -5, posY: -23}, {name: "P20", posX: -1, posY: -18}, {
                        name: "P21",
                        posX: -2,
                        posY: -23
                    }, {name: "P22", posX: 1, posY: -13}, {name: "P23", posX: -1, posY: -5}, {
                        name: "P24",
                        posX: -2,
                        posY: -31
                    }, {name: "P25", posX: 1, posY: -21}, {name: "P26", posX: -3, posY: -30}, {
                        name: "P27",
                        posX: -4,
                        posY: -17
                    }, {name: "P28", posX: 6, posY: -22}, {name: "P29", posX: -5, posY: -19}, {
                        name: "P30",
                        posX: -1,
                        posY: -18
                    }], a = [{name: "1", posX: 0, posY: -25}, {name: "2", posX: 0, posY: -25}, {
                        name: "3",
                        posX: 0,
                        posY: -35
                    }, {name: "4", posX: 0, posY: -33}, {name: "5", posX: 0, posY: -34}, {
                        name: "6",
                        posX: 0,
                        posY: -38
                    }, {name: "7", posX: 0, posY: -41}, {name: "8", posX: 0, posY: -44}, {
                        name: "9",
                        posX: 0,
                        posY: -44
                    }, {name: "10", posX: 0, posY: -46}, {name: "11", posX: 0, posY: -38}, {
                        name: "12",
                        posX: 0,
                        posY: -38
                    }, {name: "13", posX: 0, posY: -40}, {name: "14", posX: 0, posY: -46}, {
                        name: "15",
                        posX: 0,
                        posY: -57
                    }, {name: "16", posX: 0, posY: -59}, {name: "17", posX: 0, posY: -57}, {
                        name: "18",
                        posX: 0,
                        posY: -60
                    }, {name: "19", posX: 0, posY: -64}, {name: "20", posX: 0, posY: -58}, {
                        name: "21",
                        posX: 0,
                        posY: -58
                    }, {name: "22", posX: 0, posY: -60}, {name: "23", posX: 0, posY: -46}, {
                        name: "24",
                        posX: 0,
                        posY: -40
                    }, {name: "25", posX: 0, posY: -66}, {name: "26", posX: 0, posY: -66}, {
                        name: "27",
                        posX: 0,
                        posY: -67
                    }, {name: "28", posX: 0, posY: -56}, {name: "29", posX: 0, posY: -64}, {
                        name: "30",
                        posX: 0,
                        posY: -67
                    }],
                    n = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13, 14, 15, 16, 17],
                    o = [{name: "Lv.1", unlockland: 4, bonuscoin: "0", exp: "0"}, {
                        name: "Lv.2",
                        unlockland: 5,
                        bonuscoin: "0",
                        exp: "6"
                    }, {name: "Lv.3", unlockland: 6, bonuscoin: "0", exp: "16"}, {
                        name: "Lv.4",
                        unlockland: 7,
                        bonuscoin: "0",
                        exp: "40"
                    }, {name: "Lv.5", unlockland: 8, bonuscoin: "0", exp: "96"}, {
                        name: "Lv.6",
                        unlockland: 9,
                        bonuscoin: "0",
                        exp: "224"
                    }, {name: "Lv.7", unlockland: 10, bonuscoin: "0", exp: "512"}, {
                        name: "Lv.8",
                        unlockland: 11,
                        bonuscoin: "0",
                        exp: "1152"
                    }, {name: "Lv.9", unlockland: 12, bonuscoin: "0", exp: "2560"}, {
                        name: "Lv.10",
                        unlockland: 13,
                        bonuscoin: "0",
                        exp: "5632"
                    }, {name: "Lv.11", unlockland: 14, bonuscoin: "1306000", exp: "12288"}, {
                        name: "Lv.12",
                        unlockland: 15,
                        bonuscoin: "4178000",
                        exp: "26624"
                    }, {name: "Lv.13", unlockland: 15, bonuscoin: "13786000", exp: "57344"}, {
                        name: "Lv.14",
                        unlockland: 15,
                        bonuscoin: "41939000",
                        exp: "122880"
                    }, {name: "Lv.15", unlockland: 15, bonuscoin: "130010000", exp: "262144"}, {
                        name: "Lv.16",
                        unlockland: 15,
                        bonuscoin: "403033000",
                        exp: "557056"
                    }, {name: "Lv.17", unlockland: 15, bonuscoin: "1249000000", exp: "1179648"}, {
                        name: "Lv.18",
                        unlockland: 15,
                        bonuscoin: "3873000000",
                        exp: "2490368"
                    }, {name: "Lv.19", unlockland: 15, bonuscoin: "12006000000", exp: "5242880"}, {
                        name: "Lv.20",
                        unlockland: 15,
                        bonuscoin: "39480000000",
                        exp: "11010048"
                    }, {name: "Lv.21", unlockland: 15, bonuscoin: "122388000000", exp: "23068672"}, {
                        name: "Lv.22",
                        unlockland: 15,
                        bonuscoin: "318207000000",
                        exp: "48234496"
                    }, {name: "Lv.23", unlockland: 15, bonuscoin: "1018000000000", exp: "100663296"}, {
                        name: "Lv.24",
                        unlockland: 15,
                        bonuscoin: "3360000000000",
                        exp: "209715200"
                    }, {name: "Lv.25", unlockland: 15, bonuscoin: "11425000000000", exp: "436207616"}, {
                        name: "Lv.26",
                        unlockland: 15,
                        bonuscoin: "38845000000000",
                        exp: "905969664"
                    }, {name: "Lv.27", unlockland: 15, bonuscoin: "89641000000000", exp: "1879048192"}, {
                        name: "Lv.28",
                        unlockland: 15,
                        bonuscoin: "286853000000000",
                        exp: "3892314112"
                    }, {name: "Lv.29", unlockland: 15, bonuscoin: "717312000000000", exp: "8053063680"}, {
                        name: "Lv.30",
                        unlockland: 15,
                        bonuscoin: "2000000000000000",
                        exp: "20000000000"
                    }], r = [{index: 0, weight: 3, type: 0}, {index: 1, weight: 3, type: 2}, {
                        index: 2,
                        weight: 2,
                        type: 1
                    }, {index: 3, weight: 3, type: 2}, {index: 4, weight: 3, type: 0}, {index: 5, weight: 5, type: 3}],
                    s = [{index: 0, weight: 2, type: 0}, {index: 1, weight: 3, type: 1}],
                    c = [{index: 0, value: 1, type: 0}, {index: 1, value: 10, type: 2}, {
                        index: 2,
                        value: 2,
                        type: 0
                    }, {index: 3, value: 5, type: 1}, {index: 4, value: 10, type: 2}, {
                        index: 5,
                        value: 14400,
                        type: 3
                    }, {index: 6, value: 30, type: 2}], l = {
                        Accelarate: function () {
                            return 2 <= i.getPlayerLevel(playerManager.getObjData("PlayerExp")).level
                        }, Spin: function () {
                            return 4 <= i.getPlayerLevel(playerManager.getObjData("PlayerExp")).level
                        }, UFO: function () {
                            return 3 <= i.getPlayerLevel(playerManager.getObjData("PlayerExp")).level
                        }, DailyBonus: function () {
                            return 4 <= i.getPlayerLevel(playerManager.getObjData("PlayerExp")).level
                        }
                    };
                i.getHousePanelPos = function (e) {
                    return t[e]
                }, i.getHouseStorePos = function (e) {
                    return a[e]
                }, i.getBoxLevel = function (e) {
                    return n[e]
                }, i.getPlayerLevelData = function (e) {
                    return o[e]
                }, i.getPlayerLevel = function (e) {
                    for (var t = {level: 29, curexp: 100, nextexp: 100}, a = o.length - 1; 0 <= a; a--) {
                        var n = o[a], i = o[a + 1];
                        if (0 <= d.cmpBigInt(e, n.exp)) {
                            var r = d.galaxySub(e, n.exp);
                            t = {level: a, curexp: r, nextexp: null == i ? r : d.galaxySub(i.exp, n.exp)};
                            break
                        }
                    }
                    return t
                }, i.getLevelUpReward = function (e) {
                    var t = {count: 0}, a = i.getPlayerLevelData(e), n = i.getPlayerLevelData(e - 1);
                    return null == n && (n = {
                        name: "Lv.1",
                        unlockland: 4,
                        bonuscoin: "0",
                        exp: "0"
                    }), 0 < d.cmpBigInt(a.bonuscoin, 0) && (t.coin = a.bonuscoin, t.count++), 0 < a.unlockland - n.unlockland && (t.land = a.unlockland - n.unlockland, t.count++), t
                }, i.getSpinReward = function () {
                    for (var e = 0, t = {index: 0, weight: 5, type: 0}, a = 0; a < r.length; a++) e += r[a].weight;
                    var n = Math.random() * e;
                    for (a = 0; a < r.length; a++) {
                        if (n <= r[a].weight) {
                            t = r[a];
                            break
                        }
                        n -= r[a].weight
                    }
                    return t
                }, i.getUFOReward = function () {
                    for (var e = 0, t = {index: 0, weight: 5, type: 0}, a = 0; a < s.length; a++) e += s[a].weight;
                    var n = Math.random() * e;
                    for (a = 0; a < s.length; a++) {
                        if (n <= s[a].weight) {
                            t = s[a];
                            break
                        }
                        n -= s[a].weight
                    }
                    return t
                }, i.getUnlockStatus = function (e) {
                    return !!l[e] && l[e]()
                }, i.getDailyBonusReward = function (e) {
                    return e < 0 ? e = 0 : c.length <= e && (e = c.length - 1), c[e]
                }, window.gameData = i, u.exports = i
            }
        })(), cc._RF.pop()
    }, {"number-util": "number-util"}],
    getoffcoin_dlg: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "9e8d8thXl9LaZtQUXQGg0GI", "getoffcoin_dlg");
        var r = e("number-util"), o = e("instant-util"), i = logCenter;
        cc.Class({
            extends: cc.Component,
            properties: {
                btnback: cc.Button,
                greySprite: cc.Sprite,
                labelCoin: cc.Label,
                shareBtn: cc.Node,
                videoBtn: cc.Node,
                share_toggle: {default: null, type: cc.Toggle}
            },
            onLoad: function () {
                for (var e = Math.floor((new Date).getTime() / 1e3), t = playerManager.getObjData("lastOffline"), a = 10800 < e - t ? 10800 : e - t, n = this.allearn = 0; n <= 14; n++) {
                    var i = playerManager.getObjData("Panel" + n);
                    0 <= i.level && (this.allearn = r.galaxyAdd(this.allearn, fish_data[i.level].coinsec))
                }
                this.allearn = r.galaxyMut(this.allearn, a / 2), this.labelCoin.string = r.unit_format(this.allearn), playerManager.setObjData("lastOffline", Math.floor((new Date).getTime() / 1e3)), this.shareBtn.active = !1, this.videoBtn.active = !1, this.greySprite.node.active = !1, globalManager.canShare(globalManager.shareType.offline, {
                    level: playerManager.getNumData("UnlockLevel"),
                    isFirst: globalManager.isNewPlayer
                }) ? (this.shareBtn.active = !0, this.rewardType = 1) : (this.videoBtn.active = !0, this.rewardType = 2), "WEB" == o.getPlatform() && (this.greySprite.node.active = !0, this.videoBtn.getComponent(cc.Button).interactable = !1);
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playSound("congratulations")
            },
            watchVideo: function () {
                var e = this;
                i.watch_video_offiline_coin_event("offline");
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                o.showRewardAd(function () {
                    cc.log("showAd success"), t.setUserCenterEvent("ad"), i.watch_video_offiline_coin_success_event("offline");
                    t.showToast("+" + r.unit_format(e.allearn) + " Coins x 2", 4), playerManager.addNumData("Coin", r.galaxyMut(e.allearn, 2)), cc.director.emit("updateCoin"), t.startAddCoinEffect(), e.closeDialog(null, !1)
                }, function () {
                    cc.log("RewardAd load err"), t.showToast("No available Ad right now, try again later.")
                })
            },
            shareClick: function () {
                // var e = this;
                // i.share_offline_coin_event(e.share_toggle.isChecked);
                // var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                // if (e.share_toggle.isChecked) {
                //     cc.log("offcoin callback");
                //     var t = {type: globalManager.shareType.offline, inviter: o.getPlayerID(), rewards: "1"},
                //         n = globalManager.getShareConfig(globalManager.shareType.offline);
                //     o.chooseContext(function () {
                //         a.setUserCenterEvent("share"), i.share_offline_coin_success_event();
                //         a.showToast("+" + r.unit_format(e.allearn) + " Coins x 3", 4), playerManager.addNumData("Coin", r.galaxyMut(e.allearn, 3)), cc.director.emit("updateCoin"), a.startAddCoinEffect(), e.closeDialog(null, !1)
                //     }, function (e, t) {
                //         i.share_offline_coin_fail_event(e), a.showToast(t)
                //     }, t, n.text, n.img)
                // } else {
                //     i.get_offline_coin_without_share_event(), cc.log("offcoin callback1");
                //     a.showToast("+" + r.unit_format(e.allearn) + " Coins x 3", 4), playerManager.addNumData("Coin", r.galaxyMut(e.allearn, 3)), cc.director.emit("updateCoin"), a.startAddCoinEffect()
                // }
                wxHelper.shareMessage()
            },
            doubleClick: function () {
                i.offline_coin_click_event(), 1 == this.rewardType ? this.shareClick() : this.watchVideo()
            },
            closeDialog: function (e) {
                var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                    a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                1 == t && (playerManager.addNumData("Coin", this.allearn), cc.director.emit("updateCoin"), a.startAddCoinEffect()), 1 != playerManager.getNumData("dailyRewardCan") && gameData.getUnlockStatus("DailyBonus") && a.showDailyCheckinPopUp(null, 1), this.node.removeFromParent(!1), a.offcoin_dialog = null
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    "gift-node": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "4a6fag+C+pL5KyLREjd3zih", "gift-node"), cc.Class({
            extends: cc.Component,
            properties: {open_sprite: {default: null, type: cc.Sprite}, close_sprite: {default: null, type: cc.Sprite}},
            onLoad: function () {
            },
            start: function () {
            },
            setState: function (e, t) {
                cc.log("isOpen=" + e + "   isReceive=" + t), this.animate = this.getComponent(cc.Animation), e ? (this.open_sprite.node.active = !0, this.close_sprite.node.active = !1, t ? (this.animate.stop(), this.node.rotation = 0) : this.animate.play()) : (this.open_sprite.node.active = !1, this.close_sprite.node.active = !0, this.animate.stop(), this.node.rotation = 0)
            }
        }), cc._RF.pop()
    }, {}],
    globalManager: [function (require, module, exports) {
        "use strict";
        cc._RF.push(module, "ebfcbBGT/xFC4t82jzjGFqv", "globalManager"), require("md5");
        var NumberUtil = require("number-util"), WebimgUtil = require("webimg-util");
        (function () {
            if (window.globalManager) module.exports = window.globalManager; else {
                var TAG = "GlobalManager", Version = "V2.0.0", subVersion = Math.round(1e10 * Math.random()).toString(),
                    globalManager = {
                        appId: "683648931990708",
                        appIdTest: "562836570824459",
                        appid_reg: /683648931990708/,
                        appidtest_reg: /562836570824459/,
                        loginTime: 0,
                        serverLoginTime: 0,
                        serverResetTime: 0,
                        isBlackList: !1,
                        isUcBlackList: !1,
                        InterstitialAdId: "683648931990708_711451605877107",
                        RewardAdId: "683648931990708_711449765877291",
                        isNewPlayer: !1,
                        firstInLogin: !0,
                        firstInGame: !0,
                        fbPlayerId: null,
                        gamelist: [{
                            app_id: "527721167689261",
                            name: "Juice Master",
                            img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/49864812_398211461017334_4463983832579702784_n.jpg?_nc_cat=109&_nc_ht=scontent-hkg3-1.xx&oh=327ef57faf7ec137d80827dfbfd04619&oe=5CB2D2A5",
                            url: ""
                        }, {
                            app_id: "2095791540676791",
                            name: "Car Tycoon",
                            img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/49371932_398211457684001_7595903628687179776_n.jpg?_nc_cat=105&_nc_ht=scontent-hkg3-1.xx&oh=2c66b90284948a022f2d93b7c3c4f0b8&oe=5CC50C54",
                            url: ""
                        }],
                        gameListInGame: [{
                            app_id: "527721167689261",
                            name: "Juice Master",
                            img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/49864812_398211461017334_4463983832579702784_n.jpg?_nc_cat=109&_nc_ht=scontent-hkg3-1.xx&oh=327ef57faf7ec137d80827dfbfd04619&oe=5CB2D2A5",
                            url: ""
                        }, {
                            app_id: "2095791540676791",
                            name: "Car Tycoon",
                            img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/49371932_398211457684001_7595903628687179776_n.jpg?_nc_cat=105&_nc_ht=scontent-hkg3-1.xx&oh=2c66b90284948a022f2d93b7c3c4f0b8&oe=5CC50C54",
                            url: ""
                        }],
                        publicConfig: {}
                    };
                globalManager.shareType = cc.Enum({
                    unlock: "unlock",
                    offline: "offline",
                    speedUp: "speedUp",
                    catchFish: "catchFish",
                    inviteFriend: "inviteFriend",
                    inviteNewFriend: "inviteNewFriend",
                    playWithFriend: "playWithFriend",
                    loginShare: "loginShare",
                    freeUpgrade: "freeUpgrade",
                    levelUp: "levelUp",
                    spinShare: "spinShare",
                    UFOShare: "UFOShare",
                    NoCoinShare: "NoCoinShare",
                    bank: "bank",
                    bankX2: "bankX2",
                    x6Share: "x6Share",
                    friendWorking: "friendWorking"
                }), globalManager.storeFreeHouse = 1, globalManager.storeFreeHouseCD = 300, globalManager.UpgradeBuy = 5, globalManager.GoldenBox = 0, globalManager.BoxCD = 30, globalManager.AccelarateCD = 120, globalManager.AccelarateTime = 120, globalManager.AccelarateTime1 = 30, globalManager.videoTime = 120, globalManager.updateStrategy = {
                    LAST: "LAST",
                    IMMEDIATE: "IMMEDIATE",
                    IMMEDIATE_CLEAR: "IMMEDIATE_CLEAR"
                }, globalManager.x6Percent = .5, globalManager.tutorialVersion = 0, globalManager.bankCD = 7200, globalManager.bankVideoCD = 120;
                var randomNum = 100 * Math.random();
                globalManager.storeFreeHouse = randomNum <= 10 ? 1 : randomNum <= 40 ? 2 : 3, globalManager.keepTime = 0, setInterval(function () {
                    globalManager.keepTime++
                }, 1e3), globalManager.hasSubcribe = !1;
                var noencrypt = !1;
                globalManager.isGameInit = function (e) {
                    return true;
                    // return !!/^192\..*|localhost/.exec(location.hostname) || !!e.exec(location.href)
                }, globalManager.encrypt = function (e, t) {
                    if (e += "", null == t || t.length <= 0) return null;
                    e = escape(e);
                    for (var a = "", n = 0; n < t.length; n++) a += t.charCodeAt(n).toString();
                    var i = Math.floor(a.length / 5),
                        r = parseInt(a.charAt(i) + a.charAt(2 * i) + a.charAt(3 * i) + a.charAt(4 * i) + a.charAt(5 * i)),
                        o = Math.ceil(t.length / 2), s = Math.pow(2, 31) - 1;
                    if (r < 2) return null;
                    var c = Math.round(1e9 * Math.random()) % 1e8;
                    for (a += c; 10 < a.length;) a = (parseInt(a.substring(0, 10)) + parseInt(a.substring(10, a.length))).toString();
                    a = (r * a + o) % s;
                    var l = "", u = "";
                    for (n = 0; n < e.length; n++) u += (l = parseInt(e.charCodeAt(n) ^ Math.floor(a / s * 255))) < 16 ? "0" + l.toString(16) : l.toString(16), a = (r * a + o) % s;
                    for (c = c.toString(16); c.length < 8;) c = "0" + c;
                    return u += c
                }, globalManager.decrypt = function (e, t) {
                    if (!(null == e || e.length < 8 || null == t || t.length <= 0)) {
                        for (var a = "", n = 0; n < t.length; n++) a += t.charCodeAt(n).toString();
                        var i = Math.floor(a.length / 5),
                            r = parseInt(a.charAt(i) + a.charAt(2 * i) + a.charAt(3 * i) + a.charAt(4 * i) + a.charAt(5 * i)),
                            o = Math.round(t.length / 2), s = Math.pow(2, 31) - 1,
                            c = parseInt(e.substring(e.length - 8, e.length), 16);
                        for (e = e.substring(0, e.length - 8), a += c; 10 < a.length;) a = (parseInt(a.substring(0, 10)) + parseInt(a.substring(10, a.length))).toString();
                        a = (r * a + o) % s;
                        var l = "", u = "";
                        for (n = 0; n < e.length; n += 2) l = parseInt(parseInt(e.substring(n, n + 2), 16) ^ Math.floor(a / s * 255)), u += String.fromCharCode(l), a = (r * a + o) % s;
                        return unescape(u)
                    }
                }, globalManager.encryptKey = function (e) {
                    return cc.MD5(e)
                }, globalManager.getDT = function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, t = arguments[1],
                        a = e[1];
                    a = "subVersion";
                    var n = globalManager.getLocalData(a, null, !0);
                    if (null == n) {
                        var i = Math.round(1e10 * Math.random()).toString();
                        return globalManager.saveLocalData(a, i, !0), t && t(a), i
                    }
                    return n
                }, globalManager.saveLocalData = function (e, t) {
                    cc.sys.localStorage.setItem(e, t);
                    // console.error("saveLocalData=======")
                    // var a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    // null != globalManager.fbPlayerId && (e += globalManager.fbPlayerId, 1 != noencrypt && (e = globalManager.encryptKey(e), 0 == a && (t = globalManager.encrypt(t, subVersion))), cc.sys.localStorage.setItem(e, t));
                }, globalManager.getLocalData = function (e, t) {
                    var n = cc.sys.localStorage.getItem(e);
                    return n;
                    // console.log("getLocalData=======")
                    // var a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    // if (null == globalManager.fbPlayerId) return t;
                    // e += globalManager.fbPlayerId, 0 == noencrypt && (e = globalManager.encryptKey(e));
                    // var n = cc.sys.localStorage.getItem(e);
                    // return null != n && "" != n && 0 == a && 0 == noencrypt && (n = globalManager.decrypt(n, subVersion)), null != n && "" != n || null == t || (n = t), n;
                }, globalManager.initDT = function () {
                    subVersion = globalManager.getDT(Version, function () {
                        for (var e = 1; e <= 10; e++) globalManager.saveLocalData("key" + e, Math.round(1e10 * Math.random()).toString(), !0)
                    })
                }, globalManager.canShare = function (type, args) {
                    if (globalManager.isBlackList) return cc.log("type=" + type + " cause isBlack"), !1;
                    if (globalManager.publicConfig) {
                        args.date = Date.parse(new Date);
                        var result = globalManager.publicConfig[type];
                        if (result) try {
                            result = NumberUtil.format(result, args), result = "(function(){" + result + "})()", cc.log("function = " + result);
                            var res = eval(result);
                            return cc.log("type=" + type + " cause eval(result) res=" + res), res
                        } catch (e) {
                            return cc.log(e.toString()), cc.log("type=" + type + " cause throw error"), !1
                        }
                    }
                    return cc.log("type=" + type + " cause nothing"), !1
                }, globalManager.webCopyString = function (e) {
                    console.log("复制");
                    var t = e + "", a = document.createElement("textarea");
                    a.value = t, a.setAttribute("readonly", ""), a.style.contain = "strict", a.style.position = "absolute", a.style.left = "-9999px", a.style.fontSize = "12pt";
                    var n = getSelection(), i = !1;
                    0 < n.rangeCount && (i = n.getRangeAt(0)), document.body.appendChild(a), a.select(), a.selectionStart = 0, a.selectionEnd = t.length;
                    var r = !1, o = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    null == o && (o = cc.director.getScene().getChildByName("Canvas").getComponent("login-world"));
                    try {
                        r = document.execCommand("copy"), o.showToast("Copy success")
                    } catch (e) {
                        o.showToast("Copy failed")
                    }
                    return document.body.removeChild(a), i && (n.removeAllRanges(), n.addRange(i)), r
                }, globalManager.getCookie = function (e) {
                    var t, a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                    return (t = document.cookie.match(a)) ? t[2] : null
                }, globalManager.setShareConfig = function () {
                    server_util.shareList(function (e) {
                        var n = cc.sys.localStorage.getItem("shareConfigList");
                        n = n ? JSON.parse(n) : {}, e.list.map(function (e) {
                            var t = e.type;
                            cc.sys.localStorage.getItem(e.img) ? (n[t] = {
                                img: e.img,
                                title: e.title
                            }, cc.sys.localStorage.setItem("shareConfigList", JSON.stringify(n))) : WebimgUtil.getBase64(e.img, function (e, t) {
                                var a = t.type;
                                n[a] && cc.sys.localStorage.removeItem(n[a].img), cc.sys.localStorage.setItem(t.img, e), n[a] = {
                                    img: t.img,
                                    title: t.title
                                }, cc.sys.localStorage.setItem("shareConfigList", JSON.stringify(n))
                            }, function (e) {
                                n[t] = {title: e.title}, cc.sys.localStorage.setItem("shareConfigList", JSON.stringify(n))
                            }, e)
                        })
                    })
                }, globalManager.getShareConfig = function (e) {
                    var t = cc.sys.localStorage.getItem("shareConfigList");
                    return (t = t ? JSON.parse(t) : {})[e] ? {
                        img: cc.sys.localStorage.getItem(t[e].img),
                        text: t[e].title
                    } : {}
                }, globalManager.base64ToSpriteFrame = function (e, a) {
                    var n = new Image;
                    n.src = e, n.onload = function () {
                        var e = new cc.Texture2D;
                        e.initWithElement(n), e.handleLoadedTexture();
                        var t = new cc.SpriteFrame(e);
                        a && a(t)
                    }
                }, window.globalManager = globalManager, module.exports = globalManager
            }
        })(), cc._RF.pop()
    }, {md5: "md5", "number-util": "number-util", "webimg-util": "webimg-util"}],
    gray_fsh: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "6abc7KVQGJENICEMF3Ix0mV", "gray_fsh");
        t.exports = "varying vec4 v_fragmentColor;varying vec2 v_texCoord;void main(){vec4 v_orColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);float gray = dot(v_orColor.rgb, vec3(0.299, 0.587, 0.114));gl_FragColor = vec4(gray, gray, gray, v_orColor.a);}", cc._RF.pop()
    }, {}],
    gray_vsh: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "54b8fmNpY9Kqo01mcvLJrHq", "gray_vsh");
        t.exports = "attribute vec4 a_position;attribute vec2 a_texCoord;attribute vec4 a_color;varying vec4 v_fragmentColor;varying vec2 v_texCoord;void main(){gl_Position = CC_PMatrix * a_position;v_fragmentColor = a_color;v_texCoord = a_texCoord;}", cc._RF.pop()
    }, {}],
    "http-client": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "756b3hdRixPh7UlwC6GQnCQ", "http-client");
        t.exports = {
            httpPostRequest: function (e, t, a, n) {
                var i = JSON.stringify(t);
                cc.log("httpPostRequest:" + e + ", after param = " + i);
                var r = cc.loader.getXMLHttpRequest();
                r.timeoutId = setTimeout(function () {
                    n && cc.log("httpRequest timeout")
                }, 6e3), r.open("POST", e), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.send(i), r.onreadystatechange = function () {
                    if (clearTimeout(r.timeoutId), 4 == r.readyState && 200 <= r.status && r.status < 400) {
                        cc.log("httpRequest.readyState=" + r.readyState), cc.log("httpRequest.status=" + r.status);
                        r.statusText;
                        var e = r.responseText;
                        cc.log("responseText = " + e);
                        var t = null;
                        try {
                            t = JSON.parse(e)
                        } catch (e) {
                            cc.log("服务端未知错误")
                        }
                        t && (0 == t.code ? a && a(t.data) : n && n(t))
                    }
                }, r.onerror = function (e) {
                    clearTimeout(r.timeoutId);
                    var t = r.responseText;
                    t || (t = "network error"), n && n(t)
                }
            }, httpGetRequest: function (e, t, a, n) {
                for (var i in t) e += i + "=" + t.key;
                var r = cc.loader.getXMLHttpRequest();
                r.onreadystatechange = function () {
                    if (4 === r.readyState && 200 <= r.status && r.status < 400) {
                        var e = r.responseText;
                        cc.log("responseText = " + e);
                        var t = null;
                        try {
                            t = JSON.parse(e)
                        } catch (e) {
                            cc.log("服务端未知错误")
                        }
                        t && a && a(t)
                    }
                }, r.open("GET", e, !0), cc.sys.isNative && r.setRequestHeader("Accept-Encoding", "gzip,deflate"), r.timeoutId = setTimeout(function () {
                    n && cc.log("httpRequest timeout")
                }, 6e3), r.send()
            }
        }, cc._RF.pop()
    }, {}],
    "instant-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "1d9b4T4x31MFKzOCrskJ0yO", "instant-util");
        var n = e("fbinstant-util");/*, i = /^192\..*|localhost/.exec(location.hostname);*/
        t.exports = n /*"undefined" != typeof FBInstant ? t.exports = n : null != i && (t.exports = n)*/, cc._RF.pop()
    }, {"fbinstant-util": "fbinstant-util"}],
    "invite-friends-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "82ad3P6sClKE56sVBRwCK8X", "invite-friends-dialog");
        var n = e("instant-util"), i = e("number-util"), r = logCenter;
        cc.Class({
            extends: cc.Component,
            properties: {
                task_layout: {default: null, type: cc.Node},
                task_node: {default: null, type: cc.Prefab},
                invite_progress: {default: null, type: cc.ProgressBar},
                progress_label: {default: null, type: cc.RichText},
                gift_toggle: {default: null, type: cc.Toggle},
                tip_label: {default: null, type: cc.Label},
                _allPlayers: null,
                _rewardPlayers: null,
                _listData: [],
                _taskId: null
            },
            onLoad: function () {
                r.invite_friends_info_start_event(), server_util.getActivityList(function (e) {
                    if (r.invite_friends_info_success_event(), e && e[0]) {
                        var t = parseInt(e[0].task_times), a = parseInt(e[0].reward_num), n = e[0].task_id;
                        this.setData(t, a, n), this.task_layout.getComponent("list-adapter").initListView(this.task_node, "task-node", this._listData, this.refreshListView.bind(this))
                    }
                }.bind(this), function (e) {
                    this.setData(0, 0, 0), this.task_layout.getComponent("list-adapter").initListView(this.task_node, "task-node", this._listData, this.refreshListView.bind(this)), e.code && r.invite_friends_info_err_event(e.code)
                }.bind(this)), this.giftAnimate = this.gift_toggle.node.getComponent(cc.Animation), this.setInviterProgress(0)
            },
            setData: function (e, t, a) {
                var n = playerManager.getObjData("inviteRewards"), i = e - t;
                if (n) for (var r = n.length - 1; r < e; r++) {
                    var o = r < i ? 1 : 0;
                    n.push(o)
                } else {
                    (n = []).push(playerManager.getObjData("freeReward") ? 1 : 0);
                    for (var s = 0; s < e; s++) {
                        var c = s < i ? 1 : 0;
                        n.push(c)
                    }
                }
                cc.log("inviteRewards=" + JSON.stringify(n)), playerManager.setObjData("inviteRewards", n), this._listData = [], this._allPlayers = e, this._rewardPlayers = t, this._taskId = a;
                var l = playerManager.getNumData("UnlockLevel") - 4;
                l = 0 <= l ? l : 0;
                var u = playerManager.getObjData("Price" + l);
                cc.log("price=" + u);
                for (var d = 0; d < n.length; d++) 0 == n[d] && this._listData.push({
                    type: d,
                    price: u,
                    taskId: a,
                    canClaim: !0
                });
                var h = e + 1;
                if (this._listData.length < 4) for (var g = this._listData.length; g < 4; g++) this._listData.push({
                    type: h,
                    price: u,
                    taskId: a,
                    canClaim: !1
                }), h++
            },
            refreshListView: function (e) {
                0 < e.type && this._rewardPlayers--, this.setData(this._allPlayers, this._rewardPlayers, this._taskId), this.task_layout.getComponent("list-adapter").refreshListView(this._listData)
            },
            inviteFriendClick: function () {
                if ("undefined" != typeof FBInstant) {
                    var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    r.invite_friends_event();
                    var e = {type: "share", inviter: n.getPlayerID()};
                    n.chooseContext(function () {
                        cc.log("share finish"), a.setUserCenterEvent("share"), r.invite_friends_success_event(), a.showToast("Sent! Wait your friends enter game!"), this.setInviterProgress(1)
                    }.bind(this), function (e, t) {
                        a.showToast(t)
                    }, e)
                } else this.setInviterProgress(1)
            },
            setInviterProgress: function (e) {
                var t = playerManager.getObjData("inviteReceiveTime");
                if (i.isOneDay(t, Date.parse(new Date))) this.invite_progress.progress = 1, this.progress_label.string = "<b><i>8/8</i></b>", this.gift_toggle.isChecked = !1, this.gift_toggle.interactable = !1, this.tip_label.string = "New gift tomorrow!", this.giftAnimate.stop(), playerManager.setNumData("inviteCount", 0); else {
                    var a = playerManager.getNumData("inviteCount");
                    8 < (a += e) && (a = 8), playerManager.setNumData("inviteCount", a), a < 8 ? (this.invite_progress.progress = a / 8, this.progress_label.string = "<b><i>" + a + "/8</i></b>", this.gift_toggle.isChecked = !1, this.gift_toggle.interactable = !1, this.giftAnimate.stop()) : (this.invite_progress.progress = 1, this.progress_label.string = "<b><i>8/8</i></b>", this.gift_toggle.isChecked = !0, this.gift_toggle.interactable = !0, this.giftAnimate.play()), this.tip_label.string = "Earn friendship, win rewards!"
                }
            },
            giftClick: function () {
                var e = playerManager.getNumData("UnlockLevel") - 4;
                e = 0 <= e ? e : 0;
                var t = playerManager.getObjData("Price" + e);
                playerManager.addNumData("Coin", t), cc.director.emit("updateCoin"), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("+" + i.unit_format(t) + " coins"), playerManager.setObjData("inviteReceiveTime", Date.parse(new Date)), this.setInviterProgress(-8)
            },
            closeClick: function () {
                this.node.removeFromParent(!1)
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    "list-adapter-auto": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "aa849RgchlD5IwPMhmLFJIP", "list-adapter-auto"), cc.Class({
            extends: cc.Component,
            properties: {
                scrollView: {default: null, type: cc.ScrollView},
                _prefab: null,
                _scriptName: null,
                items: [],
                _callback: null,
                spawnCount: 0,
                spacing: 0
            },
            initListView: function (e, t, a, n) {
                this._prefab = e, this.itemTemplate = e.data, this._scriptName = t, this.content = this.scrollView.content, this._callback = n, this._listData = a, this.totalCount = a.length, this.totalCount < this.spawnCount && (this.spawnCount = this.totalCount), this.createItem(a), this.updateTimer = 0, this.updateInterval = .2, this.lastContentPosY = 0, this.bufferZone = this.spawnCount * (this.itemTemplate.height + this.spacing) / 2
            },
            refreshListView: function (e) {
                this._listData = e;
                for (var t = this.items, a = 0; a < t.length; ++a) {
                    this.getPositionInView(t[a]);
                    var n = t[a].getComponent(this._scriptName);
                    n.setData(e[n.itemID], this._callback)
                }
            },
            addListView: function (e) {
                this.createItem([e])
            },
            removeAllListView: function () {
                this.refreshListView()
            },
            destory: function () {
            },
            setPosition: function (e) {
            },
            createItem: function (e) {
                this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing;
                for (var t = 0; t < this.spawnCount; ++t) {
                    var a = cc.instantiate(this._prefab);
                    this.content.addChild(a), a.setPosition(0, -a.height * (.5 + t) - this.spacing * (t + 1)), a.getComponent(this._scriptName).setData(e[t], this._callback), this.items.push(a)
                }
            },
            getPositionInView: function (e) {
                var t = e.parent.convertToWorldSpaceAR(e.position);
                return this.scrollView.node.convertToNodeSpaceAR(t)
            },
            update: function (e) {
                if (null != this.bufferZone && (this.updateTimer += e, !(this.updateTimer < this.updateInterval))) {
                    this.updateTimer = 0;
                    for (var t = this.items, a = this._listData, n = this.scrollView.content.y < this.lastContentPosY, i = (this.itemTemplate.height + this.spacing) * t.length, r = 0, o = 0; o < t.length; ++o) {
                        var s = this.getPositionInView(t[o]);
                        if (n) {
                            if (r = t[o].y + i, s.y < -this.bufferZone && r < 0) {
                                t[o].setPositionY(r);
                                var c = t[o].getComponent(this._scriptName), l = c.itemID - t.length;
                                c.setData(a[l], this._callback)
                            }
                        } else if (r = t[o].y - i, s.y > this.bufferZone && r > -this.content.height) {
                            t[o].setPositionY(r);
                            var u = t[o].getComponent(this._scriptName), d = u.itemID + t.length;
                            u.setData(a[d], this._callback)
                        }
                    }
                    this.lastContentPosY = this.scrollView.content.y
                }
            }
        }), cc._RF.pop()
    }, {}],
    "list-adapter": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "09ba3ffzBVCFoq/4RIrLUTc", "list-adapter"), cc.Class({
            extends: cc.Component,
            properties: {_prefab: null, _scriptName: null, _items: [], _callback: null},
            initListView: function (e, t, a, n) {
                this._prefab = e, this._scriptName = t, this._callback = n, this.node.removeAllChildren(!0), this.createItem(a)
            },
            refreshListView: function (e) {
                this.node.removeAllChildren(!0), this.createItem(e)
            },
            addListView: function (e) {
                this.createItem([e])
            },
            removeAllListView: function () {
                this.refreshListView()
            },
            destory: function () {
            },
            setPosition: function (e) {
            },
            createItem: function (e) {
                if (e) for (var t = 0; t < e.length; t++) {
                    var a = null;
                    (a = cc.instantiate(this._prefab)).parent = this.node, a.getComponent(this._scriptName).setData(e[t], this._callback)
                }
            }
        }), cc._RF.pop()
    }, {}],
    "load-animation": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a3225BHU6RFrKHIMEK2u7nB", "load-animation"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(0, 36), cc.delayTime(.1))))
            },
            start: function () {
            }
        }), cc._RF.pop()
    }, {}],
    loading: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "b99aeZWplBPv5Yv1wF8pKAr", "loading");
        cc.Class({
            extends: cc.Component, properties: {spItem: [cc.Sprite]}, onLoad: function () {
                var e = this;
                this.curCount = 0, this.maxCount = this.spItem.length, this.schedule(function () {
                    e.myupdate()
                }, .05)
            }, myupdate: function (e) {
                for (var t = this, a = 0; a < t.spItem.length; a++) t.spItem[a].node.color = new cc.Color(255, 255, 255);
                t.spItem[t.curCount].node.color = new cc.Color(65, 64, 66), t.curCount++, t.curCount = t.curCount % this.maxCount
            }, onDestroy: function () {
            }
        }), cc._RF.pop()
    }, {}],
    "login-world": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "00686neljhElYHh8Nk8vMdQ", "login-world");
        var s = e("instant-util"), c = logCenter, n = e("webimg-util"), l = e("number-util");
        e("fish-cfg"), e("playerManager"), cc.Class({
            extends: cc.Component,
            properties: {
                _dialogs: {default: {}},
                rank_dialog_prefab: {default: null, type: cc.Prefab},
                sounds_toggle: {default: null, type: cc.Toggle},
                start_label: {default: null, type: cc.Label},
                start_shadow_label: {default: null, type: cc.Label},
                id_label: {default: null, type: cc.Label},
                alertDlg: {default: null, type: cc.Prefab},
                notification: {default: null, type: cc.Prefab},
                moregameDlg: {default: null, type: cc.Prefab},
                loadDlg: {default: null, type: cc.Prefab},
                recommendIcon: {default: null, type: cc.Sprite}
            },
            onLoad: function () {
                console.log("loging",this.node)
                var o = this, e = globalManager.isGameInit(globalManager.appid_reg);
                console.log("=====",/*cc.log("gameinit:" + e), e*/this.node);
                if (cc.log("gameinit:" + e), e) if (1 == globalManager.firstInLogin) {
                    var publicConfig = cc.sys.localStorage.getItem("publicConfig")
                    var t = JSON.parse(publicConfig == "" ? null : publicConfig);
                    t && t.config && (cc.log("load publicConfig from localStorage."), globalManager.publicConfig = t.config, t.config.boxcd && (globalManager.BoxCD = t.config.boxcd), t.config.upgradebuy && (globalManager.UpgradeBuy = t.config.upgradebuy), t.config.upgradebox && (globalManager.UpgradeBox = t.config.upgradebox)), this.dataloading = !0, this.GameSceneload = !1, /*s.startGame(function () {*/
                        this.scheduleOnce(function () {
                            globalManager.fbPlayerId = /*s.getPlayerID()*/"", globalManager.initDT(), c.login_page_event(), playerManager.loadAllData(function (e) {
                                globalManager.isNewPlayer = e;
                                var t = playerManager.getObjData("enableSound");
                                o.sounds_toggle.isChecked = t, c.achieve_level_event(playerManager.getNumData("UnlockLevel")), o.setBotRecall();
                                /*var a = s.getEntryPointData();
                                if (a && a.type && c.player_link_click_event(a.type), e) o.start_label.string = "Play Now", o.start_shadow_label.string = "Play Now", a && a.type && ("switch_game" == a.type ? c.new_player_switch_click_event(a.name) : c.new_player_link_click_event(a.type)), s.canSubscribeBotAsync(function (e) {
                                    e && s.subscribeBotAsync(function () {
                                        c.subscribe_bot_success_event("home")
                                    })
                                }); else {*/
                                var n = gameData.getPlayerLevel(playerManager.getObjData("PlayerExp")),
                                    i = cc.sys.localStorage.getItem("createshortcut");
                                i && l.isOneDay(i, Date.parse(new Date)) || (cc.sys.localStorage.setItem("createshortcut", Date.parse(new Date))/*, s.canSubscribeBotAsync(function (e) {
                                    e ? s.subscribeBotAsync(function () {
                                        c.subscribe_bot_success_event("home")
                                    }) : s.createShortcut(function () {
                                        c.create_shortcut_event("home")
                                    })

                                })*/
                                )
                                // }
                                if (o.dataloading = !1, 1 == o.GameSceneload && o.closeLoading(), o.playBGMusic(), 1 == globalManager.firstInGame) {
                                    var r = playerManager.getObjData("lastLogin");
                                    1 != l.isOneDay(r, (new Date).getTime()) && (playerManager.addNumData("playDays", 1), playerManager.setNumData("dailyRewardCan", 0)), o.checkAllTimeCD(r), playerManager.setObjData("lastLogin", (new Date).getTime())
                                }
                                globalManager.firstInLogin = !1;
                                // o.startGameClick();
                            }), globalManager.firstInLogin = !1/*s.requestRewardAd(globalManager.RewardAdId), s.getPlayerInfo(function (e) {
                            var t = e.playerName, a = e.playerId;
                            o.id_label.string = "ID:" + a, server_util.login(t, a, e.photo, function () {
                                s.setLeaderboardScore(playerManager.getScore()), server_util.setLeaderboardScore(playerManager.getScore()), o.saveInviter(), o.getGlobalConfig()
                            })
                        })*//*, c.entry_with_context_event(s.getContextID(), s.getType())*/
                        }, 0)
                        , cc.director.preloadScene("GameScene", function (e) {
                        cc.log("load GameScene success"), o.GameSceneload = !0, 0 == o.dataloading && o.closeLoading()
                    })/*this.startGameClick()*/
                } else {
                    /*this.dataloading = !1, this.GameSceneload = !0, s.requestInterstitialAd(globalManager.InterstitialAdId, function () {
                        o.AdPop()
                    }),*/
                    this.id_label.string = "ID:" + /*s.getPlayerID()*/"";
                    var a = playerManager.getObjData("enableSound");
                    o.sounds_toggle.isChecked = a
                }
            },
            start: function () {
                console.log("loging",this.node)
                // uiManager.seekNodeWithName("jukun_loading_bg", this.node).active = false;
                uiManager.seekNodeWithName("more_game_btn", this.node).active = false;
                uiManager.seekNodeWithName("rank_btn", this.node).active = false;
                this.getRecommendConfig()
            },
            onDestroy: function () {
                this.stopBGMusic()
            },
            checkAllTimeCD: function (e) {
                var t = Math.floor(((new Date).getTime() - parseInt(e)) / 1e3);
                t < 0 && (t = 0);
                for (var a = ["TimeCD2", "BankTimeCDCol"], n = 0; n < a.length; n++) {
                    var i = playerManager.getNumData(a[n]) - t;
                    i < 0 && (i = 0), playerManager.setNumData(a[n], i)
                }
            },
            startGameClick: function () {
                console.log("this.dataloading====", 0 == this.dataloading, this.GameSceneload)
                0 == this.dataloading && this.GameSceneload ? cc.director.loadScene("GameScene") : this.showLoading(function () {
                    cc.director.loadScene("GameScene")
                })
            },
            shareClick: function () {
                // var e = {type: globalManager.shareType.loginShare, inviter: s.getPlayerID(), rewards: "1"};
                // c.login_share_event();
                // var t = globalManager.getShareConfig(globalManager.shareType.loginShare);
                // s.share(function () {
                //     cc.log("share success")
                // }, t.img, t.text, e)
                wxHelper.shareMessage()
            },
            AdPop: function () {
                s.showInterstitialAd(function () {
                    s.requestInterstitialAd(globalManager.InterstitialAdId)
                }, function () {
                    cc.log("interstitialAd load err"), s.requestInterstitialAd(globalManager.InterstitialAdId), this.showToast("No available Ad right now, try again later.")
                }.bind(this))
            },
            moreGameClick: function () {
                this.moregamedialog ? (this.moregamedialog.parent = this.node, this.moregamedialog.active = !0) : (this.moregamedialog = cc.instantiate(this.moregameDlg), this.moregamedialog.parent = this.node, this.moregamedialog.getComponent("moregame-dialog").setData(1))
            },
            rankClick: function () {
                this.showPrefabDialog(this.rank_dialog_prefab)
            },
            idClick: function () {
                this.id_label.node.active = !this.id_label.node.active, globalManager.webCopyString(s.getPlayerID())
            },
            resetClick: function () {
            },
            playBGMusic: function () {
            },
            stopBGMusic: function () {
            },
            showPrefabDialog: function (e) {
                null != this._dialogs[e.name] && this._dialogs[e.name].destroy(), cc.supportJit ? (cc.supportJit = !1, this._dialogs[e.name] = cc.instantiate(e), cc.supportJit = !0) : this._dialogs[e.name] = cc.instantiate(e), this._dialogs[e.name].parent = this.node
            },
            showToast: function (e) {
                this.toast && this.toast.removeFromParent(), this.toast = cc.instantiate(this.alertDlg), this.toast.getComponent("toast").setData(e), this.toast.parent = this.node, this.toast.runAction(cc.sequence(cc.delayTime(2), cc.removeSelf(!0))), this.toast.setLocalZOrder(100)
            },
            showNotification: function (e, t) {
                var a = this;
                this.notificationDlg && this.notificationDlg.getComponent("notification").closedlg(), this.notificationDlg = cc.instantiate(this.notification), this.notificationDlg.getComponent("notification").setData(e, t, function () {
                    a.notificationDlg = null
                }), this.notificationDlg.parent = this.node, this.notificationDlg.setLocalZOrder(100)
            },
            closeSound: function () {
                var e = playerManager.getObjData("enableSound");
                playerManager.setObjData("enableSound", !e)
            },
            showLoading: function (e) {
                console.log("12313", this.node);

                c.data_loading_event(), this.loadcallback = e, this.loading && this.loading.removeFromParent(!0), this.loading = cc.instantiate(this.loadDlg), this.loading.parent = this.node
            },
            closeLoading: function () {
                this.loading && (this.loading.removeFromParent(!0), this.loading = null, this.loadcallback && this.loadcallback())
            },
            saveInviter: function () {
                var e = s.getEntryPointData();
                cc.log("ext=" + JSON.stringify(e)), e && e.type && e.inviter && (e.taskId && e.type == globalManager.shareType.catchFish ? server_util.friendHelp(e.inviter, e.taskId, s.getContextID(), function () {
                    c.invite_new_success_event()
                }) : e.type == globalManager.shareType.inviteFriend ? server_util.saveInviter(e.inviter, s.getContextID(), function () {
                    c.invite_new_success_event()
                }) : e.type == globalManager.shareType.inviteNewFriend ? server_util.saveInviter(e.inviter, s.getContextID(), function () {
                    c.invite_new_success_event()
                }) : e.type == globalManager.shareType.friendWorking && server_util.friendWorking(e.inviter, function () {
                    c.invite_new_success_event()
                })), e && e.type && "switch_game" == e.type && e.taskId && (c.game_from_uc_event(e.name, e.appid), server_util.switchGame(e.taskId, e.gameId, e.userId))
            },
            getRecommendConfig: function () {
                var e = cc.sys.localStorage.getItem("recommendData");
                e && 0 < (e = JSON.parse(e)).length && (this.recommendData = e[0], n.load_webimg(this.recommendData.img, this.recommendIcon), this.recommendIcon.node.active = !0), server_util.getGameList("2", function (e) {
                    e && e.list && cc.sys.localStorage.setItem("recommendData", JSON.stringify(e.list))
                }.bind(this))
            },
            getGlobalConfig: function () {
                server_util.publicConfig(function (e) {
                    e && e.config && (globalManager.publicConfig = e.config)
                })
            },
            recommendClick: function () {
                if (this.recommendData) {
                    var e = {type: "switch_game", name: "bighouse", level: playerManager.getNumData("UnlockLevel") + 1};
                    c.recommend_icon_click_event(this.recommendData.name), s.switchGameAsync(this.recommendData.app_id, function (e) {
                    }, e)
                }
            },
            setBotRecall: function () {
                // var e = s.getEntryPointData();
                cc.log("setBotRecall=" + JSON.stringify(e)), e && e.type && "messenger_recall" == e.type && (cc.log("event = bot_recall_" + e.count), c.bot_recall_event(e.count))
            }
        }), cc._RF.pop()
    }, {

        "fish-cfg": "fish-cfg",
        "instant-util": "instant-util",
        "number-util": "number-util",
        playerManager: "playerManager",
        "webimg-util": "webimg-util"
    }],
    luckyspin_reward: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "3ec9aV29l9P8785VLD2/3mj", "luckyspin_reward");
        var o = logCenter, s = e("instant-util"), i = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                greySprite: cc.Sprite,
                sorrynode: cc.Node,
                congtittlenode: cc.Node,
                sorrytittlenode: cc.Node,
                shareNode: cc.Node,
                videoNode: cc.Node,
                okNode: cc.Node,
                coinlabel: [cc.Label],
                rewardNode: [cc.Node]
            },
            onLoad: function () {
                console.log("==123", this.node);
            },
            setData: function (e, t) {
                (cc.log("reward=" + e), this.rewardType = e, this.farther = t, 0 <= e && e <= this.rewardNode.length - 1 ? (this.coinlabel[e].string = this.getRewardValue(e), this.rewardNode[e].active = !0, this.congtittlenode.active = !0) : -1 == e && (this.sorrynode.active = !0, this.sorrytittlenode.active = !0), 0 == e && Math.random() < globalManager.x6Percent) && (this.okNode.active = !1, globalManager.canShare(globalManager.shareType.x6Share, {level: playerManager.getNumData("UnlockLevel")}) ? this.shareNode.active = !0 : (this.videoNode.active = !0, "WEB" == s.getPlatform() && (this.greySprite.node.active = !0, this.videoNode.getComponent(cc.Button).interactable = !1)))
            },
            getRewardValue: function (e) {
                var t = 0;
                if (0 == e) {
                    n = 0 <= (n = playerManager.getNumData("UnlockLevel") - 4 - 3) ? n : 0;
                    var a = playerManager.getObjData("Price" + n);
                    t = "+ " + i.unit_format(a)
                } else if (1 == e) {
                    var n;
                    n = 0 <= (n = playerManager.getNumData("UnlockLevel") - 4 - 1) ? n : 0;
                    a = playerManager.getObjData("Price" + n);
                    t = "+ " + i.unit_format(a)
                } else 2 == e ? t = "Golden Box!" : 3 == e && (t = "X 150S");
                return cc.log("reward desc=" + t), t
            },
            aquireReward: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, t = this.rewardType,
                    a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (0 == t) {
                    i = 0 <= (i = playerManager.getNumData("UnlockLevel") - 4 - 3) ? i : 0;
                    var n = playerManager.getObjData("Price" + i);
                    playerManager.addNumData("Coin", n * e), cc.director.emit("updateCoin"), a.startAddCoinEffect()
                } else if (1 == t) {
                    var i;
                    i = 0 <= (i = playerManager.getNumData("UnlockLevel") - 4 - 1) ? i : 0;
                    n = playerManager.getObjData("Price" + i);
                    playerManager.addNumData("Coin", n), cc.director.emit("updateCoin"), a.startAddCoinEffect()
                } else if (2 == t) globalManager.GoldenBox += 4; else if (3 == t) {
                    playerManager.addNumData("AcelTime", 150), (a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene")).check2XCD()
                }
            },
            OKDialog: function () {
                var t = this;
                if (-1 == this.rewardType) {
                    var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    if (playerManager.getNumData("TicketAdsTimes") <= 0) return void a.showToast("每天3次免费入场券！");
                    if (globalManager.canShare(globalManager.shareType.spinShare, {level: playerManager.getNumData("UnlockLevel")})) {
                        var e = globalManager.getShareConfig(globalManager.shareType.spinShare),
                            n = {type: globalManager.shareType.spinShare, inviter: s.getPlayerID(), rewards: "1"};
                        o.spin_share_event(), o.share_spin_click_lack_get_ticket_event(), s.chooseContext(function (e) {
                            a.setUserCenterEvent("share"), o.spin_share_success_event(), o.share_spin_click_lack_get_ticket_success_event(), playerManager.addNumData("Ticket", 5), t.farther.refreshTicket(), playerManager.addNumDataWithoutBig("TicketAdsTimes", -1), t.node.removeFromParent(!1)
                        }, function (e, t) {
                            null != t && a.showToast(t)
                        }.bind(t), n, e.text, e.img)
                    } else o.watch_video_event(), o.watch_video_spin_click_lack_get_ticket_event(), s.showRewardAd(function () {
                        cc.log("showAd success"), a.setUserCenterEvent("ad"), o.watch_video_success_event(), o.watch_video_spin_click_lack_get_ticket_success_event(), playerManager.addNumData("Ticket", 5), t.farther.refreshTicket(), playerManager.addNumDataWithoutBig("TicketAdsTimes", -1), t.node.removeFromParent(!1)
                    }, function () {
                        cc.log("RewardAd load err"), a.showToast("No available Ad right now, try again later.")
                    })
                } else this.aquireReward(), this.node.removeFromParent(!1)
            },
            onButtonShare: function (e, t) {
                console.log("onButtonShare==========")
                var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    i = {type: globalManager.shareType.x6Share, inviter: s.getPlayerID(), rewards: "1"},
                    r = globalManager.getShareConfig(globalManager.shareType.x6Share);
                o.share_get_bonus_all_event(), o.share_spin_x6_event(), s.chooseContext(function (e) {
                    n.setUserCenterEvent("share"), o.share_get_bonus_all_success_event(), o.share_spin_x6_success_event(), a.aquireReward(5), a.closeDialog()
                }, function (e, t) {
                    null != t && n.showToast(t)
                }.bind(a), i, r.text, r.img)
            },
            onButtonVideo: function (e, t) {
                console.log("视频222",this.node);
                var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                globalManager.shareType.x6Share, s.getPlayerID();
                o.watch_video_event(), o.watch_video_spin_x6_event(), s.showRewardAd(function () {
                    cc.log("showAd success"), n.setUserCenterEvent("ad"), o.watch_video_success_event(), o.watch_video_spin_x6_success_event(), a.aquireReward(5), a.closeDialog()
                }, function () {
                    cc.log("RewardAd load err"), n.showToast("No available Ad right now, try again later.")
                })
            },
            closeDialog: function () {
                this.aquireReward(), this.node.removeFromParent(!1)
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    luckyspin: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "509407AHU9DAKIFpR5wVjst", "luckyspin");
        var o = logCenter, s = e("instant-util"), n = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                spinrewardPre: cc.Prefab,
                labelCD: cc.Label,
                ticketLabel: cc.Label,
                spinBtn: cc.Button,
                spinNode: cc.Node
            },
            onLoad: function () {
                var e = this;
                this.spinEnable = !1, this.setData(), this.checkTimeCD(), this.schedule(function () {
                    e.checkTimeCD()
                }, 1);
                console.log("======", this.node);
            },
            setData: function () {
                this.showShotCut = !1, this.refreshTicket()
            },
            refreshTicket: function () {
                this.ticketLabel.string = "车票 X " + playerManager.getNumData("Ticket"), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").checkLuckySpin()
            },
            checkTimeCD: function () {
                var e = new Date(new Date((new Date).toLocaleDateString()).getTime() + 864e5) - (new Date).getTime();
                this.labelCD.string = n.time_format(Math.floor(e / 1e3))
            },
            startSpin: function () {
                if (1 != this.spinEnable) {
                    this.spinEnable = !0;
                    var e = playerManager.getNumData("Ticket");
                    0 < e ? (playerManager.setNumData("Ticket", e - 1), this.refreshTicket(), this.startSpinAnim(), o.spin_click_event()) : (this.showNoTicket(), o.spin_click_lack_event()), 1 == playerManager.getObjData("animTutorial5") && (cc.director.emit("nextTutorial7_1"), this.showShotCut = !0)
                }
            },
            startSpinAnim: function () {
                var e = this;
                this.rewarddata = gameData.getSpinReward(), this.spinNode.rotation = 0;
                var t = cc.sequence(cc.rotateBy(3, -2160 - 60 * this.rewarddata.index).easing(cc.easeSineOut()), cc.callFunc(function () {
                    e.showSpinReward(e.rewarddata.type), cc.log("reward index=" + e.rewarddata.index + ";spinNode rotation=" + e.spinNode.rotation)
                }, e));
                this.spinNode.runAction(t)
            },
            showSpinReward: function (e) {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playSound("congratulations");
                var t = cc.instantiate(this.spinrewardPre);
                t.parent = this.node, t.getComponent("luckyspin_reward").setData(e, this), this.spinEnable = !1
            },
            showNoTicket: function () {
                var e = cc.instantiate(this.spinrewardPre);
                e.parent = this.node, e.getComponent("luckyspin_reward").setData(-1, this), this.spinEnable = !1
            },
            onButtonShare: function (e, t) {
                var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (playerManager.getNumData("TicketAdsTimes") <= 0) n.showToast("3 times for free tickets a day!"); else if (globalManager.canShare(globalManager.shareType.spinShare, {level: playerManager.getNumData("UnlockLevel")})) {
                    var i = {type: globalManager.shareType.spinShare, inviter: s.getPlayerID(), rewards: "1"},
                        r = globalManager.getShareConfig(globalManager.shareType.spinShare);
                    o.spin_share_event(), o.share_spin_get_ticket_event(), s.chooseContext(function (e) {
                        n.setUserCenterEvent("share"), o.spin_share_success_event(), o.share_spin_get_ticket_success_event(), playerManager.addNumData("Ticket", 5), n.showToast("You get 5 tickets."), a.refreshTicket(), playerManager.addNumDataWithoutBig("TicketAdsTimes", -1)
                    }, function (e, t) {
                        null != t && n.showToast(t)
                    }.bind(a), i, r.text, r.img)
                } else {
                    // if ("WEB" == s.getPlatform()) return;
                    o.watch_video_event(), o.watch_video_spin_get_ticket_event(), s.showRewardAd(function () {
                        cc.log("showAd success"), n.setUserCenterEvent("ad"), o.watch_video_success_event(), o.watch_video_spin_get_ticket_success_event(), playerManager.addNumData("Ticket", 5), n.showToast("You get 5 tickets."), a.refreshTicket(), playerManager.addNumDataWithoutBig("TicketAdsTimes", -1)
                    }, function () {
                        cc.log("RewardAd load err"), n.showToast("No available Ad right now, try again later.")
                    })
                }
            },
            closeDialog: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                e.closeLuckySpinPopUp(), 1 == this.showShotCut && (e.checkDaily(), e.showDailyCheckinPopUp(null, 1))
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    md5: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "abc2bn/pSlFVoNN3OWIKKno", "md5");
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        cc.MD5 = function (e) {
            function g(e, t, a) {
                return e & t | ~e & a
            }

            function p(e, t, a) {
                return a & e | ~a & t
            }

            function f(e, t, a) {
                return e ^ t ^ a
            }

            function m(e, t, a) {
                return t ^ (e | ~a)
            }

            function v(e, t) {
                return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
            }

            function n(e) {
                for (var t = [], a = 0; a < e.length; a++) if (e.charCodeAt(a) <= 127) t.push(e.charCodeAt(a)); else for (var n = encodeURIComponent(e.charAt(a)).substr(1).split("%"), i = 0; i < n.length; i++) t.push(parseInt(n[i], 16));
                return t
            }

            function t(e) {
                for (var t = new Array(e.length), a = 0; a < e.length; a++) t[a] = e[a];
                return t
            }

            var y = null, a = null;

            function b(e, t) {
                return 4294967295 & e + t
            }

            return "string" == typeof e ? y = n(e) : e.constructor == Array ? 0 === e.length ? y = e : "string" == typeof e[0] ? y = function (e) {
                for (var t = [], a = 0; a < e.length; a++) t = t.concat(n(e[a]));
                return t
            }(e) : "number" == typeof e[0] ? y = e : a = i(e[0]) : "undefined" != typeof ArrayBuffer ? e instanceof ArrayBuffer ? y = t(new Uint8Array(e)) : e instanceof Uint8Array || e instanceof Int8Array ? y = t(e) : e instanceof Uint32Array || e instanceof Int32Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Float32Array || e instanceof Float64Array ? y = t(new Uint8Array(e.buffer)) : a = void 0 === e ? "undefined" : i(e) : a = void 0 === e ? "undefined" : i(e), a && alert("MD5 type mismatch, cannot process " + a), function () {
                function e(e, t, a, n) {
                    var i, r, o = d;
                    d = u, l = b(u = l, (i = b(c, b(e, b(t, a)))) << (r = n) & 4294967295 | i >>> 32 - r), c = o
                }

                var t = y.length;
                y.push(128);
                var a = y.length % 64;
                if (56 < a) {
                    for (var n = 0; n < 64 - a; n++) y.push(0);
                    a = y.length % 64
                }
                for (n = 0; n < 56 - a; n++) y.push(0);
                y = y.concat(function (e) {
                    for (var t = [], a = 0; a < 8; a++) t.push(255 & e), e >>>= 8;
                    return t
                }(8 * t));
                var i = 1732584193, r = 4023233417, o = 2562383102, s = 271733878, c = 0, l = 0, u = 0, d = 0;
                for (n = 0; n < y.length / 64; n++) {
                    c = i;
                    var h = 64 * n;
                    e(g(l = r, u = o, d = s), 3614090360, v(y, h), 7), e(g(l, u, d), 3905402710, v(y, h + 4), 12), e(g(l, u, d), 606105819, v(y, h + 8), 17), e(g(l, u, d), 3250441966, v(y, h + 12), 22), e(g(l, u, d), 4118548399, v(y, h + 16), 7), e(g(l, u, d), 1200080426, v(y, h + 20), 12), e(g(l, u, d), 2821735955, v(y, h + 24), 17), e(g(l, u, d), 4249261313, v(y, h + 28), 22), e(g(l, u, d), 1770035416, v(y, h + 32), 7), e(g(l, u, d), 2336552879, v(y, h + 36), 12), e(g(l, u, d), 4294925233, v(y, h + 40), 17), e(g(l, u, d), 2304563134, v(y, h + 44), 22), e(g(l, u, d), 1804603682, v(y, h + 48), 7), e(g(l, u, d), 4254626195, v(y, h + 52), 12), e(g(l, u, d), 2792965006, v(y, h + 56), 17), e(g(l, u, d), 1236535329, v(y, h + 60), 22), e(p(l, u, d), 4129170786, v(y, h + 4), 5), e(p(l, u, d), 3225465664, v(y, h + 24), 9), e(p(l, u, d), 643717713, v(y, h + 44), 14), e(p(l, u, d), 3921069994, v(y, h), 20), e(p(l, u, d), 3593408605, v(y, h + 20), 5), e(p(l, u, d), 38016083, v(y, h + 40), 9), e(p(l, u, d), 3634488961, v(y, h + 60), 14), e(p(l, u, d), 3889429448, v(y, h + 16), 20), e(p(l, u, d), 568446438, v(y, h + 36), 5), e(p(l, u, d), 3275163606, v(y, h + 56), 9), e(p(l, u, d), 4107603335, v(y, h + 12), 14), e(p(l, u, d), 1163531501, v(y, h + 32), 20), e(p(l, u, d), 2850285829, v(y, h + 52), 5), e(p(l, u, d), 4243563512, v(y, h + 8), 9), e(p(l, u, d), 1735328473, v(y, h + 28), 14), e(p(l, u, d), 2368359562, v(y, h + 48), 20), e(f(l, u, d), 4294588738, v(y, h + 20), 4), e(f(l, u, d), 2272392833, v(y, h + 32), 11), e(f(l, u, d), 1839030562, v(y, h + 44), 16), e(f(l, u, d), 4259657740, v(y, h + 56), 23), e(f(l, u, d), 2763975236, v(y, h + 4), 4), e(f(l, u, d), 1272893353, v(y, h + 16), 11), e(f(l, u, d), 4139469664, v(y, h + 28), 16), e(f(l, u, d), 3200236656, v(y, h + 40), 23), e(f(l, u, d), 681279174, v(y, h + 52), 4), e(f(l, u, d), 3936430074, v(y, h), 11), e(f(l, u, d), 3572445317, v(y, h + 12), 16), e(f(l, u, d), 76029189, v(y, h + 24), 23), e(f(l, u, d), 3654602809, v(y, h + 36), 4), e(f(l, u, d), 3873151461, v(y, h + 48), 11), e(f(l, u, d), 530742520, v(y, h + 60), 16), e(f(l, u, d), 3299628645, v(y, h + 8), 23), e(m(l, u, d), 4096336452, v(y, h), 6), e(m(l, u, d), 1126891415, v(y, h + 28), 10), e(m(l, u, d), 2878612391, v(y, h + 56), 15), e(m(l, u, d), 4237533241, v(y, h + 20), 21), e(m(l, u, d), 1700485571, v(y, h + 48), 6), e(m(l, u, d), 2399980690, v(y, h + 12), 10), e(m(l, u, d), 4293915773, v(y, h + 40), 15), e(m(l, u, d), 2240044497, v(y, h + 4), 21), e(m(l, u, d), 1873313359, v(y, h + 32), 6), e(m(l, u, d), 4264355552, v(y, h + 60), 10), e(m(l, u, d), 2734768916, v(y, h + 24), 15), e(m(l, u, d), 1309151649, v(y, h + 52), 21), e(m(l, u, d), 4149444226, v(y, h + 16), 6), e(m(l, u, d), 3174756917, v(y, h + 44), 10), e(m(l, u, d), 718787259, v(y, h + 8), 15), e(m(l, u, d), 3951481745, v(y, h + 36), 21), i = b(i, c), r = b(r, l), o = b(o, u), s = b(s, d)
                }
                return function (e, t, a, n) {
                    for (var i, r = "", o = 0, s = 0, c = 3; 0 <= c; c--) o = 255 & (s = arguments[c]), o <<= 8, o |= 255 & (s >>>= 8), o <<= 8, o |= 255 & (s >>>= 8), o <<= 8, r += (i = ((o |= s >>>= 8) >>> 0).toString(16), "00000000".substr(0, 8 - i.length) + i);
                    return r
                }(s, o, r, i).toUpperCase()
            }()
        }, cc._RF.pop()
    }, {}],
    "moregame-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a7548VpoGZDiJZDWrB0E4zC", "moregame-dialog");
        cc.Class({
            extends: cc.Component,
            properties: {
                desc_label: {default: null, type: cc.Label},
                list_layout: {default: null, type: cc.Node},
                item_prefab: {default: null, type: cc.Prefab}
            },
            onLoad: function () {
            },
            onDestroy: function () {
            },
            setData: function (e) {
                1 == e ? (this.setListData(globalManager.gamelist), this.desc_label.string = "Here is the passport to other amazing games.\nTry now!") : 2 == e && (this.setListData(globalManager.gameListInGame), this.desc_label.string = "Congratulations! You are on the top of Big Fish!\nI believe you do have the talent in other games.\nTry now!")
            },
            setListData: function (e) {
                this.list_layout.getComponent("list-adapter").removeAllListView();
                for (var t = [], a = 0; a < e.length; a++) {
                    var n = e[a];
                    t.push({gamename: n.name, appid: n.app_id, iconurl: n.img})
                }
                this.list_layout.getComponent("list-adapter").initListView(this.item_prefab, "moregame-item", t)
            },
            closeDialog: function () {
                this.node.active = !1
            }
        }), cc._RF.pop()
    }, {}],
    "moregame-item": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a018dIb+I9AP4G7IPM5dP/L", "moregame-item");
        var n = logCenter, i = e("instant-util"), r = e("webimg-util");
        cc.Class({
            extends: cc.Component,
            properties: {img_icon: cc.Sprite, name_label: cc.Label, play_btn: cc.Button},
            setData: function (e, t) {
                this.mydata = e, this.name_label.string = e.gamename, r.load_webimg(e.iconurl, this.img_icon)
            },
            buyClick: function () {
                var e = {type: "switch_game", name: "bighouse", level: playerManager.getNumData("UnlockLevel") + 1};
                n.switchgameasync_event(this.mydata.gamename), i.switchGameAsync(this.mydata.appid, function (e) {
                }, e)
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "webimg-util": "webimg-util"}],
    "native-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "76075+izWdG951U8gWf8cLW", "native-util");
        var n = e("PlatformSdk"), i = e("UserInterface");
        t.exports = {
            init: function () {
                n.setListener(this.callback.bind(this)), n.init()
            }, fbLogin: function () {
                i.login()
            }, callback: function (e, t) {
                e
            }
        }, cc._RF.pop()
    }, {PlatformSdk: "PlatformSdk", UserInterface: "UserInterface"}],
    "no-coin-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7e1c9cTNZtJEIcwArcarMD0", "no-coin-dialog");
        var i = e("number-util"), r = e("instant-util"), o = logCenter;
        cc.Class({
            extends: cc.Component,
            properties: {
                add_coint_label: {default: null, type: cc.Label},
                greySprite: cc.Sprite,
                labelCD: cc.Label,
                videolabel: cc.Label,
                videoFrame: [cc.SpriteFrame],
                spItem: cc.Sprite,
                btnNode: cc.Node,
                shareBtn: cc.Node,
                videoBtn: cc.Node
            },
            onLoad: function () {
                var e = cc.view.getFrameSize(), t = 1334 * e.width / 750 / e.height;
                this.btnNode.scale = 1 < t ? 1 : t;
                var a = playerManager.getNumData("UnlockLevel") - 4;
                a = 0 <= a ? a : 0, cc.log("price=" + playerManager.getObjData("Price" + a));
                var n = i.unit_format(playerManager.getObjData("Price" + a));
                this.add_coint_label.string = "+" + n, this.setWatchVideoEnable(!0), this.shareBtn.active = !1, this.videoBtn.active = !1, this.shareBtn.x = 0, this.videoBtn.x = 0, globalManager.canShare(globalManager.shareType.NoCoinShare, {
                    level: playerManager.getNumData("UnlockLevel"),
                    isFirst: globalManager.isNewPlayer
                }) ? (this.shareBtn.active = !0, this.videoBtn.active = !0, this.shareBtn.x = -168, this.videoBtn.x = 168, this.rewardType = 1) : (this.videoBtn.active = !0, this.rewardType = 2), "WEB" == r.getPlatform() && (this.greySprite.node.active = !0, this.videoBtn.getComponent(cc.Button).interactable = !1), this.checkTimeCD()
            },
            onDestroy: function () {
            },
            checkTimeCD: function () {
                var t = this;
                if (0 < playerManager.getNumData("TimeCD1") && 1 == this.rewardType) t.labelCD.node.active = !0, t.videolabel.node.active = !1, this.videoBtn.getComponent(cc.Button).interactable = !1, t.spItem.spriteFrame = t.videoFrame[1], t.labelCD.string = i.time_format(playerManager.getNumData("TimeCD1")), i.playerdataCountDown("TimeCD1", 1, function (e) {
                    t.labelCD && (t.labelCD.string = i.time_format(e)), 0 == e && t.labelCD && (t.labelCD.node.active = !1, t.videolabel.node.active = !0, t.videoBtn.getComponent(cc.Button).interactable = !0, t.spItem.spriteFrame = t.videoFrame[0])
                }); else {
                    if ("WEB" == r.getPlatform()) return void (t.labelCD.node.active = !1);
                    t.labelCD.node.active = !1, t.videolabel.node.active = !0, this.videoBtn.getComponent(cc.Button).interactable = !0, t.spItem.spriteFrame = t.videoFrame[0]
                }
            },
            closeWatchVideoDialog: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeNoCoinDialog()
            },
            watchVideo: function () {
                var a = this;
                1 == this.rewardType ? o.watch_video_get_coin_white_event() : 2 == this.rewardType && o.watch_video_get_coin_black_event();
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                r.showRewardAd(function () {
                    cc.log("showAd success"), n.setUserCenterEvent("ad"), 1 == a.rewardType ? o.watch_video_get_coin_success_white_event() : 2 == a.rewardType && o.watch_video_get_coin_black_success_event();
                    var e = playerManager.getNumData("UnlockLevel") - 4;
                    e = 0 <= e ? e : 0;
                    var t = playerManager.getObjData("Price" + e);
                    n.showToast("+" + i.unit_format(t) + " coins"), playerManager.addNumData("Coin", t), cc.director.emit("updateCoin"), n.startAddCoinEffect(), 1 == a.rewardType && playerManager.addNumData("TimeCD1", globalManager.videoTime), a.checkTimeCD(), a.closeWatchVideoDialog()
                }, function () {
                    cc.log("RewardAd load err"), n.showToast("No available Ad right now, try again later.")
                })
            },
            shareTo: function () {
                var a = this;
                o.share_get_coin_event();
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    e = {type: globalManager.shareType.NoCoinShare, inviter: r.getPlayerID(), rewards: "1"},
                    t = globalManager.getShareConfig(globalManager.shareType.NoCoinShare);
                r.chooseContext(function () {
                    n.setUserCenterEvent("share"), o.share_get_coin_success_event();
                    var e = playerManager.getNumData("UnlockLevel") - 4;
                    e = 0 <= e ? e : 0;
                    var t = playerManager.getObjData("Price" + e);
                    n.showToast("+" + i.unit_format(t) + " coins"), playerManager.addNumData("Coin", t), cc.director.emit("updateCoin"), n.startAddCoinEffect(), a.closeWatchVideoDialog()
                }, function (e, t) {
                    o.share_offline_coin_fail_event(e), n.showToast(t)
                }, e, t.text, t.img)
            },
            setWatchVideoEnable: function (e) {
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    notification: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a5abbAhswJEZaNVWhA9tuob", "notification");
        cc.Class({
            extends: cc.Component,
            properties: {bg_layout: {default: null, type: cc.Node}, text_label: {default: null, type: cc.Label}},
            onLoad: function () {
            },
            start: function () {
            },
            setData: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 5, a = arguments[2], n = this;
                this.text_label.string = e, this.callback = a, n.playAnim(!1), this.node.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function () {
                    n.closedlg()
                }, n)))
            },
            playAnim: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    t = this.node.getComponent(cc.Animation);
                1 == e ? t.play("notification1_anim", 0) : t.play("notification_anim", 0)
            },
            closedlg: function () {
                var e = this;
                this.playAnim(!0), this.node.runAction(cc.sequence(cc.delayTime(.35), cc.callFunc(function () {
                    e.callback && e.callback()
                }, e), cc.removeSelf()))
            }
        }), cc._RF.pop()
    }, {}],
    "number-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "02fafbsqUREbJv8xzpAbqxZ", "number-util");
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = {};

        function y(e, t) {
            var a = [e, t];
            if (e.length < t.length) return a[0] = t, a[1] = e, a[2] = "not", a;
            if (e.length == t.length) for (var n = 0; n < e.length; n++) {
                if (a[0][n] > a[1][n]) return a[0] = e, a[1] = t, a;
                if (a[0][n] < a[1][n]) return a[0] = t, a[1] = e, a[2] = "not", a;
                if (n == e.length - 1) return a
            }
            return e.length > t.length ? a : void 0
        }

        function b(e) {
            if (0 == e) return e = 0;
            for (var t = (e = e.split("")).length, a = 0; a < t && 0 == e[0]; a++) e.splice(0, 1);
            return e
        }

        for (var i = ["", "K", "M", "B", "T"], n = 0; n < 2; n++) for (var s = 0; s < 26; s++) i.push(String.fromCharCode(65 + n) + String.fromCharCode(65 + s));
        t.exports = {
            unit_format: function (e) {
                var t = "";
                if (6 < (e = e.toString()).length) {
                    var a = parseInt(e.length / 3), n = e.length % 3;
                    t = i[a -= 0 == n ? 2 : 1], e = e.substr(0, e.length - 3 * a)
                }
                return this.number_format(e, 0, ",") + t
            }, number_format: function (e, t, a) {
                e = (e + "").replace(/[^0-9+-Ee.]/g, "");
                var n, i, r, o = isFinite(+e) ? +e : 0, s = isFinite(+t) ? Math.abs(t) : 0, c = void 0 === a ? "," : a,
                    l = "";
                l = (s ? (n = o, i = s, r = Math.pow(10, i), "" + Math.ceil(n * r) / r) : "" + Math.round(o)).split(".");
                for (var u = /(-?\d+)(\d{3})/; u.test(l[0]);) l[0] = l[0].replace(u, "$1" + c + "$2");
                return (l[1] || "").length < s && (l[1] = l[1] || "", l[1] += new Array(s - l[1].length + 1).join("0")), l.join(".")
            }, setNumberLength: function (e, t) {
                for (e = e.toString(); e.length < t;) e = "0" + e;
                return e
            }, time_format: function (e) {
                var t = this.setNumberLength(Math.floor(e / 3600), 2);
                return e %= 3600, t + ":" + this.setNumberLength(Math.floor(e / 60), 2) + ":" + this.setNumberLength(e % 60, 2)
            }, time_format_day: function (e) {
                var t = Math.floor(e / 86400);
                e %= 86400;
                var a = this.setNumberLength(Math.floor(e / 3600), 2);
                e %= 3600;
                var n = a + ":" + this.setNumberLength(Math.floor(e / 60), 2) + ":" + this.setNumberLength(e % 60, 2);
                return 0 == t || (1 == t ? n += " 1day" : 2 <= t && (n = n + " " + t + "days")), n
            }, sortByType: function (e, t) {
                var i;
                return e.sort((i = t, function (e, t) {
                    var a, n;
                    if ("object" === (void 0 === e ? "undefined" : r(e)) && "object" === (void 0 === t ? "undefined" : r(t)) && e && t) return (a = e[i]) === (n = t[i]) ? 0 : (void 0 === a ? "undefined" : r(a)) === (void 0 === n ? "undefined" : r(n)) ? a < n ? -1 : 1 : (void 0 === a ? "undefined" : r(a)) < (void 0 === n ? "undefined" : r(n)) ? -1 : 1;
                    throw"error"
                }))
            }, countTime: function (e, t) {
                var a = setInterval(function () {
                    0 <= e ? (t(e), e--) : (cc.log("stop Interval=" + a), clearInterval(a))
                }.bind(this), 1e3);
                return a
            }, clearInterval: function (t) {
                function e(e) {
                    return t.apply(this, arguments)
                }

                return e.toString = function () {
                    return t.toString()
                }, e
            }(function (e) {
                cc.log("clearInterval=" + e), clearInterval(e)
            }), playerdataCountDown: function (t, e, a) {
                var n = this;

                function i() {
                    o[t] = window.setTimeout(function (e) {
                        playerManager.setNumData(t, playerManager.getNumData(t) - 1), a && a(playerManager.getNumData(t)), 0 < playerManager.getNumData(t) ? i() : o[t] = null
                    }.bind(n), 1e3 * e)
                }

                null == o[t] || this.playerdataCountDownClear(t), i()
            }, playerdataCountDownClear: function (e) {
                null != o[e] && (window.clearTimeout(o[e]), o[e] = null)
            }, isOneDay: function (e, t) {
                if (e && t) {
                    var a = new Date(parseInt(e)), n = new Date(parseInt(t));
                    if (a.getFullYear() == n.getFullYear() && a.getMonth() == n.getMonth() && a.getDate() == n.getDate()) return !0
                }
                return !1
            }, randomNum: function (e, t) {
                switch (arguments.length) {
                    case 1:
                        return parseInt(Math.random() * e + 1, 10);
                    case 2:
                        return parseInt(Math.random() * (t - e + 1) + e, 10);
                    default:
                        return 0
                }
            }, galaxyAdd: function (e, t) {
                var a, n = [String(e), String(t)], i = [];
                (n = y(n[0], n[1]))[0] = n[0].split(""), n[1] = n[1].split(""), n[0].length != n[1].length && (a = new Array(n[0].length - n[1].length + 1).join("0"), n[1] = a.split("").concat(n[1]));
                for (var r = 0, o = n[0].length - 1; 0 <= o; o--) {
                    var s = Number(n[0][o]) + Number(n[1][o]) + r;
                    i.unshift(s % 10), r = Math.floor(s / 10), 0 == o && 0 != r && i.unshift(r)
                }
                return i.join("")
            }, galaxySub: function (e, t) {
                var a, n = [String(e), String(t)], i = [];
                if (3 == (n = y(n[0], n[1])).length) return !1;
                n[0] = n[0].split(""), n[1] = n[1].split(""), n[0].length != n[1].length && (a = new Array(n[0].length - n[1].length + 1).join("0"), n[1] = a.split("").concat(n[1]));
                for (var r = 0, o = n[0].length - 1; 0 <= o; o--) {
                    var s = Number(n[0][o]) - Number(n[1][o]) - r;
                    s < (r = 0) && (s += 10, r = 1), i.unshift(s % 10)
                }
                var c = i.join("");
                0 == c[0] && (c = b(c));
                for (var l = "", u = 0; u < c.length; u++) l += "" + c[u];
                return "" == l && (l = "0"), l
            }, galaxyMut: function (e, t) {
                var a,
                    n = "number" == typeof (a = t) ? null != a.toString().split(".")[1] ? a.toString().split(".")[1].length : 0 : "string" == typeof a ? null != a.split(".")[1] ? a.split(".")[1].length : 0 : void 0;
                0 < n && (t = String(t).replace(".", ""));
                var i = [String(e), String(t)], r = [];
                if ((i = y(i[0], i[1]))[0] = i[0].split(""), i[1] = i[1].split(""), -1 != i[0].indexOf("N") || -1 != i[1].indexOf("N")) return e;
                for (var o = i[1].length - 1; 0 <= o; o--) {
                    for (var s, c = 0, l = [], u = i[0].length - 1; 0 <= u; u--) {
                        var d = Number(i[0][u]) * Number(i[1][o]) + c;
                        l.unshift(d % 10), c = Math.floor(d / 10), 0 == u && 0 != c && l.unshift(c)
                    }
                    s = new Array(i[1].length - (o + 1) + 1).join("0"), l.push(s), r[o] = l.join("")
                }
                for (var h = r.length, g = 1; g < h; g++) {
                    var p = this.galaxyAdd(r[0], r[1]);
                    r.splice(0, 2, p)
                }
                var f = r.join("");
                0 == f[0] && (f = b(f));
                for (var m = "", v = 0; v < f.length - n; v++) 0 <= parseInt(f[v]) && (m += "" + f[v]);
                return "" == m && (m = "0"), m
            }, galaxyDiv: function (e, t) {
                e = String(e), t = String(t);
                for (var a = e.length, n = (t.length, 0), i = 0, r = [], o = 0, s = 0; s < a; s++) (o = 10 * i + parseInt(e[s])) < t ? (i = o, r.push(0)) : (n = parseInt(o / t), i = o % t, r.push(n));
                var c = r.join("").replace(/\b(0+)/gi, "");
                return "" == c && (c = "0"), c
            }, cmpBigInt: function (e, t) {
                if (e = String(e), t = String(t), e.length > t.length) return 1;
                if (e.length < t.length) return -1;
                for (var a = 0; a < e.length; a++) {
                    if (e[a] > t[a]) return 1;
                    if (e[a] < t[a]) return -1
                }
                return 0
            }, compare: function (e, t) {
                return 0 <= this.cmpBigInt(e, t)
            }, format: function (e, t) {
                if (e && "object" == (void 0 === t ? "undefined" : r(t))) for (var a in t) if (null != t[a]) {
                    var n = new RegExp("({" + a + "})", "g");
                    e = e.replace(n, t[a])
                }
                return e
            }
        }, cc._RF.pop()
    }, {}],
    playerManager: [function (e, c, t) {
        "use strict";
        cc._RF.push(c, "f8b1f3zdNlF9aBhUGRcZzQm", "playerManager");
        var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, g = logCenter, p = e("instant-util"), l = e("number-util");
        e("server-util"), function () {
            if (window.playerManager) c.exports = window.playerManager; else {
                for (var u = u || {}, d = {
                    firstLogin: !0,
                    lastLogin: 0,
                    lookTutorial: !0,
                    animTutorial: !0,
                    animTutorial3: !0,
                    animTutorial5: !0,
                    enableSound: !0,
                    Coin: "10000",
                    UnlockLevel: 0,
                    Ticket: 0,
                    TicketAdsTimes: 0,
                    PlayerExp: "0",
                    playDays: 0,
                    dailyReward: 0,
                    dailyRewardCan: 0,
                    ADTime: 0,
                    ADTimeCD: 0,
                    AcelTimeCD: 0,
                    AcelTime: 0,
                    ShareTimeCD: 0,
                    FreeHouseTime: 0,
                    ShareTime: 0,
                    lastOffline: -1,
                    sharedContextIds: {},
                    getCoinTime: 0,
                    getFreeTime: 0,
                    freeReward: !1,
                    inviteRewards: {},
                    inviteCount: 0,
                    inviteReceiveTime: 0,
                    dailyTask: {taskTime: 0, taskProgress: []},
                    dailyPoint: {point: 0, rewardState: []},
                    messageRewardIds: [],
                    shareLinkRewardIds: [],
                    catchFish: {},
                    test2019Received: !1,
                    test2019Reward: 0,
                    userCenterTask: {taskTime: 0, taskProgress: []},
                    subscribeReward: {time: 0, count: 0}
                }, e = 0; e < fish_data.length; e++) d["Price" + e] = fish_data[e].price + "";
                for (e = 0; e < 15; e++) d["Panel" + e] = {level: -1, state: 0, price: "0"};
                for (e = 0; e < 3; e++) d["TimeCD" + e] = 0;
                var t = {
                    firstLogin: !(d.BankTimeCDCol = 0),
                    lastLogin: 0,
                    lookTutorial: !0,
                    animTutorial: !0,
                    animTutorial3: !0,
                    animTutorial5: !0,
                    enableSound: !0,
                    Coin: "10000",
                    UnlockLevel: 0,
                    Ticket: 0,
                    TicketAdsTimes: 0,
                    PlayerExp: "0",
                    playDays: 0,
                    dailyReward: 0,
                    dailyRewardCan: 0,
                    ADTime: 0,
                    ADTimeCD: 0,
                    AcelTimeCD: 0,
                    AcelTime: 0,
                    ShareTime: 0,
                    ShareTimeCD: 0,
                    FreeHouseTime: 0,
                    lastOffline: -1,
                    sharedContextIds: {},
                    getCoinTime: 0,
                    getFreeTime: 0,
                    freeReward: !1,
                    inviteRewards: null,
                    inviteCount: 0,
                    inviteReceiveTime: 0,
                    dailyTask: {taskTime: 0, taskProgress: []},
                    dailyPoint: {point: 0, rewardState: []},
                    messageRewardIds: [],
                    shareLinkRewardIds: [],
                    catchFish: {},
                    test2019Received: !1,
                    test2019Reward: 0,
                    userCenterTask: {taskTime: 0, taskProgress: []},
                    subscribeReward: {time: 0, count: 0}
                };
                for (e = 0; e < fish_data.length; e++) t["Price" + e] = fish_data[e].price + "";
                for (e = 0; e < 15; e++) t["Panel" + e] = {level: -1, state: 0, price: "0"};
                for (e = 0; e < 3; e++) t["TimeCD" + e] = 0;
                t.BankTimeCDCol = 0, /^192\..*|localhost/.exec(/*location.hostname*/"") && (t.enableSound = !1, t.animTutorial = !1, t.animTutorial3 = !1, t.animTutorial5 = !1, t.Coin = "10000", t.UnlockLevel = 29, t.PlayerExp = "224"), u.playerData = t;
                var o = Math.round(1e10 * Math.random()).toString(), s = {Coin: !0, UnlockLevel: !0};
                for (var a in u.playerData) if (1 == s[a]) if ("number" == typeof d[a]) {
                    var n = globalManager.encrypt("" + u.playerData[a], o);
                    u.playerData[a] = n
                } else {
                    var i = u.playerData[a];
                    if ("object" == h(d[a])) {
                        var r = JSON.stringify(i);
                        i = globalManager.encrypt(r, o)
                    } else i = globalManager.encrypt("" + i, o);
                    u.playerData[a] = i
                }
                u.coinEnough = function (e) {
                    if (l.compare(u.getObjData("Coin"), e)) return !0;
                    var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    return t.noCoinDlg && (t.showNoCoinDialog(), t.showToast("Insufficient coins")), !1
                }, u.setNumData = function (e, t) {
                    var a = t;
                    null != t && "null" != t || (a = d[e]), 1 == s[e] && (a = globalManager.encrypt("" + t, o)), u.playerData[e] = a;
                    var n = {};
                    n[e] = t + "", n[e + "savetime"] = (new Date).getTime() + "",/* p.setData(n), */globalManager.saveLocalData(e, n[e]), globalManager.saveLocalData(e + "savetime", n[e + "savetime"]), server_util.setGameData(e, t)
                }, u.getNumData = function (e) {
                    var t = u.playerData[e];
                    return 1 == s[e] && (t = globalManager.decrypt(u.playerData[e], o)), parseInt(t)
                }, u.addNumDataWithoutBig = function (e, t) {
                    t = isNaN(t) ? 0 : t;
                    var a = parseInt(u.playerData[e]);
                    a = isNaN(a) ? 0 : a, u.playerData[e] = "" + (a + t);
                    var n = {};
                    n[e] = u.playerData[e], n[e + "savetime"] = (new Date).getTime() + "", p.setData(n), globalManager.saveLocalData(e, n[e]), globalManager.saveLocalData(e + "savetime", n[e + "savetime"]), server_util.setGameData(e, n[e])
                }, u.addNumData = function (e, t) {
                    t = isNaN(t) ? 0 : t;
                    var a = u.getObjData(e);
                    a = isNaN(a) ? 0 : a, u.setObjData(e, l.galaxyAdd(a, t));
                    var n = {};
                    n[e] = u.getObjData(e), n[e + "savetime"] = (new Date).getTime() + "", /*p.setData(n),*/ globalManager.saveLocalData(e, n[e]), globalManager.saveLocalData(e + "savetime", n[e + "savetime"]), server_util.setGameData(e, n[e])
                }, u.setObjData = function (e, t) {
                    var a = t;
                    if (null != t && "null" != t || (a = d[e]), 1 == s[e]) if ("object" == h(d[e])) {
                        var n = JSON.stringify(t);
                        a = globalManager.encrypt(n, o)
                    } else a = globalManager.encrypt("" + t, o);
                    u.playerData[e] = a;
                    var i = {};
                    i[e] = t, i[e + "savetime"] = (new Date).getTime() + "";
                    var r = t;
                    "object" == h(d[e]) && (r = JSON.stringify(t)), globalManager.saveLocalData(e, r), globalManager.saveLocalData(e + "savetime", i[e + "savetime"]), /*p.setData(i), */server_util.setGameData(e, t)
                }, u.getObjData = function (e) {
                    var t, a = u.playerData[e];
                    if (1 == s[e]) if ("object" == h(d[e])) {
                        var n = globalManager.decrypt(a, o);
                        t = JSON.parse(n)
                    } else t = globalManager.decrypt(a, o); else t = a;
                    return t
                }, u.loadAllData = function (l) {
                    console.log("loadAllData=====", this.node);
                    var e = wxHelper.getLocalData(["firstLogin", "firstLoginsavetime"]);
                    // "undefined" != typeof FBInstant ? p.getData(["firstLogin", "firstLoginsavetime"], function (e) {
                    if (0 == u.getDataAuto(e, "firstLogin")) {
                        u.setObjData("animTutorial", !1);
                        var t = [], r = [], o = {};
                        for (var a in u.playerData) "firstLogin" != a && (t.push(a), r.push(a), t.push(a + "savetime"), o[a] = 1, o[a + "savetime"] = 1);
                        0 < t.length ? p.getData(t, function (e) {
                            for (var t in r) {
                                var a = r[t];
                                e[a];
                                u.setObjData(a, u.getDataAuto(e, a))
                            }
                            for (var t in e) {
                                null != e[t] && o[t]--
                            }
                            var n = "";
                            for (var i in o) 1 == o[i] && (g.fb_get_data_fail_event(i), n = n + i + ";");
                            "" != n && cc.log("fb_get_data_fail:" + n), l(!1)
                        }) : l(!1)
                    } else {
                        console.log("setObjData=====", this.node);
                        u.setObjData("firstLogin", !1);
                        t = [];
                        for (var a in u.playerData) t.push(a);
                        if (0 < t.length) {
                            for (var n = {}, i = t.length - 1; 0 <= i; i--) {
                                a = t[i];
                                var s = u.playerData[a];
                                s = "number" == typeof d[a] ? u.getNumData(a) : u.getObjData(a), n[a] = s, n[a + "savetime"] = (new Date).getTime() + "";
                                var c = s;
                                "object" == h(d[a]) && (c = JSON.stringify(s)), globalManager.saveLocalData(a, c), globalManager.saveLocalData(a + "savetime", n[a + "savetime"])
                            }
                            l(!0);
                            // , p.setData(n, function (e) {
                            // })
                        } else l(!0)
                    }
                    // }) : setTimeout(function () {
                    //     l && l(!0)
                    // }, 1e3)
                }, u.getScore = function () {
                    for (var e = 0, t = 0; t < 15; t++) {
                        var a = u.getObjData("Panel" + t).level;
                        0 <= a && (e += Math.pow(2, a))
                    }
                    return e
                }, u.forceUpdateData = function (e) {
                    for (var t in e) {
                        var a = !1;
                        "string" == typeof e[t] && (a = 0 <= e[t].indexOf("savetime")), a ? e[t] = Number(e[t]) : "boolean" == typeof d[t] ? e[t] = Boolean(e[t]) : "number" == typeof d[t] ? e[t] = Number(e[t]) : "object" == h(d[t]) && (cc.log("data[k]=" + e[t]), e[t] = JSON.parse(e[t])), this.setObjData(t, e[t])
                    }
                }, u.setCustomEvent = function (e) {
                    var t = p.getEntryPointData();
                    if (t && t.type && (g.player_link_click_event(t.type), "messenger_recall" == t.type && g.bot_recall_event(t.count)), 0 == e) {
                        var a = cc.sys.localStorage.getItem("createshortcut");
                        a && l.isOneDay(a, Date.parse(new Date)) || (cc.sys.localStorage.setItem("createshortcut", Date.parse(new Date)), p.createShortcut(function () {
                            g.create_shortcut_event()
                        }))
                    } else t && t.type && ("switch_game" == t.type ? g.new_player_switch_click_event(t.name) : g.new_player_link_click_event(t.type)), p.subscribeBotAsync(function () {
                        g.subscribe_bot_event()
                    })
                }, u.compareSaveTime = function (e, t) {
                    return null != e && "" != e || (e = 0), e = Number(e), null != t && "" != t || (t = 0), e = Number(e), 0 == (t = Number(t)) && 0 == e ? 1 : e <= t ? 2 : 1
                }, u.getDataAuto = function (e, t) {
                    var a = this.compareSaveTime(e[t + "savetime"], globalManager.getLocalData(t + "savetime")),
                        n = void 0, i = function (e, t) {
                            return "boolean" == typeof e ? e : null == e || "" == e ? t : "false" != e && ("true" == e || void 0)
                        }, r = function (e, t) {
                            var a = Number(e);
                            return isNaN(a) ? t : a
                        }, o = function (e, t) {
                            var a;
                            try {
                                return "object" == (void 0 === (a = JSON.parse(e)) ? "undefined" : h(a)) && a ? a : t
                            } catch (e) {
                                return t
                            }
                        };
                    return 1 == a ? (cc.log("key " + t + " load from fb."), null != (n = e[t]) && "null" != n || (cc.log("fb load null key " + t + " load from local."), n = globalManager.getLocalData(t, d[t]), "boolean" == typeof d[t] ? (cc.log("boolean=" + n), n = i(n, d[t])) : "number" == typeof d[t] ? (cc.log("number=" + n), n = r(n, d[t])) : "object" == h(d[t]) && (cc.log("object=" + n), n = o(n, d[t])))) : 2 == a && (cc.log("key " + t + " load from local."), n = globalManager.getLocalData(t, d[t]), "boolean" == typeof d[t] ? (cc.log("boolean=" + n), n = i(n, d[t])) : "number" == typeof d[t] ? (cc.log("number=" + n), n = r(n, d[t])) : "object" == h(d[t]) && (cc.log("object=" + n), n = o(n, d[t]))), cc.log("value2=" + n), n
                }, u.resetData = function () {
                    for (var e in d) {
                        var t = d[e];
                        this.setObjData(e, t)
                    }
                    cc.sys.localStorage.setItem("createshortcut", 0)
                }, cc.game.on(cc.game.EVENT_HIDE, function (e) {
                    cc.log("game onPause2"), u.setObjData("lastOffline", Math.floor((new Date).getTime() / 1e3))
                }), cc.game.on(cc.game.EVENT_SHOW, function (e) {
                    cc.log("game onResume"), cc.director.emit("game_eventshow")
                }), cc.director.on("forceUpdateData", function (e) {
                    u.forceUpdateData(e.detail)
                }), cc.director.on("resetData", function (e) {
                    u.resetData()
                }), window.playerManager = u, c.exports = u
            }
        }(), cc._RF.pop()
    }, {

        "instant-util": "instant-util",
        "number-util": "number-util",
        "server-util": "server-util"
    }],
    "polyglot.min": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
        var n, i, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        n = void 0, i = function (t) {
            function e(e) {
                e = e || {}, this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en", this.allowMissing = !!e.allowMissing, this.warn = e.warn || a
            }

            function i(e, t, a) {
                var n, i, r, o, s, c, l;
                return null != a && e ? (r = (i = e.split(u))[(o = t, s = a, d[(c = o, l = function (e) {
                    var t, a, n, i = {};
                    for (t in e) if (e.hasOwnProperty(t)) for (n in a = e[t]) i[a[n]] = t;
                    return i
                }(h), l[c] || l.en)](s))] || i[0], n = r.replace(/^\s+|\s+$/g, "")) : n = e, n
            }

            function a(e) {
                t.console && t.console.warn && t.console.warn("WARNING: " + e)
            }

            e.VERSION = "0.4.3", e.prototype.locale = function (e) {
                return e && (this.currentLocale = e), this.currentLocale
            }, e.prototype.extend = function (e, t) {
                var a;
                for (var n in e) e.hasOwnProperty(n) && (a = e[n], t && (n = t + "." + n), "object" == (void 0 === a ? "undefined" : r(a)) ? this.extend(a, n) : this.phrases[n] = a)
            }, e.prototype.clear = function () {
                this.phrases = {}
            }, e.prototype.replace = function (e) {
                this.clear(), this.extend(e)
            }, e.prototype.t = function (e, t) {
                var a, n;
                return "number" == typeof (t = null == t ? {} : t) && (t = {smart_count: t}), "string" == typeof this.phrases[e] ? a = this.phrases[e] : "string" == typeof t._ ? a = t._ : this.allowMissing ? a = e : (this.warn('Missing translation for key: "' + e + '"'), n = e), "string" == typeof a && (t = function (e) {
                    var t = {};
                    for (var a in e) t[a] = e[a];
                    return t
                }(t), n = function (e, t) {
                    for (var a in t) "_" !== a && t.hasOwnProperty(a) && (e = e.replace(new RegExp("%\\{" + a + "\\}", "g"), t[a]));
                    return e
                }(n = i(a, this.currentLocale, t.smart_count), t)), n
            }, e.prototype.has = function (e) {
                return e in this.phrases
            };
            var u = "||||", d = {
                chinese: function (e) {
                    return 0
                }, german: function (e) {
                    return 1 !== e ? 1 : 0
                }, french: function (e) {
                    return 1 < e ? 1 : 0
                }, russian: function (e) {
                    return e % 10 == 1 && e % 100 != 11 ? 0 : 2 <= e % 10 && e % 10 <= 4 && (e % 100 < 10 || 20 <= e % 100) ? 1 : 2
                }, czech: function (e) {
                    return 1 === e ? 0 : 2 <= e && e <= 4 ? 1 : 2
                }, polish: function (e) {
                    return 1 === e ? 0 : 2 <= e % 10 && e % 10 <= 4 && (e % 100 < 10 || 20 <= e % 100) ? 1 : 2
                }, icelandic: function (e) {
                    return e % 10 != 1 || e % 100 == 11 ? 1 : 0
                }
            }, h = {
                chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                french: ["fr", "tl", "pt-br"],
                russian: ["hr", "ru"],
                czech: ["cs"],
                polish: ["pl"],
                icelandic: ["is"]
            };
            return e
        }, "function" == typeof define && define.amd ? define([], function () {
            return i(n)
        }) : "object" == (void 0 === a ? "undefined" : r(a)) ? t.exports = i(n) : n.Polyglot = i(n), cc._RF.pop()
    }, {}],
    "pomelo-client": [function (z, Z, e) {
        "use strict";
        cc._RF.push(Z, "475261YaN5DH5scskqiHBzi", "pomelo-client"), function () {
            z("protocol");
            var o = window.protobuf, s = window.decodeIO_protobuf, c = null, l = null, u = Protocol.Package,
                r = Protocol.Message, e = window.EventEmitter, d = window.rsa;
            "undefined" != typeof window && "undefined" != typeof sys && sys.localStorage && (window.localStorage = sys.localStorage);
            "function" != typeof Object.create && (Object.create = function (e) {
                function t() {
                }

                return t.prototype = e, new t
            });
            var t = window, h = Object.create(e.prototype);
            t.pomelo = h;
            var g, p = null, n = 0, i = {}, f = {}, m = {}, v = {}, y = {}, b = {}, _ = {}, C = 0, a = 0, w = 0, S = 0,
                D = null, k = null, A = null, I = null, N = null, T = !1, x = null, P = null, M = 0, R = 5e3,
                F = {sys: {type: "js-websocket", version: "0.0.1", rsa: {}}, user: {}}, B = null;
            h.init = function (e, t) {
                B = t;
                var a = e.host, n = e.port, i = e.local;
                N = e.encode || E, I = e.decode || L;
                var r = i ? "ws://" + a : "wss://" + a;
                if (n && (r += ":" + n), F.user = e.user, e.encrypt) {
                    g = !0, d.generate(1024, "10001");
                    var o = {rsa_n: d.n.toString(16), rsa_e: d.e};
                    F.sys.rsa = o
                }
                A = e.handshakeCallback, U(e, r, t)
            };
            var L = h.decode = function (e) {
                var t = r.decode(e);
                if (!(0 < t.id) || (t.route = m[t.id], delete m[t.id], t.route)) return t.body = Y(t), t
            }, E = h.encode = function (e, t, a) {
                var n = e ? r.TYPE_REQUEST : r.TYPE_NOTIFY;
                if (o && _[t]) a = o.encode(t, a); else if (c && c.lookup(t)) {
                    a = new (c.build(t))(a).encodeNB()
                } else a = Protocol.strencode(JSON.stringify(a));
                var i = 0;
                return v && v[t] && (t = v[t], i = 1), r.encode(e, n, i, t, a)
            }, U = function t(a, e, n) {
                cc.log("connect to " + e);
                var i = (a = a || {}).maxReconnectAttempts || 10;
                if (P = e, window.localStorage && window.localStorage.getItem("protos") && 0 === C) {
                    var r = JSON.parse(window.localStorage.getItem("protos"));
                    C = r.version || 0, b = r.server || {}, _ = r.client || {}, o && o.init({
                        encoderProtos: _,
                        decoderProtos: b
                    }), s && (c = s.loadJson(_), l = s.loadJson(b))
                }
                F.sys.protoVersion = C;
                (p = new WebSocket(e)).binaryType = "arraybuffer", p.onopen = function (e) {
                    T && h.emit("reconnect"), O();
                    var t = u.encode(u.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(F)));
                    G(t)
                }, p.onmessage = function (e) {
                    q(u.decode(e.data), n), w && (S = Date.now() + w)
                }, p.onerror = function (e) {
                    h.emit("io-error", e), cc.error("socket error: ", e)
                }, p.onclose = function (e) {
                    h.emit("close", e), h.emit("disconnect", e), cc.error("socket close: ", e), a.reconnect && M < i && (T = !0, M++, x = setTimeout(function () {
                        t(a, P, n)
                    }, R), R *= 2)
                }
            };
            h.disconnect = function () {
                p && (p.disconnect && p.disconnect(), p.close && p.close(), cc.log("disconnect"), p = null), D && (clearTimeout(D), D = null), k && (clearTimeout(k), k = null)
            }, h.isconnect = function () {
                return !!p
            };
            var O = function () {
                T = !1, R = 5e3, M = 0, clearTimeout(x)
            };
            h.request = function (e, t, a) {
                2 === arguments.length && "function" == typeof t ? (a = t, t = {}) : t = t || {}, (e = e || t.route) && (V(++n, e, t), i[n] = a, m[n] = e)
            }, h.notify = function (e, t) {
                V(0, e, t = t || {})
            };
            var V = function (e, t, a) {
                if (g) {
                    a = JSON.stringify(a);
                    var n = d.signString(a, "sha256");
                    (a = JSON.parse(a)).__crypto__ = n
                }
                N && (a = N(e, t, a));
                var i = u.encode(u.TYPE_DATA, a);
                G(i)
            }, G = function (e) {
                p.send(e.buffer)
            }, j = function e() {
                var t = S - Date.now();
                100 < t ? k = setTimeout(e, t) : (cc.error("server heartbeat timeout"), h.emit("heartbeat timeout"), h.disconnect())
            };
            f[u.TYPE_HANDSHAKE] = function (e) {
                if (501 !== (e = JSON.parse(Protocol.strdecode(e))).code) if (200 === e.code) {
                    K(e);
                    var t = u.encode(u.TYPE_HANDSHAKE_ACK);
                    G(t), B && B(p)
                } else h.emit("error", "handshake fail"); else h.emit("error", "client version not fullfill")
            }, f[u.TYPE_HEARTBEAT] = function (e) {
                if (a) {
                    var t = u.encode(u.TYPE_HEARTBEAT);
                    k && (clearTimeout(k), k = null), D || (D = setTimeout(function () {
                        D = null, G(t), S = Date.now() + w, k = setTimeout(j, w)
                    }, a))
                }
            }, f[u.TYPE_DATA] = function (e) {
                var t = e;
                I && (t = I(t)), W(h, t)
            }, f[u.TYPE_KICK] = function (e) {
                e = JSON.parse(Protocol.strdecode(e)), h.emit("onKick", e)
            };
            var q = function (e) {
                if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    f[a.type](a.body)
                } else f[e.type](e.body)
            }, W = function (e, t) {
                if (t.id) {
                    var a = i[t.id];
                    delete i[t.id], "function" == typeof a && a(t.body)
                } else e.emit(t.route, t.body)
            }, Y = function (e) {
                var t = e.route;
                if (e.compressRoute) {
                    if (!y[t]) return {};
                    t = e.route = y[t]
                }
                return o && b[t] ? o.decode(t, e.body) : l && l.lookup(t) ? l.build(t).decode(e.body) : JSON.parse(Protocol.strdecode(e.body))
            }, K = function (e) {
                e.sys && e.sys.heartbeat ? (a = 1e3 * e.sys.heartbeat, w = 2 * a) : w = a = 0, X(e), "function" == typeof A && A(e.user)
            }, X = function (e) {
                if (e && e.sys) {
                    v = e.sys.dict;
                    var t = e.sys.protos;
                    if (v) for (var a in y = {}, v = v) y[v[a]] = a;
                    t && (C = t.version || 0, b = t.server || {}, _ = t.client || {}, window.localStorage.setItem("protos", JSON.stringify(t)), o && o.init({
                        encoderProtos: t.client,
                        decoderProtos: t.server
                    }), s && (c = s.loadJson(_), l = s.loadJson(b)))
                }
            };
            Z.exports = h
        }(), cc._RF.pop()
    }, {protocol: "protocol"}],
    "popup-window": [function (e, t, a) {
        "use strict";
        var n;
        cc._RF.push(t, "797f8vrwsBN9LVPJJnaILOX", "popup-window"), n = cc.Enum({open: 1}), cc.Class({
            extends: cc.Component,
            properties: {
                dialog_prefab: {default: null, type: cc.Prefab},
                menu: {default: n.open, type: cc.Enum(n)},
                _dialogNode: null
            },
            start: function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this), this), this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this), this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel.bind(this), this)
            },
            touchStart: function () {
                this.node.scale = 1.1
            },
            touchCancel: function () {
                this.node.scale = 1
            },
            touchEnd: function () {
                this.node.scale = 1, cc.isValid(this._dialogNode) || (this._dialogNode = null), this.menu == n.off && this._dialogNode && (this._dialogNode.destroy(), this._dialogNode = null), this.menu == n.open && (null == this._dialogNode ? (this._dialogNode = cc.instantiate(this.dialog_prefab), this._dialogNode.parent = cc.director.getScene().getChildByName("Canvas")) : this._dialogNode.active = !0), this.menu == n.hide && this._dialogNode && (this._dialogNode.active = !1)
            },
            onDestroy: function () {
                this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart), this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel)
            }
        }), cc._RF.pop()
    }, {}],
    protobuf: [function (e, t, a) {
        "use strict";
        var n, i;
        cc._RF.push(t, "a10b8piHCFHG5/Pfi2BNF/g", "protobuf"), n = "undefined" == typeof window ? t.exports : {}, (i = n).init = function (e) {
            i.encoder.init(e.encoderProtos), i.decoder.init(e.decoderProtos)
        }, i.encode = function (e, t) {
            return i.encoder.encode(e, t)
        }, i.decode = function (e, t) {
            return i.decoder.decode(e, t)
        }, t.exports = i, "undefined" != typeof window && (window.protobuf = i), (("undefined" != typeof protobuf ? protobuf : t.exports).constants = {}).TYPES = {
            uInt32: 0,
            sInt32: 0,
            int32: 0,
            double: 1,
            string: 2,
            message: 2,
            float: 5
        }, (("undefined" != typeof protobuf ? protobuf : t.exports).util = {}).isSimpleType = function (e) {
            return "uInt32" === e || "sInt32" === e || "int32" === e || "uInt64" === e || "sInt64" === e || "float" === e || "double" === e
        }, function (e, t) {
            var a = e.codec = {}, n = new ArrayBuffer(8), i = new Float32Array(n), r = new Float64Array(n),
                o = new Uint8Array(n);

            function s(e) {
                return e <= 127 ? [e] : e <= 2047 ? [192 | e >> 6, 128 | 63 & e] : [224 | e >> 12, 128 | (4032 & e) >> 6, 128 | 63 & e]
            }

            function c(e) {
                return e <= 127 ? 1 : e <= 2047 ? 2 : 3
            }

            a.encodeUInt32 = function (e) {
                e = parseInt(e);
                if (isNaN(e) || e < 0) return null;
                var t = [];
                do {
                    var a = e % 128, n = Math.floor(e / 128);
                    0 !== n && (a += 128), t.push(a), e = n
                } while (0 !== e);
                return t
            }, a.encodeSInt32 = function (e) {
                e = parseInt(e);
                return isNaN(e) ? null : (e = e < 0 ? 2 * Math.abs(e) - 1 : 2 * e, a.encodeUInt32(e))
            }, a.decodeUInt32 = function (e) {
                for (var t = 0, a = 0; a < e.length; a++) {
                    var n = parseInt(e[a]);
                    if (t += (127 & n) * Math.pow(2, 7 * a), n < 128) return t
                }
                return t
            }, a.decodeSInt32 = function (e) {
                var t = this.decodeUInt32(e);
                return t = (t % 2 + t) / 2 * (t % 2 == 1 ? -1 : 1)
            }, a.encodeFloat = function (e) {
                return i[0] = e, o
            }, a.decodeFloat = function (e, t) {
                if (!e || e.length < t + 4) return null;
                for (var a = 0; a < 4; a++) o[a] = e[t + a];
                return i[0]
            }, a.encodeDouble = function (e) {
                return r[0] = e, o.subarray(0, 8)
            }, a.decodeDouble = function (e, t) {
                if (!e || e.length < t + 8) return null;
                for (var a = 0; a < 8; a++) o[a] = e[t + a];
                return r[0]
            }, a.encodeStr = function (e, t, a) {
                for (var n = 0; n < a.length; n++) for (var i = s(a.charCodeAt(n)), r = 0; r < i.length; r++) e[t] = i[r], t++;
                return t
            }, a.decodeStr = function (e, t, a) {
                for (var n = [], i = t + a; t < i;) {
                    var r = 0;
                    e[t] < 128 ? (r = e[t], t += 1) : e[t] < 224 ? (r = ((63 & e[t]) << 6) + (63 & e[t + 1]), t += 2) : (r = ((15 & e[t]) << 12) + ((63 & e[t + 1]) << 6) + (63 & e[t + 2]), t += 3), n.push(r)
                }
                for (var o = "", s = 0; s < n.length;) o += String.fromCharCode.apply(null, n.slice(s, s + 1e4)), s += 1e4;
                return o
            }, a.byteLength = function (e) {
                if ("string" != typeof e) return -1;
                for (var t = 0, a = 0; a < e.length; a++) {
                    t += c(e.charCodeAt(a))
                }
                return t
            }
        }("undefined" != typeof protobuf ? protobuf : t.exports), function (e, t) {
            var a = e, l = e.encoder = {}, u = a.codec, n = a.constants, o = a.util;

            function d(e, t, a, n) {
                for (var i in n) if (a[i]) {
                    var r = a[i];
                    switch (r.option) {
                        case"required":
                        case"optional":
                            t = h(e, t, g(r.type, r.tag)), t = s(n[i], r.type, t, e, a);
                            break;
                        case"repeated":
                            0 < n[i].length && (t = c(n[i], r, t, e, a))
                    }
                }
                return t
            }

            function s(e, t, a, n, i) {
                switch (t) {
                    case"uInt32":
                        a = h(n, a, u.encodeUInt32(e));
                        break;
                    case"int32":
                    case"sInt32":
                        a = h(n, a, u.encodeSInt32(e));
                        break;
                    case"float":
                        h(n, a, u.encodeFloat(e)), a += 4;
                        break;
                    case"double":
                        h(n, a, u.encodeDouble(e)), a += 8;
                        break;
                    case"string":
                        var r = u.byteLength(e);
                        a = h(n, a, u.encodeUInt32(r)), u.encodeStr(n, a, e), a += r;
                        break;
                    default:
                        var o = i.__messages[t] || l.protos["message " + t];
                        if (o) {
                            var s = new ArrayBuffer(2 * u.byteLength(JSON.stringify(e)));
                            r = d(s, r = 0, o, e), a = h(n, a, u.encodeUInt32(r));
                            for (var c = 0; c < r; c++) n[a] = s[c], a++
                        }
                }
                return a
            }

            function c(e, t, a, n, i) {
                var r = 0;
                if (o.isSimpleType(t.type)) for (a = h(n, a = h(n, a, g(t.type, t.tag)), u.encodeUInt32(e.length)), r = 0; r < e.length; r++) a = s(e[r], t.type, a, n); else for (r = 0; r < e.length; r++) a = h(n, a, g(t.type, t.tag)), a = s(e[r], t.type, a, n, i);
                return a
            }

            function h(e, t, a) {
                for (var n = 0; n < a.length; n++, t++) e[t] = a[n];
                return t
            }

            function g(e, t) {
                var a = n.TYPES[e] || 2;
                return u.encodeUInt32(t << 3 | a)
            }

            l.init = function (e) {
                this.protos = e || {}
            }, l.encode = function (e, t) {
                var a = this.protos[e];
                if (!function e(t, a) {
                    if (!a) return !1;
                    for (var n in a) {
                        var i = a[n];
                        switch (i.option) {
                            case"required":
                                if (void 0 === t[n]) return console.warn("no property exist for required! name: %j, proto: %j, msg: %j", n, i, t), !1;
                            case"optional":
                                if (void 0 !== t[n]) {
                                    var r = a.__messages[i.type] || l.protos["message " + i.type];
                                    if (r && !e(t[n], r)) return console.warn("inner proto error! name: %j, proto: %j, msg: %j", n, i, t), !1
                                }
                                break;
                            case"repeated":
                                var r = a.__messages[i.type] || l.protos["message " + i.type];
                                if (t[n] && r) for (var o = 0; o < t[n].length; o++) if (!e(t[n][o], r)) return !1
                        }
                    }
                    return !0
                }(t, a)) return null;
                var n = u.byteLength(JSON.stringify(t)), i = new ArrayBuffer(n), r = new Uint8Array(i), o = 0;
                return a && 0 < (o = d(r, o, a, t)) ? r.subarray(0, o) : null
            }
        }("undefined" != typeof protobuf ? protobuf : t.exports), function (e, t) {
            var c, a = e, l = e.decoder = {}, u = a.codec, r = a.util, d = 0;

            function h(e, t, a) {
                for (; d < a;) {
                    var n = (void 0, {type: 7 & (o = u.decodeUInt32(p())), tag: o >> 3}), i = n.tag, r = t.__tags[i];
                    switch (t[r].option) {
                        case"optional":
                        case"required":
                            e[r] = s(t[r].type, t);
                            break;
                        case"repeated":
                            e[r] || (e[r] = []), g(e[r], t[r].type, t)
                    }
                }
                var o;
                return e
            }

            function s(e, t) {
                switch (e) {
                    case"uInt32":
                        return u.decodeUInt32(p());
                    case"int32":
                    case"sInt32":
                        return u.decodeSInt32(p());
                    case"float":
                        var a = u.decodeFloat(c, d);
                        return d += 4, a;
                    case"double":
                        var n = u.decodeDouble(c, d);
                        return d += 8, n;
                    case"string":
                        var i = u.decodeUInt32(p()), r = u.decodeStr(c, d, i);
                        return d += i, r;
                    default:
                        var o = t && (t.__messages[e] || l.protos["message " + e]);
                        if (o) {
                            i = u.decodeUInt32(p());
                            var s = {};
                            return h(s, o, d + i), s
                        }
                }
            }

            function g(e, t, a) {
                if (r.isSimpleType(t)) for (var n = u.decodeUInt32(p()), i = 0; i < n; i++) e.push(s(t)); else e.push(s(t, a))
            }

            function p(e) {
                var t, a = [], n = d;
                for (e = e || !1; t = c[n], a.push(t), n++, 128 <= t;) ;
                return e || (d = n), a
            }

            l.init = function (e) {
                this.protos = e || {}
            }, l.setProtos = function (e) {
                e && (this.protos = e)
            }, l.decode = function (e, t) {
                var a = this.protos[e];
                return c = t, d = 0, a ? h({}, a, c.length) : null
            }
        }("undefined" != typeof protobuf ? protobuf : t.exports), cc._RF.pop()
    }, {}],
    protocol: [function (e, n, t) {
        (function (e) {
            "use strict";
            cc._RF.push(n, "36d2eGVqHVJ0IfC8R5KWOTt", "protocol"), function (e, p, t) {
                var f = e, a = f.Package = {}, i = f.Message = {};
                a.TYPE_HANDSHAKE = 1, a.TYPE_HANDSHAKE_ACK = 2, a.TYPE_HEARTBEAT = 3, a.TYPE_DATA = 4, a.TYPE_KICK = 5, i.TYPE_REQUEST = 0, i.TYPE_NOTIFY = 1, i.TYPE_RESPONSE = 2, i.TYPE_PUSH = 3, f.strencode = function (e) {
                    for (var t = new p(3 * e.length), a = 0, n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n), r = null;
                        r = i <= 127 ? [i] : i <= 2047 ? [192 | i >> 6, 128 | 63 & i] : [224 | i >> 12, 128 | (4032 & i) >> 6, 128 | 63 & i];
                        for (var o = 0; o < r.length; o++) t[a] = r[o], ++a
                    }
                    var s = new p(a);
                    return m(s, 0, t, 0, a), s
                }, f.strdecode = function (e, t) {
                    for (var a = new p(e), n = [], i = 0, r = 0, o = a.length; i < o;) a[i] < 128 ? (r = a[i], i += 1) : a[i] < 224 ? (r = ((63 & a[i]) << 6) + (63 & a[i + 1]), i += 2) : (r = ((15 & a[i]) << 12) + ((63 & a[i + 1]) << 6) + (63 & a[i + 2]), i += 3), n.push(r);
                    return String.fromCharCode.apply(null, n)
                }, a.encode = function (e, t) {
                    var a = t ? t.length : 0, n = new p(4 + a), i = 0;
                    return n[i++] = 255 & e, n[i++] = a >> 16 & 255, n[i++] = a >> 8 & 255, n[i++] = 255 & a, t && m(n, 4, t, 0, a), n
                }, a.decode = function (e) {
                    for (var t = 0, a = new p(e), n = 0, i = []; t < a.length;) {
                        var r = a[t++], o = (n = (a[t++] << 16 | a[t++] << 8 | a[t++]) >>> 0) ? new p(n) : null;
                        m(o, 0, a, t, n), t += n, i.push({type: r, body: o})
                    }
                    return 1 === i.length ? i[0] : i
                }, i.encode = function (e, t, a, n, i) {
                    var r = 1 + (v(t) ? c(e) : 0);
                    if (y(t)) if (a) {
                        if ("number" != typeof n) throw new Error("error flag for number route!");
                        r += 2
                    } else if (r += 1, n) {
                        if (255 < (n = f.strencode(n)).length) throw new Error("route maxlength is overflow");
                        r += n.length
                    }
                    i && (r += i.length);
                    var o = new p(r), s = 0;
                    return s = l(t, a, o, s), v(t) && (s = u(e, o, s)), y(t) && (s = d(a, n, o, s)), i && (s = h(i, o, s)), o
                }, i.decode = function (e) {
                    var t = new p(e), a = t.length || t.byteLength, n = 0, i = 0, r = null, o = t[n++], s = 1 & o,
                        c = o >> 1 & 7;
                    if (v(c)) {
                        var l = parseInt(t[n]), u = 0;
                        do {
                            i += (127 & (l = parseInt(t[n]))) * Math.pow(2, 7 * u), n++, u++
                        } while (128 <= l)
                    }
                    if (y(c)) if (s) r = t[n++] << 8 | t[n++]; else {
                        var d = t[n++];
                        d ? (r = new p(d), m(r, 0, t, n, d), r = f.strdecode(r)) : r = "", n += d
                    }
                    var h = a - n, g = new p(h);
                    return m(g, 0, t, n, h), {id: i, type: c, compressRoute: s, route: r, body: g}
                };
                var m = function (e, t, a, n, i) {
                    if ("function" == typeof a.copy) a.copy(e, t, n, n + i); else for (var r = 0; r < i; r++) e[t++] = a[n++]
                }, v = function (e) {
                    return e === i.TYPE_REQUEST || e === i.TYPE_RESPONSE
                }, y = function (e) {
                    return e === i.TYPE_REQUEST || e === i.TYPE_NOTIFY || e === i.TYPE_PUSH
                }, c = function (e) {
                    for (var t = 0; t += 1, 0 < (e >>= 7);) ;
                    return t
                }, l = function (e, t, a, n) {
                    if (e !== i.TYPE_REQUEST && e !== i.TYPE_NOTIFY && e !== i.TYPE_RESPONSE && e !== i.TYPE_PUSH) throw new Error("unkonw message type: " + e);
                    return a[n] = e << 1 | (t ? 1 : 0), n + 1
                }, u = function (e, t, a) {
                    do {
                        var n = e % 128, i = Math.floor(e / 128);
                        0 !== i && (n += 128), t[a++] = n, e = i
                    } while (0 !== e);
                    return a
                }, d = function (e, t, a, n) {
                    if (e) {
                        if (65535 < t) throw new Error("route number is overflow");
                        a[n++] = t >> 8 & 255, a[n++] = 255 & t
                    } else t ? (a[n++] = 255 & t.length, m(a, n, t, 0, t.length), n += t.length) : a[n++] = 0;
                    return n
                }, h = function (e, t, a) {
                    return m(t, a, e, 0, e.length), a + e.length
                };
                n.exports = f, "undefined" != typeof window && (window.Protocol = f)
            }("undefined" == typeof window ? n.exports : {}, "undefined" == typeof window ? e : Uint8Array), cc._RF.pop()
        }).call(this, e("buffer").Buffer)
    }, {buffer: 2}],
    "rank-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "6786eAF0QJLiK3ye/PrgjeS", "rank-dialog");
        var n = e("instant-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                rank_layout: {default: null, type: cc.Node},
                rank_item: {default: null, type: cc.Prefab},
                self_rank_node: {default: null, type: cc.Node}
            },
            onLoad: function () {
                var t = cc.sys.localStorage.getItem("rankData");
                t && this.setData(JSON.parse(t))/*n.getFriends(function (e) {
                    server_util.getFrinedsLeaderboard(e, function (e) {
                        e && (cc.sys.localStorage.setItem("rankData", JSON.stringify(e)), t || this.setData(e))
                    }.bind(this))
                }.bind(this))*/
            },
            setData: function (e) {
                for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    a.index = t + 1, e[t] = a, n.getPlayerID() == a.id && this.initSelfRank(a)
                }
                this.initRankList(e)
            },
            initRankList: function (e) {
                this.rank_layout.getComponent("list-adapter-auto").initListView(this.rank_item, "rank-item", e)
            },
            initSelfRank: function (e) {
                this.self_rank_node.getComponent("rank-item").setData(e)
            },
            closeDialog: function () {
                this.node.removeFromParent(!1)
            }
        }), cc._RF.pop()
    }, {"instant-util": "instant-util"}],
    "rank-item": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "581a2E8z0lIIYdjuOaa8E8R", "rank-item");
        var n = e("webimg-util"), i = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                index_label: {default: null, type: cc.Label},
                name_label: {default: null, type: cc.Label},
                img_head: {default: null, type: cc.Sprite},
                img_first: cc.Sprite,
                img_second: cc.Sprite,
                img_third: cc.Sprite,
                score_label: {default: null, type: cc.Label},
                item_bg: {default: null, type: cc.Node},
                default_frame: cc.SpriteFrame
            },
            setData: function (e) {
                var t = e.index;
                this.itemID = t - 1, this.item_bg && (this.item_bg.opacity = t % 2 == 0 ? 0 : 150), this.setIndexLabel(t), this.score_label.string = i.unit_format(e.score ? e.score : 0), this.name_label.string = e.name, e.photo && (this.img_head.spriteFrame = this.default_frame, n.load_webimg(e.photo, this.img_head))
            },
            setIndexLabel: function (e) {
                this.index_label.node.active = !1, this.img_first.node.active = !1, this.img_second.node.active = !1, this.img_third.node.active = !1, 1 == e ? this.img_first.node.active = !0 : 2 == e ? this.img_second.node.active = !0 : 3 == e ? this.img_third.node.active = !0 : (this.index_label.node.active = !0, this.index_label.string = "" + e)
            }
        }), cc._RF.pop()
    }, {"number-util": "number-util", "webimg-util": "webimg-util"}],
    "recommend-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "5e94bcgFFtENLKVA8QUEzSn", "recommend-dialog");
        var n = e("instant-util"), i = logCenter;
        cc.Class({
            extends: cc.Component, properties: {}, start: function () {
            }, toHugeFish: function () {
                var e = {type: "switch_game", name: "bigfish", level: playerManager.getNumData("UnlockLevel") + 1};
                i.switch_hugefish_from_dialog_event(), n.switchGameAsync("276127343005598", function (e) {
                }, e)
            }, closeClick: function () {
                this.node.destroy()
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util"}],
    "reset-data-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "05f659/VyhEZrlaq96dFk4G", "reset-data-dialog");
        var n = logCenter;
        cc.Class({
            extends: cc.Component,
            properties: {
                toggle_btn: {default: null, type: cc.Toggle},
                reset_label: {default: null, type: cc.Label},
                reset_btn: {default: null, type: cc.Button}
            },
            start: function () {
                this.toggleChange()
            },
            resetClick: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("login-world");
                this.toggle_btn.isChecked && (playerManager.resetData(), playerManager.loadAllData(function (e) {
                    globalManager.isNewPlayer = e
                }), n.reset_data_event(), e.showToast("Reset successfully!")), this.node.destroy()
            },
            toggleChange: function () {
                this.reset_label.node.color = this.toggle_btn.isChecked ? cc.hexToColor("#0082FE") : cc.hexToColor("#B9B3B3"), this.reset_btn.interactable = this.toggle_btn.isChecked
            },
            closeClick: function () {
                this.node.destroy()
            }
        }), cc._RF.pop()
    }, {}],
    "reward-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "c575e4RYdxLDYyBM3+rsiQB", "reward-dialog");
        var n = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {reward_label: {default: null, type: cc.Label}, _reward: null},
            start: function () {
            },
            setData: function (e) {
                this._reward = e, this.reward_label.string = n.unit_format(e), playerManager.addNumData("Coin", this._reward), cc.director.emit("updateCoin"), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").startAddCoinEffect()
            },
            backClick: function () {
                this.node.removeFromParent()
            }
        }), cc._RF.pop()
    }, {"number-util": "number-util"}],
    "server-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "43fa8fF6rBLtqOmmYR8HuJk", "server-util");
        var l = e("http-client"), u = e("instant-util"), d = logCenter;
        e("globalManager"), function () {
            if (window.server_util) t.exports = window.server_util; else {
                var r = r || {}, e = /^192\..*|localhost/.exec(/*location.hostname*/""), o = globalManager.appId;
                // if (cc.log("host=" +/**/ location.hostname + " isLocal=" + e + " isRelease=" + !0 + " appId=" + o), !e) globalManager.appid_reg.exec(location.href) || (o = location.hostname.replace(/[^0-9]/gi, ""), cc.log("current appid = " + o));
                /*r.serverIp = "https://fbgame.ymnsdk.com/", */
                r.serverPort = 5014;
                var s, c = 0;
                r.login = function (e, t, a, n) {
                    setInterval(function () {
                        c++, d.stay_time_length_event(c)
                    }, 6e4), s = t, globalManager.fbPlayerId = t;
                    var i = {user_id: s, nickname: e, app_id: o, avatar: a, locale: u.getLocale()};
                    l.httpPostRequest(r.serverIp + "user/login", i, function (t) {
                        globalManager.loginTime = Math.floor(Date.parse(new Date) / 1e3), globalManager.serverLoginTime = Math.floor(parseInt(t.server_time) / 1e3), globalManager.serverResetTime = Math.floor(parseInt(t.reset_time) / 1e3), globalManager.isBlackList = !!t.in_black && 1 == t.in_black, globalManager.isUcBlackList = !!t.uc_in_black && 1 == t.uc_in_black, cc.log("data.in_black=" + t.in_black), r.publicConfig(function (e) {
                            e && e.config && (cc.log("load publicConfig from server."), globalManager.publicConfig = e.config, e.config.boxcd && (globalManager.BoxCD = e.config.boxcd), e.config.upgradebuy && (globalManager.UpgradeBuy = e.config.upgradebuy), e.config.upgradebox && (globalManager.UpgradeBox = e.config.upgradebox), e.config.x6Percent && (globalManager.x6Percent = e.config.x6Percent), cc.sys.localStorage.setItem("publicConfig", JSON.stringify(e)))
                        }), globalManager.setShareConfig(), null != t.force_data && (null != t.force_data.resetData ? window.setTimeout(function (e) {
                            cc.log("pomelo.on(resetData)"), cc.director.emit("resetData")
                        }, 100) : window.setTimeout(function (e) {
                            cc.log("pomelo.on(forceUpdateData) data = ", t.force_data), cc.director.emit("forceUpdateData", t.force_data)
                        }, 100)), n && n(), globalManager.isBlackList ? d.blacklist_login_event() : d.whitelist_login_event()
                    }, function () {
                        globalManager.isBlackList ? d.blacklist_login_event() : d.whitelist_login_event()
                    }), l.httpPostRequest(r.serverIp + "game/list", i, function (e) {
                        null != e.list && (globalManager.gamelist = e.list)
                    }, function () {
                    })
                }, r.relogin = function (e, t) {
                }, r.queryEntry = function (e, t) {
                }, r.setGameData = function (e, t, a) {
                }, r.getGameData = function (e, t) {
                }, r.getGameList = function (e, t) {
                    // l.httpPostRequest(r.serverIp + "game/list", {
                    //     user_id: u.getPlayerID(),
                    //     app_id: o,
                    //     type: e
                    // }, function (e) {
                    //     t && t(e)
                    // }, function () {
                    // })
                }, r.setLeaderboardScore = function (e, t) {
                    var a = {
                        user_id: /*u.getPlayerID()*/"",
                        app_id: o,
                        point: e,
                        user_level: playerManager.getNumData("UnlockLevel")
                    };
                    l.httpPostRequest(r.serverIp + "user/setInfo", a, function (e) {
                        t && t()
                    }, function () {
                    })
                }, r.getLeaderboard = function (e, t, a) {
                }, r.getFrinedsLeaderboard = function (e, a) {
                    for (var t = [], n = e.length - 1; 0 <= n; n--) t.push(e[n].id);
                    var i = {friends: t, app_id: o, type: "point"};
                    l.httpPostRequest(r.serverIp + "rank/friend", i, function (e) {
                        if (null != e && null != e.length) {
                            for (var t = 0; t < e.length; t++) e[t].score = e[t].point, e[t].id = e[t].user_id, e[t].name = e[t].nickname, e[t].photo = e[t].avatar;
                            e.sort(function (e, t) {
                                return t.score - e.score
                            }), a && a(e)
                        }
                    }, function () {
                    })
                }, r.getDataConfig = function (e, t) {
                }, r.saveInviter = function (e, t, a) {
                    l.httpPostRequest(r.serverIp + "activity/invite", {
                        user_id: u.getPlayerID(),
                        app_id: o,
                        invite_id: e,
                        group_id: t
                    }, function (e) {
                        a && a(e)
                    }, function () {
                    })
                }, r.getActivityList = function (t, a) {
                    l.httpPostRequest(r.serverIp + "activity/list", {
                        user_id: /*u.getPlayerID()*/"",
                        app_id: o,
                        locale: ""/*u.getLocale()*/
                    }, function (e) {
                        t && t(e)
                    }, function (e) {
                        a && a(e)
                    })
                }, r.getInviteList = function (t, a) {
                    l.httpPostRequest(r.serverIp + "activity/inviteList", {
                        user_id: u.getPlayerID(),
                        app_id: o
                    }, function (e) {
                        t && t(e)
                    }, function (e) {
                        a && a(e)
                    })
                }, r.receiveTask = function (e, t) {
                    l.httpPostRequest(r.serverIp + "activity/receive", {
                        user_id: u.getPlayerID(),
                        app_id: o,
                        task_id: e
                    }, function (e) {
                        t && t(e)
                    }, function () {
                    })
                }, r.publicConfig = function (t) {
                    l.httpPostRequest(r.serverIp + "public/config", {app_id: o}, function (e) {
                        t && t(e)
                    }, function () {
                    })
                }, r.friendHelp = function (e, t, a, n) {
                    l.httpPostRequest(r.serverIp + "activity/friendsHelp", {
                        user_id: u.getPlayerID(),
                        app_id: o,
                        friend_id: e,
                        group_id: a,
                        task_id: t
                    }, function (e) {
                        n && n(e)
                    }, function () {
                    })
                }, r.shareList = function (t) {
                    l.httpPostRequest(r.serverIp + "share/list", {app_id: o}, function (e) {
                        t && t(e)
                    }, function () {
                    })
                }, r.switchGame = function (e, t, a) {
                    l.httpPostRequest(r.serverIp + "/uc/activity/switchGameNotify", {
                        user_id: u.getPlayerID(),
                        app_id: o,
                        task_id: e,
                        game_id: t,
                        game_user_id: a
                    }, function () {
                    }, function () {
                    })
                }, r.friendWorking = function (e, t) {
                    l.httpPostRequest(r.serverIp + "activity/friendWorking", {
                        user_id: u.getPlayerID(),
                        app_id: o,
                        friend_id: e
                    }, function (e) {
                        t && t(e)
                    }, function () {
                    })
                }, r.workingList = function (t) {
                    l.httpPostRequest(r.serverIp + "activity/workingList", {
                        user_id:/* u.getPlayerID()*/"",
                        app_id: o
                    }, function (e) {
                        t && t(e)
                    }, function () {
                    })
                }, window.server_util = r, t.exports = r
            }
        }(), cc._RF.pop()
    }, {

        globalManager: "globalManager",
        "http-client": "http-client",
        "instant-util": "instant-util"
    }],
    "task-guidance-bot": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "9729fbaDJZAaoiEqF0a8X0f", "task-guidance-bot"), cc.Class({
            extends: cc.Component,
            properties: {contentView: cc.Node},
            onLoad: function () {
                this.initUI()
            },
            initUI: function () {
                var e = this.contentView.getChildByName("title"),
                    t = this.contentView.getChildByName("frist-step-label"),
                    a = this.contentView.getChildByName("second-step-label"),
                    n = this.contentView.getChildByName("third-step-label"),
                    i = this.contentView.getChildByName("click-label1"),
                    r = this.contentView.getChildByName("click-label2"),
                    o = this.contentView.getChildByName("click-label3");
                e.string = "<b>How to enter from bot</b>", t.string = "<b>1. Subscribe the bot .</b>", a.string = "<b>2. Enter from the bot .</b>", n.string = "<b>3. Claim the gift !</b>";
                var s = "<b>Click it</b>";
                i.string = s, r.string = s, o.string = s, this.node.x = 0, this.node.y = 0, this.node.setLocalZOrder(102)
            },
            start: function () {
            },
            closeWindow: function () {
                this.node.destroy()
            }
        }), cc._RF.pop()
    }, {}],
    "task-guidance-shortcut": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "b2dc5laC21NfJ/2Wgr7jHcq", "task-guidance-shortcut");
        var n = e("fbinstant-util");
        cc.Class({
            extends: cc.Component, properties: {contentView: cc.Node}, onLoad: function () {
                this.initUI()
            }, initUI: function () {
                this.node.x = 0, this.node.y = 0, this.node.setLocalZOrder(102)
            }, start: function () {
            }, closeWindow: function () {
                this.node.destroy()
            }, btnEvent: function () {
                this.createShortcut(function () {
                    cc.log("createShortcut success")
                })
            }, createShortcut: function (t) {
                n.logEvent("uc_homescreen_add_click"), cc.log("call createShortcut"), "undefined" != typeof FBInstant && FBInstant.canCreateShortcutAsync().then(function (e) {
                    cc.log("canCreateShortcut=" + e), e && FBInstant.createShortcutAsync().then(function () {
                        t()
                    }).catch(function () {
                    })
                })
            }
        }), cc._RF.pop()
    }, {"fbinstant-util": "fbinstant-util"}],
    "task-node": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "9dc7aBiCp1OWabl6/dmTrQl", "task-node");
        var n = e("instant-util"), i = e("number-util"), r = logCenter;
        cc.Class({
            extends: cc.Component,
            properties: {
                head_img: {default: null, type: cc.Sprite},
                title_label: {default: null, type: cc.Label},
                coins_label: {default: null, type: cc.Label},
                claim_btn: {default: null, type: cc.Toggle},
                head_icons: {default: [], type: cc.SpriteFrame},
                add_percent_label: {default: null, type: cc.Label},
                _data: null,
                _callback: null,
                _addPercent: 0
            },
            setData: function (e, t) {
                this._data = e, this._callback = t;
                var a = "";
                cc.log("data.type=" + e.type), 0 == e.type ? (a = "Free", this.add_percent_label.node.active = !1) : (a = "Invited No." + e.type + " Friend", this.add_percent_label.node.active = !0, this._addPercent = e.type <= 10 ? .1 * e.type : 1 + .01 * (e.type - 10), this.add_percent_label.string = "+" + parseInt(100 * this._addPercent) + "%");
                var n = 0;
                n = e.canClaim ? 0 == e.type ? 0 : 1 : 2, this.head_img.spriteFrame = this.head_icons[n], this.title_label.string = a, this.coins_label.string = i.unit_format(e.price), this.claim_btn.isChecked = e.canClaim, this.claim_btn.interactable = e.canClaim
            },
            claimClick: function () {
                for (var e = playerManager.getObjData("inviteRewards"), t = 0; t < e.length; t++) if (t == this._data.type) {
                    e[t] = 0;
                    break
                }
                cc.log("inviteRewards2222=" + JSON.stringify(e)), playerManager.setObjData("inviteRewards", e), 0 == this._data.type ? playerManager.setObjData("freeReward", !0) : 0 < this._data.type && server_util.receiveTask(this._data.taskId);
                var a = parseInt(this._data.price * (1 + this._addPercent));
                playerManager.addNumData("Coin", a), cc.director.emit("updateCoin"), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("+" + i.unit_format(a) + " coins"), this._callback(this._data)
            },
            inviteFriendClick: function () {
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                r.invite_friends_event();
                var e = {type: "share", inviter: n.getPlayerID()};
                n.chooseContext(function () {
                    t.setUserCenterEvent("share"), cc.log("share finish"), r.invite_friends_success_event(), t.showToast("Sent! Wait your friends enter game!")
                }, function (e) {
                    t.showToast(e)
                }, e)
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    toast: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "98f21AcsM1Ld4kwc5z85hWu", "toast"), cc.Class({
            extends: cc.Component,
            properties: {
                bg_layout: {default: null, type: cc.Node},
                bottom_label: {default: null, type: cc.Label},
                text_label: {default: null, type: cc.Label}
            },
            onLoad: function () {
            },
            start: function () {
            },
            setData: function (e) {
                cc.log("text=" + e), this.text_label.string = e, this.bottom_label.string = e
            }
        }), cc._RF.pop()
    }, {}],
    tutorialDlg: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "1e97akuhZJOmonMRGwMkCt9", "tutorialDlg"), cc.Class({
            extends: cc.Component,
            properties: {btnBack: cc.Button},
            onLoad: function () {
                playerManager.setObjData("lookTutorial", !1)
            },
            update: function (e) {
            },
            onButtonBack: function (e, t) {
                this.node.removeFromParent(!0)
            }
        }), cc._RF.pop()
    }, {}],
    "unlock-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "393deBWRoJCpYPcOeHBxelE", "unlock-dialog");
        var i = logCenter, r = e("instant-util"), n = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                fish_img: {default: null, type: cc.Sprite},
                rewardNode: cc.Node,
                name_label: cc.Label,
                coin_label: cc.Label,
                level_label: cc.Label,
                _unlockFish: null
            },
            onLoad: function () {
                server_util.setLeaderboardScore(playerManager.getScore());
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                e.scriptGamePaodao.refreshCoin();
                e.playSound("congratulations")
            },
            setData: function (e) {
                this._unlockFish = e;
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.fish_img.spriteFrame = t.getItemFrame(e);
                var a = gameData.getHousePanelPos(this._unlockFish);
                (this.fish_img.node.x = a.posX, this.fish_img.node.y = a.posY, this.combireward = fish_data[this._unlockFish].combireward, this.name_label.string = fish_data[this._unlockFish].name, this.coin_label.string = n.unit_format(this.combireward), this.level_label.string = e + 1 + "", 0 == n.cmpBigInt(this.combireward, "0") && (this.rewardNode.active = !1), /*r.getContextID()*/"") && cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showCustomShare(0, function (a) {
                    r.getPlayerInfo(function (e) {
                        var t = e.playerName + " has unlocked House #" + (playerManager.getNumData("UnlockLevel") + 1) + "!";
                        r.updateContext(function () {
                        }, function () {
                        }, {type: "autoUnlock"}, t, a, null, !0)
                    })
                }, function () {
                })
            },
            shareClick: function () {
                i.unlock_fish_share_event();
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), n = this;
                e.showCustomShare(0, function (a) {
                    r.getPlayerInfo(function (e) {
                        var t = e.playerName + " has unlocked House #" + (playerManager.getNumData("UnlockLevel") + 1) + "!";
                        r.share(function () {
                            n.closeDialog()
                        }, a, t)
                    })
                }, function () {
                    n.closeDialog()
                })
            },
            closeDialog: function () {
                (this.showRecommendDialog(), this.showCatchFishIcon(), this.node.removeFromParent(!1), playerManager.addNumData("Coin", this.combireward), 0 < n.cmpBigInt(this.combireward, "0")) && cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").startAddCoinEffect();
                cc.director.emit("updateCoin")
            },
            showRecommendDialog: function () {
            },
            showCatchFishIcon: function () {
                4 == playerManager.getNumData("UnlockLevel") && cc.director.emit("catch_fish")
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util", "number-util": "number-util"}],
    upgradeCarPopUp: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7b5d94YdEhCarBc5KrhCs7p", "upgradeCarPopUp");
        var o = logCenter, s = e("instant-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                greySprite: cc.Sprite,
                spupgradefrom: cc.Sprite,
                spupgradeto: cc.Sprite,
                lbupgradefrom: cc.Label,
                levelfrom: cc.Label,
                lbupgradeto: cc.Label,
                levelto: cc.Label,
                btnShare: cc.Button,
                btnVideo: cc.Button,
                btnBack: cc.Button
            },
            onLoad: function () {
            },
            setData: function (e, t, a) {
                this.carlevel = e, this.randomType = t, this.callback = a;
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.spupgradefrom.spriteFrame = n.getItemFrame(e), this.spupgradefrom.node.x = gameData.getHousePanelPos(e).posX, this.spupgradefrom.node.y = gameData.getHousePanelPos(e).posY, this.lbupgradefrom.string = fish_data[e].name, this.levelfrom.string = e + 1 + "";
                var i = 0;
                if (1 == t) {
                    var r = 100 * Math.random();
                    i = r <= 20 ? 1 : r <= 70 ? 2 : 3
                } else 2 == t && (i = 2);
                this.upgradeto = i + e, this.lbupgradeto.string = fish_data[this.upgradeto].name, this.levelto.string = this.upgradeto + 1 + "", this.spupgradeto.spriteFrame = n.getItemFrame(this.upgradeto), this.spupgradeto.node.x = gameData.getHousePanelPos(this.upgradeto).posX, this.spupgradeto.node.y = gameData.getHousePanelPos(this.upgradeto).posY, this.btnShare.node.active = !1, this.btnVideo.node.active = !1, globalManager.canShare(globalManager.shareType.freeUpgrade, {level: playerManager.getNumData("UnlockLevel")}) ? (this.btnShare.node.active = !0, this.rewardType = 1) : (this.btnVideo.node.active = !0, this.rewardType = 2),/* "WEB" == s.getPlatform() && */(this.greySprite.node.active = !0, this.btnVideo.interactable = !1)
            },
            onButtonShare: function (e, t) {
                var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    i = {type: globalManager.shareType.freeUpgrade, inviter:/* s.getPlayerID()*/"", rewards: "1"};
                if (1 == this.rewardType) {
                    var r = globalManager.getShareConfig(globalManager.shareType.freeUpgrade);
                    o.share_free_upgrade_event(), s.chooseContext(function (e) {
                        n.setUserCenterEvent("share"), o.share_free_upgrade_success_event(), a.callback && a.callback(a.upgradeto), a.onButtonBack(), n.showToast("Upgrade successfully!")
                    }, function (e, t) {
                        null != t && n.showToast(t)
                    }.bind(a), i, r.text, r.img)
                } else 2 == this.rewardType && (o.watch_video_free_upgrade_event(), s.showRewardAd(function () {
                    cc.log("showAd success"), n.setUserCenterEvent("ad"), o.watch_video_free_upgrade_success_event(), a.callback && a.callback(a.upgradeto), a.onButtonBack(), n.showToast("Upgrade successfully!")
                }, function () {
                    cc.log("RewardAd load err"), n.showToast("No available Ad right now, try again later.")
                }))
            },
            onButtonBack: function (e, t) {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeUpgradeCarPopUp()
            }
        }), cc._RF.pop()
    }, { "instant-util": "instant-util"}],
    "user-center-daily-reward-item": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "6402awNnR9ETYEzbUQ/MQ4Q", "user-center-daily-reward-item");
        var n = e("instant-util"), i = e("number-util"), r = 1;
        cc.Class({
            extends: cc.Component,
            properties: {
                taskImage: cc.Sprite,
                taskName: cc.Label,
                rewardImage: cc.Sprite,
                rewardNumber: cc.Label,
                taskButton: cc.Sprite,
                redPiont: cc.Node,
                btnLabel: cc.Node,
                btn_states: {default: [], type: cc.SpriteFrame},
                _btnState: null,
                _taskData: null,
                _rewardNum: null,
                _rewardCoin: null,
                _getCoinCallback: null,
                _rewardCallback: null,
                _taskRewardCoefficient: null,
                _taskCurrentProgress: null,
                _rankCoefficientJump: null,
                _totalRewardCoin: null
            },
            setData: function (e, t, a) {
                this._taskData = e, this._getCoinCallback = t, this._rewardCallback = a, this._rewardNum = parseInt(e.taskRewardNum), this._taskCurrentProgress = parseInt(e.taskCurrentProgress), this._rankCoefficientJump = Number(e.rankCoefficientJump), this.load_webimg(e.taskImage, this.taskImage), this.taskName.string = e.taskName, e.taskRewardCoefficientList[0] && (this._taskRewardCoefficient = e.taskRewardCoefficientList[0].formula), null === this._rewardCoin && (this._rewardCoin = i.galaxyMut(this._getCoinCallback(), this._taskRewardCoefficient), this._totalRewardCoin = i.galaxyMut(this._rewardCoin, this._rankCoefficientJump)), this.rewardNumber.string = i.unit_format(this._rewardCoin) + " x " + this._rankCoefficientJump.toFixed(2), 0 < this._taskCurrentProgress && 0 === this._rewardNum ? (this.taskButton.spriteFrame = this.btn_states[r], this.btnLabel.color = new cc.color(92, 166, 252, 255), this.btnLabel.getComponent(cc.RichText).string = "Play", this.redPiont.active = !1) : 0 < this._rewardNum && (this.redPiont.active = !0)
            },
            clickEvent: function () {
                if (0 < this._rewardNum) this._rewardNum = 0, this._taskData.taskRewardNum = this._rewardNum, this.setData(this._taskData, this._getCoinCallback, this._rewardCallback), userCenterServerUtil.receivedTask(this._taskData.playerId, this._taskData.appId, this._taskData.taskId), this._rewardCallback && this._rewardCallback(this._totalRewardCoin), n.logEvent("uc_dailyreward_click", null, {gameId: this._taskData.taskJumpAppId}); else {
                    n.logEvent("uc_dailyreward_claim", null, {gameId: this._taskData.taskJumpAppId});
                    var e = {
                        type: "switch_game",
                        name: this._taskData.taskName,
                        taskId: this._taskData.taskId,
                        gameId: this._taskData.appId,
                        userId: this._taskData.playerId
                    };
                    this.switchGameAsync("" + this._taskData.taskJumpAppId, function (e) {
                        console.log(e)
                    }, e)
                }
            },
            load_webimg: function (e, a) {
                cc.loader.load({url: e, type: "png"}, function (e, t) {
                    return e ? (cc.log("load head img err: " + JSON.stringify(e)), e) : (a.spriteFrame = new cc.SpriteFrame(t), a.type = cc.Sprite.Type.SIMPLE, a.sizeMode = cc.Sprite.SizeMode.CUSTOM, 0)
                })
            },
            switchGameAsync: function (e, t, a) {
                "undefined" != typeof FBInstant && FBInstant.switchGameAsync(e, a).catch(function (e) {
                    t && t(e)
                })
            },
            toDecimal2: function (e) {
                var t = parseFloat(e);
                if (isNaN(t)) return !1;
                var a = (t = Math.round(100 * e) / 100).toString(), n = a.indexOf(".");
                for (n < 0 && (n = a.length, a += "."); a.length <= n + 2;) a += "0";
                return a
            }
        }), cc._RF.pop()
    }, {"fbinstant-util": "fbinstant-util", "number-util": "number-util"}],
    "user-center-floatball": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "b29198EohFE/I89zquR3j3H", "user-center-floatball");
        var i = e("user-center-utils");
        e("user-center-server-util"), e("user-center-global-manager"), cc.Class({
            extends: cc.Component,
            properties: {
                floatBallNode: cc.Node,
                floatBallRedPoint: cc.Node,
                userCenter: cc.Prefab,
                _gameList: [],
                _isShowUserCenter: !1,
                _userCenter: null
            },
            onLoad: function () {
                cc.log("call onLoad()");
                var e = this;
                cc.director.on("userCenter_closeMainView", function () {
                    cc.log("close usercenter"), e._isShowUserCenter = !1, e.getTaskListInfo()
                }), e.node.setPosition(-cc.director.getVisibleSize().width / 2, 0), cc.log("self.floatBallNode.size.width" + e.floatBallNode.getContentSize().width)
            },
            onDestroy: function () {
                cc.director.off("userCenter_closeMainView")
            },
            showUserCenter: function () {
                i.logEvent("uc_float_click"), this.floatBallRedPoint.active = !1, this._userCenter ? (this._userCenter.getComponent("user-center-manager").initUserCenterView(userCenterGlobalManager.homePageTaskData, this._gameList), this._userCenter.parent = this.node, this._userCenter.active = !0) : (this._userCenter = cc.instantiate(this.userCenter), this._userCenter.getComponent("user-center-manager").initUserCenterView(userCenterGlobalManager.homePageTaskData, this._gameList), this._userCenter.parent = this.node), this._isShowUserCenter = !0, cc.log("open usercenter")
            },
            initUserCenter: function (e, t, a, n) {
                userCenterGlobalManager.appId = e, userCenterGlobalManager.appName = t, userCenterGlobalManager.getCoinCallback = a, userCenterGlobalManager.rewardCallback = n, userCenterGlobalManager.playerId = "undefined" == typeof FBInstant ? "123456789" : FBInstant.player.getID(), userCenterGlobalManager.playerName = "undefined" == typeof FBInstant ? "Shayden" : FBInstant.player.getName(), userCenterGlobalManager.playerPhoto = "undefined" == typeof FBInstant ? "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p160x160/28471560_117125019119253_8833889138073590109_n.jpg?_nc_cat=107&_nc_ht=scontent-hkg3-1.xx&oh=78362bef66353f1316c52aaf66252e2f&oe=5CA4A97A" : FBInstant.player.getPhoto(), this.getTaskListInfo(), this.canSubscribeBotAsync(), this.canCreateShortcut()
            },
            sendVipEvent: function (e) {
                userCenterServerUtil.sendVipEvent(e)
            },
            getClickNotic: function () {
                cc.log("收到了关闭的消息")
            },
            clickFloatBall: function () {
                this.showUserCenter()
            },
            getEntryPointType: function (t, e) {
                if ("undefined" == typeof FBInstant) return t && t("bot_cta");
                FBInstant.getEntryPointAsync().then(function (e) {
                    cc.log("entrypoint=" + e), t && t(e)
                }).catch(function () {
                    e && e()
                })
            },
            canSubscribeBotAsync: function () {
                "undefined" != typeof FBInstant ? FBInstant.player.canSubscribeBotAsync().then(function (e) {
                    cc.log("canSubscribe = " + e), userCenterGlobalManager.canSubscribeBotAsync = e
                }.bind(this)) : userCenterGlobalManager.canSubscribeBotAsync = !0
            },
            canCreateShortcut: function () {
                "undefined" != typeof FBInstant ? FBInstant.canCreateShortcutAsync().then(function (e) {
                    cc.log("canCreateShortcut = " + e), userCenterGlobalManager.canCreateShortcut = e
                }.bind(this)) : userCenterGlobalManager.canCreateShortcut = !0
            },
            getNoticeInfo: function () {
                userCenterServerUtil.getNoticeList(function (e) {
                    e && this.haveNewNotice(e)
                }.bind(this))
            },
            getTaskListInfo: function () {
                cc.log("getTaskListInfo==");
                var e = cc.sys.localStorage.getItem("ucRecommendData");
                e && (this._gameList = JSON.parse(e), this.checkGameListRed(this._gameList)), userCenterServerUtil.getGameList(function (e) {
                    e && e.list && (this._gameList = e.list, cc.sys.localStorage.setItem("ucRecommendData", JSON.stringify(e.list)), this.checkGameListRed(this._gameList))
                }.bind(this)), userCenterServerUtil.getTaskList(function (e) {
                    if (e) {
                        userCenterGlobalManager.homePageTaskData = e;
                        for (var t = 0; t < e.length; t++) {
                            var a = e[t];
                            2 == parseInt(a.platform) && (1 == cc.sys.localStorage.getItem("subscribeBot_success") && 8 == a.task_obj_type ? 0 < a.progress && 0 == a.reward_num || (this.floatBallRedPoint.active = !0) : 1 == cc.sys.localStorage.getItem("createShortcut_success") && 9 == a.task_obj_type && (0 < a.progress && 0 == a.reward_num || (this.floatBallRedPoint.active = !0))), 0 < parseInt(a.reward_num) && (this.floatBallRedPoint.active = !0)
                        }
                    }
                }.bind(this))
            },
            checkGameListRed: function (e) {
                for (var t = 0; t < e.length; t++) {
                    var a = e[t], n = cc.sys.localStorage.getItem(a.app_id);
                    if (a.is_hot && "1" == a.is_hot.toString() && !n) {
                        this.floatBallRedPoint.active = !0;
                        break
                    }
                }
            },
            getUserInfo: function () {
                userCenterServerUtil.getUserInfo(function (e) {
                    0 == e.code ? (userCenterGlobalManager.setUserCenterDiamond(e.data.diamond), e.data ? (userCenterGlobalManager.userData = [], userCenterGlobalManager.unionId = e.data.unionId, userCenterGlobalManager.rankCoefficientJump = e.data.vipInfo.taskRewardRatio, userCenterGlobalManager.rankCoefficientBot = e.data.vipInfo.msgRewardRatio, userCenterGlobalManager.rankCoefficientShortCut = e.data.vipInfo.shortcutsRewardRatio, i.logEvent("uc_exp_lv", null, {viplevel: e.data.vipInfo.level}), userCenterGlobalManager.userData.push({
                        nickname: userCenterGlobalManager.playerName,
                        userPhoto: userCenterGlobalManager.playerPhoto,
                        vipLevel: e.data.vipLevel,
                        vipInfoTitle: e.data.vipInfo.title,
                        vipBadge: e.data.vipInfo.pic,
                        vipExp: e.data.vipExp,
                        vipInfoExp: e.data.vipInfo.exp
                    }), this.sendVipEvent("login")) : (i.logEvent("uc_request_userinfo_error", null, {error: "userInfo.data is null"}), userCenterGlobalManager.userData.push({
                        nickname: userCenterGlobalManager.playerName,
                        userPhoto: userCenterGlobalManager.playerPhoto,
                        vipLevel: 1,
                        vipInfoTitle: "Bronze Ⅰ",
                        vipBadge: "https://download.bfun.cn/messenger/static/images/usercenter/Bronze1-1.png",
                        vipExp: "8",
                        vipInfoExp: "100"
                    })), this.node.active = !0) : 10101 == e.code ? (i.logEvent("uc_request_userinfo_error", null, {error: e.code + " " + e.msg}), userCenterGlobalManager.userData = [], cc.log("get userInfo error"), userCenterGlobalManager.userData.push({
                        nickname: userCenterGlobalManager.playerName,
                        userPhoto: userCenterGlobalManager.playerPhoto,
                        vipLevel: 1,
                        vipInfoTitle: "Bronze Ⅰ",
                        vipBadge: "https://download.bfun.cn/messenger/static/images/usercenter/Bronze1-1.png",
                        vipExp: "8",
                        vipInfoExp: "100"
                    }), this.node.active = !0) : i.logEvent("uc_request_userinfo_error", null, {error: e.code + " " + e.msg})
                }.bind(this))
            },
            haveNewNotice: function (a) {
                var n = this;
                if (a) {
                    userCenterGlobalManager.noticeData = a;
                    for (var e = function (e) {
                        var t = a.noticeList[e];
                        i.getDataWithFB("noticeId" + t.notice_id + "read", function (e) {
                            1 != e["noticeId" + t.notice_id + "read"] && (this.floatBallRedPoint.active = !0)
                        }.bind(n))
                    }, t = 0; t < a.noticeList.length; t++) e(t)
                }
            }
        }), cc._RF.pop()
    }, {
        "user-center-global-manager": "user-center-global-manager",
        "user-center-server-util": "user-center-server-util",
        "user-center-utils": "user-center-utils"
    }],
    "user-center-game-item": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "58cb3k30RBFSbazgBT2yS8D", "user-center-game-item");
        var n = e("user-center-utils"),
            i = [[308, 104], [206, 104], [308, 2], [206, 2], [104, 2], [2, 410], [2, 308], [2, 206], [2, 104], [2, 2], [104, 410], [104, 308], [104, 206], [104, 104], [410, 2]];
        cc.Class({
            extends: cc.Component,
            properties: {
                taskImage: cc.Sprite,
                taskName: cc.Label,
                redPoint: cc.Node,
                _recommendData: null,
                describeLabel: cc.Label,
                playerCount: cc.Label
            },
            start: function () {
            },
            setData: function (e) {
                this.recommendData = e, this.taskName.string = e.name;
                var t = cc.sys.localStorage.getItem(e.app_id);
                this.redPoint.active = !t && "1" == e.is_hot.toString(), cc.loader.load(e.img, function (e, t) {
                    if (!e) if (t.width < 300) this.taskImage.spriteFrame = new cc.SpriteFrame(t); else {
                        var a = 0;
                        setInterval(function () {
                            var e = new cc.SpriteFrame(t, cc.rect(i[a][0], i[a][1], 100, 100));
                            this.taskImage.spriteFrame = e, a = 14 <= a ? 0 : a + 1
                        }.bind(this), 100)
                    }
                }.bind(this)), this.describeLabel && (this.describeLabel.string = e.describe), this.playerCount && (this.playerCount.string = "" == e.player_count ? "0" : e.player_count)
            },
            getPlayerCount: function (e) {
                var t = "" == e ? "0" : e, a = "";
                if (3 < t.length) {
                    var n = parseInt(t.length / 3);
                    0 == t.length % 3 ? n -= 1 : n = n, a = ["K", "M", "B", "T"][n - 1], t = t.substring(0, t.length - 3 * n)
                }
                return t + a
            },
            switchToGame: function () {
                cc.log("===");
                var e = {
                    type: "switch_game",
                    name: userCenterGlobalManager.appName,
                    taskId: "0",
                    appid: this.recommendData.app_id
                };
                n.logEvent("other_game_click", null, {
                    name: this.recommendData.name,
                    act_appid: this.recommendData.app_id
                }), cc.sys.localStorage.setItem(this.recommendData.app_id, "1"), this.redPoint.active = !1, this.switchGameAsync(this.recommendData.app_id, function (e) {
                }, e)
            },
            switchGameAsync: function (e, t, a) {
                "undefined" != typeof FBInstant && FBInstant.switchGameAsync(e, a).catch(function (e) {
                    t && t(e)
                })
            }
        }), cc._RF.pop()
    }, {"user-center-utils": "user-center-utils"}],
    "user-center-global-manager": [function (e, n, t) {
        "use strict";
        cc._RF.push(n, "c99991NWCtOE6Ti66VFpsNn", "user-center-global-manager"), function () {
            if (window.userCenterGlobalManager) n.exports = window.userCenterGlobalManager; else {
                var i = i || {}, t = 0, a = 0;
                i.skinType = 0, i.canSubscribeBotAsync = !1, i.canCreateShortcut = !1, i.appId = "", i.appName = "", i.unionId = null, i.playerId = "undefined" == typeof FBInstant ? "123456987" : FBInstant.player.getID(), i.playerName = "undefined" == typeof FBInstant ? "Shayden" : FBInstant.player.getName(), i.playerPhoto = "undefined" == typeof FBInstant ? "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p160x160/28471560_117125019119253_8833889138073590109_n.jpg?_nc_cat=107&_nc_ht=scontent-hkg3-1.xx&oh=78362bef66353f1316c52aaf66252e2f&oe=5CA4A97A" : FBInstant.player.getPhoto(), i.rankCoefficientJump = 1, i.rankCoefficientBot = 1, i.rankCoefficientShortCut = 1, i.getCoinCallback = null, i.rewardCallback = null, i.needProcessLargeNumber = !1, i.needSkinModule = !0, i.noticeData = null, i.userData = null, i.homePageTaskData = [], i.setUserCenterDiamond = function (e) {
                    t = e
                }, i.getUserCenterDiamond = function () {
                    return t
                }, i.setAdditionCoefficient = function (e) {
                    a = e
                }, i.getAdditionCoefficient = function () {
                    return cc.log("additionCoefficient is " + a), a
                }, i.getUserSelectSkin = function (e) {
                    i.appId = e, i.playerId = "undefined" == typeof FBInstant ? "2090262111012245" : FBInstant.player.getID(), userCenterServerUtil.getUserGoods(function (e) {
                        if (e) {
                            this._userGoodsList = [], this._userGoodsList = e.list;
                            for (var t = 0; t < this._userGoodsList.length; t++) {
                                var a = this._userGoodsList[t];
                                if (1 == a.in_use) {
                                    var n = 0;
                                    "Beach" == a.goods_key ? n = 1 : "Night" == a.goods_key && (n = 2), i.skinType = n, null != a.exp_bonus && i.setAdditionCoefficient(a.exp_bonus), cc.director.emit("userCenter_changeSkin")
                                }
                            }
                        }
                    }.bind(this))
                }, window.userCenterGlobalManager = i, n.exports = i
            }
        }(), cc._RF.pop()
    }, {}],
    "user-center-http-client": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "82fdd/xOBpFvpuM1IHrhUrv", "user-center-http-client");
        t.exports = {
            httpPostRequest: function (e, t, a, n) {
                var i = JSON.stringify(t);
                cc.log("httpPostRequest:" + e + ", after param = " + i);
                var r = cc.loader.getXMLHttpRequest();
                r.timeoutId = setTimeout(function () {
                    n && cc.log("httpRequest timeout")
                }, 6e3), r.open("POST", e), r.send(i), r.onreadystatechange = function () {
                    if (clearTimeout(r.timeoutId), 4 == r.readyState && 200 <= r.status && r.status < 400) {
                        r.statusText;
                        var e = r.responseText;
                        cc.log("responseText = " + e);
                        var t = null;
                        try {
                            t = JSON.parse(e)
                        } catch (e) {
                            cc.log("服务端未知错误")
                        }
                        t && (0 == t.code ? a && a(t.data) : n && n(t))
                    }
                }, r.onerror = function (e) {
                    clearTimeout(r.timeoutId);
                    var t = r.responseText;
                    t || (t = "network error");
                    n && n(t)
                }
            }, httpGetRequest: function (e, t, a, n) {
                for (var i in t) e += i + "=" + t[i] + "&";
                e = e.substring(0, e.length - 1);
                var r = cc.loader.getXMLHttpRequest();
                r.onreadystatechange = function () {
                    if (4 === r.readyState && 200 <= r.status && r.status < 400) {
                        var e = r.responseText, t = null;
                        try {
                            t = JSON.parse(e)
                        } catch (e) {
                            cc.log("服务端未知错误")
                        }
                        t && a && a(t)
                    }
                }, r.open("GET", e, !0), cc.sys.isNative && r.setRequestHeader("Accept-Encoding", "gzip,deflate"), r.timeoutId = setTimeout(function () {
                    n && cc.log("httpRequest timeout")
                }, 6e3), r.send()
            }
        }, cc._RF.pop()
    }, {}],
    "user-center-latest-reward-item": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "58621+OXp5ADpCecYrWzI0O", "user-center-latest-reward-item");
        var n = e("user-center-utils");
        cc.Class({
            extends: cc.Component,
            properties: {
                taskImage: cc.Sprite,
                taskName: cc.Label,
                rewardImage: cc.Sprite,
                rewardNumber: cc.Label,
                taskButton: cc.Sprite,
                redPiont: cc.Node,
                btnLabel: cc.Node,
                btn_states: {default: [], type: cc.SpriteFrame},
                rewardIcon: {default: [], type: cc.SpriteFrame},
                toastDialog: cc.Prefab,
                _btnState: null,
                _taskData: null,
                _rewardNum: null,
                _rewardCoin: null,
                _taskRewardCoefficient: null,
                _taskCurrentProgress: null,
                _totalRewardCoin: null,
                _rewardDiamond: null,
                _totalRewardDiamond: null,
                _rewardType: null
            },
            setData: function (e) {
                if (e) {
                    if (this._taskData = e, this._rewardNum = parseInt(e.taskRewardNum), this._taskCurrentProgress = parseInt(e.taskCurrentProgress), e.taskImage && n.loadWebimg(e.taskImage, this.taskImage), this.taskName.string = e.taskName, 0 < e.taskRewardCoefficientList.length) {
                        for (var t = 0; t < e.taskRewardCoefficientList.length; t++) if (4 == e.taskRewardCoefficientList[t].reward_type) {
                            var a = e.taskRewardCoefficientList[t].number;
                            if (this._rewardType = 4, null == this._rewardDiamond) switch (this._rewardDiamond = a, this._taskData.taskType) {
                                case 8:
                                    this.rewardNumber.string = e.taskRewardCoefficientList[t].number, this._totalRewardDiamond = Math.floor(this._rewardDiamond * userCenterGlobalManager.rankCoefficientBot);
                                    break;
                                case 9:
                                    this.rewardNumber.string = e.taskRewardCoefficientList[t].number, this._totalRewardDiamond = Math.floor(this._rewardDiamond * userCenterGlobalManager.rankCoefficientShortCut)
                            }
                        }
                        this._taskRewardCoefficient = e.taskRewardCoefficientList[0].formula
                    }
                    if (4 == this._rewardType) this.rewardImage.spriteFrame = this.rewardIcon[1], 0 < this._taskCurrentProgress && 0 == this._rewardNum ? (this.redPiont.active = !1, this.removeNode()) : 0 < this._rewardNum && (this.redPiont.active = !0), 1 == cc.sys.localStorage.getItem("subscribeBot_success") && 8 == this._taskData.taskType ? this.redPiont.active = !0 : 1 == cc.sys.localStorage.getItem("createShortcut_success") && 9 == this._taskData.taskType && (this.redPiont.active = !0); else switch (this._taskData.taskType) {
                        case 8:
                            null === this._rewardCoin && (userCenterGlobalManager.needProcessLargeNumber ? (this._rewardCoin = n.galaxyMut(userCenterGlobalManager.getCoinCallback && userCenterGlobalManager.getCoinCallback(), this._taskRewardCoefficient), this._totalRewardCoin = n.galaxyMut(this._rewardCoin, userCenterGlobalManager.rankCoefficientBot)) : (this._rewardCoin = Math.floor(userCenterGlobalManager.getCoinCallback && userCenterGlobalManager.getCoinCallback() * Number(this._taskRewardCoefficient)), this._totalRewardCoin = Math.floor(this._rewardCoin * userCenterGlobalManager.rankCoefficientBot))), this.rewardNumber.string = n.unit_format(this._rewardCoin), 0 < this._taskCurrentProgress && 0 == this._rewardNum ? (this.redPiont.active = !1, this.removeNode()) : 0 < this._rewardNum && (this.redPiont.active = !0), 1 == cc.sys.localStorage.getItem("subscribeBot_success") && (this.redPiont.active = !0);
                            break;
                        case 9:
                            null === this._rewardCoin && (userCenterGlobalManager.needProcessLargeNumber ? (this._rewardCoin = n.galaxyMut(userCenterGlobalManager.getCoinCallback && userCenterGlobalManager.getCoinCallback(), this._taskRewardCoefficient), this._totalRewardCoin = n.galaxyMut(this._rewardCoin, userCenterGlobalManager.rankCoefficientShortCut)) : (this._rewardCoin = Math.floor(userCenterGlobalManager.getCoinCallback && userCenterGlobalManager.getCoinCallback() * Number(this._taskRewardCoefficient)), this._totalRewardCoin = Math.floor(this._rewardCoin * userCenterGlobalManager.rankCoefficientShortCut))), this.rewardNumber.string = n.unit_format(this._rewardCoin), 0 < this._taskCurrentProgress && 0 == this._rewardNum ? (this.redPiont.active = !1, this.removeNode()) : 0 < this._rewardNum && (this.redPiont.active = !0), 1 == cc.sys.localStorage.getItem("createShortcut_success") && (this.redPiont.active = !0)
                    }
                }
            },
            clickEvent: function () {
                if (this.redPiont.activiy = !1, 4 == this._rewardType) if (0 < this._rewardNum) switch (this._taskData.taskType) {
                    case 8:
                        cc.sys.localStorage.setItem("subscribeBot_success", 0), this._rewardNum = 0, this._taskCurrentProgress = 1, this._taskData.taskRewardNum = this._rewardNum, this._taskData.taskCurrentProgress = this._taskCurrentProgress, userCenterServerUtil.notify(this._taskData.taskType, this._taskData.taskId), userCenterGlobalManager.setUserCenterDiamond(userCenterGlobalManager.getUserCenterDiamond() + this._totalRewardDiamond), this.showToast("+ " + this._totalRewardDiamond + " diamonds"), this.setData(this._taskData), cc.director.emit("userCenter_addDiamond");
                        break;
                    case 9:
                        cc.sys.localStorage.setItem("createShortcut_success", 0), this._rewardNum = 0, this._taskCurrentProgress = 1, this._taskData.taskRewardNum = this._rewardNum, this._taskData.taskCurrentProgress = this._taskCurrentProgress, userCenterServerUtil.notify(this._taskData.taskType, this._taskData.taskId), userCenterGlobalManager.setUserCenterDiamond(userCenterGlobalManager.getUserCenterDiamond() + this._totalRewardDiamond), this.showToast("+ " + this._totalRewardDiamond + " diamonds"), this.setData(this._taskData), cc.director.emit("userCenter_addDiamond")
                } else if (1 == cc.sys.localStorage.getItem("subscribeBot_success") && 8 == this._taskData.taskType) cc.sys.localStorage.setItem("subscribeBot_success", 0), this._rewardNum = 0, this._taskCurrentProgress = 1, this._taskData.taskRewardNum = this._rewardNum, this._taskData.taskCurrentProgress = this._taskCurrentProgress, userCenterServerUtil.notify(this._taskData.taskType, this._taskData.taskId), userCenterGlobalManager.setUserCenterDiamond(userCenterGlobalManager.getUserCenterDiamond() + this._totalRewardDiamond), this.showToast("+ " + this._totalRewardDiamond + " diamonds"), this.setData(this._taskData), cc.director.emit("userCenter_addDiamond"); else if (1 == cc.sys.localStorage.getItem("createShortcut_success") && 9 == this._taskData.taskType) cc.sys.localStorage.setItem("createShortcut_success", 0), this._rewardNum = 0, this._taskCurrentProgress = 1, this._taskData.taskRewardNum = this._rewardNum, this._taskData.taskCurrentProgress = this._taskCurrentProgress, userCenterServerUtil.notify(this._taskData.taskType, this._taskData.taskId), userCenterGlobalManager.setUserCenterDiamond(userCenterGlobalManager.getUserCenterDiamond() + this._totalRewardDiamond), this.showToast("+ " + this._totalRewardDiamond + " diamonds"), this.setData(this._taskData), cc.director.emit("userCenter_addDiamond"); else switch (this._taskData.taskType) {
                    case 8:
                        n.logEvent("uc_bot_subscribe"), this.subscribeBotAsync(function () {
                            cc.log("Player is subscribed to the bot"), cc.sys.localStorage.setItem("subscribeBot_success", 1), n.logEvent("uc_homwscreen_add_success"), this._rewardNum = 1, this._taskData.taskRewardNum = this._rewardNum, this.setData(this._taskData)
                        }.bind(this));
                        break;
                    case 9:
                        n.logEvent("uc_homwscreen_add"), this.createShortcut(function () {
                            cc.log("Shortcut created"), cc.sys.localStorage.setItem("createShortcut_success", 1), n.logEvent("uc_homwscreen_add_success"), this._rewardNum = 1, this._taskData.taskRewardNum = this._rewardNum, this._taskCurrentProgress = 1, this._taskData.taskCurrentProgress = this._taskCurrentProgress, this.setData(this._taskData)
                        }.bind(this))
                } else if (0 < this._rewardNum) switch (this._taskData.taskType) {
                    case 8:
                        cc.sys.localStorage.setItem("subscribeBot_success", 0), this._rewardNum = 0, this._taskCurrentProgress = 1, this._taskData.taskRewardNum = this._rewardNum, this._taskData.taskCurrentProgress = this._taskCurrentProgress, userCenterServerUtil.notify(this._taskData.taskType, this._taskData.taskId), userCenterGlobalManager.rewardCallback && userCenterGlobalManager.rewardCallback(this._rewardCoin), this.showToast("+ " + n.unit_format(this._totalRewardCoin) + " coins"), this.setData(this._taskData);
                        break;
                    case 9:
                        cc.sys.localStorage.setItem("createShortcut_success", 0), this._rewardNum = 0, this._taskCurrentProgress = 1, this._taskData.taskRewardNum = this._rewardNum, this._taskData.taskCurrentProgress = this._taskCurrentProgress, userCenterServerUtil.notify(this._taskData.taskType, this._taskData.taskId), userCenterGlobalManager.rewardCallback && userCenterGlobalManager.rewardCallback(this._rewardCoin), this.showToast("+ " + n.unit_format(this._totalRewardCoin) + " coins"), this.setData(this._taskData)
                } else if (1 == cc.sys.localStorage.getItem("createShortcut_success") && 9 == this._taskData.taskType) cc.sys.localStorage.setItem("createShortcut_success", 0), this._rewardNum = 0, this._taskCurrentProgress = 1, this._taskData.taskRewardNum = this._rewardNum, this._taskData.taskCurrentProgress = this._taskCurrentProgress, userCenterServerUtil.notify(this._taskData.taskType, this._taskData.taskId), userCenterGlobalManager.rewardCallback && userCenterGlobalManager.rewardCallback(this._rewardCoin), this.showToast("+ " + n.unit_format(this._totalRewardCoin) + " coins"), this.setData(this._taskData); else if (1 == cc.sys.localStorage.getItem("subscribeBot_success") && 8 == this._taskData.taskType) cc.sys.localStorage.setItem("subscribeBot_success", 0), this._rewardNum = 0, this._taskCurrentProgress = 1, this._taskData.taskRewardNum = this._rewardNum, this._taskData.taskCurrentProgress = this._taskCurrentProgress, userCenterServerUtil.notify(this._taskData.taskType, this._taskData.taskId), userCenterGlobalManager.rewardCallback && userCenterGlobalManager.rewardCallback(this._rewardCoin), this.showToast("+ " + n.unit_format(this._totalRewardCoin) + " coins"), this.setData(this._taskData); else switch (this._taskData.taskType) {
                    case 8:
                        n.logEvent("uc_bot_subscribe"), this.subscribeBotAsync(function () {
                            cc.log("Player is subscribed to the bot"), cc.sys.localStorage.setItem("subscribeBot_success", 1), n.logEvent("uc_homwscreen_add_success"), this._rewardNum = 1, this._taskData.taskRewardNum = this._rewardNum, this.setData(this._taskData)
                        }.bind(this));
                        break;
                    case 9:
                        n.logEvent("uc_homwscreen_add"), this.createShortcut(function () {
                            cc.log("Shortcut created"), cc.sys.localStorage.setItem("createShortcut_success", 1), n.logEvent("uc_homwscreen_add_success"), this._rewardNum = 1, this._taskData.taskRewardNum = this._rewardNum, this._taskCurrentProgress = 1, this._taskData.taskCurrentProgress = this._taskCurrentProgress, this.setData(this._taskData)
                        }.bind(this))
                }
            },
            saveData: function (e) {
                for (var t = playerManager.getObjData("userCenterTask"), a = t.taskProgress, n = t.taskTime, i = [], r = !1, o = 0; o < a.length; o++) if (a[o].task_id == e.taskId) {
                    var s = {task_id: e.taskId, reward_num: e.taskRewardNum, progress: e.taskCurrentProgress};
                    i.push(s), r = !0
                } else i.push(a[o]);
                if (!r) {
                    s = {task_id: e.taskId, reward_num: e.taskRewardNum, progress: e.taskCurrentProgress};
                    i.push(s)
                }
                playerManager.setObjData("userCenterTask", {taskTime: n, taskProgress: i});
                var c = {taskTime: n, taskProgress: i};
                cc.log("save data=" + JSON.stringify(c))
            },
            subscribeBotAsync: function (t) {
                "undefined" != typeof FBInstant ? FBInstant.player.canSubscribeBotAsync().then(function (e) {
                    cc.log("can_subscribe is" + e), e ? FBInstant.player.subscribeBotAsync().then(function () {
                        t && t()
                    }).catch(function (e) {
                        cc.log("Handle subscription failure" + e)
                    }) : this.showToast("After next game login")
                }.bind(this)) : t && t()
            },
            createShortcut: function (t) {
                cc.log("call createShortcut"), "undefined" != typeof FBInstant ? FBInstant.canCreateShortcutAsync().then(function (e) {
                    cc.log("canCreateShortcut=" + e), e ? FBInstant.createShortcutAsync().then(function () {
                        t && t()
                    }).catch(function () {
                        cc.log("Shortcut not created")
                    }) : this.showToast("After next game login")
                }.bind(this)) : t && t()
            },
            showToast: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2.5;
                e && (this.toast && this.toast.removeFromParent(), this.toast = cc.instantiate(this.toastDialog), this.toast.getComponent("user-center-toast").setData(e), this.toast.parent = cc.director.getScene().getChildByName("Canvas"), this.toast.runAction(cc.sequence(cc.delayTime(t), cc.removeSelf(!0))))
            },
            removeNode: function () {
                this.node.removeFromParent(), cc.director.emit("userCenter_updateLatestNode")
            }
        }), cc._RF.pop()
    }, {"user-center-utils": "user-center-utils"}],
    "user-center-list-adapter": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "d817cktSeFBsbuTSh6M0Zqp", "user-center-list-adapter"), cc.Class({
            extends: cc.Component,
            properties: {_prefab: null, _scriptName: null},
            initListView: function (e, t, a) {
                this._prefab = e, this._scriptName = t, this.node.removeAllChildren(!0), this.createItem(a)
            },
            refreshListView: function (e) {
                this.node.removeAllChildren(!0), this.createItem(e)
            },
            addListView: function (e) {
                this.createItem([e])
            },
            removeAllListView: function () {
                this.refreshListView()
            },
            destory: function () {
            },
            createItem: function (e) {
                if (e) for (var t = 0; t < e.length; t++) {
                    var a = null;
                    (a = cc.instantiate(this._prefab)).parent = this.node, a.getComponent(this._scriptName).setData(e[t])
                }
            }
        }), cc._RF.pop()
    }, {}],
    "user-center-manager": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "cf53ag0brhHyqRqkmjKembX", "user-center-manager");
        var i = e("user-center-utils");
        cc.Class({
            extends: cc.Component,
            properties: {
                userCenter: {default: null, type: cc.Prefab},
                topContainer: {default: null, type: cc.Node},
                topLayout: {default: null, type: cc.Node},
                topRewardItem: {default: null, type: cc.Prefab},
                latestReward: {default: null, type: cc.Node},
                dailyReward: {default: null, type: cc.Node},
                latestRewardItem: {default: null, type: cc.Prefab},
                dailyRewardItem: {default: null, type: cc.Prefab},
                latestRewardNode: cc.Node,
                toastDialog: cc.Prefab,
                noticeDialog: cc.Prefab,
                noticeRedPoint: cc.Node,
                _entryType: null,
                _noticeData: [],
                _toastView: null
            },
            onLoad: function () {
                var e = this;
                cc.director.on("userCenter_closeAllWindow", function () {
                    e.closeWindow()
                }), cc.director.on("userCenter_childPageClosed", function () {
                    e.updateData()
                }), cc.director.on("userCenter_buySkin", function () {
                }), cc.director.on("userCenter_addDiamond", function () {
                }), cc.director.on("userCenter_updateLatestNode", function () {
                    0 < e.latestReward.children.length ? e.latestRewardNode.active = !0 : e.latestRewardNode.active = !1
                }), i.logEvent("uc_on_main_page")
            },
            onDestroy: function () {
                cc.director.off("userCenter_closeAllWindow"), cc.director.off("userCenter_childPageClosed"), cc.director.off("userCenter_buySkin"), cc.director.off("userCenter_addDiamond"), cc.director.off("userCenter_updateLatestNode")
            },
            getNoticeList: function () {
                userCenterServerUtil.getNoticeList(function (e) {
                    if (e) {
                        this._noticeData = [];
                        for (var t = e.app_name, a = e.icon, n = 0; n < e.noticeList.length; n++) {
                            var i = e.noticeList[n];
                            this._noticeData.push({
                                noticeId: i.notice_id,
                                icon: i.icon,
                                title: i.title,
                                introduction: i.introduction,
                                text: i.content,
                                time: i.create_time,
                                readNumber: i.read_number,
                                praiseNumber: i.like_number,
                                gameName: t,
                                gameIcon: a
                            })
                        }
                        this.haveNewNotice(e)
                    }
                }.bind(this))
            },
            sendOnlineEvent: function () {
                var e = this, t = window.setInterval(function () {
                    e.sendVipEvent("online", function (e) {
                        10204 == e.code && window.clearInterval(t)
                    })
                }, 6e4)
            },
            setTaskData: function (e, t) {
                cc.log("==setTaskData"), this.latestReward.getComponent("user-center-list-adapter").removeAllListView(), this.dailyReward.getComponent("user-center-list-adapter").removeAllListView(), this.topLayout.getComponent("user-center-list-adapter").removeAllListView();
                var a = [], n = [], i = [];
                "IOS-test" == this.getPlatform() ? this.topContainer.active = !1 : t.map(function (e) {
                    "100" == e.type ? i.push(e) : "101" == e.type && n.push(e)
                });
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    switch (parseInt(o.platform)) {
                        case 2:
                            if (0 < o.progress && 0 == o.reward_num) continue;
                            if (cc.log("subscribeBotAsync_finish = " + cc.sys.localStorage.getItem("subscribeBotAsync_finish")), cc.log("createShortcut_finish = " + cc.sys.localStorage.getItem("createShortcut_finish")), 1 == cc.sys.localStorage.getItem("subscribeBot_success")) {
                                if (cc.log("have reward subscribeBotAsync_finish"), 1 == cc.sys.localStorage.getItem("createShortcut_success")) cc.log("have reward createShortcut_finish"); else if (9 == o.task_obj_type && 0 == userCenterGlobalManager.canCreateShortcut) continue
                            } else if (1 == cc.sys.localStorage.getItem("createShortcut_success")) {
                                if (cc.log("have reward createShortcut_finish"), 8 == o.task_obj_type && 0 == userCenterGlobalManager.canSubscribeBotAsync) continue
                            } else {
                                if (8 == o.task_obj_type && 0 == userCenterGlobalManager.canSubscribeBotAsync) continue;
                                if (9 == o.task_obj_type && 0 == userCenterGlobalManager.canCreateShortcut) continue
                            }
                            a.push({
                                taskId: o.task_id,
                                taskType: o.task_obj_type,
                                taskImage: o.icon,
                                taskName: o.task_title,
                                taskReward: o.reward,
                                taskTotalProgress: o.total_progress,
                                taskCurrentProgress: o.progress,
                                taskTotalTimes: o.task_times,
                                taskRewardNum: o.reward_num,
                                taskJumpAppId: o.config.game_id,
                                appId: userCenterGlobalManager.appId,
                                playerId: userCenterGlobalManager.playerId,
                                taskRewardCoefficientList: o.reward,
                                entryType: this._entryType
                            })
                    }
                }
                a && 0 < a.length && (this.latestReward.getComponent("user-center-list-adapter").initListView(this.latestRewardItem, "user-center-latest-reward-item", a), this.latestRewardNode.active = !0), this.dailyReward.getComponent("user-center-list-adapter").initListView(this.dailyRewardItem, "user-center-game-item", n), this.topLayout.getComponent("user-center-list-adapter").initListView(this.topRewardItem, "user-center-game-item", i)
            },
            gotoNotice: function () {
                this._noticeData.length < 1 || (i.logEvent("uc_on_notice_page"), this.noticePage ? (this.noticePage.getComponent("user-center-notice-page").setNoticeData(this._noticeData), this.noticePage.parent = this.node, this.noticePage.active = !0) : (this.noticePage = cc.instantiate(this.noticeDialog), this.noticePage.getComponent("user-center-notice-page").setNoticeData(this._noticeData), this.noticePage.parent = this.node))
            },
            gotoHelp: function () {
                cc.director.emit("userCenter_callHelp")
            },
            closeWindow: function () {
                this.toast && this.toast.removeFromParent(), cc.director.emit("userCenter_closeMainView"), this.node.active = !1
            },
            updateData: function () {
                this.getNoticeList()
            },
            initUserCenterView: function (e, t) {
                this.setTaskData(e, t), this.updateData()
            },
            sendVipEvent: function (e, t) {
                userCenterServerUtil.sendVipEvent(e, t)
            },
            showToast: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2.5;
                e && (this.toast && this.toast.removeFromParent(), this.toast = cc.instantiate(this.toastDialog), this.toast.getComponent("user-center-toast").setData(e), this.toast.parent = this.node, this.toast.runAction(cc.sequence(cc.delayTime(t), cc.removeSelf(!0))))
            },
            haveNewNotice: function (a) {
                var n = this;
                if (a) {
                    this.noticeRedPoint.active = !1;
                    for (var e = function (e) {
                        var t = a.noticeList[e];
                        i.getDataWithFB("noticeId" + t.notice_id + "read", function (e) {
                            1 != e["noticeId" + t.notice_id + "read"] && (this.noticeRedPoint.active = !0)
                        }.bind(n), function (e) {
                        }.bind(n))
                    }, t = 0; t < a.noticeList.length; t++) e(t)
                }
            },
            getPlatform: function () {
                return "undefined" == typeof FBInstant ? "WEB" : FBInstant.getPlatform()
            }
        }), cc._RF.pop()
    }, {"user-center-utils": "user-center-utils"}],
    "user-center-notice-detail": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "32fc5FCARtFu5kdOTp+KSfq", "user-center-notice-detail"), cc.Class({
            extends: cc.Component,
            properties: {
                noticeIcon: cc.Sprite,
                noticeName: cc.Label,
                noticeTime: cc.Label,
                noticeTitle: cc.RichText,
                noticeContent: cc.RichText,
                likeBtn: cc.Button,
                praiseBtnStates: {default: [], type: cc.SpriteFrame},
                _noticeData: null
            },
            setNoticeDetailData: function (e) {
                (this._noticeData = e).gameIcon && this.loadWebimg(e.gameIcon, this.noticeIcon), this.noticeName.string = e.gameName, this.noticeTime.string = this.timestampToDate(e.time, !0), this.noticeTitle.string = "<b>" + e.title + "</b>", this.noticeContent.string = e.text
            },
            onLoad: function () {
                null != cc.sys.localStorage.getItem("noticeId" + this._noticeData.noticeId) && (this.likeBtn.getComponent(cc.Sprite).spriteFrame = this.praiseBtnStates[1])
            },
            closeWindow: function () {
                this.node.active = !1, cc.director.emit("userCenter_closeNoticeDetailWindow")
            },
            closeAllWindow: function () {
                this.node.active = !1, cc.director.emit("userCenter_closeAllNoticeWindow")
            },
            timestampToDate: function (e, t) {
                var a = new Date(1e3 * e), n = a.getFullYear() + "-",
                    i = (a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1) + "-",
                    r = (a.getDate() < 10 ? "0" + a.getDate() : a.getDate()) + " ",
                    o = (a.getHours() < 10 ? "0" + a.getHours() : a.getHours()) + ":",
                    s = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
                a.getSeconds();
                return t ? n + i + r + o + s : n + i + r
            },
            loadWebimg: function (e, a) {
                cc.loader.load({url: e, type: "png"}, function (e, t) {
                    return e ? (cc.log("load head img err: " + JSON.stringify(e)), e) : (a.spriteFrame = new cc.SpriteFrame(t), a.type = cc.Sprite.Type.SIMPLE, a.sizeMode = cc.Sprite.SizeMode.CUSTOM, 0)
                })
            },
            clickLikeBtn: function () {
                null == cc.sys.localStorage.getItem("noticeId" + this._noticeData.noticeId) && (this.likeBtn.getComponent(cc.Sprite).spriteFrame = this.praiseBtnStates[1], cc.sys.localStorage.setItem("noticeId" + this._noticeData.noticeId, 1), userCenterServerUtil.addLike(this._noticeData.noticeId), cc.director.emit("noticeDetialClickButton"))
            },
            start: function () {
            }
        }), cc._RF.pop()
    }, {}],
    "user-center-notice-item": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "50306Fvf85L24WywUDn7/lb", "user-center-notice-item");
        var n = e("user-center-utils");
        cc.Class({
            extends: cc.Component,
            properties: {
                icon: cc.Sprite,
                title: cc.Node,
                introduction: cc.RichText,
                time: cc.Label,
                readNumber: cc.Label,
                praiseNumber: cc.Label,
                praiseBtn: cc.Node,
                noticeDetailDialog: cc.Prefab,
                redPoint: cc.Node,
                praiseBtnStates: {default: [], type: cc.SpriteFrame},
                _noticeData: null,
                _isReadNotice: !1
            },
            setData: function (e) {
                (this._noticeData = e).icon && n.loadWebimg(e.icon, this.icon);
                var t = 23 < e.title.length ? e.title.substring(0, 20) + "..." : e.title;
                this.title.getComponent(cc.RichText).string = "<b>" + t + "</b>";
                var a = 73 < e.introduction.length ? e.introduction.substring(0, 70) + "..." : e.introduction;
                this.introduction.string = a, this.time.string = this.timestampToDate(e.time, !1), this.readNumber.string = e.readNumber, this.praiseNumber.string = e.praiseNumber, this._isReadNotice || n.getDataWithFB("noticeId" + this._noticeData.noticeId + "read", function (e) {
                    1 != e["noticeId" + this._noticeData.noticeId + "read"] && (this.redPoint.active = !0)
                }.bind(this), function (e) {
                    cc.log("err is " + e)
                }.bind(this)), null != cc.sys.localStorage.getItem("noticeId" + this._noticeData.noticeId) && (this.praiseBtn.getComponent(cc.Sprite).spriteFrame = this.praiseBtnStates[1])
            },
            gotoNoticeDetail: function () {
                n.logEvent("uc_notice_watch", null, {notice: this._noticeData.noticeId + " " + this._noticeData.title}), n.setDataWithFB("noticeId" + this._noticeData.noticeId + "read", 1), this._noticeData.readNumber = this._noticeData.readNumber + 1, this._isReadNotice = !0, this.setData(this._noticeData), this.redPoint.active = !1, userCenterServerUtil.addRead(this._noticeData.noticeId), this.noticeDetailPage ? (this.noticeDetailPage.parent = cc.director.getScene().getChildByName("Canvas"), this.noticeDetailPage.active = !0) : (this.noticeDetailPage = cc.instantiate(this.noticeDetailDialog), this.noticeDetailPage.getComponent("user-center-notice-detail").setNoticeDetailData(this._noticeData), this.noticeDetailPage.parent = cc.director.getScene().getChildByName("Canvas"))
            },
            praiseClick: function () {
                null == cc.sys.localStorage.getItem("noticeId" + this._noticeData.noticeId) && this.addLike()
            },
            timestampToDate: function (e, t) {
                var a = new Date(1e3 * e), n = a.getFullYear() + "-",
                    i = (a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1) + "-",
                    r = (a.getDate() < 10 ? "0" + a.getDate() : a.getDate()) + " ",
                    o = (a.getHours() < 10 ? "0" + a.getHours() : a.getHours()) + ":",
                    s = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
                a.getSeconds();
                return t ? n + i + r + o + s : n + i + r
            },
            onLoad: function () {
                cc.director.on("noticeDetialClickButton", function () {
                    cc.sys.localStorage.getItem("noticeId" + this._noticeData.noticeId) && this.addLike()
                }.bind(this))
            },
            addLike: function () {
                n.logEvent("uc_notice_praise", null, {notice: this._noticeData.noticeId + " " + this._noticeData.title}), this.praiseBtn.getComponent(cc.Sprite).spriteFrame = this.praiseBtnStates[1], this._noticeData.praiseNumber = this._noticeData.praiseNumber + 1, this.setData(this._noticeData), cc.sys.localStorage.setItem("noticeId" + this._noticeData.noticeId, 1), userCenterServerUtil.addLike(this._noticeData.noticeId)
            }
        }), cc._RF.pop()
    }, {"user-center-utils": "user-center-utils"}],
    "user-center-notice-page": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "788f4mWdb1JJJyOBt5A9bQ3", "user-center-notice-page"), cc.Class({
            extends: cc.Component,
            properties: {noticeContent: cc.Node, noticeItem: cc.Prefab, _noticeData: null},
            setNoticeData: function (e) {
                this._noticeData = e
            },
            onLoad: function () {
                cc.director.on("userCenter_closeAllNoticeWindow", function () {
                    this.closeAllWindow()
                }.bind(this)), this.noticeContent.getComponent("user-center-list-adapter").removeAllListView(), this.noticeContent.getComponent("user-center-list-adapter").initListView(this.noticeItem, "user-center-notice-item", this._noticeData)
            },
            onDestroy: function () {
                cc.director.off("userCenter_closeAllNoticeWindow")
            },
            closeWindow: function () {
                this.node.active = !1, cc.director.emit("userCenter_childPageClosed")
            },
            closeAllWindow: function () {
                this.node.active = !1, cc.director.emit("userCenter_closeAllWindow")
            }
        }), cc._RF.pop()
    }, {}],
    "user-center-server-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "61769dTWEVDdp8pUuNKn+Uz", "user-center-server-util");
        var i = e("user-center-http-client");
        (function () {
            if (window.userCenterServerUtil) t.exports = window.userCenterServerUtil; else {
                var e = e || {}, n = "https://fbgame.ymnsdk.com", a = "https://fbuser.ymnsdk.com";
                e.getUserInfo = function (t) {
                    i.httpGetRequest(a + "/user/info?", {playerId: userCenterGlobalManager.playerId}, function (e) {
                        t && t(e)
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.getVipConfigInfo = function (e, t) {
                    i.httpGetRequest(a + "/vip/level/info?", {level: e}, function (e) {
                        t && t(e)
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.sendVipEvent = function (e, t) {
                    i.httpPostRequest(a + "/event/push", {
                        eventId: e,
                        gameId: userCenterGlobalManager.appId,
                        playerId: userCenterGlobalManager.playerId,
                        unionId: userCenterGlobalManager.unionId
                    }, function (e) {
                        cc.log(e)
                    }, function (e) {
                        t && t(e)
                    })
                }, e.getTaskList = function (t) {
                    i.httpPostRequest(n + "/uc/activity/list", {
                        user_id: userCenterGlobalManager.playerId,
                        app_id: userCenterGlobalManager.appId
                    }, function (e) {
                        t && t(e)
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.receivedTask = function (e) {
                    i.httpPostRequest(n + "/uc/activity/receive", {
                        user_id: userCenterGlobalManager.playerId,
                        app_id: userCenterGlobalManager.appId,
                        task_id: e
                    }, function (e) {
                        callback && callback(e), cc.log(e)
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.switchGame = function (e, t) {
                    i.httpPostRequest(n + "/uc/activity/switchGame", {
                        user_id: userCenterGlobalManager.playerId,
                        app_id: userCenterGlobalManager.appId,
                        task_id: e,
                        game_id: t
                    }, function (e) {
                        cc.log(e)
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.getNoticeList = function (t) {
                    i.httpPostRequest(n + "/uc/notice/list", {app_id: userCenterGlobalManager.appId}, function (e) {
                        t && t(e)
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.addLike = function (e) {
                    i.httpPostRequest(n + "/uc/notice/like", {
                        app_id: userCenterGlobalManager.appId,
                        notice_id: e
                    }, function (e) {
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.addRead = function (e) {
                    i.httpPostRequest(n + "/uc/notice/read", {
                        app_id: userCenterGlobalManager.appId,
                        notice_id: e
                    }, function (e) {
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.getGoodsList = function (t) {
                    i.httpPostRequest(n + "/uc/goods/list", {app_id: userCenterGlobalManager.appId}, function (e) {
                        t && t(e)
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.getUserGoods = function (t) {
                    i.httpPostRequest(n + "/uc/goods/userGoods", {
                        app_id: userCenterGlobalManager.appId,
                        user_id: userCenterGlobalManager.playerId,
                        type: 1
                    }, function (e) {
                        t && t(e)
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.buyGoods = function (e, t, a) {
                    i.httpPostRequest(n + "/uc/goods/buy", {
                        app_id: userCenterGlobalManager.appId,
                        user_id: userCenterGlobalManager.playerId,
                        type: 1,
                        goods_id: e
                    }, function (e) {
                        t && t(e)
                    }, function (e) {
                        a && a(e)
                    })
                }, e.useGoods = function (e, t) {
                    i.httpPostRequest(n + "/uc/goods/useGoods", {
                        app_id: userCenterGlobalManager.appId,
                        user_id: userCenterGlobalManager.playerId,
                        type: 1,
                        user_goods_id: e
                    }, function (e) {
                        t && t(e)
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.notify = function (e, t, a) {
                    i.httpPostRequest(n + "/uc/activity/notify", {
                        app_id: userCenterGlobalManager.appId,
                        user_id: userCenterGlobalManager.playerId,
                        task_obj_type: e,
                        task_id: t
                    }, function (e) {
                        a && a(e)
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.getActive = function (t) {
                    i.httpPostRequest(n + "/uc/activity/listPlus", {
                        app_id: userCenterGlobalManager.appId,
                        user_id: userCenterGlobalManager.playerId
                    }, function (e) {
                        t && t(e)
                    }, function (e) {
                        cc.log(e)
                    })
                }, e.getGameList = function (t) {
                    cc.log("userCenterServerUtil getGameList"), i.httpPostRequest(n + "/game/list", {
                        app_id: userCenterGlobalManager.appId,
                        user_id: userCenterGlobalManager.playerId,
                        type: "100,101"
                    }, function (e) {
                        t && t(e)
                    }, function () {
                    })
                }, window.userCenterServerUtil = e, t.exports = e
            }
        })(), cc._RF.pop()
    }, {"user-center-http-client": "user-center-http-client"}],
    "user-center-toast": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "86d50NwELBByZOluf540XVd", "user-center-toast"), cc.Class({
            extends: cc.Component,
            properties: {
                bg_layout: {default: null, type: cc.Node},
                bottom_label: {default: null, type: cc.Label},
                text_label: {default: null, type: cc.Label}
            },
            onLoad: function () {
            },
            start: function () {
            },
            setData: function (e) {
                cc.log("text=" + e), this.text_label.string = e, this.bottom_label.string = e
            }
        }), cc._RF.pop()
    }, {}],
    "user-center-utils": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "c2dc1m0YBxEErv39gSgAOiQ", "user-center-utils");
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function y(e, t) {
            var a = [e, t];
            if (e.length < t.length) return a[0] = t, a[1] = e, a[2] = "not", a;
            if (e.length == t.length) for (var n = 0; n < e.length; n++) {
                if (a[0][n] > a[1][n]) return a[0] = e, a[1] = t, a;
                if (a[0][n] < a[1][n]) return a[0] = t, a[1] = e, a[2] = "not", a;
                if (n == e.length - 1) return a
            }
            return e.length > t.length ? a : void 0
        }

        function b(e) {
            if (0 == e) return e = 0;
            for (var t = (e = e.split("")).length, a = 0; a < t && 0 == e[0]; a++) e.splice(0, 1);
            return e
        }

        var i = ["", "K", "M", "B", "T", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH"];
        t.exports = {
            setDataWithFB: function (e, t) {
                console.log("setDataWithFB  key = " + e + " value = " + t);
                var a = {};
                a[e] = t, cc.log("setDataWithFB : " + e + "=" + a[e]), "undefined" != typeof FBInstant && FBInstant.player.setDataAsync(a).then(function () {
                    cc.log("setData success data is " + e + "=" + a[e])
                })
            }, getDataWithFB: function (t, a, n) {
                if ("undefined" != typeof FBInstant) {
                    var e = [];
                    e[0] = t, FBInstant.player.getDataAsync(e).then(function (e) {
                        cc.log("data is loaded : " + t + "=" + e[t]), a && a(e)
                    }).catch(function (e) {
                        cc.log("reason code = " + e[code]), n && n(e)
                    })
                }
            }, logEvent: function (e, t, a) {
                if ("undefined" != typeof FBInstant) return FBInstant.logEvent(e, t, a)
            }, getEntryPointType: function (t, e) {
                if ("undefined" == typeof FBInstant) return t && t("bot_cta");
                FBInstant.getEntryPointAsync().then(function (e) {
                    cc.log("entrypoint=" + e), t && t(e)
                }).catch(function () {
                    e && e()
                })
            }, loadWebimg: function (e, a) {
                cc.loader.load({url: e, type: "png"}, function (e, t) {
                    return e ? (cc.log("load head img err: " + JSON.stringify(e)), e) : (a.spriteFrame = new cc.SpriteFrame(t), a.type = cc.Sprite.Type.SIMPLE, a.sizeMode = cc.Sprite.SizeMode.CUSTOM, 0)
                })
            }, mFormatter: function (e, t) {
                var a = [{value: 1, symbol: ""}, {value: 1e3, symbol: "K"}, {value: 1e6, symbol: "M"}, {
                    value: 1e9,
                    symbol: "G"
                }, {value: 1e12, symbol: "T"}, {value: 1e15, symbol: "P"}, {value: 1e18, symbol: "E"}], n = void 0;
                for (n = a.length - 1; 0 < n && !(e >= a[n].value); n--) ;
                return (e / a[n].value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + a[n].symbol
            }, unit_format: function (e) {
                var t = "";
                if (6 < (e = e.toString()).length) {
                    var a = parseInt(e.length / 3), n = e.length % 3;
                    t = i[a -= 0 == n ? 2 : 1], e = e.substr(0, e.length - 3 * a)
                }
                return this.number_format(e, 0, ",") + t
            }, number_format: function (e, t, a) {
                e = (e + "").replace(/[^0-9+-Ee.]/g, "");
                var n, i, r, o = isFinite(+e) ? +e : 0, s = isFinite(+t) ? Math.abs(t) : 0, c = void 0 === a ? "," : a,
                    l = "";
                l = (s ? (n = o, i = s, r = Math.pow(10, i), "" + Math.ceil(n * r) / r) : "" + Math.round(o)).split(".");
                for (var u = /(-?\d+)(\d{3})/; u.test(l[0]);) l[0] = l[0].replace(u, "$1" + c + "$2");
                return (l[1] || "").length < s && (l[1] = l[1] || "", l[1] += new Array(s - l[1].length + 1).join("0")), l.join(".")
            }, setNumberLength: function (e, t) {
                for (e = e.toString(); e.length < t;) e = "0" + e;
                return e
            }, time_format: function (e) {
                var t = this.setNumberLength(Math.floor(e / 3600), 2);
                return e %= 3600, t + ":" + this.setNumberLength(Math.floor(e / 60), 2) + ":" + this.setNumberLength(e % 60, 2)
            }, sortByType: function (e, t) {
                var i;
                return e.sort((i = t, function (e, t) {
                    var a, n;
                    if ("object" === (void 0 === e ? "undefined" : r(e)) && "object" === (void 0 === t ? "undefined" : r(t)) && e && t) return (a = e[i]) === (n = t[i]) ? 0 : (void 0 === a ? "undefined" : r(a)) === (void 0 === n ? "undefined" : r(n)) ? a < n ? -1 : 1 : (void 0 === a ? "undefined" : r(a)) < (void 0 === n ? "undefined" : r(n)) ? -1 : 1;
                    throw"error"
                }))
            }, countTime: function (e, t) {
                var a = setInterval(function () {
                    0 <= e ? (t(e), e--) : (cc.log("stop Interval=" + a), clearInterval(a))
                }.bind(this), 1e3);
                return a
            }, clearInterval: function (t) {
                function e(e) {
                    return t.apply(this, arguments)
                }

                return e.toString = function () {
                    return t.toString()
                }, e
            }(function (e) {
                cc.log("clearInterval=" + e), clearInterval(e)
            }), isOneDay: function (e, t) {
                if (e && t) {
                    var a = new Date(parseInt(e)), n = new Date(parseInt(t));
                    if (a.getFullYear() == n.getFullYear() && a.getMonth() == n.getMonth() && a.getDate() == n.getDate()) return !0
                }
                return !1
            }, randomNum: function (e, t) {
                switch (arguments.length) {
                    case 1:
                        return parseInt(Math.random() * e + 1, 10);
                    case 2:
                        return parseInt(Math.random() * (t - e + 1) + e, 10);
                    default:
                        return 0
                }
            }, galaxyAdd: function (e, t) {
                var a, n = [String(e), String(t)], i = [];
                (n = y(n[0], n[1]))[0] = n[0].split(""), n[1] = n[1].split(""), n[0].length != n[1].length && (a = new Array(n[0].length - n[1].length + 1).join("0"), n[1] = a.split("").concat(n[1]));
                for (var r = 0, o = n[0].length - 1; 0 <= o; o--) {
                    var s = Number(n[0][o]) + Number(n[1][o]) + r;
                    i.unshift(s % 10), r = Math.floor(s / 10), 0 == o && 0 != r && i.unshift(r)
                }
                return i.join("")
            }, galaxySub: function (e, t) {
                var a, n = [String(e), String(t)], i = [];
                if (3 == (n = y(n[0], n[1])).length) return !1;
                n[0] = n[0].split(""), n[1] = n[1].split(""), n[0].length != n[1].length && (a = new Array(n[0].length - n[1].length + 1).join("0"), n[1] = a.split("").concat(n[1]));
                for (var r = 0, o = n[0].length - 1; 0 <= o; o--) {
                    var s = Number(n[0][o]) - Number(n[1][o]) - r;
                    s < (r = 0) && (s += 10, r = 1), i.unshift(s % 10)
                }
                var c = i.join("");
                0 == c[0] && (c = b(c));
                for (var l = "", u = 0; u < c.length; u++) l += "" + c[u];
                return "" == l && (l = "0"), l
            }, galaxyMut: function (e, t) {
                var a,
                    n = "number" == typeof (a = t) ? null != a.toString().split(".")[1] ? a.toString().split(".")[1].length : 0 : "string" == typeof a ? null != a.split(".")[1] ? a.split(".")[1].length : 0 : void 0;
                0 < n && (t = String(t).replace(".", ""));
                var i = [String(e), String(t)], r = [];
                if ((i = y(i[0], i[1]))[0] = i[0].split(""), i[1] = i[1].split(""), -1 != i[0].indexOf("N") || -1 != i[1].indexOf("N")) return e;
                for (var o = i[1].length - 1; 0 <= o; o--) {
                    for (var s, c = 0, l = [], u = i[0].length - 1; 0 <= u; u--) {
                        var d = Number(i[0][u]) * Number(i[1][o]) + c;
                        l.unshift(d % 10), c = Math.floor(d / 10), 0 == u && 0 != c && l.unshift(c)
                    }
                    s = new Array(i[1].length - (o + 1) + 1).join("0"), l.push(s), r[o] = l.join("")
                }
                for (var h = r.length, g = 1; g < h; g++) {
                    var p = this.galaxyAdd(r[0], r[1]);
                    r.splice(0, 2, p)
                }
                var f = r.join("");
                0 == f[0] && (f = b(f));
                for (var m = "", v = 0; v < f.length - n; v++) 0 <= parseInt(f[v]) && (m += "" + f[v]);
                return "" == m && (m = "0"), m
            }, galaxyDiv: function (e, t) {
                e = String(e), t = String(t);
                for (var a = e.length, n = (t.length, 0), i = 0, r = [], o = 0, s = 0; s < a; s++) (o = 10 * i + parseInt(e[s])) < t ? (i = o, r.push(0)) : (n = parseInt(o / t), i = o % t, r.push(n));
                return r.join("").replace(/\b(0+)/gi, "")
            }, cmpBigInt: function (e, t) {
                if (cc.log("a=" + e + "     b=" + t), e = String(e), t = String(t), e.length > t.length) return 1;
                if (e.length < t.length) return -1;
                for (var a = 0; a < e.length; a++) {
                    if (e[a] > t[a]) return 1;
                    if (e[a] < t[a]) return -1
                }
                return 0
            }, compare: function (e, t) {
                return 0 <= this.cmpBigInt(e, t)
            }, format: function (e, t) {
                if (e && "object" == (void 0 === t ? "undefined" : r(t))) for (var a in t) if (null != t[a]) {
                    var n = new RegExp("({" + a + "})", "g");
                    e = e.replace(n, t[a])
                }
                return e
            }, webCopyString: function (e) {
                var t = e + "", a = document.createElement("textarea");
                a.value = t, a.setAttribute("readonly", ""), a.style.contain = "strict", a.style.position = "absolute", a.style.left = "-9999px", a.style.fontSize = "12pt";
                var n = getSelection(), i = !1;
                0 < n.rangeCount && (i = n.getRangeAt(0)), document.body.appendChild(a), a.select(), a.selectionStart = 0, a.selectionEnd = t.length;
                var r = !1;
                try {
                    r = document.execCommand("copy")
                } catch (e) {
                }
                return document.body.removeChild(a), i && (n.removeAllRanges(), n.addRange(i)), r
            }
        }, cc._RF.pop()
    }, {}],
    "user-center-vip-page": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "dcb84VWaFFCs7YTN7oSYdwg", "user-center-vip-page"), cc.Class({
            extends: cc.Component,
            properties: {
                playerHeaderImg: cc.Sprite,
                playerNameLabel: cc.Label,
                playerVipLevelNum: cc.RichText,
                vipBadge: cc.Sprite,
                vipBadgeName: cc.RichText,
                pointNum: cc.RichText,
                pointProgress: cc.ProgressBar,
                vipDescribeTitle: cc.RichText,
                vipDescribeContent: cc.RichText,
                navTitleLabel: cc.Label
            },
            onLoad: function () {
            },
            start: function () {
            },
            setVipData: function (e) {
                var t = e[0];
                this.loadWebimg(t.userPhoto, this.playerHeaderImg), this.loadWebimg(t.vipBadge, this.vipBadge), this.playerNameLabel.string = t.nickname, this.playerVipLevelNum.string = "<b><i>LV" + t.vipLevel + "</i></b>", this.vipBadgeName.string = "<b>" + t.vipInfoTitle + "</b>", this.pointNum.string = "<b>" + t.vipExp + " / " + t.vipInfoExp + " exp</b>", this.pointProgress.progress = parseInt(t.vipExp) / parseInt(t.vipInfoExp)
            },
            loadWebimg: function (e, a) {
                cc.loader.load({url: e, type: "png"}, function (e, t) {
                    return e ? (cc.log("load head img err: " + JSON.stringify(e)), e) : (a.spriteFrame = new cc.SpriteFrame(t), a.type = cc.Sprite.Type.SIMPLE, a.sizeMode = cc.Sprite.SizeMode.CUSTOM, 0)
                })
            },
            closeWindow: function () {
                this.node.active = !1
            },
            update: function (e) {
            }
        }), cc._RF.pop()
    }, {}],
    "webimg-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "90d75n5RilPx5Q+ok7JHIby", "webimg-util"), t.exports = {
            load_webimg: function (e, a) {
                cc.loader.load({url: e, type: "png"}, function (e, t) {
                    return e ? (cc.log("load head img err: " + JSON.stringify(e)), e) : (a.spriteFrame = new cc.SpriteFrame(t), a.type = cc.Sprite.Type.SIMPLE, a.sizeMode = cc.Sprite.SizeMode.CUSTOM, 0)
                })
            }, getBase64: function (e, a, n, i) {
                window.URL = window.URL || window.webkitURL;
                var t = new XMLHttpRequest;
                t.open("get", e, !0), t.responseType = "blob", t.onload = function () {
                    if (200 == this.status) {
                        var e = this.response, t = new FileReader;
                        t.onloadend = function (e) {
                            var t = e.target.result;
                            a && a(t, i)
                        }, t.readAsDataURL(e)
                    } else n && n(i)
                }, t.send()
            }, getImgBase64: function () {
                var e = cc.find("Canvas/screenshot").getComponent(cc.Sprite), t = new cc.RenderTexture(960, 640);
                t.begin(), e._sgNode.visit(), t.end();
                var a = document.createElement("canvas"), n = a.getContext("2d");
                if (a.width = 960, a.height = 640, cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
                    var i = t.getSprite().getTexture().getHtmlElementObj();
                    n.drawImage(i, 0, 0)
                } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
                    var r = gl.createFramebuffer();
                    gl.bindFramebuffer(gl.FRAMEBUFFER, r);
                    var o = t.getSprite().getTexture()._glID;
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, o, 0);
                    var s = new Uint8Array(2457600);
                    gl.readPixels(0, 0, 960, 640, gl.RGBA, gl.UNSIGNED_BYTE, s), gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    for (var c = 0; c < 640; c++) {
                        var l = 639 - c, u = new Uint8ClampedArray(s.buffer, 960 * l * 4, 3840),
                            d = new ImageData(u, 960, 1);
                        n.putImageData(d, 0, c)
                    }
                }
                return a.toDataURL("image/png")
            }
        }, cc._RF.pop()
    }, {}]
}, {}, ["LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min", "AddCoin1", "Bank", "Bank_BonusX2", "Daily_And_Bank", "Daily_CheckIn", "Daily_Reward", "GameItemNode", "GameItemNodeCache", "GameItemPaodao", "GamePaodao", "GameScene", "LevelupReward", "TestDialog", "Tutorial0", "Tutorial0_1", "Tutorial0_2", "Tutorial1", "Tutorial2", "Tutorial2_1", "Tutorial3", "Tutorial4", "Tutorial5", "Tutorial6", "Tutorial7", "Tutorial7_1", "UFO_reward", "addcoin", "arrowIcon", "bonustime_dlg", "catch-fish-dialog", "audioManager", "fish-cfg", "gameData", "globalManager", "playerManager", "daily-bonus-dialog", "HC_OK", "HC_OK_animnode", "HZ_open", "HZ_start", "effectDoubleCoin", "effectGetCoin", "effectUFO", "effectupgrade", "expNode", "fishlist-dialog", "getoffcoin_dlg", "invite-friends-dialog", "boxnode", "count-down-node", "daily-node", "fish-item", "gift-node", "moregame-item", "rank-item", "task-node", "loading", "login-world", "luckyspin", "luckyspin_reward", "moregame-dialog", "no-coin-dialog", "PaymentInterface", "PaymentWrapper", "PlatformSdk", "UserInterface", "UserWrapper", "AndroidPaymentExecutor", "AndroidPlatformExecutor", "AndroidUserExecutor", "BrowserPaymentExecutor", "BrowserPlatformExecutor", "BrowserUserExecutor", "IosPaymentExecutor", "IosPlatformExecutor", "IosUserExecutor", "WindowsPaymentExecutor", "WindowsPlatformExecutor", "WindowsUserExecutor", "OsUtil", "rank-dialog", "recommend-dialog", "reset-data-dialog", "reward-dialog", "WShaderUtil", "flowlight_fsh", "flowlight_vsh", "gray_fsh", "gray_vsh", "customShare", "FbInstantUtil", "NumberUtil", "WebimgUtil", "WidgetUtil", "analytics-data", "fbinstant-util", "http-client", "instant-util", "list-adapter-auto", "list-adapter", "load-animation", "md5", "native-util", "notification", "number-util", "popup-window", "server-util", "toast", "webimg-util", "tutorialDlg", "unlock-dialog", "upgradeCarPopUp", "task-guidance-bot", "task-guidance-shortcut", "user-center-daily-reward-item", "user-center-floatball", "user-center-game-item", "user-center-global-manager", "user-center-http-client", "user-center-latest-reward-item", "user-center-list-adapter", "user-center-manager", "user-center-notice-detail", "user-center-notice-item", "user-center-notice-page", "user-center-server-util", "user-center-toast", "user-center-utils", "user-center-vip-page", "emitter", "pomelo-client", "protobuf", "protocol"]);