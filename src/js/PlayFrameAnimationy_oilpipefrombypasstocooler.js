/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_oilpipefrombypasstocooler = 0;
var arrID_oilpipefrombypasstocooler = [1, 2];
var arrFile_oilpipefrombypasstocooler = ["1", "2"];
var bUseWHString_oilpipefrombypasstocooler = false;
var arrWString_oilpipefrombypasstocooler = ["1", "2"];
var arrHString_oilpipefrombypasstocooler = ["1", "2"];
var nActiveID_oilpipefrombypasstocoolerIndex_oilpipefrombypasstocooler = 0;
var nActiveID_oilpipefrombypasstocooler = 0;

var timerPreview_oilpipefrombypasstocooler = 0;
var nIndexPreview_oilpipefrombypasstocooler = 0;
var nIndexPreviewLast_oilpipefrombypasstocooler = -1;
var nWidth_oilpipefrombypasstocooler = 0;
var nHeight_oilpipefrombypasstocooler = 0;
var nSpeed_oilpipefrombypasstocooler = 500;
var strYMD_oilpipefrombypasstocooler = "";
var strHour_oilpipefrombypasstocooler = "";
var strFolder_oilpipefrombypasstocooler = "";
var nHomeFolder_oilpipefrombypasstocooler = 1;
var newimages_oilpipefrombypasstocooler = [];

function Animate_oilpipefrombypasstocooler() {
    if (nIDNum_oilpipefrombypasstocooler <= 0)return;

    var strDivName_oilpipefrombypasstocooler = "";
    if (nIndexPreviewLast_oilpipefrombypasstocooler != -1) {
        strDivName_oilpipefrombypasstocooler = "p_oilpipefrombypasstocooler" + nIndexPreviewLast_oilpipefrombypasstocooler.toString();
        document.getElementById(strDivName_oilpipefrombypasstocooler).style.visibility = 'hidden';
    }

    var nIndex = arrID_oilpipefrombypasstocooler[nIndexPreview_oilpipefrombypasstocooler] - 1;
    strDivName_oilpipefrombypasstocooler = "p_oilpipefrombypasstocooler" + nIndex.toString();
    document.getElementById(strDivName_oilpipefrombypasstocooler).style.visibility = 'visible';

    nIndexPreviewLast_oilpipefrombypasstocooler = nIndex;

    nIndexPreview_oilpipefrombypasstocooler++;
    if (nIndexPreview_oilpipefrombypasstocooler >= nIDNum_oilpipefrombypasstocooler) nIndexPreview_oilpipefrombypasstocooler = 0;

    timerPreview_oilpipefrombypasstocooler = setTimeout("Animate_oilpipefrombypasstocooler()", nSpeed_oilpipefrombypasstocooler);
}

function StopAnimate_oilpipefrombypasstocooler() {
    clearTimeout(timerPreview_oilpipefrombypasstocooler);
    timerPreview_oilpipefrombypasstocooler = 0;
}
/*
 function SetFolderName( strDir )
 {
 strFolder_oilpipefrombypasstocooler = strDir;
 }*/

function SetFolderName_oilpipefrombypasstocooler(strDir1, strDir2, strDir3) {
    strYMD_oilpipefrombypasstocooler = strDir1;
    strHour_oilpipefrombypasstocooler = strDir2;
    strFolder_oilpipefrombypasstocooler = strDir3;
}

function SetHomeFolder_oilpipefrombypasstocooler(nDir) {
    nHomeFolder_oilpipefrombypasstocooler = nDir;
}

function GetFolderName_oilpipefrombypasstocooler() {
    return strFolder_oilpipefrombypasstocooler;
}

function InitPreview_oilpipefrombypasstocooler() {
    var i = 0;
    var strHTML_oilpipefrombypasstocooler = "";
    var dir_name = GetFolderName_oilpipefrombypasstocooler();

    var strWidth = nWidth_oilpipefrombypasstocooler.toString();
    strWidth += "px";
    var strHeight = nHeight_oilpipefrombypasstocooler.toString();
    strHeight += "px";

    var strFolder_oilpipefrombypasstocoolerFunny62 = strFolder_oilpipefrombypasstocooler.substring(0, 1);

    $("preview_box_oilpipefrombypasstocooler").style.visibility = "hidden";

    var nPicNum_oilpipefrombypasstocooler = 0;

    for (i = 0; i < nIDNum_oilpipefrombypasstocooler; i++) {
        var strDivName_oilpipefrombypasstocooler = "p_oilpipefrombypasstocooler" + i.toString();
        var strImgName_oilpipefrombypasstocooler = "pic_oilpipefrombypasstocooler" + i.toString();

        var strImg0 = "";

        newimages_oilpipefrombypasstocooler[i] = new Image();

        if (nHomeFolder_oilpipefrombypasstocooler == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_oilpipefrombypasstocooler + "/" + strHour_oilpipefrombypasstocooler + "/" + strFolder_oilpipefrombypasstocooler + "/" + arrFile_oilpipefrombypasstocooler[i];
            strImg0 = "img/OilPipeFromBypassToCooler/" +arrFile_oilpipefrombypasstocooler[i];
        else if (nHomeFolder_oilpipefrombypasstocooler == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_oilpipefrombypasstocooler + "/" + strHour_oilpipefrombypasstocooler + "/" + strFolder_oilpipefrombypasstocooler + "/" + arrFile_oilpipefrombypasstocooler[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_oilpipefrombypasstocoolerFunny62 + "/" + strFolder_oilpipefrombypasstocooler + "/" + arrFile_oilpipefrombypasstocooler[i];

        if (!bUseWHString_oilpipefrombypasstocooler)
            //strHTML_oilpipefrombypasstocooler += '<div id="' + strDivName_oilpipefrombypasstocooler + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipefrombypasstocooler + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_oilpipefrombypasstocooler += '<div id="' + strDivName_oilpipefrombypasstocooler + '" class="liquid"' + '<img id="' + strImgName_oilpipefrombypasstocooler + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_oilpipefrombypasstocooler[i];
            var nPicH = arrHString_oilpipefrombypasstocooler[i];


            //nWidth_oilpipefrombypasstocooler, nHeight_oilpipefrombypasstocooler

            if (nPicW == nWidth_oilpipefrombypasstocooler && nPicH == nHeight_oilpipefrombypasstocooler) {
                strHTML_oilpipefrombypasstocooler += '<div id="' + strDivName_oilpipefrombypasstocooler + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipefrombypasstocooler + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_oilpipefrombypasstocooler / nHeight_oilpipefrombypasstocooler;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_oilpipefrombypasstocooler;
                    nNewH = parseInt(nPicH * nWidth_oilpipefrombypasstocooler / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_oilpipefrombypasstocooler;
                    nNewW = parseInt(nPicW * nHeight_oilpipefrombypasstocooler / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_oilpipefrombypasstocooler - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_oilpipefrombypasstocooler - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_oilpipefrombypasstocooler += '<div id="' + strDivName_oilpipefrombypasstocooler + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_oilpipefrombypasstocooler + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_oilpipefrombypasstocooler += '<div id="' + strDivName_oilpipefrombypasstocooler + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_oilpipefrombypasstocooler + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_oilpipefrombypasstocooler[i].src = strImg0;
        newimages_oilpipefrombypasstocooler[i].onload = function () {

            nPicNum_oilpipefrombypasstocooler++;
            if (nPicNum_oilpipefrombypasstocooler == nIDNum_oilpipefrombypasstocooler)
                OnLoadAllPics_oilpipefrombypasstocooler();
            else {
                var nPercent = Math.floor(nPicNum_oilpipefrombypasstocooler / nIDNum_oilpipefrombypasstocooler * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_oilpipefrombypasstocooler;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_oilpipefrombypasstocooler() {
    for (var i = 0; i < nIDNum_oilpipefrombypasstocooler; i++) {
        var strDivName_oilpipefrombypasstocooler = "p_oilpipefrombypasstocooler" + i.toString();
        var strImgName_oilpipefrombypasstocooler = "pic_oilpipefrombypasstocooler" + i.toString();

        $(strImgName_oilpipefrombypasstocooler).src = newimages_oilpipefrombypasstocooler[i].src;
        $(strDivName_oilpipefrombypasstocooler).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_oilpipefrombypasstocooler.toString();
    strHeight += "px";
    $("preview_box_oilpipefrombypasstocooler").style.height = strHeight;

    $("preview_box_oilpipefrombypasstocooler").style.visibility = "visible";

    Preview_oilpipefrombypasstocooler();
}

function Preview_oilpipefrombypasstocooler() {
    StopAnimate_oilpipefrombypasstocooler();
    Animate_oilpipefrombypasstocooler();
}

function ResetImgNumber_oilpipefrombypasstocooler(n) {
    arrID_oilpipefrombypasstocooler.length = n;
    nIDNum_oilpipefrombypasstocooler = n;
}

function DisplayImages_oilpipefrombypasstocooler() {
    InitPreview_oilpipefrombypasstocooler();

}

function ReadFileName_oilpipefrombypasstocooler(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_oilpipefrombypasstocooler = nNum;
        arrFile_oilpipefrombypasstocooler.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_oilpipefrombypasstocooler[i] = arguments[i];
        }

        ResetImgNumber_oilpipefrombypasstocooler(nNum);
    }
}


function ReadWHString_oilpipefrombypasstocooler(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_oilpipefrombypasstocooler = true;
        arrWString_oilpipefrombypasstocooler.length = nNum / 2;
        arrHString_oilpipefrombypasstocooler.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_oilpipefrombypasstocooler[i / 2] = arguments[i];
            arrHString_oilpipefrombypasstocooler[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_oilpipefrombypasstocooler(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_oilpipefrombypasstocooler) {
            for (var i = 0; i < nNum; i++)
                arrID_oilpipefrombypasstocooler[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_oilpipefrombypasstocooler; i++)
                arrID_oilpipefrombypasstocooler[i] = i + 1;
        }
    }
}

function ReadWHS_oilpipefrombypasstocooler(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_oilpipefrombypasstocooler = arguments[0];
        nHeight_oilpipefrombypasstocooler = arguments[1];
        nSpeed_oilpipefrombypasstocooler = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
