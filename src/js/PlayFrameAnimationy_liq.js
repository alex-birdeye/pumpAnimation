/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_liq = 0;
var arrID_liq = [1, 2];
var arrFile_liq = ["1", "2"];
var bUseWHString_liq = false;
var arrWString_liq = ["1", "2"];
var arrHString_liq = ["1", "2"];
var nActiveID_liqIndex_liq = 0;
var nActiveID_liq = 0;

var timerPreview_liq = 0;
var nIndexPreview_liq = 0;
var nIndexPreviewLast_liq = -1;
var nWidth_liq = 0;
var nHeight_liq = 0;
var nSpeed_liq = 500;
var strYMD_liq = "";
var strHour_liq = "";
var strFolder_liq = "";
var nHomeFolder_liq = 1;
var newimages_liq = [];

function Animate_liq() {
    if (nIDNum_liq <= 0)return;

    var strDivName_liq = "";
    if (nIndexPreviewLast_liq != -1) {
        strDivName_liq = "p_liq" + nIndexPreviewLast_liq.toString();
        document.getElementById(strDivName_liq).style.visibility = 'hidden';
    }

    var nIndex = arrID_liq[nIndexPreview_liq] - 1;
    strDivName_liq = "p_liq" + nIndex.toString();
    document.getElementById(strDivName_liq).style.visibility = 'visible';

    nIndexPreviewLast_liq = nIndex;

    nIndexPreview_liq++;
    if (nIndexPreview_liq >= nIDNum_liq) nIndexPreview_liq = 0;

    timerPreview_liq = setTimeout("Animate_liq()", nSpeed_liq);
}

function StopAnimate_liq() {
    clearTimeout(timerPreview_liq);
    timerPreview_liq = 0;
}

var liqState = false;
function StartStopAnimate_liquid() {
    liqState = !liqState;
    if(liqState){
        Preview_liq()
    } else{
        StopAnimate_liq();
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_liq = strDir;
 }*/

function SetFolderName_liq(strDir1, strDir2, strDir3) {
    strYMD_liq = strDir1;
    strHour_liq = strDir2;
    strFolder_liq = strDir3;
}

function SetHomeFolder_liq(nDir) {
    nHomeFolder_liq = nDir;
}

function GetFolderName_liq() {
    return strFolder_liq;
}

function InitPreview_liq() {
    var i = 0;
    var strHTML_liq = "";
    var dir_name = GetFolderName_liq();

    var strWidth = nWidth_liq.toString();
    strWidth += "px";
    var strHeight = nHeight_liq.toString();
    strHeight += "px";

    var strFolder_liqFunny62 = strFolder_liq.substring(0, 1);

    $("preview_box_liq").style.visibility = "hidden";

    var nPicNum_liq = 0;

    for (i = 0; i < nIDNum_liq; i++) {
        var strDivName_liq = "p_liq" + i.toString();
        var strImgName_liq = "pic_liq" + i.toString();

        var strImg0 = "";

        newimages_liq[i] = new Image();

        if (nHomeFolder_liq == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_liq + "/" + strHour_liq + "/" + strFolder_liq + "/" + arrFile_liq[i];
            strImg0 = "img/Liquid/" +arrFile_liq[i];
        else if (nHomeFolder_liq == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_liq + "/" + strHour_liq + "/" + strFolder_liq + "/" + arrFile_liq[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_liqFunny62 + "/" + strFolder_liq + "/" + arrFile_liq[i];

        if (!bUseWHString_liq)
            //strHTML_liq += '<div id="' + strDivName_liq + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_liq + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_liq += '<div id="' + strDivName_liq + '" class="liquid"' + '<img id="' + strImgName_liq + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_liq[i];
            var nPicH = arrHString_liq[i];


            //nWidth_liq, nHeight_liq

            if (nPicW == nWidth_liq && nPicH == nHeight_liq) {
                strHTML_liq += '<div id="' + strDivName_liq + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_liq + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_liq / nHeight_liq;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_liq;
                    nNewH = parseInt(nPicH * nWidth_liq / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_liq;
                    nNewW = parseInt(nPicW * nHeight_liq / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_liq - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_liq - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_liq += '<div id="' + strDivName_liq + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_liq + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_liq += '<div id="' + strDivName_liq + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_liq + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_liq[i].src = strImg0;
        newimages_liq[i].onload = function () {

            nPicNum_liq++;
            if (nPicNum_liq == nIDNum_liq)
                OnLoadAllPics_liq();
            else {
                var nPercent = Math.floor(nPicNum_liq / nIDNum_liq * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_liq;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_liq() {
    for (var i = 0; i < nIDNum_liq; i++) {
        var strDivName_liq = "p_liq" + i.toString();
        var strImgName_liq = "pic_liq" + i.toString();

        $(strImgName_liq).src = newimages_liq[i].src;
        $(strDivName_liq).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_liq.toString();
    strHeight += "px";
    $("preview_box_liq").style.height = strHeight;

    $("preview_box_liq").style.visibility = "visible";

    document.getElementById("p_liq0").style.visibility = 'visible';
    if (liqState)
    Preview_liq();
}

function Preview_liq() {
    StopAnimate_liq();
    Animate_liq();
}

function ResetImgNumber_liq(n) {
    arrID_liq.length = n;
    nIDNum_liq = n;
}

function DisplayImages_liq() {
    InitPreview_liq();

}

function ReadFileName_liq(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_liq = nNum;
        arrFile_liq.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_liq[i] = arguments[i];
        }

        ResetImgNumber_liq(nNum);
    }
}


function ReadWHString_liq(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_liq = true;
        arrWString_liq.length = nNum / 2;
        arrHString_liq.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_liq[i / 2] = arguments[i];
            arrHString_liq[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_liq(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_liq) {
            for (var i = 0; i < nNum; i++)
                arrID_liq[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_liq; i++)
                arrID_liq[i] = i + 1;
        }
    }
}

function ReadWHS_liq(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_liq = arguments[0];
        nHeight_liq = arguments[1];
        nSpeed_liq = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
