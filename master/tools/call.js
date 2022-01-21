var yr = Object.create;
var N = Object.defineProperty;
var wr = Object.getOwnPropertyDescriptor;
var xr = Object.getOwnPropertyNames;
var Br = Object.getPrototypeOf, Er = Object.prototype.hasOwnProperty;
var dr = (i1)=>N(i1, "__esModule", {
        value: !0
    })
;
var k = (i2, r)=>()=>(r || i2((r = {
            exports: {}
        }).exports, r), r.exports)
;
var gr = (i3, r, t)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let n1 of xr(r))!Er.call(i3, n1) && n1 !== "default" && N(i3, n1, {
        get: ()=>r[n1]
        ,
        enumerable: !(t = wr(r, n1)) || t.enumerable
    });
    return i3;
}, H = (i4)=>gr(dr(N(i4 != null ? yr(Br(i4)) : {}, "default", i4 && i4.__esModule && "default" in i4 ? {
        get: ()=>i4.default
        ,
        enumerable: !0
    } : {
        value: i4,
        enumerable: !0
    })), i4)
;
var J = k((_)=>{
    "use strict";
    _.byteLength = Ir;
    _.toByteArray = Ar;
    _.fromByteArray = Rr;
    var B = [], w = [], mr1 = typeof Uint8Array != "undefined" ? Uint8Array : Array, b1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(m1 = 0, V1 = b1.length; m1 < V1; ++m1)B[m1] = b1[m1], w[b1.charCodeAt(m1)] = m1;
    var m1, V1;
    w["-".charCodeAt(0)] = 62;
    w["_".charCodeAt(0)] = 63;
    function z2(i5) {
        var r = i5.length;
        if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var t = i5.indexOf("=");
        t === -1 && (t = r);
        var n2 = t === r ? 0 : 4 - t % 4;
        return [
            t,
            n2
        ];
    }
    function Ir(i6) {
        var r = z2(i6), t = r[0], n3 = r[1];
        return (t + n3) * 3 / 4 - n3;
    }
    function Fr(i, r, t) {
        return (r + t) * 3 / 4 - t;
    }
    function Ar(i7) {
        var r, t = z2(i7), n4 = t[0], e2 = t[1], o = new mr1(Fr(i7, n4, e2)), u = 0, f = e2 > 0 ? n4 - 4 : n4, c1;
        for(c1 = 0; c1 < f; c1 += 4)r = w[i7.charCodeAt(c1)] << 18 | w[i7.charCodeAt(c1 + 1)] << 12 | w[i7.charCodeAt(c1 + 2)] << 6 | w[i7.charCodeAt(c1 + 3)], o[u++] = r >> 16 & 255, o[u++] = r >> 8 & 255, o[u++] = r & 255;
        return e2 === 2 && (r = w[i7.charCodeAt(c1)] << 2 | w[i7.charCodeAt(c1 + 1)] >> 4, o[u++] = r & 255), e2 === 1 && (r = w[i7.charCodeAt(c1)] << 10 | w[i7.charCodeAt(c1 + 1)] << 4 | w[i7.charCodeAt(c1 + 2)] >> 2, o[u++] = r >> 8 & 255, o[u++] = r & 255), o;
    }
    function Ur(i) {
        return B[i >> 18 & 63] + B[i >> 12 & 63] + B[i >> 6 & 63] + B[i & 63];
    }
    function Tr(i8, r, t) {
        for(var n5, e3 = [], o = r; o < t; o += 3)n5 = (i8[o] << 16 & 16711680) + (i8[o + 1] << 8 & 65280) + (i8[o + 2] & 255), e3.push(Ur(n5));
        return e3.join("");
    }
    function Rr(i9) {
        for(var r, t = i9.length, n6 = t % 3, e4 = [], o = 16383, u = 0, f = t - n6; u < f; u += o)e4.push(Tr(i9, u, u + o > f ? f : u + o));
        return n6 === 1 ? (r = i9[t - 1], e4.push(B[r >> 2] + B[r << 4 & 63] + "==")) : n6 === 2 && (r = (i9[t - 2] << 8) + i9[t - 1], e4.push(B[r >> 10] + B[r >> 4 & 63] + B[r << 2 & 63] + "=")), e4.join("");
    }
});
var K = k((D2)=>{
    D2.read = function(i10, r, t, n7, e5) {
        var o, u, f = e5 * 8 - n7 - 1, c2 = (1 << f) - 1, l = c2 >> 1, s1 = -7, p1 = t ? e5 - 1 : 0, F3 = t ? -1 : 1, x3 = i10[r + p1];
        for(p1 += F3, o = x3 & (1 << -s1) - 1, x3 >>= -s1, s1 += f; s1 > 0; o = o * 256 + i10[r + p1], p1 += F3, s1 -= 8);
        for(u = o & (1 << -s1) - 1, o >>= -s1, s1 += n7; s1 > 0; u = u * 256 + i10[r + p1], p1 += F3, s1 -= 8);
        if (o === 0) o = 1 - l;
        else {
            if (o === c2) return u ? NaN : (x3 ? -1 : 1) * (1 / 0);
            u = u + Math.pow(2, n7), o = o - l;
        }
        return (x3 ? -1 : 1) * u * Math.pow(2, o - n7);
    };
    D2.write = function(i11, r, t, n8, e6, o) {
        var u, f, c3, l = o * 8 - e6 - 1, s2 = (1 << l) - 1, p2 = s2 >> 1, F4 = e6 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, x4 = n8 ? 0 : o - 1, M = n8 ? 1 : -1, ar1 = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
        for(r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (f = isNaN(r) ? 1 : 0, u = s2) : (u = Math.floor(Math.log(r) / Math.LN2), r * (c3 = Math.pow(2, -u)) < 1 && (u--, c3 *= 2), u + p2 >= 1 ? r += F4 / c3 : r += F4 * Math.pow(2, 1 - p2), r * c3 >= 2 && (u++, c3 /= 2), u + p2 >= s2 ? (f = 0, u = s2) : u + p2 >= 1 ? (f = (r * c3 - 1) * Math.pow(2, e6), u = u + p2) : (f = r * Math.pow(2, p2 - 1) * Math.pow(2, e6), u = 0)); e6 >= 8; i11[t + x4] = f & 255, x4 += M, f /= 256, e6 -= 8);
        for(u = u << e6 | f, l += e6; l > 0; i11[t + x4] = u & 255, x4 += M, u /= 256, l -= 8);
        i11[t + x4 - M] |= ar1 * 128;
    };
});
var X = k((R1)=>{
    "use strict";
    var $3 = J(), A3 = K(), Z = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    R1.Buffer = h1;
    R1.SlowBuffer = Nr;
    R1.INSPECT_MAX_BYTES = 50;
    var S2 = 2147483647;
    R1.kMaxLength = S2;
    h1.TYPED_ARRAY_SUPPORT = Cr1();
    !h1.TYPED_ARRAY_SUPPORT && typeof console != "undefined" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Cr1() {
        try {
            let i12 = new Uint8Array(1), r = {
                foo: function() {
                    return 42;
                }
            };
            return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(i12, r), i12.foo() === 42;
        } catch (i) {
            return !1;
        }
    }
    Object.defineProperty(h1.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (!!h1.isBuffer(this)) return this.buffer;
        }
    });
    Object.defineProperty(h1.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (!!h1.isBuffer(this)) return this.byteOffset;
        }
    });
    function d1(i13) {
        if (i13 > S2) throw new RangeError('The value "' + i13 + '" is invalid for option "size"');
        let r = new Uint8Array(i13);
        return Object.setPrototypeOf(r, h1.prototype), r;
    }
    function h1(i14, r, t) {
        if (typeof i14 == "number") {
            if (typeof r == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return P1(i14);
        }
        return Q1(i14, r, t);
    }
    h1.poolSize = 8192;
    function Q1(i15, r, t) {
        if (typeof i15 == "string") return Sr1(i15, r);
        if (ArrayBuffer.isView(i15)) return Lr(i15);
        if (i15 == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i15);
        if (E2(i15, ArrayBuffer) || i15 && E2(i15.buffer, ArrayBuffer) || typeof SharedArrayBuffer != "undefined" && (E2(i15, SharedArrayBuffer) || i15 && E2(i15.buffer, SharedArrayBuffer))) return G1(i15, r, t);
        if (typeof i15 == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n9 = i15.valueOf && i15.valueOf();
        if (n9 != null && n9 !== i15) return h1.from(n9, r, t);
        let e7 = Mr(i15);
        if (e7) return e7;
        if (typeof Symbol != "undefined" && Symbol.toPrimitive != null && typeof i15[Symbol.toPrimitive] == "function") return h1.from(i15[Symbol.toPrimitive]("string"), r, t);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i15);
    }
    h1.from = function(i16, r, t) {
        return Q1(i16, r, t);
    };
    Object.setPrototypeOf(h1.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(h1, Uint8Array);
    function v2(i17) {
        if (typeof i17 != "number") throw new TypeError('"size" argument must be of type number');
        if (i17 < 0) throw new RangeError('The value "' + i17 + '" is invalid for option "size"');
    }
    function _r1(i18, r, t) {
        return v2(i18), i18 <= 0 ? d1(i18) : r !== void 0 ? typeof t == "string" ? d1(i18).fill(r, t) : d1(i18).fill(r) : d1(i18);
    }
    h1.alloc = function(i19, r, t) {
        return _r1(i19, r, t);
    };
    function P1(i20) {
        return v2(i20), d1(i20 < 0 ? 0 : Y(i20) | 0);
    }
    h1.allocUnsafe = function(i21) {
        return P1(i21);
    };
    h1.allocUnsafeSlow = function(i22) {
        return P1(i22);
    };
    function Sr1(i23, r) {
        if ((typeof r != "string" || r === "") && (r = "utf8"), !h1.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
        let t = rr(i23, r) | 0, n10 = d1(t), e8 = n10.write(i23, r);
        return e8 !== t && (n10 = n10.slice(0, e8)), n10;
    }
    function O2(i24) {
        let r = i24.length < 0 ? 0 : Y(i24.length) | 0, t = d1(r);
        for(let n11 = 0; n11 < r; n11 += 1)t[n11] = i24[n11] & 255;
        return t;
    }
    function Lr(i25) {
        if (E2(i25, Uint8Array)) {
            let r = new Uint8Array(i25);
            return G1(r.buffer, r.byteOffset, r.byteLength);
        }
        return O2(i25);
    }
    function G1(i26, r, t) {
        if (r < 0 || i26.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
        if (i26.byteLength < r + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let n12;
        return r === void 0 && t === void 0 ? n12 = new Uint8Array(i26) : t === void 0 ? n12 = new Uint8Array(i26, r) : n12 = new Uint8Array(i26, r, t), Object.setPrototypeOf(n12, h1.prototype), n12;
    }
    function Mr(i27) {
        if (h1.isBuffer(i27)) {
            let r = Y(i27.length) | 0, t = d1(r);
            return t.length === 0 || i27.copy(t, 0, 0, r), t;
        }
        if (i27.length !== void 0) return typeof i27.length != "number" || j1(i27.length) ? d1(0) : O2(i27);
        if (i27.type === "Buffer" && Array.isArray(i27.data)) return O2(i27.data);
    }
    function Y(i28) {
        if (i28 >= S2) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + S2.toString(16) + " bytes");
        return i28 | 0;
    }
    function Nr(i29) {
        return +i29 != i29 && (i29 = 0), h1.alloc(+i29);
    }
    h1.isBuffer = function(r) {
        return r != null && r._isBuffer === !0 && r !== h1.prototype;
    };
    h1.compare = function(r, t) {
        if (E2(r, Uint8Array) && (r = h1.from(r, r.offset, r.byteLength)), E2(t, Uint8Array) && (t = h1.from(t, t.offset, t.byteLength)), !h1.isBuffer(r) || !h1.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (r === t) return 0;
        let n13 = r.length, e9 = t.length;
        for(let o = 0, u = Math.min(n13, e9); o < u; ++o)if (r[o] !== t[o]) {
            n13 = r[o], e9 = t[o];
            break;
        }
        return n13 < e9 ? -1 : e9 < n13 ? 1 : 0;
    };
    h1.isEncoding = function(r) {
        switch(String(r).toLowerCase()){
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1;
        }
    };
    h1.concat = function(r, t) {
        if (!Array.isArray(r)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (r.length === 0) return h1.alloc(0);
        let n14;
        if (t === void 0) for(t = 0, n14 = 0; n14 < r.length; ++n14)t += r[n14].length;
        let e10 = h1.allocUnsafe(t), o = 0;
        for(n14 = 0; n14 < r.length; ++n14){
            let u = r[n14];
            if (E2(u, Uint8Array)) o + u.length > e10.length ? (h1.isBuffer(u) || (u = h1.from(u)), u.copy(e10, o)) : Uint8Array.prototype.set.call(e10, u, o);
            else if (h1.isBuffer(u)) u.copy(e10, o);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            o += u.length;
        }
        return e10;
    };
    function rr(i30, r) {
        if (h1.isBuffer(i30)) return i30.length;
        if (ArrayBuffer.isView(i30) || E2(i30, ArrayBuffer)) return i30.byteLength;
        if (typeof i30 != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i30);
        let t = i30.length, n15 = arguments.length > 2 && arguments[2] === !0;
        if (!n15 && t === 0) return 0;
        let e11 = !1;
        for(;;)switch(r){
            case "ascii":
            case "latin1":
            case "binary":
                return t;
            case "utf8":
            case "utf-8":
                return W(i30).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return t * 2;
            case "hex":
                return t >>> 1;
            case "base64":
                return lr2(i30).length;
            default:
                if (e11) return n15 ? -1 : W(i30).length;
                r = ("" + r).toLowerCase(), e11 = !0;
        }
    }
    h1.byteLength = rr;
    function kr(i31, r, t) {
        let n16 = !1;
        if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r)) return "";
        for(i31 || (i31 = "utf8");;)switch(i31){
            case "hex":
                return jr1(this, r, t);
            case "utf8":
            case "utf-8":
                return nr(this, r, t);
            case "ascii":
                return qr(this, r, t);
            case "latin1":
            case "binary":
                return Wr(this, r, t);
            case "base64":
                return Gr1(this, r, t);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Xr(this, r, t);
            default:
                if (n16) throw new TypeError("Unknown encoding: " + i31);
                i31 = (i31 + "").toLowerCase(), n16 = !0;
        }
    }
    h1.prototype._isBuffer = !0;
    function I2(i32, r, t) {
        let n17 = i32[r];
        i32[r] = i32[t], i32[t] = n17;
    }
    h1.prototype.swap16 = function() {
        let r = this.length;
        if (r % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for(let t = 0; t < r; t += 2)I2(this, t, t + 1);
        return this;
    };
    h1.prototype.swap32 = function() {
        let r = this.length;
        if (r % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for(let t = 0; t < r; t += 4)I2(this, t, t + 3), I2(this, t + 1, t + 2);
        return this;
    };
    h1.prototype.swap64 = function() {
        let r = this.length;
        if (r % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for(let t = 0; t < r; t += 8)I2(this, t, t + 7), I2(this, t + 1, t + 6), I2(this, t + 2, t + 5), I2(this, t + 3, t + 4);
        return this;
    };
    h1.prototype.toString = function() {
        let r = this.length;
        return r === 0 ? "" : arguments.length === 0 ? nr(this, 0, r) : kr.apply(this, arguments);
    };
    h1.prototype.toLocaleString = h1.prototype.toString;
    h1.prototype.equals = function(r) {
        if (!h1.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
        return this === r ? !0 : h1.compare(this, r) === 0;
    };
    h1.prototype.inspect = function() {
        let r = "", t = R1.INSPECT_MAX_BYTES;
        return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
    };
    Z && (h1.prototype[Z] = h1.prototype.inspect);
    h1.prototype.compare = function(r, t, n18, e12, o) {
        if (E2(r, Uint8Array) && (r = h1.from(r, r.offset, r.byteLength)), !h1.isBuffer(r)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
        if (t === void 0 && (t = 0), n18 === void 0 && (n18 = r ? r.length : 0), e12 === void 0 && (e12 = 0), o === void 0 && (o = this.length), t < 0 || n18 > r.length || e12 < 0 || o > this.length) throw new RangeError("out of range index");
        if (e12 >= o && t >= n18) return 0;
        if (e12 >= o) return -1;
        if (t >= n18) return 1;
        if (t >>>= 0, n18 >>>= 0, e12 >>>= 0, o >>>= 0, this === r) return 0;
        let u = o - e12, f = n18 - t, c4 = Math.min(u, f), l = this.slice(e12, o), s3 = r.slice(t, n18);
        for(let p3 = 0; p3 < c4; ++p3)if (l[p3] !== s3[p3]) {
            u = l[p3], f = s3[p3];
            break;
        }
        return u < f ? -1 : f < u ? 1 : 0;
    };
    function tr(i33, r, t, n19, e13) {
        if (i33.length === 0) return -1;
        if (typeof t == "string" ? (n19 = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, j1(t) && (t = e13 ? 0 : i33.length - 1), t < 0 && (t = i33.length + t), t >= i33.length) {
            if (e13) return -1;
            t = i33.length - 1;
        } else if (t < 0) if (e13) t = 0;
        else return -1;
        if (typeof r == "string" && (r = h1.from(r, n19)), h1.isBuffer(r)) return r.length === 0 ? -1 : ir(i33, r, t, n19, e13);
        if (typeof r == "number") return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? e13 ? Uint8Array.prototype.indexOf.call(i33, r, t) : Uint8Array.prototype.lastIndexOf.call(i33, r, t) : ir(i33, [
            r
        ], t, n19, e13);
        throw new TypeError("val must be string, number or Buffer");
    }
    function ir(i34, r, t, n20, e14) {
        let o = 1, u = i34.length, f = r.length;
        if (n20 !== void 0 && (n20 = String(n20).toLowerCase(), n20 === "ucs2" || n20 === "ucs-2" || n20 === "utf16le" || n20 === "utf-16le")) {
            if (i34.length < 2 || r.length < 2) return -1;
            o = 2, u /= 2, f /= 2, t /= 2;
        }
        function c5(s4, p4) {
            return o === 1 ? s4[p4] : s4.readUInt16BE(p4 * o);
        }
        let l;
        if (e14) {
            let s5 = -1;
            for(l = t; l < u; l++)if (c5(i34, l) === c5(r, s5 === -1 ? 0 : l - s5)) {
                if (s5 === -1 && (s5 = l), l - s5 + 1 === f) return s5 * o;
            } else s5 !== -1 && (l -= l - s5), s5 = -1;
        } else for(t + f > u && (t = u - f), l = t; l >= 0; l--){
            let s6 = !0;
            for(let p5 = 0; p5 < f; p5++)if (c5(i34, l + p5) !== c5(r, p5)) {
                s6 = !1;
                break;
            }
            if (s6) return l;
        }
        return -1;
    }
    h1.prototype.includes = function(r, t, n21) {
        return this.indexOf(r, t, n21) !== -1;
    };
    h1.prototype.indexOf = function(r, t, n22) {
        return tr(this, r, t, n22, !0);
    };
    h1.prototype.lastIndexOf = function(r, t, n23) {
        return tr(this, r, t, n23, !1);
    };
    function br(i35, r, t, n24) {
        t = Number(t) || 0;
        let e15 = i35.length - t;
        n24 ? (n24 = Number(n24), n24 > e15 && (n24 = e15)) : n24 = e15;
        let o = r.length;
        n24 > o / 2 && (n24 = o / 2);
        let u;
        for(u = 0; u < n24; ++u){
            let f = parseInt(r.substr(u * 2, 2), 16);
            if (j1(f)) return u;
            i35[t + u] = f;
        }
        return u;
    }
    function Dr1(i36, r, t, n25) {
        return L(W(r, i36.length - t), i36, t, n25);
    }
    function $r(i37, r, t, n26) {
        return L(Jr1(r), i37, t, n26);
    }
    function Pr1(i38, r, t, n27) {
        return L(lr2(r), i38, t, n27);
    }
    function Or1(i39, r, t, n28) {
        return L(Kr(r, i39.length - t), i39, t, n28);
    }
    h1.prototype.write = function(r, t, n29, e16) {
        if (t === void 0) e16 = "utf8", n29 = this.length, t = 0;
        else if (n29 === void 0 && typeof t == "string") e16 = t, n29 = this.length, t = 0;
        else if (isFinite(t)) t = t >>> 0, isFinite(n29) ? (n29 = n29 >>> 0, e16 === void 0 && (e16 = "utf8")) : (e16 = n29, n29 = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let o = this.length - t;
        if ((n29 === void 0 || n29 > o) && (n29 = o), r.length > 0 && (n29 < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        e16 || (e16 = "utf8");
        let u = !1;
        for(;;)switch(e16){
            case "hex":
                return br(this, r, t, n29);
            case "utf8":
            case "utf-8":
                return Dr1(this, r, t, n29);
            case "ascii":
            case "latin1":
            case "binary":
                return $r(this, r, t, n29);
            case "base64":
                return Pr1(this, r, t, n29);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Or1(this, r, t, n29);
            default:
                if (u) throw new TypeError("Unknown encoding: " + e16);
                e16 = ("" + e16).toLowerCase(), u = !0;
        }
    };
    h1.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    };
    function Gr1(i40, r, t) {
        return r === 0 && t === i40.length ? $3.fromByteArray(i40) : $3.fromByteArray(i40.slice(r, t));
    }
    function nr(i41, r, t) {
        t = Math.min(i41.length, t);
        let n30 = [], e17 = r;
        for(; e17 < t;){
            let o = i41[e17], u = null, f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
            if (e17 + f <= t) {
                let c6, l, s7, p6;
                switch(f){
                    case 1:
                        o < 128 && (u = o);
                        break;
                    case 2:
                        c6 = i41[e17 + 1], (c6 & 192) == 128 && (p6 = (o & 31) << 6 | c6 & 63, p6 > 127 && (u = p6));
                        break;
                    case 3:
                        c6 = i41[e17 + 1], l = i41[e17 + 2], (c6 & 192) == 128 && (l & 192) == 128 && (p6 = (o & 15) << 12 | (c6 & 63) << 6 | l & 63, p6 > 2047 && (p6 < 55296 || p6 > 57343) && (u = p6));
                        break;
                    case 4:
                        c6 = i41[e17 + 1], l = i41[e17 + 2], s7 = i41[e17 + 3], (c6 & 192) == 128 && (l & 192) == 128 && (s7 & 192) == 128 && (p6 = (o & 15) << 18 | (c6 & 63) << 12 | (l & 63) << 6 | s7 & 63, p6 > 65535 && p6 < 1114112 && (u = p6));
                }
            }
            u === null ? (u = 65533, f = 1) : u > 65535 && (u -= 65536, n30.push(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), n30.push(u), e17 += f;
        }
        return Yr(n30);
    }
    var er1 = 4096;
    function Yr(i42) {
        let r = i42.length;
        if (r <= er1) return String.fromCharCode.apply(String, i42);
        let t = "", n31 = 0;
        for(; n31 < r;)t += String.fromCharCode.apply(String, i42.slice(n31, n31 += er1));
        return t;
    }
    function qr(i43, r, t) {
        let n32 = "";
        t = Math.min(i43.length, t);
        for(let e18 = r; e18 < t; ++e18)n32 += String.fromCharCode(i43[e18] & 127);
        return n32;
    }
    function Wr(i44, r, t) {
        let n33 = "";
        t = Math.min(i44.length, t);
        for(let e19 = r; e19 < t; ++e19)n33 += String.fromCharCode(i44[e19]);
        return n33;
    }
    function jr1(i45, r, t) {
        let n34 = i45.length;
        (!r || r < 0) && (r = 0), (!t || t < 0 || t > n34) && (t = n34);
        let e20 = "";
        for(let o = r; o < t; ++o)e20 += Zr[i45[o]];
        return e20;
    }
    function Xr(i46, r, t) {
        let n35 = i46.slice(r, t), e21 = "";
        for(let o = 0; o < n35.length - 1; o += 2)e21 += String.fromCharCode(n35[o] + n35[o + 1] * 256);
        return e21;
    }
    h1.prototype.slice = function(r, t) {
        let n36 = this.length;
        r = ~~r, t = t === void 0 ? n36 : ~~t, r < 0 ? (r += n36, r < 0 && (r = 0)) : r > n36 && (r = n36), t < 0 ? (t += n36, t < 0 && (t = 0)) : t > n36 && (t = n36), t < r && (t = r);
        let e22 = this.subarray(r, t);
        return Object.setPrototypeOf(e22, h1.prototype), e22;
    };
    function a1(i47, r, t) {
        if (i47 % 1 != 0 || i47 < 0) throw new RangeError("offset is not uint");
        if (i47 + r > t) throw new RangeError("Trying to access beyond buffer length");
    }
    h1.prototype.readUintLE = h1.prototype.readUIntLE = function(r, t, n37) {
        r = r >>> 0, t = t >>> 0, n37 || a1(r, t, this.length);
        let e23 = this[r], o = 1, u = 0;
        for(; ++u < t && (o *= 256);)e23 += this[r + u] * o;
        return e23;
    };
    h1.prototype.readUintBE = h1.prototype.readUIntBE = function(r, t, n38) {
        r = r >>> 0, t = t >>> 0, n38 || a1(r, t, this.length);
        let e24 = this[r + --t], o = 1;
        for(; t > 0 && (o *= 256);)e24 += this[r + --t] * o;
        return e24;
    };
    h1.prototype.readUint8 = h1.prototype.readUInt8 = function(r, t) {
        return r = r >>> 0, t || a1(r, 1, this.length), this[r];
    };
    h1.prototype.readUint16LE = h1.prototype.readUInt16LE = function(r, t) {
        return r = r >>> 0, t || a1(r, 2, this.length), this[r] | this[r + 1] << 8;
    };
    h1.prototype.readUint16BE = h1.prototype.readUInt16BE = function(r, t) {
        return r = r >>> 0, t || a1(r, 2, this.length), this[r] << 8 | this[r + 1];
    };
    h1.prototype.readUint32LE = h1.prototype.readUInt32LE = function(r, t) {
        return r = r >>> 0, t || a1(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
    };
    h1.prototype.readUint32BE = h1.prototype.readUInt32BE = function(r, t) {
        return r = r >>> 0, t || a1(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
    };
    h1.prototype.readBigUInt64LE = g2(function(r) {
        r = r >>> 0, T1(r, "offset");
        let t = this[r], n39 = this[r + 7];
        (t === void 0 || n39 === void 0) && C1(r, this.length - 8);
        let e25 = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, o = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + n39 * 2 ** 24;
        return BigInt(e25) + (BigInt(o) << BigInt(32));
    });
    h1.prototype.readBigUInt64BE = g2(function(r) {
        r = r >>> 0, T1(r, "offset");
        let t = this[r], n40 = this[r + 7];
        (t === void 0 || n40 === void 0) && C1(r, this.length - 8);
        let e26 = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], o = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n40;
        return (BigInt(e26) << BigInt(32)) + BigInt(o);
    });
    h1.prototype.readIntLE = function(r, t, n41) {
        r = r >>> 0, t = t >>> 0, n41 || a1(r, t, this.length);
        let e27 = this[r], o = 1, u = 0;
        for(; ++u < t && (o *= 256);)e27 += this[r + u] * o;
        return o *= 128, e27 >= o && (e27 -= Math.pow(2, 8 * t)), e27;
    };
    h1.prototype.readIntBE = function(r, t, n42) {
        r = r >>> 0, t = t >>> 0, n42 || a1(r, t, this.length);
        let e28 = t, o = 1, u = this[r + --e28];
        for(; e28 > 0 && (o *= 256);)u += this[r + --e28] * o;
        return o *= 128, u >= o && (u -= Math.pow(2, 8 * t)), u;
    };
    h1.prototype.readInt8 = function(r, t) {
        return r = r >>> 0, t || a1(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
    };
    h1.prototype.readInt16LE = function(r, t) {
        r = r >>> 0, t || a1(r, 2, this.length);
        let n43 = this[r] | this[r + 1] << 8;
        return n43 & 32768 ? n43 | 4294901760 : n43;
    };
    h1.prototype.readInt16BE = function(r, t) {
        r = r >>> 0, t || a1(r, 2, this.length);
        let n44 = this[r + 1] | this[r] << 8;
        return n44 & 32768 ? n44 | 4294901760 : n44;
    };
    h1.prototype.readInt32LE = function(r, t) {
        return r = r >>> 0, t || a1(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
    };
    h1.prototype.readInt32BE = function(r, t) {
        return r = r >>> 0, t || a1(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
    };
    h1.prototype.readBigInt64LE = g2(function(r) {
        r = r >>> 0, T1(r, "offset");
        let t = this[r], n45 = this[r + 7];
        (t === void 0 || n45 === void 0) && C1(r, this.length - 8);
        let e29 = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (n45 << 24);
        return (BigInt(e29) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
    });
    h1.prototype.readBigInt64BE = g2(function(r) {
        r = r >>> 0, T1(r, "offset");
        let t = this[r], n46 = this[r + 7];
        (t === void 0 || n46 === void 0) && C1(r, this.length - 8);
        let e30 = (t << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
        return (BigInt(e30) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n46);
    });
    h1.prototype.readFloatLE = function(r, t) {
        return r = r >>> 0, t || a1(r, 4, this.length), A3.read(this, r, !0, 23, 4);
    };
    h1.prototype.readFloatBE = function(r, t) {
        return r = r >>> 0, t || a1(r, 4, this.length), A3.read(this, r, !1, 23, 4);
    };
    h1.prototype.readDoubleLE = function(r, t) {
        return r = r >>> 0, t || a1(r, 8, this.length), A3.read(this, r, !0, 52, 8);
    };
    h1.prototype.readDoubleBE = function(r, t) {
        return r = r >>> 0, t || a1(r, 8, this.length), A3.read(this, r, !1, 52, 8);
    };
    function y3(i48, r, t, n47, e31, o) {
        if (!h1.isBuffer(i48)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (r > e31 || r < o) throw new RangeError('"value" argument is out of bounds');
        if (t + n47 > i48.length) throw new RangeError("Index out of range");
    }
    h1.prototype.writeUintLE = h1.prototype.writeUIntLE = function(r, t, n48, e32) {
        if (r = +r, t = t >>> 0, n48 = n48 >>> 0, !e32) {
            let f = Math.pow(2, 8 * n48) - 1;
            y3(this, r, t, n48, f, 0);
        }
        let o = 1, u = 0;
        for(this[t] = r & 255; ++u < n48 && (o *= 256);)this[t + u] = r / o & 255;
        return t + n48;
    };
    h1.prototype.writeUintBE = h1.prototype.writeUIntBE = function(r, t, n49, e33) {
        if (r = +r, t = t >>> 0, n49 = n49 >>> 0, !e33) {
            let f = Math.pow(2, 8 * n49) - 1;
            y3(this, r, t, n49, f, 0);
        }
        let o = n49 - 1, u = 1;
        for(this[t + o] = r & 255; --o >= 0 && (u *= 256);)this[t + o] = r / u & 255;
        return t + n49;
    };
    h1.prototype.writeUint8 = h1.prototype.writeUInt8 = function(r, t, n50) {
        return r = +r, t = t >>> 0, n50 || y3(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
    };
    h1.prototype.writeUint16LE = h1.prototype.writeUInt16LE = function(r, t, n51) {
        return r = +r, t = t >>> 0, n51 || y3(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    };
    h1.prototype.writeUint16BE = h1.prototype.writeUInt16BE = function(r, t, n52) {
        return r = +r, t = t >>> 0, n52 || y3(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    };
    h1.prototype.writeUint32LE = h1.prototype.writeUInt32LE = function(r, t, n53) {
        return r = +r, t = t >>> 0, n53 || y3(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
    };
    h1.prototype.writeUint32BE = h1.prototype.writeUInt32BE = function(r, t, n54) {
        return r = +r, t = t >>> 0, n54 || y3(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    };
    function or(i49, r, t, n55, e34) {
        sr2(r, n55, e34, i49, t, 7);
        let o = Number(r & BigInt(4294967295));
        i49[t++] = o, o = o >> 8, i49[t++] = o, o = o >> 8, i49[t++] = o, o = o >> 8, i49[t++] = o;
        let u = Number(r >> BigInt(32) & BigInt(4294967295));
        return i49[t++] = u, u = u >> 8, i49[t++] = u, u = u >> 8, i49[t++] = u, u = u >> 8, i49[t++] = u, t;
    }
    function ur(i50, r, t, n56, e35) {
        sr2(r, n56, e35, i50, t, 7);
        let o = Number(r & BigInt(4294967295));
        i50[t + 7] = o, o = o >> 8, i50[t + 6] = o, o = o >> 8, i50[t + 5] = o, o = o >> 8, i50[t + 4] = o;
        let u = Number(r >> BigInt(32) & BigInt(4294967295));
        return i50[t + 3] = u, u = u >> 8, i50[t + 2] = u, u = u >> 8, i50[t + 1] = u, u = u >> 8, i50[t] = u, t + 8;
    }
    h1.prototype.writeBigUInt64LE = g2(function(r, t = 0) {
        return or(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h1.prototype.writeBigUInt64BE = g2(function(r, t = 0) {
        return ur(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h1.prototype.writeIntLE = function(r, t, n57, e36) {
        if (r = +r, t = t >>> 0, !e36) {
            let c7 = Math.pow(2, 8 * n57 - 1);
            y3(this, r, t, n57, c7 - 1, -c7);
        }
        let o = 0, u = 1, f = 0;
        for(this[t] = r & 255; ++o < n57 && (u *= 256);)r < 0 && f === 0 && this[t + o - 1] !== 0 && (f = 1), this[t + o] = (r / u >> 0) - f & 255;
        return t + n57;
    };
    h1.prototype.writeIntBE = function(r, t, n58, e37) {
        if (r = +r, t = t >>> 0, !e37) {
            let c8 = Math.pow(2, 8 * n58 - 1);
            y3(this, r, t, n58, c8 - 1, -c8);
        }
        let o = n58 - 1, u = 1, f = 0;
        for(this[t + o] = r & 255; --o >= 0 && (u *= 256);)r < 0 && f === 0 && this[t + o + 1] !== 0 && (f = 1), this[t + o] = (r / u >> 0) - f & 255;
        return t + n58;
    };
    h1.prototype.writeInt8 = function(r, t, n59) {
        return r = +r, t = t >>> 0, n59 || y3(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
    };
    h1.prototype.writeInt16LE = function(r, t, n60) {
        return r = +r, t = t >>> 0, n60 || y3(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    };
    h1.prototype.writeInt16BE = function(r, t, n61) {
        return r = +r, t = t >>> 0, n61 || y3(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    };
    h1.prototype.writeInt32LE = function(r, t, n62) {
        return r = +r, t = t >>> 0, n62 || y3(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
    };
    h1.prototype.writeInt32BE = function(r, t, n63) {
        return r = +r, t = t >>> 0, n63 || y3(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    };
    h1.prototype.writeBigInt64LE = g2(function(r, t = 0) {
        return or(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    h1.prototype.writeBigInt64BE = g2(function(r, t = 0) {
        return ur(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function hr1(i51, r, t, n64, e, o) {
        if (t + n64 > i51.length) throw new RangeError("Index out of range");
        if (t < 0) throw new RangeError("Index out of range");
    }
    function fr1(i52, r, t, n65, e38) {
        return r = +r, t = t >>> 0, e38 || hr1(i52, r, t, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), A3.write(i52, r, t, n65, 23, 4), t + 4;
    }
    h1.prototype.writeFloatLE = function(r, t, n66) {
        return fr1(this, r, t, !0, n66);
    };
    h1.prototype.writeFloatBE = function(r, t, n67) {
        return fr1(this, r, t, !1, n67);
    };
    function cr2(i53, r, t, n68, e39) {
        return r = +r, t = t >>> 0, e39 || hr1(i53, r, t, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), A3.write(i53, r, t, n68, 52, 8), t + 8;
    }
    h1.prototype.writeDoubleLE = function(r, t, n69) {
        return cr2(this, r, t, !0, n69);
    };
    h1.prototype.writeDoubleBE = function(r, t, n70) {
        return cr2(this, r, t, !1, n70);
    };
    h1.prototype.copy = function(r, t, n71, e40) {
        if (!h1.isBuffer(r)) throw new TypeError("argument should be a Buffer");
        if (n71 || (n71 = 0), !e40 && e40 !== 0 && (e40 = this.length), t >= r.length && (t = r.length), t || (t = 0), e40 > 0 && e40 < n71 && (e40 = n71), e40 === n71 || r.length === 0 || this.length === 0) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (n71 < 0 || n71 >= this.length) throw new RangeError("Index out of range");
        if (e40 < 0) throw new RangeError("sourceEnd out of bounds");
        e40 > this.length && (e40 = this.length), r.length - t < e40 - n71 && (e40 = r.length - t + n71);
        let o = e40 - n71;
        return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n71, e40) : Uint8Array.prototype.set.call(r, this.subarray(n71, e40), t), o;
    };
    h1.prototype.fill = function(r, t, n72, e41) {
        if (typeof r == "string") {
            if (typeof t == "string" ? (e41 = t, t = 0, n72 = this.length) : typeof n72 == "string" && (e41 = n72, n72 = this.length), e41 !== void 0 && typeof e41 != "string") throw new TypeError("encoding must be a string");
            if (typeof e41 == "string" && !h1.isEncoding(e41)) throw new TypeError("Unknown encoding: " + e41);
            if (r.length === 1) {
                let u = r.charCodeAt(0);
                (e41 === "utf8" && u < 128 || e41 === "latin1") && (r = u);
            }
        } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
        if (t < 0 || this.length < t || this.length < n72) throw new RangeError("Out of range index");
        if (n72 <= t) return this;
        t = t >>> 0, n72 = n72 === void 0 ? this.length : n72 >>> 0, r || (r = 0);
        let o;
        if (typeof r == "number") for(o = t; o < n72; ++o)this[o] = r;
        else {
            let u = h1.isBuffer(r) ? r : h1.from(r, e41), f = u.length;
            if (f === 0) throw new TypeError('The value "' + r + '" is invalid for argument "value"');
            for(o = 0; o < n72 - t; ++o)this[o + t] = u[o % f];
        }
        return this;
    };
    var U = {};
    function q2(i54, r, t) {
        U[i54] = class extends t {
            constructor(){
                super();
                Object.defineProperty(this, "message", {
                    value: r.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${i54}]`, this.stack, delete this.name;
            }
            get code() {
                return i54;
            }
            set code(e42) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: e42,
                    writable: !0
                });
            }
            toString() {
                return `${this.name} [${i54}]: ${this.message}`;
            }
        };
    }
    q2("ERR_BUFFER_OUT_OF_BOUNDS", function(i55) {
        return i55 ? `${i55} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    q2("ERR_INVALID_ARG_TYPE", function(i56, r) {
        return `The "${i56}" argument must be of type number. Received type ${typeof r}`;
    }, TypeError);
    q2("ERR_OUT_OF_RANGE", function(i57, r, t) {
        let n73 = `The value of "${i57}" is out of range.`, e43 = t;
        return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? e43 = pr1(String(t)) : typeof t == "bigint" && (e43 = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (e43 = pr1(e43)), e43 += "n"), n73 += ` It must be ${r}. Received ${e43}`, n73;
    }, RangeError);
    function pr1(i58) {
        let r = "", t = i58.length, n74 = i58[0] === "-" ? 1 : 0;
        for(; t >= n74 + 4; t -= 3)r = `_${i58.slice(t - 3, t)}${r}`;
        return `${i58.slice(0, t)}${r}`;
    }
    function Hr1(i59, r, t) {
        T1(r, "offset"), (i59[r] === void 0 || i59[r + t] === void 0) && C1(r, i59.length - (t + 1));
    }
    function sr2(i60, r, t, n75, e44, o) {
        if (i60 > t || i60 < r) {
            let u = typeof r == "bigint" ? "n" : "", f;
            throw o > 3 ? r === 0 || r === BigInt(0) ? f = `>= 0${u} and < 2${u} ** ${(o + 1) * 8}${u}` : f = `>= -(2${u} ** ${(o + 1) * 8 - 1}${u}) and < 2 ** ${(o + 1) * 8 - 1}${u}` : f = `>= ${r}${u} and <= ${t}${u}`, new U.ERR_OUT_OF_RANGE("value", f, i60);
        }
        Hr1(n75, e44, o);
    }
    function T1(i61, r) {
        if (typeof i61 != "number") throw new U.ERR_INVALID_ARG_TYPE(r, "number", i61);
    }
    function C1(i62, r, t) {
        throw Math.floor(i62) !== i62 ? (T1(i62, t), new U.ERR_OUT_OF_RANGE(t || "offset", "an integer", i62)) : r < 0 ? new U.ERR_BUFFER_OUT_OF_BOUNDS : new U.ERR_OUT_OF_RANGE(t || "offset", `>= ${t ? 1 : 0} and <= ${r}`, i62);
    }
    var Vr1 = /[^+/0-9A-Za-z-_]/g;
    function zr(i63) {
        if (i63 = i63.split("=")[0], i63 = i63.trim().replace(Vr1, ""), i63.length < 2) return "";
        for(; i63.length % 4 != 0;)i63 = i63 + "=";
        return i63;
    }
    function W(i64, r) {
        r = r || 1 / 0;
        let t, n76 = i64.length, e45 = null, o = [];
        for(let u = 0; u < n76; ++u){
            if (t = i64.charCodeAt(u), t > 55295 && t < 57344) {
                if (!e45) {
                    if (t > 56319) {
                        (r -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                    } else if (u + 1 === n76) {
                        (r -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                    }
                    e45 = t;
                    continue;
                }
                if (t < 56320) {
                    (r -= 3) > -1 && o.push(239, 191, 189), e45 = t;
                    continue;
                }
                t = (e45 - 55296 << 10 | t - 56320) + 65536;
            } else e45 && (r -= 3) > -1 && o.push(239, 191, 189);
            if (e45 = null, t < 128) {
                if ((r -= 1) < 0) break;
                o.push(t);
            } else if (t < 2048) {
                if ((r -= 2) < 0) break;
                o.push(t >> 6 | 192, t & 63 | 128);
            } else if (t < 65536) {
                if ((r -= 3) < 0) break;
                o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
            } else if (t < 1114112) {
                if ((r -= 4) < 0) break;
                o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
            } else throw new Error("Invalid code point");
        }
        return o;
    }
    function Jr1(i65) {
        let r = [];
        for(let t = 0; t < i65.length; ++t)r.push(i65.charCodeAt(t) & 255);
        return r;
    }
    function Kr(i66, r) {
        let t, n77, e46, o = [];
        for(let u = 0; u < i66.length && !((r -= 2) < 0); ++u)t = i66.charCodeAt(u), n77 = t >> 8, e46 = t % 256, o.push(e46), o.push(n77);
        return o;
    }
    function lr2(i67) {
        return $3.toByteArray(zr(i67));
    }
    function L(i68, r, t, n78) {
        let e47;
        for(e47 = 0; e47 < n78 && !(e47 + t >= r.length || e47 >= i68.length); ++e47)r[e47 + t] = i68[e47];
        return e47;
    }
    function E2(i69, r) {
        return i69 instanceof r || i69 != null && i69.constructor != null && i69.constructor.name != null && i69.constructor.name === r.name;
    }
    function j1(i70) {
        return i70 !== i70;
    }
    var Zr = function() {
        let i71 = "0123456789abcdef", r = new Array(256);
        for(let t = 0; t < 16; ++t){
            let n = t * 16;
            for(let e48 = 0; e48 < 16; ++e48)r[n + e48] = i71[t] + i71[e48];
        }
        return r;
    }();
    function g2(i72) {
        return typeof BigInt == "undefined" ? Qr : i72;
    }
    function Qr() {
        throw new Error("BigInt not supported");
    }
});
var vr = H(X()), rt = H(X()), { Buffer: ut , SlowBuffer: ht , INSPECT_MAX_BYTES: ft , kMaxLength: ct  } = vr;
rt.default;
var j = Object.create;
var $ = Object.defineProperty;
var k1 = Object.getOwnPropertyDescriptor;
var q = Object.getOwnPropertyNames;
var y = Object.getPrototypeOf, z = Object.prototype.hasOwnProperty;
var A = (t)=>$(t, "__esModule", {
        value: !0
    })
;
var C = (t, r)=>()=>(r || t((r = {
            exports: {}
        }).exports, r), r.exports)
;
var D = (t, r, d2, p7)=>{
    if (r && typeof r == "object" || typeof r == "function") for (let i73 of q(r))!z.call(t, i73) && (d2 || i73 !== "default") && $(t, i73, {
        get: ()=>r[i73]
        ,
        enumerable: !(p7 = k1(r, i73)) || p7.enumerable
    });
    return t;
}, v = (t, r)=>D(A($(t != null ? j(y(t)) : {}, "default", !r && t && t.__esModule ? {
        get: ()=>t.default
        ,
        enumerable: !0
    } : {
        value: t,
        enumerable: !0
    })), t)
;
var e = C((n79)=>{
    n79.read = function(t, r, d3, p8, i74) {
        var M, a2, f = i74 * 8 - p8 - 1, s8 = (1 << f) - 1, N2 = s8 >> 1, o = -7, h2 = d3 ? i74 - 1 : 0, x5 = d3 ? -1 : 1, w = t[r + h2];
        for(h2 += x5, M = w & (1 << -o) - 1, w >>= -o, o += f; o > 0; M = M * 256 + t[r + h2], h2 += x5, o -= 8);
        for(a2 = M & (1 << -o) - 1, M >>= -o, o += p8; o > 0; a2 = a2 * 256 + t[r + h2], h2 += x5, o -= 8);
        if (M === 0) M = 1 - N2;
        else {
            if (M === s8) return a2 ? NaN : (w ? -1 : 1) * (1 / 0);
            a2 = a2 + Math.pow(2, p8), M = M - N2;
        }
        return (w ? -1 : 1) * a2 * Math.pow(2, M - p8);
    };
    n79.write = function(t, r, d, p9, i75, M) {
        var a3, f, s9, N3 = M * 8 - i75 - 1, o = (1 << N3) - 1, h3 = o >> 1, x6 = i75 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w = p9 ? 0 : M - 1, c9 = p9 ? 1 : -1, B = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
        for(r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (f = isNaN(r) ? 1 : 0, a3 = o) : (a3 = Math.floor(Math.log(r) / Math.LN2), r * (s9 = Math.pow(2, -a3)) < 1 && (a3--, s9 *= 2), a3 + h3 >= 1 ? r += x6 / s9 : r += x6 * Math.pow(2, 1 - h3), r * s9 >= 2 && (a3++, s9 /= 2), a3 + h3 >= o ? (f = 0, a3 = o) : a3 + h3 >= 1 ? (f = (r * s9 - 1) * Math.pow(2, i75), a3 = a3 + h3) : (f = r * Math.pow(2, h3 - 1) * Math.pow(2, i75), a3 = 0)); i75 >= 8; t[d + w] = f & 255, w += c9, f /= 256, i75 -= 8);
        for(a3 = a3 << i75 | f, N3 += i75; N3 > 0; t[d + w] = a3 & 255, w += c9, a3 /= 256, N3 -= 8);
        t[d + w - c9] |= B * 128;
    };
});
var I = v(e()), g = v(e()), { read: K1 , write: O  } = g, { default: F , ...G } = g, P = (I.default ?? F) ?? G;
var d = Object.create;
var e1 = Object.defineProperty;
var m3 = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var $1 = (r)=>e1(r, "__esModule", {
        value: !0
    })
;
var y1 = (r, t)=>()=>(t || r((t = {
            exports: {}
        }).exports, t), t.exports)
;
var A1 = (r, t, u, f)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let o of s(t))!p.call(r, o) && (u || o !== "default") && e1(r, o, {
        get: ()=>t[o]
        ,
        enumerable: !(f = m3(t, o)) || f.enumerable
    });
    return r;
}, i = (r, t)=>A1($1(e1(r != null ? d(c(r)) : {}, "default", !t && r && r.__esModule ? {
        get: ()=>r.default
        ,
        enumerable: !0
    } : {
        value: r,
        enumerable: !0
    })), r)
;
var a = y1((v, l)=>{
    var g3 = {}.toString;
    l.exports = Array.isArray || function(r) {
        return g3.call(r) == "[object Array]";
    };
});
var n = i(a()), x = i(a()), { default: S , ...b } = x, h = (n.default ?? S) ?? b;
var y2 = Object.create;
var g1 = Object.defineProperty;
var z1 = Object.getOwnPropertyDescriptor;
var A2 = Object.getOwnPropertyNames;
var I1 = Object.getPrototypeOf, N1 = Object.prototype.hasOwnProperty;
var O1 = (n80)=>g1(n80, "__esModule", {
        value: !0
    })
;
var R = (n81, e49)=>()=>(e49 || n81((e49 = {
            exports: {}
        }).exports, e49), e49.exports)
;
var T = (n82, e50, s10, a4)=>{
    if (e50 && typeof e50 == "object" || typeof e50 == "function") for (let f of A2(e50))!N1.call(n82, f) && (s10 || f !== "default") && g1(n82, f, {
        get: ()=>e50[f]
        ,
        enumerable: !(a4 = z1(e50, f)) || a4.enumerable
    });
    return n82;
}, x1 = (n83, e51)=>T(O1(g1(n83 != null ? y2(I1(n83)) : {}, "default", !e51 && n83 && n83.__esModule ? {
        get: ()=>n83.default
        ,
        enumerable: !0
    } : {
        value: n83,
        enumerable: !0
    })), n83)
;
var v1 = R((C, d4)=>{
    function p10() {
        if (!(this instanceof p10)) return new p10;
    }
    (function(n84) {
        typeof d4 != "undefined" && (d4.exports = n84);
        var e = "listeners", s11 = {
            on: f,
            once: L,
            off: u,
            emit: w
        };
        a5(n84.prototype), n84.mixin = a5;
        function a5(t) {
            for(var o in s11)t[o] = s11[o];
            return t;
        }
        function f(t, o) {
            return c10(this, t).push(o), this;
        }
        function L(t, o) {
            var i76 = this;
            return r.originalListener = o, c10(i76, t).push(r), i76;
            function r() {
                u.call(i76, t, r), o.apply(this, arguments);
            }
        }
        function u(t, o) {
            var i77 = this, r;
            if (!arguments.length) delete i77[e];
            else if (o) {
                if (r = c10(i77, t, !0), r) {
                    if (r = r.filter(h4), !r.length) return u.call(i77, t);
                    i77[e][t] = r;
                }
            } else if (r = i77[e], r && (delete r[t], !Object.keys(r).length)) return u.call(i77);
            return i77;
            function h4(m2) {
                return m2 !== o && m2.originalListener !== o;
            }
        }
        function w(t, o) {
            var i78 = this, r = c10(i78, t, !0);
            if (!r) return !1;
            var h5 = arguments.length;
            if (h5 === 1) r.forEach(S3);
            else if (h5 === 2) r.forEach(b2);
            else {
                var m = Array.prototype.slice.call(arguments, 1);
                r.forEach(j2);
            }
            return !!r.length;
            function S3(l) {
                l.call(i78);
            }
            function b2(l) {
                l.call(i78, o);
            }
            function j2(l) {
                l.apply(i78, m);
            }
        }
        function c10(t, o, i79) {
            if (!(i79 && !t[e])) {
                var r = t[e] || (t[e] = {});
                return r[o] || (r[o] = []);
            }
        }
    })(p10);
});
var E = x1(v1()), $2 = x1(v1()), { mixin: D1  } = $2, { default: k2 , ...q1 } = $2, F1 = (E.default ?? k2) ?? q1;
var er = Object.create;
var S1 = Object.defineProperty;
var fr = Object.getOwnPropertyDescriptor;
var ar = Object.getOwnPropertyNames;
var sr = Object.getPrototypeOf, cr = Object.prototype.hasOwnProperty;
var yr1 = (c11)=>S1(c11, "__esModule", {
        value: !0
    })
;
var hr = (c12, s12)=>()=>(s12 || c12((s12 = {
            exports: {}
        }).exports, s12), s12.exports)
;
var vr1 = (c13, s13, g4, u)=>{
    if (s13 && typeof s13 == "object" || typeof s13 == "function") for (let v3 of ar(s13))!cr.call(c13, v3) && (g4 || v3 !== "default") && S1(c13, v3, {
        get: ()=>s13[v3]
        ,
        enumerable: !(u = fr(s13, v3)) || u.enumerable
    });
    return c13;
}, J1 = (c14, s14)=>vr1(yr1(S1(c14 != null ? er(sr(c14)) : {}, "default", !s14 && c14 && c14.__esModule ? {
        get: ()=>c14.default
        ,
        enumerable: !0
    } : {
        value: c14,
        enumerable: !0
    })), c14)
;
var F2 = hr((l)=>{
    var pr2, ur, Ar, Br1;
    (function(c15) {
        var s15 = "undefined", g5 = s15 !== typeof ut && ut, u = s15 !== typeof Uint8Array && Uint8Array, v4 = s15 !== typeof ArrayBuffer && ArrayBuffer, $4 = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ], Z = Array.isArray || b3, E3 = 4294967296, q3 = 16777216, I3;
        pr2 = N4("Uint64BE", !0, !0), ur = N4("Int64BE", !0, !1), Ar = N4("Uint64LE", !1, !0), Br1 = N4("Int64LE", !1, !1);
        function N4(f, r, e52) {
            var a6 = r ? 0 : 4, p11 = r ? 4 : 0, O = r ? 0 : 3, P = r ? 1 : 2, T = r ? 2 : 1, _ = r ? 3 : 0, x7 = r ? K2 : W, d5 = r ? Q2 : X1, A4 = m.prototype, k3 = "is" + f, D = "_" + k3;
            return A4.buffer = void 0, A4.offset = 0, A4[D] = !0, A4.toNumber = Y, A4.toString = ir, A4.toJSON = Y, A4.toArray = z3, g5 && (A4.toBuffer = C2), u && (A4.toArrayBuffer = G2), m[k3] = rr, c15[f] = m, m;
            function m(i80, t, n85, o) {
                return this instanceof m ? tr(this, i80, t, n85, o) : new m(i80, t, n85, o);
            }
            function rr(i81) {
                return !!(i81 && i81[D]);
            }
            function tr(i82, t, n86, o, y4) {
                if (u && v4 && (t instanceof v4 && (t = new u(t)), o instanceof v4 && (o = new u(o))), !t && !n86 && !o && !I3) {
                    i82.buffer = M($4, 0);
                    return;
                }
                if (!j3(t, n86)) {
                    var B = I3 || Array;
                    y4 = n86, o = t, n86 = 0, t = new B(8);
                }
                i82.buffer = t, i82.offset = n86 |= 0, s15 !== typeof o && (typeof o == "string" ? nr(t, n86, o, y4 || 10) : j3(o, y4) ? U(t, n86, o, y4) : typeof y4 == "number" ? (L(t, n86 + a6, o), L(t, n86 + p11, y4)) : o > 0 ? x7(t, n86, o) : o < 0 ? d5(t, n86, o) : U(t, n86, $4, 0));
            }
            function nr(i83, t, n87, o) {
                var y5 = 0, B = n87.length, w = 0, h6 = 0;
                n87[0] === "-" && y5++;
                for(var or = y5; y5 < B;){
                    var H1 = parseInt(n87[y5++], o);
                    if (!(H1 >= 0)) break;
                    h6 = h6 * o + H1, w = w * o + Math.floor(h6 / E3), h6 %= E3;
                }
                or && (w = ~w, h6 ? h6 = E3 - h6 : w++), L(i83, t + a6, w), L(i83, t + p11, h6);
            }
            function Y() {
                var i84 = this.buffer, t = this.offset, n88 = R2(i84, t + a6), o = R2(i84, t + p11);
                return e52 || (n88 |= 0), n88 ? n88 * E3 + o : o;
            }
            function ir(i85) {
                var t = this.buffer, n89 = this.offset, o = R2(t, n89 + a6), y6 = R2(t, n89 + p11), B = "", w = !e52 && o & 2147483648;
                for(w && (o = ~o, y6 = E3 - y6), i85 = i85 || 10;;){
                    var h7 = o % i85 * E3 + y6;
                    if (o = Math.floor(o / i85), y6 = Math.floor(h7 / i85), B = (h7 % i85).toString(i85) + B, !o && !y6) break;
                }
                return w && (B = "-" + B), B;
            }
            function L(i86, t, n90) {
                i86[t + _] = n90 & 255, n90 = n90 >> 8, i86[t + T] = n90 & 255, n90 = n90 >> 8, i86[t + P] = n90 & 255, n90 = n90 >> 8, i86[t + O] = n90 & 255;
            }
            function R2(i87, t) {
                return i87[t + O] * q3 + (i87[t + P] << 16) + (i87[t + T] << 8) + i87[t + _];
            }
        }
        function z3(f) {
            var r = this.buffer, e53 = this.offset;
            return I3 = null, f !== !1 && e53 === 0 && r.length === 8 && Z(r) ? r : M(r, e53);
        }
        function C2(f) {
            var r = this.buffer, e54 = this.offset;
            if (I3 = g5, f !== !1 && e54 === 0 && r.length === 8 && ut.isBuffer(r)) return r;
            var a7 = new g5(8);
            return U(a7, 0, r, e54), a7;
        }
        function G2(f) {
            var r = this.buffer, e55 = this.offset, a8 = r.buffer;
            if (I3 = u, f !== !1 && e55 === 0 && a8 instanceof v4 && a8.byteLength === 8) return a8;
            var p12 = new u(8);
            return U(p12, 0, r, e55), p12.buffer;
        }
        function j3(f, r) {
            var e56 = f && f.length;
            return r |= 0, e56 && r + 8 <= e56 && typeof f[r] != "string";
        }
        function U(f, r, e57, a9) {
            r |= 0, a9 |= 0;
            for(var p13 = 0; p13 < 8; p13++)f[r++] = e57[a9++] & 255;
        }
        function M(f, r) {
            return Array.prototype.slice.call(f, r, r + 8);
        }
        function K2(f, r, e58) {
            for(var a10 = r + 8; a10 > r;)f[--a10] = e58 & 255, e58 /= 256;
        }
        function Q2(f, r, e59) {
            var a11 = r + 8;
            for(e59++; a11 > r;)f[--a11] = -e59 & 255 ^ 255, e59 /= 256;
        }
        function W(f, r, e60) {
            for(var a12 = r + 8; r < a12;)f[r++] = e60 & 255, e60 /= 256;
        }
        function X1(f, r, e61) {
            var a13 = r + 8;
            for(e61++; r < a13;)f[r++] = -e61 & 255 ^ 255, e61 /= 256;
        }
        function b3(f) {
            return !!f && Object.prototype.toString.call(f) == "[object Array]";
        }
    })(typeof l == "object" && typeof l.nodeName != "string" ? l : l || {});
});
var V = J1(F2()), wr1 = J1(F2()), { default: Er1 , ...mr } = wr1, lr = (V.default ?? Er1) ?? mr;
var Dt = Object.create;
var lr1 = Object.defineProperty;
var St = Object.getOwnPropertyDescriptor;
var Tt = Object.getOwnPropertyNames;
var Ct = Object.getPrototypeOf, Nt = Object.prototype.hasOwnProperty;
var Mt = (r)=>lr1(r, "__esModule", {
        value: !0
    })
;
((r)=>typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(r, {
        get: (e62, t)=>(typeof require != "undefined" ? require : e62)[t]
    }) : r
)(function(r) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + r + '" is not supported');
});
var x2 = (r, e63)=>()=>(e63 || r((e63 = {
            exports: {}
        }).exports, e63), e63.exports)
;
var Ot = (r, e64, t, n91)=>{
    if (e64 && typeof e64 == "object" || typeof e64 == "function") for (let i88 of Tt(e64))!Nt.call(r, i88) && (t || i88 !== "default") && lr1(r, i88, {
        get: ()=>e64[i88]
        ,
        enumerable: !(n91 = St(e64, i88)) || n91.enumerable
    });
    return r;
}, Hr = (r, e65)=>Ot(Mt(lr1(r != null ? Dt(Ct(r)) : {}, "default", !e65 && r && r.__esModule ? {
        get: ()=>r.default
        ,
        enumerable: !0
    } : {
        value: r,
        enumerable: !0
    })), r)
;
var Gr = x2((Br2, $r)=>{
    $r.exports = Er2(typeof ut != "undefined" && ut) || Er2(Br2.Buffer) || Er2(typeof window != "undefined" && window.Buffer) || Br2.Buffer;
    function Er2(r) {
        return r && r.isBuffer && r;
    }
});
var Jr = x2((M, Zr)=>{
    var N5 = E1(), M = Zr.exports = Xr(0);
    M.alloc = Xr;
    M.concat = N5.concat;
    M.from = Yt;
    function Xr(r) {
        return new Array(r);
    }
    function Yt(r) {
        if (!N5.isBuffer(r) && N5.isView(r)) r = N5.Uint8Array.from(r);
        else if (N5.isArrayBuffer(r)) r = new Uint8Array(r);
        else {
            if (typeof r == "string") return N5.from.call(M, r);
            if (typeof r == "number") throw new TypeError('"value" argument must not be a number');
        }
        return Array.prototype.slice.call(r);
    }
});
var re = x2((Y, Qr)=>{
    var k4 = E1(), O3 = k4.global, Y = Qr.exports = k4.hasBuffer ? Kr(0) : [];
    Y.alloc = k4.hasBuffer && O3.alloc || Kr;
    Y.concat = k4.concat;
    Y.from = Vt;
    function Kr(r) {
        return new O3(r);
    }
    function Vt(r) {
        if (!k4.isBuffer(r) && k4.isView(r)) r = k4.Uint8Array.from(r);
        else if (k4.isArrayBuffer(r)) r = new Uint8Array(r);
        else {
            if (typeof r == "string") return k4.from.call(Y, r);
            if (typeof r == "number") throw new TypeError('"value" argument must not be a number');
        }
        return O3.from && O3.from.length !== 1 ? O3.from(r) : new O3(r);
    }
});
var ne = x2((V2, te)=>{
    var ur = E1(), V2 = te.exports = ur.hasArrayBuffer ? ee(0) : [];
    V2.alloc = ee;
    V2.concat = ur.concat;
    V2.from = jt;
    function ee(r) {
        return new Uint8Array(r);
    }
    function jt(r) {
        if (ur.isView(r)) {
            var e66 = r.byteOffset, t = r.byteLength;
            r = r.buffer, r.byteLength !== t && (r.slice ? r = r.slice(e66, e66 + t) : (r = new Uint8Array(r), r.byteLength !== t && (r = Array.prototype.slice.call(r, e66, e66 + t))));
        } else {
            if (typeof r == "string") return ur.from.call(V2, r);
            if (typeof r == "number") throw new TypeError('"value" argument must not be a number');
        }
        return new Uint8Array(r);
    }
});
var ie = x2((or)=>{
    or.copy = zt;
    or.toString = Wt;
    or.write = Lt;
    function Lt(r, e67) {
        for(var t = this, n92 = e67 || (e67 |= 0), i89 = r.length, f = 0, o = 0; o < i89;)f = r.charCodeAt(o++), f < 128 ? t[n92++] = f : f < 2048 ? (t[n92++] = 192 | f >>> 6, t[n92++] = 128 | f & 63) : f < 55296 || f > 57343 ? (t[n92++] = 224 | f >>> 12, t[n92++] = 128 | f >>> 6 & 63, t[n92++] = 128 | f & 63) : (f = (f - 55296 << 10 | r.charCodeAt(o++) - 56320) + 65536, t[n92++] = 240 | f >>> 18, t[n92++] = 128 | f >>> 12 & 63, t[n92++] = 128 | f >>> 6 & 63, t[n92++] = 128 | f & 63);
        return n92 - e67;
    }
    function Wt(r, e68, t) {
        var n93 = this, i90 = e68 | 0;
        t || (t = n93.length);
        for(var f = "", o = 0; i90 < t;){
            if (o = n93[i90++], o < 128) {
                f += String.fromCharCode(o);
                continue;
            }
            (o & 224) === 192 ? o = (o & 31) << 6 | n93[i90++] & 63 : (o & 240) === 224 ? o = (o & 15) << 12 | (n93[i90++] & 63) << 6 | n93[i90++] & 63 : (o & 248) === 240 && (o = (o & 7) << 18 | (n93[i90++] & 63) << 12 | (n93[i90++] & 63) << 6 | n93[i90++] & 63), o >= 65536 ? (o -= 65536, f += String.fromCharCode((o >>> 10) + 55296, (o & 1023) + 56320)) : f += String.fromCharCode(o);
        }
        return f;
    }
    function zt(r, e69, t, n94) {
        var i91;
        t || (t = 0), !n94 && n94 !== 0 && (n94 = this.length), e69 || (e69 = 0);
        var f = n94 - t;
        if (r === this && t < e69 && e69 < n94) for(i91 = f - 1; i91 >= 0; i91--)r[i91 + e69] = this[i91 + t];
        else for(i91 = 0; i91 < f; i91++)r[i91 + e69] = this[i91 + t];
        return f;
    }
});
var cr1 = x2((X2)=>{
    var br = ie();
    X2.copy = oe;
    X2.slice = ce;
    X2.toString = Ht;
    X2.write = $t("write");
    var q4 = E1(), fe = q4.global, ae = q4.hasBuffer && "TYPED_ARRAY_SUPPORT" in fe, ue = ae && !fe.TYPED_ARRAY_SUPPORT;
    function oe(r, e70, t, n95) {
        var i92 = q4.isBuffer(this), f = q4.isBuffer(r);
        if (i92 && f) return this.copy(r, e70, t, n95);
        if (!ue && !i92 && !f && q4.isView(this) && q4.isView(r)) {
            var o = t || n95 != null ? ce.call(this, t, n95) : this;
            return r.set(o, e70), o.length;
        } else return br.copy.call(this, r, e70, t, n95);
    }
    function ce(r, e71) {
        var t = this.slice || !ue && this.subarray;
        if (t) return t.call(this, r, e71);
        var n96 = q4.alloc.call(this, e71 - r);
        return oe.call(this, n96, 0, r, e71), n96;
    }
    function Ht(r, e, t) {
        var n97 = !ae && q4.isBuffer(this) ? this.toString : br.toString;
        return n97.apply(this, arguments);
    }
    function $t(r) {
        return e72;
        function e72() {
            var t = this[r] || br[r];
            return t.apply(this, arguments);
        }
    }
});
var E1 = x2((y7)=>{
    var wr2 = y7.global = Gr(), se = y7.hasBuffer = wr2 && !!wr2.isBuffer, Ur = y7.hasArrayBuffer = typeof ArrayBuffer != "undefined", Gt = y7.isArray = h;
    y7.isArrayBuffer = Ur ? rn : kr;
    var Xt = y7.isBuffer = se ? wr2.isBuffer : kr, Zt = y7.isView = Ur ? ArrayBuffer.isView || ve("ArrayBuffer", "buffer") : kr;
    y7.alloc = Ar;
    y7.concat = Kt;
    y7.from = Jt;
    var xe = y7.Array = Jr(), de = y7.Buffer = re(), pe = y7.Uint8Array = ne(), Fr = y7.prototype = cr1();
    function Jt(r) {
        return typeof r == "string" ? en.call(this, r) : he(this).from(r);
    }
    function Ar(r) {
        return he(this).alloc(r);
    }
    function Kt(r, e73) {
        e73 || (e73 = 0, Array.prototype.forEach.call(r, f));
        var t = this !== y7 && this || r[0], n98 = Ar.call(t, e73), i93 = 0;
        return Array.prototype.forEach.call(r, o), n98;
        function f(h8) {
            e73 += h8.length;
        }
        function o(h9) {
            i93 += Fr.copy.call(h9, n98, i93);
        }
    }
    var Qt = ve("ArrayBuffer");
    function rn(r) {
        return r instanceof ArrayBuffer || Qt(r);
    }
    function en(r) {
        var e74 = r.length * 3, t = Ar.call(this, e74), n99 = Fr.write.call(t, r);
        return e74 !== n99 && (t = Fr.slice.call(t, 0, n99)), t;
    }
    function he(r) {
        return Xt(r) ? de : Zt(r) ? pe : Gt(r) ? xe : se ? de : Ur ? pe : xe;
    }
    function kr() {
        return !1;
    }
    function ve(r, e75) {
        return r = "[object " + r + "]", function(t) {
            return t != null && ({}).toString.call(e75 ? t[e75] : t) === r;
        };
    }
});
var sr1 = x2((ye)=>{
    ye.ExtBuffer = mr2;
    var tn = E1();
    function mr2(r, e76) {
        if (!(this instanceof mr2)) return new mr2(r, e76);
        this.buffer = tn.from(r), this.type = e76;
    }
});
var Ee = x2((le)=>{
    le.setExtPackers = an;
    var xr1 = E1(), nn = xr1.global, U = xr1.Uint8Array.from, gr1, fn = {
        name: 1,
        message: 1,
        stack: 1,
        columnNumber: 1,
        fileName: 1,
        lineNumber: 1
    };
    function an(r) {
        r.addExtPacker(14, Error, [
            I4,
            b4
        ]), r.addExtPacker(1, EvalError, [
            I4,
            b4
        ]), r.addExtPacker(2, RangeError, [
            I4,
            b4
        ]), r.addExtPacker(3, ReferenceError, [
            I4,
            b4
        ]), r.addExtPacker(4, SyntaxError, [
            I4,
            b4
        ]), r.addExtPacker(5, TypeError, [
            I4,
            b4
        ]), r.addExtPacker(6, URIError, [
            I4,
            b4
        ]), r.addExtPacker(10, RegExp, [
            un,
            b4
        ]), r.addExtPacker(11, Boolean, [
            qr,
            b4
        ]), r.addExtPacker(12, String, [
            qr,
            b4
        ]), r.addExtPacker(13, Date, [
            Number,
            b4
        ]), r.addExtPacker(15, Number, [
            qr,
            b4
        ]), typeof Uint8Array != "undefined" && (r.addExtPacker(17, Int8Array, U), r.addExtPacker(18, Uint8Array, U), r.addExtPacker(19, Int16Array, U), r.addExtPacker(20, Uint16Array, U), r.addExtPacker(21, Int32Array, U), r.addExtPacker(22, Uint32Array, U), r.addExtPacker(23, Float32Array, U), typeof Float64Array != "undefined" && r.addExtPacker(24, Float64Array, U), typeof Uint8ClampedArray != "undefined" && r.addExtPacker(25, Uint8ClampedArray, U), r.addExtPacker(26, ArrayBuffer, U), r.addExtPacker(29, DataView, U)), xr1.hasBuffer && r.addExtPacker(27, nn, xr1.from);
    }
    function b4(r) {
        return gr1 || (gr1 = Pr().encode), gr1(r);
    }
    function qr(r) {
        return r.valueOf();
    }
    function un(r) {
        r = RegExp.prototype.toString.call(r).split("/"), r.shift();
        var e77 = [
            r.pop()
        ];
        return e77.unshift(r.join("/")), e77;
    }
    function I4(r) {
        var e78 = {};
        for(var t in fn)e78[t] = r[t];
        return e78;
    }
});
var _r = x2((Be)=>{
    var on = Be.uint8 = new Array(256);
    for(Z = 0; Z <= 255; Z++)on[Z] = cn(Z);
    var Z;
    function cn(r) {
        return function(e79) {
            var t = e79.reserve(1);
            e79.buffer[t] = r;
        };
    }
});
var _e = x2((Pe)=>{
    var be = P, we = lr, sn = we.Uint64BE, xn = we.Int64BE, Ue = _r().uint8, dr1 = E1(), p14 = dr1.global, dn = dr1.hasBuffer && "TYPED_ARRAY_SUPPORT" in p14, pn = dn && !p14.TYPED_ARRAY_SUPPORT, Fe = dr1.hasBuffer && p14.prototype || {};
    Pe.getWriteToken = hn;
    function hn(r) {
        return r && r.uint8array ? vn() : pn || dr1.hasBuffer && r && r.safe ? yn() : Ae();
    }
    function vn() {
        var r = Ae();
        return r[202] = s16(202, 4, ge), r[203] = s16(203, 8, qe), r;
    }
    function Ae() {
        var r = Ue.slice();
        return r[196] = J2(196), r[197] = R3(197), r[198] = D3(198), r[199] = J2(199), r[200] = R3(200), r[201] = D3(201), r[202] = s16(202, 4, Fe.writeFloatBE || ge, !0), r[203] = s16(203, 8, Fe.writeDoubleBE || qe, !0), r[204] = J2(204), r[205] = R3(205), r[206] = D3(206), r[207] = s16(207, 8, ke), r[208] = J2(208), r[209] = R3(209), r[210] = D3(210), r[211] = s16(211, 8, me), r[217] = J2(217), r[218] = R3(218), r[219] = D3(219), r[220] = R3(220), r[221] = D3(221), r[222] = R3(222), r[223] = D3(223), r;
    }
    function yn() {
        var r = Ue.slice();
        return r[196] = s16(196, 1, p14.prototype.writeUInt8), r[197] = s16(197, 2, p14.prototype.writeUInt16BE), r[198] = s16(198, 4, p14.prototype.writeUInt32BE), r[199] = s16(199, 1, p14.prototype.writeUInt8), r[200] = s16(200, 2, p14.prototype.writeUInt16BE), r[201] = s16(201, 4, p14.prototype.writeUInt32BE), r[202] = s16(202, 4, p14.prototype.writeFloatBE), r[203] = s16(203, 8, p14.prototype.writeDoubleBE), r[204] = s16(204, 1, p14.prototype.writeUInt8), r[205] = s16(205, 2, p14.prototype.writeUInt16BE), r[206] = s16(206, 4, p14.prototype.writeUInt32BE), r[207] = s16(207, 8, ke), r[208] = s16(208, 1, p14.prototype.writeInt8), r[209] = s16(209, 2, p14.prototype.writeInt16BE), r[210] = s16(210, 4, p14.prototype.writeInt32BE), r[211] = s16(211, 8, me), r[217] = s16(217, 1, p14.prototype.writeUInt8), r[218] = s16(218, 2, p14.prototype.writeUInt16BE), r[219] = s16(219, 4, p14.prototype.writeUInt32BE), r[220] = s16(220, 2, p14.prototype.writeUInt16BE), r[221] = s16(221, 4, p14.prototype.writeUInt32BE), r[222] = s16(222, 2, p14.prototype.writeUInt16BE), r[223] = s16(223, 4, p14.prototype.writeUInt32BE), r;
    }
    function J2(r) {
        return function(e80, t) {
            var n = e80.reserve(2), i94 = e80.buffer;
            i94[n++] = r, i94[n] = t;
        };
    }
    function R3(r) {
        return function(e81, t) {
            var n = e81.reserve(3), i95 = e81.buffer;
            i95[n++] = r, i95[n++] = t >>> 8, i95[n] = t;
        };
    }
    function D3(r) {
        return function(e82, t) {
            var n = e82.reserve(5), i96 = e82.buffer;
            i96[n++] = r, i96[n++] = t >>> 24, i96[n++] = t >>> 16, i96[n++] = t >>> 8, i96[n] = t;
        };
    }
    function s16(r, e83, t, n100) {
        return function(i97, f) {
            var o = i97.reserve(e83 + 1);
            i97.buffer[o++] = r, t.call(i97.buffer, f, o, n100);
        };
    }
    function ke(r, e84) {
        new sn(this, e84, r);
    }
    function me(r, e85) {
        new xn(this, e85, r);
    }
    function ge(r, e86) {
        be.write(this, r, e86, !1, 23, 4);
    }
    function qe(r, e87) {
        be.write(this, r, e87, !1, 52, 8);
    }
});
var Te = x2((Se)=>{
    var ln = h, Ie = lr, En = Ie.Uint64BE, Bn = Ie.Int64BE, Re = E1(), De = cr1(), bn = _e(), wn = _r().uint8, Un = sr1().ExtBuffer, Fn = typeof Uint8Array != "undefined", An = typeof Map != "undefined", j4 = [];
    j4[1] = 212;
    j4[2] = 213;
    j4[4] = 214;
    j4[8] = 215;
    j4[16] = 216;
    Se.getWriteType = kn;
    function kn(r) {
        var e88 = bn.getWriteToken(r), t = r && r.useraw, n101 = Fn && r && r.binarraybuffer, i98 = n101 ? Re.isArrayBuffer : Re.isBuffer, f = n101 ? mt : Wr, o = An && r && r.usemap, h10 = o ? qt : zr, tr = {
            boolean: nr,
            function: ir,
            number: Et,
            object: t ? At : Lr,
            string: Ft(t ? Ut : wt),
            symbol: ir,
            undefined: ir
        };
        return tr;
        function nr(a14, u) {
            var c = u ? 195 : 194;
            e88[c](a14, u);
        }
        function Et(a15, u) {
            var c16 = u | 0, d6;
            if (u !== c16) {
                d6 = 203, e88[d6](a15, u);
                return;
            } else -32 <= c16 && c16 <= 127 ? d6 = c16 & 255 : 0 <= c16 ? d6 = c16 <= 255 ? 204 : c16 <= 65535 ? 205 : 206 : d6 = -128 <= c16 ? 208 : -32768 <= c16 ? 209 : 210;
            e88[d6](a15, c16);
        }
        function Bt(a16, u) {
            var c = 207;
            e88[c](a16, u.toArray());
        }
        function bt(a17, u) {
            var c = 211;
            e88[c](a17, u.toArray());
        }
        function wt(a18) {
            return a18 < 32 ? 1 : a18 <= 255 ? 2 : a18 <= 65535 ? 3 : 5;
        }
        function Ut(a19) {
            return a19 < 32 ? 1 : a19 <= 65535 ? 3 : 5;
        }
        function Ft(a20) {
            return u;
            function u(c17, d7) {
                var v5 = d7.length, F5 = 5 + v5 * 3;
                c17.offset = c17.reserve(F5);
                var g6 = c17.buffer, fr2 = a20(v5), ar2 = c17.offset + fr2;
                v5 = De.write.call(g6, d7, ar2);
                var G3 = a20(v5);
                if (fr2 !== G3) {
                    var _t = ar2 + G3 - fr2, It = ar2 + v5;
                    De.copy.call(g6, g6, _t, ar2, It);
                }
                var Rt = G3 === 1 ? 160 + v5 : G3 <= 3 ? 215 + G3 : 219;
                e88[Rt](c17, v5), c17.offset += v5;
            }
        }
        function Lr(a21, u) {
            if (u === null) return ir(a21, u);
            if (i98(u)) return f(a21, u);
            if (ln(u)) return kt(a21, u);
            if (En.isUint64BE(u)) return Bt(a21, u);
            if (Bn.isInt64BE(u)) return bt(a21, u);
            var c18 = a21.codec.getExtPacker(u);
            if (c18 && (u = c18(u)), u instanceof Un) return gt(a21, u);
            h10(a21, u);
        }
        function At(a22, u) {
            if (i98(u)) return Pt(a22, u);
            Lr(a22, u);
        }
        function ir(a23, u) {
            var c = 192;
            e88[c](a23, u);
        }
        function kt(a24, u) {
            var c19 = u.length, d = c19 < 16 ? 144 + c19 : c19 <= 65535 ? 220 : 221;
            e88[d](a24, c19);
            for(var v6 = a24.codec.encode, F6 = 0; F6 < c19; F6++)v6(a24, u[F6]);
        }
        function Wr(a25, u) {
            var c20 = u.length, d = c20 < 255 ? 196 : c20 <= 65535 ? 197 : 198;
            e88[d](a25, c20), a25.send(u);
        }
        function mt(a26, u) {
            Wr(a26, new Uint8Array(u));
        }
        function gt(a27, u) {
            var c21 = u.buffer, d8 = c21.length, v = j4[d8] || (d8 < 255 ? 199 : d8 <= 65535 ? 200 : 201);
            e88[v](a27, d8), wn[u.type](a27), a27.send(c21);
        }
        function zr(a28, u) {
            var c22 = Object.keys(u), d9 = c22.length, v = d9 < 16 ? 128 + d9 : d9 <= 65535 ? 222 : 223;
            e88[v](a28, d9);
            var F7 = a28.codec.encode;
            c22.forEach(function(g7) {
                F7(a28, g7), F7(a28, u[g7]);
            });
        }
        function qt(a29, u) {
            if (!(u instanceof Map)) return zr(a29, u);
            var c23 = u.size, d = c23 < 16 ? 128 + c23 : c23 <= 65535 ? 222 : 223;
            e88[d](a29, c23);
            var v7 = a29.codec.encode;
            u.forEach(function(F8, g8, fr) {
                v7(a29, g8), v7(a29, F8);
            });
        }
        function Pt(a30, u) {
            var c24 = u.length, d = c24 < 32 ? 160 + c24 : c24 <= 65535 ? 218 : 219;
            e88[d](a30, c24), a30.send(u);
        }
    }
});
var Q = x2((K3)=>{
    var mn = h;
    K3.createCodec = Ce;
    K3.install = qn;
    K3.filter = In;
    var gn = E1();
    function L(r) {
        if (!(this instanceof L)) return new L(r);
        this.options = r, this.init();
    }
    L.prototype.init = function() {
        var r = this.options;
        return r && r.uint8array && (this.bufferish = gn.Uint8Array), this;
    };
    function qn(r) {
        for(var e in r)L.prototype[e] = Pn(L.prototype[e], r[e]);
    }
    function Pn(r, e89) {
        return r && e89 ? t : r || e89;
        function t() {
            return r.apply(this, arguments), e89.apply(this, arguments);
        }
    }
    function _n(r) {
        return r = r.slice(), function(t) {
            return r.reduce(e90, t);
        };
        function e90(t, n102) {
            return n102(t);
        }
    }
    function In(r) {
        return mn(r) ? _n(r) : r;
    }
    function Ce(r) {
        return new L(r);
    }
    K3.preset = Ce({
        preset: !0
    });
});
var pr = x2((Me)=>{
    var Rn = sr1().ExtBuffer, Dn = Ee(), Sn = Te(), Ir = Q();
    Ir.install({
        addExtPacker: Cn,
        getExtPacker: Nn,
        init: Ne
    });
    Me.preset = Ne.call(Ir.preset);
    function Tn(r) {
        var e91 = Sn.getWriteType(r);
        return t;
        function t(n103, i99) {
            var f = e91[typeof i99];
            if (!f) throw new Error('Unsupported type "' + typeof i99 + '": ' + i99);
            f(n103, i99);
        }
    }
    function Ne() {
        var r = this.options;
        return this.encode = Tn(r), r && r.preset && Dn.setExtPackers(this), this;
    }
    function Cn(r, e92, t) {
        t = Ir.filter(t);
        var n104 = e92.name;
        if (n104 && n104 !== "Object") {
            var i100 = this.extPackers || (this.extPackers = {});
            i100[n104] = o;
        } else {
            var f = this.extEncoderList || (this.extEncoderList = []);
            f.unshift([
                e92,
                o
            ]);
        }
        function o(h11) {
            return t && (h11 = t(h11)), new Rn(h11, r);
        }
    }
    function Nn(r) {
        var e93 = this.extPackers || (this.extPackers = {}), t = r.constructor, n105 = t && t.name && e93[t.name];
        if (n105) return n105;
        for(var i101 = this.extEncoderList || (this.extEncoderList = []), f = i101.length, o = 0; o < f; o++){
            var h12 = i101[o];
            if (t === h12[0]) return h12[1];
        }
    }
});
var Dr = x2((Rr)=>{
    Rr.FlexDecoder = W;
    Rr.FlexEncoder = z4;
    var rr = E1(), Mn = 2048, On = 65536, Oe = "BUFFER_SHORTAGE";
    function W() {
        if (!(this instanceof W)) return new W;
    }
    function z4() {
        if (!(this instanceof z4)) return new z4;
    }
    W.mixin = je(Yn());
    W.mixin(W.prototype);
    z4.mixin = je(Vn());
    z4.mixin(z4.prototype);
    function Yn() {
        return {
            bufferish: rr,
            write: r,
            fetch: Ln,
            flush: e94,
            push: Ve,
            pull: Wn,
            read: Ye,
            reserve: t,
            offset: 0
        };
        function r(n106) {
            var i102 = this.offset ? rr.prototype.slice.call(this.buffer, this.offset) : this.buffer;
            this.buffer = i102 ? n106 ? this.bufferish.concat([
                i102,
                n106
            ]) : i102 : n106, this.offset = 0;
        }
        function e94() {
            for(; this.offset < this.buffer.length;){
                var n107 = this.offset, i103;
                try {
                    i103 = this.fetch();
                } catch (f) {
                    if (f && f.message != Oe) throw f;
                    this.offset = n107;
                    break;
                }
                this.push(i103);
            }
        }
        function t(n108) {
            var i104 = this.offset, f = i104 + n108;
            if (f > this.buffer.length) throw new Error(Oe);
            return this.offset = f, i104;
        }
    }
    function Vn() {
        return {
            bufferish: rr,
            write: jn,
            fetch: r,
            flush: e95,
            push: Ve,
            pull: t,
            read: Ye,
            reserve: n109,
            send: i105,
            maxBufferSize: On,
            minBufferSize: Mn,
            offset: 0,
            start: 0
        };
        function r() {
            var f = this.start;
            if (f < this.offset) {
                var o = this.start = this.offset;
                return rr.prototype.slice.call(this.buffer, f, o);
            }
        }
        function e95() {
            for(; this.start < this.offset;){
                var f = this.fetch();
                f && this.push(f);
            }
        }
        function t() {
            var f = this.buffers || (this.buffers = []), o = f.length > 1 ? this.bufferish.concat(f) : f[0];
            return f.length = 0, o;
        }
        function n109(f) {
            var o = f | 0;
            if (this.buffer) {
                var h13 = this.buffer.length, tr = this.offset | 0, nr = tr + o;
                if (nr < h13) return this.offset = nr, tr;
                this.flush(), f = Math.max(f, Math.min(h13 * 2, this.maxBufferSize));
            }
            return f = Math.max(f, this.minBufferSize), this.buffer = this.bufferish.alloc(f), this.start = 0, this.offset = o, 0;
        }
        function i105(f) {
            var o = f.length;
            if (o > this.minBufferSize) this.flush(), this.push(f);
            else {
                var h14 = this.reserve(o);
                rr.prototype.copy.call(f, this.buffer, h14);
            }
        }
    }
    function jn() {
        throw new Error("method not implemented: write()");
    }
    function Ln() {
        throw new Error("method not implemented: fetch()");
    }
    function Ye() {
        var r = this.buffers && this.buffers.length;
        return r ? (this.flush(), this.pull()) : this.fetch();
    }
    function Ve(r) {
        var e96 = this.buffers || (this.buffers = []);
        e96.push(r);
    }
    function Wn() {
        var r = this.buffers || (this.buffers = []);
        return r.shift();
    }
    function je(r) {
        return e97;
        function e97(t) {
            for(var n in r)t[n] = r[n];
            return t;
        }
    }
});
var Sr = x2((Le)=>{
    Le.EncodeBuffer = H2;
    var zn = pr().preset, Hn = Dr().FlexEncoder;
    Hn.mixin(H2.prototype);
    function H2(r) {
        if (!(this instanceof H2)) return new H2(r);
        if (r && (this.options = r, r.codec)) {
            var e98 = this.codec = r.codec;
            e98.bufferish && (this.bufferish = e98.bufferish);
        }
    }
    H2.prototype.codec = zn;
    H2.prototype.write = function(r) {
        this.codec.encode(this, r);
    };
});
var Pr = x2((We)=>{
    We.encode = Gn;
    var $n = Sr().EncodeBuffer;
    function Gn(r, e99) {
        var t = new $n(e99);
        return t.write(r), t.read();
    }
});
var $e = x2((He)=>{
    He.setExtUnpackers = Jn;
    var ze = E1(), Xn = ze.global, Tr, Zn = {
        name: 1,
        message: 1,
        stack: 1,
        columnNumber: 1,
        fileName: 1,
        lineNumber: 1
    };
    function Jn(r) {
        r.addExtUnpacker(14, [
            w,
            S4(Error)
        ]), r.addExtUnpacker(1, [
            w,
            S4(EvalError)
        ]), r.addExtUnpacker(2, [
            w,
            S4(RangeError)
        ]), r.addExtUnpacker(3, [
            w,
            S4(ReferenceError)
        ]), r.addExtUnpacker(4, [
            w,
            S4(SyntaxError)
        ]), r.addExtUnpacker(5, [
            w,
            S4(TypeError)
        ]), r.addExtUnpacker(6, [
            w,
            S4(URIError)
        ]), r.addExtUnpacker(10, [
            w,
            Kn
        ]), r.addExtUnpacker(11, [
            w,
            l(Boolean)
        ]), r.addExtUnpacker(12, [
            w,
            l(String)
        ]), r.addExtUnpacker(13, [
            w,
            l(Date)
        ]), r.addExtUnpacker(15, [
            w,
            l(Number)
        ]), typeof Uint8Array != "undefined" && (r.addExtUnpacker(17, l(Int8Array)), r.addExtUnpacker(18, l(Uint8Array)), r.addExtUnpacker(19, [
            P2,
            l(Int16Array)
        ]), r.addExtUnpacker(20, [
            P2,
            l(Uint16Array)
        ]), r.addExtUnpacker(21, [
            P2,
            l(Int32Array)
        ]), r.addExtUnpacker(22, [
            P2,
            l(Uint32Array)
        ]), r.addExtUnpacker(23, [
            P2,
            l(Float32Array)
        ]), typeof Float64Array != "undefined" && r.addExtUnpacker(24, [
            P2,
            l(Float64Array)
        ]), typeof Uint8ClampedArray != "undefined" && r.addExtUnpacker(25, l(Uint8ClampedArray)), r.addExtUnpacker(26, P2), r.addExtUnpacker(29, [
            P2,
            l(DataView)
        ])), ze.hasBuffer && r.addExtUnpacker(27, l(Xn));
    }
    function w(r) {
        return Tr || (Tr = Cr().decode), Tr(r);
    }
    function Kn(r) {
        return RegExp.apply(null, r);
    }
    function S4(r) {
        return function(e100) {
            var t = new r;
            for(var n in Zn)t[n] = e100[n];
            return t;
        };
    }
    function l(r) {
        return function(e101) {
            return new r(e101);
        };
    }
    function P2(r) {
        return new Uint8Array(r).buffer;
    }
});
var Or = x2((Mr)=>{
    var Ge = P, Xe = lr, Ze = Xe.Uint64BE, Je = Xe.Int64BE;
    Mr.getReadFormat = ei;
    Mr.readUint8 = Ke;
    var Nr = E1(), hr2 = cr1(), Qn = typeof Map != "undefined", ri = !0;
    function ei(r) {
        var e102 = Nr.hasArrayBuffer && r && r.binarraybuffer, t = r && r.int64, n110 = Qn && r && r.usemap, i106 = {
            map: n110 ? ni : ti,
            array: ii,
            str: fi,
            bin: e102 ? ui : ai,
            ext: oi,
            uint8: Ke,
            uint16: si,
            uint32: di,
            uint64: vr2(8, t ? yi : hi),
            int8: ci,
            int16: xi,
            int32: pi,
            int64: vr2(8, t ? li : vi),
            float32: vr2(4, Ei),
            float64: vr2(8, Bi)
        };
        return i106;
    }
    function ti(r, e103) {
        var t = {}, n111, i107 = new Array(e103), f = new Array(e103), o = r.codec.decode;
        for(n111 = 0; n111 < e103; n111++)i107[n111] = o(r), f[n111] = o(r);
        for(n111 = 0; n111 < e103; n111++)t[i107[n111]] = f[n111];
        return t;
    }
    function ni(r, e104) {
        var t = new Map, n112, i108 = new Array(e104), f = new Array(e104), o = r.codec.decode;
        for(n112 = 0; n112 < e104; n112++)i108[n112] = o(r), f[n112] = o(r);
        for(n112 = 0; n112 < e104; n112++)t.set(i108[n112], f[n112]);
        return t;
    }
    function ii(r, e105) {
        for(var t = new Array(e105), n113 = r.codec.decode, i109 = 0; i109 < e105; i109++)t[i109] = n113(r);
        return t;
    }
    function fi(r, e106) {
        var t = r.reserve(e106), n114 = t + e106;
        return hr2.toString.call(r.buffer, "utf-8", t, n114);
    }
    function ai(r, e107) {
        var t = r.reserve(e107), n115 = t + e107, i110 = hr2.slice.call(r.buffer, t, n115);
        return Nr.from(i110);
    }
    function ui(r, e108) {
        var t = r.reserve(e108), n116 = t + e108, i111 = hr2.slice.call(r.buffer, t, n116);
        return Nr.Uint8Array.from(i111).buffer;
    }
    function oi(r, e109) {
        var t = r.reserve(e109 + 1), n117 = r.buffer[t++], i112 = t + e109, f = r.codec.getExtUnpacker(n117);
        if (!f) throw new Error("Invalid ext type: " + (n117 && "0x" + n117.toString(16)));
        var o = hr2.slice.call(r.buffer, t, i112);
        return f(o);
    }
    function Ke(r) {
        var e = r.reserve(1);
        return r.buffer[e];
    }
    function ci(r) {
        var e = r.reserve(1), t = r.buffer[e];
        return t & 128 ? t - 256 : t;
    }
    function si(r) {
        var e = r.reserve(2), t = r.buffer;
        return t[e++] << 8 | t[e];
    }
    function xi(r) {
        var e = r.reserve(2), t = r.buffer, n118 = t[e++] << 8 | t[e];
        return n118 & 32768 ? n118 - 65536 : n118;
    }
    function di(r) {
        var e = r.reserve(4), t = r.buffer;
        return t[e++] * 16777216 + (t[e++] << 16) + (t[e++] << 8) + t[e];
    }
    function pi(r) {
        var e = r.reserve(4), t = r.buffer;
        return t[e++] << 24 | t[e++] << 16 | t[e++] << 8 | t[e];
    }
    function vr2(r, e110) {
        return function(t) {
            var n119 = t.reserve(r);
            return e110.call(t.buffer, n119, ri);
        };
    }
    function hi(r) {
        return new Ze(this, r).toNumber();
    }
    function vi(r) {
        return new Je(this, r).toNumber();
    }
    function yi(r) {
        return new Ze(this, r);
    }
    function li(r) {
        return new Je(this, r);
    }
    function Ei(r) {
        return Ge.read(this, r, !1, 23, 4);
    }
    function Bi(r) {
        return Ge.read(this, r, !1, 52, 8);
    }
});
var et = x2((rt1)=>{
    var bi = Or();
    rt1.getReadToken = wi;
    function wi(r) {
        var e111 = bi.getReadFormat(r);
        return r && r.useraw ? Ui(e111) : Qe(e111);
    }
    function Qe(r) {
        var e112, t = new Array(256);
        for(e112 = 0; e112 <= 127; e112++)t[e112] = er2(e112);
        for(e112 = 128; e112 <= 143; e112++)t[e112] = m(e112 - 128, r.map);
        for(e112 = 144; e112 <= 159; e112++)t[e112] = m(e112 - 144, r.array);
        for(e112 = 160; e112 <= 191; e112++)t[e112] = m(e112 - 160, r.str);
        for(t[192] = er2(null), t[193] = null, t[194] = er2(!1), t[195] = er2(!0), t[196] = B(r.uint8, r.bin), t[197] = B(r.uint16, r.bin), t[198] = B(r.uint32, r.bin), t[199] = B(r.uint8, r.ext), t[200] = B(r.uint16, r.ext), t[201] = B(r.uint32, r.ext), t[202] = r.float32, t[203] = r.float64, t[204] = r.uint8, t[205] = r.uint16, t[206] = r.uint32, t[207] = r.uint64, t[208] = r.int8, t[209] = r.int16, t[210] = r.int32, t[211] = r.int64, t[212] = m(1, r.ext), t[213] = m(2, r.ext), t[214] = m(4, r.ext), t[215] = m(8, r.ext), t[216] = m(16, r.ext), t[217] = B(r.uint8, r.str), t[218] = B(r.uint16, r.str), t[219] = B(r.uint32, r.str), t[220] = B(r.uint16, r.array), t[221] = B(r.uint32, r.array), t[222] = B(r.uint16, r.map), t[223] = B(r.uint32, r.map), e112 = 224; e112 <= 255; e112++)t[e112] = er2(e112 - 256);
        return t;
    }
    function Ui(r) {
        var e113, t = Qe(r).slice();
        for(t[217] = t[196], t[218] = t[197], t[219] = t[198], e113 = 160; e113 <= 191; e113++)t[e113] = m(e113 - 160, r.bin);
        return t;
    }
    function er2(r) {
        return function() {
            return r;
        };
    }
    function B(r, e114) {
        return function(t) {
            var n120 = r(t);
            return e114(t, n120);
        };
    }
    function m(r, e115) {
        return function(t) {
            return e115(t, r);
        };
    }
});
var yr2 = x2((nt)=>{
    var Fi = sr1().ExtBuffer, Ai = $e(), ki = Or().readUint8, mi = et(), Yr = Q();
    Yr.install({
        addExtUnpacker: qi,
        getExtUnpacker: Pi,
        init: tt
    });
    nt.preset = tt.call(Yr.preset);
    function gi(r) {
        var e116 = mi.getReadToken(r);
        return t;
        function t(n121) {
            var i113 = ki(n121), f = e116[i113];
            if (!f) throw new Error("Invalid type: " + (i113 && "0x" + i113.toString(16)));
            return f(n121);
        }
    }
    function tt() {
        var r = this.options;
        return this.decode = gi(r), r && r.preset && Ai.setExtUnpackers(this), this;
    }
    function qi(r, e117) {
        var t = this.extUnpackers || (this.extUnpackers = []);
        t[r] = Yr.filter(e117);
    }
    function Pi(r) {
        var e118 = this.extUnpackers || (this.extUnpackers = []);
        return e118[r] || t;
        function t(n122) {
            return new Fi(n122, r);
        }
    }
});
var Vr = x2((it)=>{
    it.DecodeBuffer = $5;
    var _i = yr2().preset, Ii = Dr().FlexDecoder;
    Ii.mixin($5.prototype);
    function $5(r) {
        if (!(this instanceof $5)) return new $5(r);
        if (r && (this.options = r, r.codec)) {
            var e119 = this.codec = r.codec;
            e119.bufferish && (this.bufferish = e119.bufferish);
        }
    }
    $5.prototype.codec = _i;
    $5.prototype.fetch = function() {
        return this.codec.decode(this);
    };
});
var Cr = x2((ft1)=>{
    ft1.decode = Di;
    var Ri = Vr().DecodeBuffer;
    function Di(r, e120) {
        var t = new Ri(e120);
        return t.write(r), t.read();
    }
});
var ot = x2((ut1)=>{
    ut1.Encoder = T2;
    var Si = F1, at = Sr().EncodeBuffer;
    function T2(r) {
        if (!(this instanceof T2)) return new T2(r);
        at.call(this, r);
    }
    T2.prototype = new at;
    Si.mixin(T2.prototype);
    T2.prototype.encode = function(r) {
        this.write(r), this.emit("data", this.read());
    };
    T2.prototype.end = function(r) {
        arguments.length && this.encode(r), this.flush(), this.emit("end");
    };
});
var xt = x2((st)=>{
    st.Decoder = _;
    var Ti = F1, ct1 = Vr().DecodeBuffer;
    function _(r) {
        if (!(this instanceof _)) return new _(r);
        ct1.call(this, r);
    }
    _.prototype = new ct1;
    Ti.mixin(_.prototype);
    _.prototype.decode = function(r) {
        arguments.length && this.write(r), this.flush();
    };
    _.prototype.push = function(r) {
        this.emit("data", r);
    };
    _.prototype.end = function(r) {
        this.decode(r), this.emit("end");
    };
});
var pt = x2((dt)=>{
    yr2();
    pr();
    dt.createCodec = Q().createCodec;
});
var vt = x2((ht1)=>{
    yr2();
    pr();
    ht1.codec = {
        preset: Q().preset
    };
});
var jr = x2((C3)=>{
    C3.encode = Pr().encode;
    C3.decode = Cr().decode;
    C3.Encoder = ot().Encoder;
    C3.Decoder = xt().Decoder;
    C3.createCodec = pt().createCodec;
    C3.codec = vt().codec;
});
var yt = Hr(jr()), lt = Hr(jr()), { encode: sf , decode: xf , Encoder: df , Decoder: pf , createEncodeStream: hf , createDecodeStream: vf , createCodec: yf , codec: lf  } = lt, { default: Ci , ...Ni } = lt, Ef = (yt.default ?? Ci) ?? Ni;
const __default = async (fn, data)=>{
    const f = fn.split('.');
    const buff = Ef.encode(data);
    let uri = `http://localhost:8000/${f[0]}/${f[1]}.js?data=${buff.toString('base64')}`;
    const { res  } = await import(uri);
    return Ef.decode(res);
};
export { __default as default };
