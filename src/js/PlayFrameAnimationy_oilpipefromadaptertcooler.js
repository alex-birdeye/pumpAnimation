/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_oilpipefromadaptertcooler = 0;
var arrID_oilpipefromadaptertcooler = [1, 2];
var arrFile_oilpipefromadaptertcooler = ["1", "2"];
var bUseWHString_oilpipefromadaptertcooler = false;
var arrWString_oilpipefromadaptertcooler = ["1", "2"];
var arrHString_oilpipefromadaptertcooler = ["1", "2"];
var nActiveID_oilpipefromadaptertcoolerIndex_oilpipefromadaptertcooler = 0;
var nActiveID_oilpipefromadaptertcooler = 0;

var timerPreview_oilpipefromadaptertcooler = 0;
var nIndexPreview_oilpipefromadaptertcooler = 0;
var nIndexPreviewLast_oilpipefromadaptertcooler = -1;
var nWidth_oilpipefromadaptertcooler = 0;
var nHeight_oilpipefromadaptertcooler = 0;
var nSpeed_oilpipefromadaptertcooler = 500;
var strYMD_oilpipefromadaptertcooler = "";
var strHour_oilpipefromadaptertcooler = "";
var strFolder_oilpipefromadaptertcooler = "";
var nHomeFolder_oilpipefromadaptertcooler = 1;
var newimages_oilpipefromadaptertcooler = [];

function Animate_oilpipefromadaptertcooler() {
    if (nIDNum_oilpipefromadaptertcooler <= 0)return;

    var strDivName_oilpipefromadaptertcooler = "";
    if (nIndexPreviewLast_oilpipefromadaptertcooler != -1) {
        strDivName_oilpipefromadaptertcooler = "p_oilpipefromadaptertcooler" + nIndexPreviewLast_oilpipefromadaptertcooler.toString();
        document.getElementById(strDivName_oilpipefromadaptertcooler).style.visibility = 'hidden';
    }

    var nIndex = arrID_oilpipefromadaptertcooler[nIndexPreview_oilpipefromadaptertcooler] - 1;
    strDivName_oilpipefromadaptertcooler = "p_oilpipefromadaptertcooler" + nIndex.toString();
    document.getElementById(strDivName_oilpipefromadaptertcooler).style.visibility = 'visible';

    nIndexPreviewLast_oilpipefromadaptertcooler = nIndex;

    nIndexPreview_oilpipefromadaptertcooler++;
    if (nIndexPreview_oilpipefromadaptertcooler >= nIDNum_oilpipefromadaptertcooler) nIndexPreview_oilpipefromadaptertcooler = 0;

    timerPreview_oilpipefromadaptertcooler = setTimeout("Animate_oilpipefromadaptertcooler()", nSpeed_oilpipefromadaptertcooler);
}

function StopAnimate_oilpipefromadaptertcooler() {
    clearTimeout(timerPreview_oilpipefromadaptertcooler);
    timerPreview_oilpipefromadaptertcooler = 0;
}
/*
 function SetFolderName( strDir )
 {
 strFolder_oilpipefromadaptertcooler = strDir;
 }*/

function SetFolderName_oilpipefromadaptertcooler(strDir1, strDir2, strDir3) {
    strYMD_oilpipefromadaptertcooler = strDir1;
    strHour_oilpipefromadaptertcooler = strDir2;
    strFolder_oilpipefromadaptertcooler = strDir3;
}

function SetHomeFolder_oilpipefromadaptertcooler(nDir) {
    nHomeFolder_oilpipefromadaptertcooler = nDir;
}

function GetFolderName_oilpipefromadaptertcooler() {
    return strFolder_oilpipefromadaptertcooler;
}

function InitPreview_oilpipefromadaptertcooler() {
    var i = 0;
    var strHTML_oilpipefromadaptertcooler = "";
    var dir_name = GetFolderName_oilpipefromadaptertcooler();

    var strWidth = nWidth_oilpipefromadaptertcooler.toString();
    strWidth += "px";
    var strHeight = nHeight_oilpipefromadaptertcooler.toString();
    strHeight += "px";

    var strFolder_oilpipefromadaptertcoolerFunny62 = strFolder_oilpipefromadaptertcooler.substring(0, 1);

    $("preview_box_oilpipefromadaptertcooler").style.visibility = "hidden";

    var nPicNum_oilpipefromadaptertcooler = 0;

    for (i = 0; i < nIDNum_oilpipefromadaptertcooler; i++) {
        var strDivName_oilpipefromadaptertcooler = "p_oilpipefromadaptertcooler" + i.toString();
        var strImgName_oilpipefromadaptertcooler = "pic_oilpipefromadaptertcooler" + i.toString();

        var strImg0 = "";

        newimages_oilpipefromadaptertcooler[i] = new Image();

        if (nHomeFolder_oilpipefromadaptertcooler == 1)
        //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_oilpipefromadaptertcooler + "/" + strHour_oilpipefromadaptertcooler + "/" + strFolder_oilpipefromadaptertcooler + "/" + arrFile_oilpipefromadaptertcooler[i];
            strImg0 = "img/OilPipeFromAdapterToCooler/" +arrFile_oilpipefromadaptertcooler[i];
        else if (nHomeFolder_oilpipefromadaptertcooler == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_oilpipefromadaptertcooler + "/" + strHour_oilpipefromadaptertcooler + "/" + strFolder_oilpipefromadaptertcooler + "/" + arrFile_oilpipefromadaptertcooler[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_oilpipefromadaptertcoolerFunny62 + "/" + strFolder_oilpipefromadaptertcooler + "/" + arrFile_oilpipefromadaptertcooler[i];

        if (!bUseWHString_oilpipefromadaptertcooler)
        //strHTML_oilpipefromadaptertcooler += '<div id="' + strDivName_oilpipefromadaptertcooler + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipefromadaptertcooler + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_oilpipefromadaptertcooler += '<div id="' + strDivName_oilpipefromadaptertcooler + '" class="liquid"' + '<img id="' + strImgName_oilpipefromadaptertcooler + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_oilpipefromadaptertcooler[i];
            var nPicH = arrHString_oilpipefromadaptertcooler[i];


            //nWidth_oilpipefromadaptertcooler, nHeight_oilpipefromadaptertcooler

            if (nPicW == nWidth_oilpipefromadaptertcooler && nPicH == nHeight_oilpipefromadaptertcooler) {
                strHTML_oilpipefromadaptertcooler += '<div id="' + strDivName_oilpipefromadaptertcooler + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipefromadaptertcooler + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_oilpipefromadaptertcooler / nHeight_oilpipefromadaptertcooler;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_oilpipefromadaptertcooler;
                    nNewH = parseInt(nPicH * nWidth_oilpipefromadaptertcooler / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_oilpipefromadaptertcooler;
                    nNewW = parseInt(nPicW * nHeight_oilpipefromadaptertcooler / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_oilpipefromadaptertcooler - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_oilpipefromadaptertcooler - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_oilpipefromadaptertcooler += '<div id="' + strDivName_oilpipefromadaptertcooler + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_oilpipefromadaptertcooler + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_oilpipefromadaptertcooler += '<div id="' + strDivName_oilpipefromadaptertcooler + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_oilpipefromadaptertcooler + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_oilpipefromadaptertcooler[i].src = strImg0;
        newimages_oilpipefromadaptertcooler[i].onload = function () {

            nPicNum_oilpipefromadaptertcooler++;
            if (nPicNum_oilpipefromadaptertcooler == nIDNum_oilpipefromadaptertcooler)
                OnLoadAllPics_oilpipefromadaptertcooler();
            else {
                var nPercent = Math.floor(nPicNum_oilpipefromadaptertcooler / nIDNum_oilpipefromadaptertcooler * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_oilpipefromadaptertcooler;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_oilpipefromadaptertcooler() {
    for (var i = 0; i < nIDNum_oilpipefromadaptertcooler; i++) {
        var strDivName_oilpipefromadaptertcooler = "p_oilpipefromadaptertcooler" + i.toString();
        var strImgName_oilpipefromadaptertcooler = "pic_oilpipefromadaptertcooler" + i.toString();

        $(strImgName_oilpipefromadaptertcooler).src = newimages_oilpipefromadaptertcooler[i].src;
        $(strDivName_oilpipefromadaptertcooler).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_oilpipefromadaptertcooler.toString();
    strHeight += "px";
    $("preview_box_oilpipefromadaptertcooler").style.height = strHeight;

    $("preview_box_oilpipefromadaptertcooler").style.visibility = "visible";

    Preview_oilpipefromadaptertcooler();
}

function Preview_oilpipefromadaptertcooler() {
    StopAnimate_oilpipefromadaptertcooler();
    Animate_oilpipefromadaptertcooler();
}

function ResetImgNumber_oilpipefromadaptertcooler(n) {
    arrID_oilpipefromadaptertcooler.length = n;
    nIDNum_oilpipefromadaptertcooler = n;
}

function DisplayImages_oilpipefromadaptertcooler() {
    InitPreview_oilpipefromadaptertcooler();

}

function ReadFileName_oilpipefromadaptertcooler(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_oilpipefromadaptertcooler = nNum;
        arrFile_oilpipefromadaptertcooler.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_oilpipefromadaptertcooler[i] = arguments[i];
        }

        ResetImgNumber_oilpipefromadaptertcooler(nNum);
    }
}


function ReadWHString_oilpipefromadaptertcooler(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_oilpipefromadaptertcooler = true;
        arrWString_oilpipefromadaptertcooler.length = nNum / 2;
        arrHString_oilpipefromadaptertcooler.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_oilpipefromadaptertcooler[i / 2] = arguments[i];
            arrHString_oilpipefromadaptertcooler[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_oilpipefromadaptertcooler(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_oilpipefromadaptertcooler) {
            for (var i = 0; i < nNum; i++)
                arrID_oilpipefromadaptertcooler[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_oilpipefromadaptertcooler; i++)
                arrID_oilpipefromadaptertcooler[i] = i + 1;
        }
    }
}

function ReadWHS_oilpipefromadaptertcooler(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_oilpipefromadaptertcooler = arguments[0];
        nHeight_oilpipefromadaptertcooler = arguments[1];
        nSpeed_oilpipefromadaptertcooler = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
