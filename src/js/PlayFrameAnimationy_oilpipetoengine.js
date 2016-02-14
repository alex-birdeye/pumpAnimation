/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_oilpipetoengine = 0;
var arrID_oilpipetoengine = [1, 2];
var arrFile_oilpipetoengine = ["1", "2"];
var bUseWHString_oilpipetoengine = false;
var arrWString_oilpipetoengine = ["1", "2"];
var arrHString_oilpipetoengine = ["1", "2"];
var nActiveID_oilpipetoengineIndex_oilpipetoengine = 0;
var nActiveID_oilpipetoengine = 0;

var timerPreview_oilpipetoengine = 0;
var nIndexPreview_oilpipetoengine = 0;
var nIndexPreviewLast_oilpipetoengine = -1;
var nWidth_oilpipetoengine = 0;
var nHeight_oilpipetoengine = 0;
var nSpeed_oilpipetoengine = 500;
var strYMD_oilpipetoengine = "";
var strHour_oilpipetoengine = "";
var strFolder_oilpipetoengine = "";
var nHomeFolder_oilpipetoengine = 1;
var newimages_oilpipetoengine = [];

function Animate_oilpipetoengine() {
    if (nIDNum_oilpipetoengine <= 0)return;

    var strDivName_oilpipetoengine = "";
    if (nIndexPreviewLast_oilpipetoengine != -1) {
        strDivName_oilpipetoengine = "p_oilpipetoengine" + nIndexPreviewLast_oilpipetoengine.toString();
        document.getElementById(strDivName_oilpipetoengine).style.visibility = 'hidden';
    }

    var nIndex = arrID_oilpipetoengine[nIndexPreview_oilpipetoengine] - 1;
    strDivName_oilpipetoengine = "p_oilpipetoengine" + nIndex.toString();
    document.getElementById(strDivName_oilpipetoengine).style.visibility = 'visible';

    nIndexPreviewLast_oilpipetoengine = nIndex;

    nIndexPreview_oilpipetoengine++;
    if (nIndexPreview_oilpipetoengine >= nIDNum_oilpipetoengine) nIndexPreview_oilpipetoengine = 0;

    timerPreview_oilpipetoengine = setTimeout("Animate_oilpipetoengine()", nSpeed_oilpipetoengine);
}

function StopAnimate_oilpipetoengine() {
    clearTimeout(timerPreview_oilpipetoengine);
    timerPreview_oilpipetoengine = 0;
}
/*
 function SetFolderName( strDir )
 {
 strFolder_oilpipetoengine = strDir;
 }*/

function SetFolderName_oilpipetoengine(strDir1, strDir2, strDir3) {
    strYMD_oilpipetoengine = strDir1;
    strHour_oilpipetoengine = strDir2;
    strFolder_oilpipetoengine = strDir3;
}

function SetHomeFolder_oilpipetoengine(nDir) {
    nHomeFolder_oilpipetoengine = nDir;
}

function GetFolderName_oilpipetoengine() {
    return strFolder_oilpipetoengine;
}

function InitPreview_oilpipetoengine() {
    var i = 0;
    var strHTML_oilpipetoengine = "";
    var dir_name = GetFolderName_oilpipetoengine();

    var strWidth = nWidth_oilpipetoengine.toString();
    strWidth += "px";
    var strHeight = nHeight_oilpipetoengine.toString();
    strHeight += "px";

    var strFolder_oilpipetoengineFunny62 = strFolder_oilpipetoengine.substring(0, 1);

    $("preview_box_oilpipetoengine").style.visibility = "hidden";

    var nPicNum_oilpipetoengine = 0;

    for (i = 0; i < nIDNum_oilpipetoengine; i++) {
        var strDivName_oilpipetoengine = "p_oilpipetoengine" + i.toString();
        var strImgName_oilpipetoengine = "pic_oilpipetoengine" + i.toString();

        var strImg0 = "";

        newimages_oilpipetoengine[i] = new Image();

        if (nHomeFolder_oilpipetoengine == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_oilpipetoengine + "/" + strHour_oilpipetoengine + "/" + strFolder_oilpipetoengine + "/" + arrFile_oilpipetoengine[i];
            strImg0 = "img/OilPipeToEngine/" +arrFile_oilpipetoengine[i];
        else if (nHomeFolder_oilpipetoengine == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_oilpipetoengine + "/" + strHour_oilpipetoengine + "/" + strFolder_oilpipetoengine + "/" + arrFile_oilpipetoengine[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_oilpipetoengineFunny62 + "/" + strFolder_oilpipetoengine + "/" + arrFile_oilpipetoengine[i];

        if (!bUseWHString_oilpipetoengine)
            //strHTML_oilpipetoengine += '<div id="' + strDivName_oilpipetoengine + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipetoengine + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_oilpipetoengine += '<div id="' + strDivName_oilpipetoengine + '" class="liquid"' + '<img id="' + strImgName_oilpipetoengine + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_oilpipetoengine[i];
            var nPicH = arrHString_oilpipetoengine[i];


            //nWidth_oilpipetoengine, nHeight_oilpipetoengine

            if (nPicW == nWidth_oilpipetoengine && nPicH == nHeight_oilpipetoengine) {
                strHTML_oilpipetoengine += '<div id="' + strDivName_oilpipetoengine + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipetoengine + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_oilpipetoengine / nHeight_oilpipetoengine;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_oilpipetoengine;
                    nNewH = parseInt(nPicH * nWidth_oilpipetoengine / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_oilpipetoengine;
                    nNewW = parseInt(nPicW * nHeight_oilpipetoengine / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_oilpipetoengine - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_oilpipetoengine - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_oilpipetoengine += '<div id="' + strDivName_oilpipetoengine + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_oilpipetoengine + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_oilpipetoengine += '<div id="' + strDivName_oilpipetoengine + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_oilpipetoengine + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_oilpipetoengine[i].src = strImg0;
        newimages_oilpipetoengine[i].onload = function () {

            nPicNum_oilpipetoengine++;
            if (nPicNum_oilpipetoengine == nIDNum_oilpipetoengine)
                OnLoadAllPics_oilpipetoengine();
            else {
                var nPercent = Math.floor(nPicNum_oilpipetoengine / nIDNum_oilpipetoengine * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_oilpipetoengine;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_oilpipetoengine() {
    for (var i = 0; i < nIDNum_oilpipetoengine; i++) {
        var strDivName_oilpipetoengine = "p_oilpipetoengine" + i.toString();
        var strImgName_oilpipetoengine = "pic_oilpipetoengine" + i.toString();

        $(strImgName_oilpipetoengine).src = newimages_oilpipetoengine[i].src;
        $(strDivName_oilpipetoengine).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_oilpipetoengine.toString();
    strHeight += "px";
    $("preview_box_oilpipetoengine").style.height = strHeight;

    $("preview_box_oilpipetoengine").style.visibility = "visible";

    Preview_oilpipetoengine();
}

function Preview_oilpipetoengine() {
    StopAnimate_oilpipetoengine();
    Animate_oilpipetoengine();
}

function ResetImgNumber_oilpipetoengine(n) {
    arrID_oilpipetoengine.length = n;
    nIDNum_oilpipetoengine = n;
}

function DisplayImages_oilpipetoengine() {
    InitPreview_oilpipetoengine();

}

function ReadFileName_oilpipetoengine(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_oilpipetoengine = nNum;
        arrFile_oilpipetoengine.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_oilpipetoengine[i] = arguments[i];
        }

        ResetImgNumber_oilpipetoengine(nNum);
    }
}


function ReadWHString_oilpipetoengine(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_oilpipetoengine = true;
        arrWString_oilpipetoengine.length = nNum / 2;
        arrHString_oilpipetoengine.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_oilpipetoengine[i / 2] = arguments[i];
            arrHString_oilpipetoengine[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_oilpipetoengine(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_oilpipetoengine) {
            for (var i = 0; i < nNum; i++)
                arrID_oilpipetoengine[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_oilpipetoengine; i++)
                arrID_oilpipetoengine[i] = i + 1;
        }
    }
}

function ReadWHS_oilpipetoengine(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_oilpipetoengine = arguments[0];
        nHeight_oilpipetoengine = arguments[1];
        nSpeed_oilpipetoengine = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
