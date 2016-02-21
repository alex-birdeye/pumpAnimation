/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_oilpipebig = 0;
var arrID_oilpipebig = [1, 2];
var arrFile_oilpipebig = ["1", "2"];
var bUseWHString_oilpipebig = false;
var arrWString_oilpipebig = ["1", "2"];
var arrHString_oilpipebig = ["1", "2"];
var nActiveID_oilpipebigIndex_oilpipebig = 0;
var nActiveID_oilpipebig = 0;

var timerPreview_oilpipebig = 0;
var nIndexPreview_oilpipebig = 0;
var nIndexPreviewLast_oilpipebig = -1;
var nWidth_oilpipebig = 0;
var nHeight_oilpipebig = 0;
var nSpeed_oilpipebig = 500;
var strYMD_oilpipebig = "";
var strHour_oilpipebig = "";
var strFolder_oilpipebig = "";
var nHomeFolder_oilpipebig = 1;
var newimages_oilpipebig = [];

function Animate_oilpipebig() {
    if (nIDNum_oilpipebig <= 0)return;

    var strDivName_oilpipebig = "";
    if (nIndexPreviewLast_oilpipebig != -1) {
        strDivName_oilpipebig = "p_oilpipebig" + nIndexPreviewLast_oilpipebig.toString();
        document.getElementById(strDivName_oilpipebig).style.visibility = 'hidden';
    }

    var nIndex = arrID_oilpipebig[nIndexPreview_oilpipebig] - 1;
    strDivName_oilpipebig = "p_oilpipebig" + nIndex.toString();
    document.getElementById(strDivName_oilpipebig).style.visibility = 'visible';

    nIndexPreviewLast_oilpipebig = nIndex;

    nIndexPreview_oilpipebig++;
    if (nIndexPreview_oilpipebig >= nIDNum_oilpipebig) nIndexPreview_oilpipebig = 0;

    timerPreview_oilpipebig = setTimeout("Animate_oilpipebig()", nSpeed_oilpipebig);
}

function StopAnimate_oilpipebig() {
    clearTimeout(timerPreview_oilpipebig);
    timerPreview_oilpipebig = 0;
}

var oilpipebigState = false;
function StartStopAnimate_oilpipebig() {
    oilpipebigState = !oilpipebigState;
    if(oilpipebigState){
        document.getElementById("preview_box_oilpipebig").style.opacity = "1";
        Preview_oilpipebig()
    } else{
        StopAnimate_oilpipebig();
        document.getElementById("preview_box_oilpipebig").style.opacity = "0.5";
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_oilpipebig = strDir;
 }*/

function SetFolderName_oilpipebig(strDir1, strDir2, strDir3) {
    strYMD_oilpipebig = strDir1;
    strHour_oilpipebig = strDir2;
    strFolder_oilpipebig = strDir3;
}

function SetHomeFolder_oilpipebig(nDir) {
    nHomeFolder_oilpipebig = nDir;
}

function GetFolderName_oilpipebig() {
    return strFolder_oilpipebig;
}

function InitPreview_oilpipebig() {
    var i = 0;
    var strHTML_oilpipebig = "";
    var dir_name = GetFolderName_oilpipebig();

    var strWidth = nWidth_oilpipebig.toString();
    strWidth += "px";
    var strHeight = nHeight_oilpipebig.toString();
    strHeight += "px";

    var strFolder_oilpipebigFunny62 = strFolder_oilpipebig.substring(0, 1);

    $("preview_box_oilpipebig").style.visibility = "hidden";

    var nPicNum_oilpipebig = 0;

    for (i = 0; i < nIDNum_oilpipebig; i++) {
        var strDivName_oilpipebig = "p_oilpipebig" + i.toString();
        var strImgName_oilpipebig = "pic_oilpipebig" + i.toString();

        var strImg0 = "";

        newimages_oilpipebig[i] = new Image();

        if (nHomeFolder_oilpipebig == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_oilpipebig + "/" + strHour_oilpipebig + "/" + strFolder_oilpipebig + "/" + arrFile_oilpipebig[i];
            strImg0 = "img/OilPipeBig/" +arrFile_oilpipebig[i];
        else if (nHomeFolder_oilpipebig == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_oilpipebig + "/" + strHour_oilpipebig + "/" + strFolder_oilpipebig + "/" + arrFile_oilpipebig[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_oilpipebigFunny62 + "/" + strFolder_oilpipebig + "/" + arrFile_oilpipebig[i];

        if (!bUseWHString_oilpipebig)
            //strHTML_oilpipebig += '<div id="' + strDivName_oilpipebig + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipebig + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_oilpipebig += '<div id="' + strDivName_oilpipebig + '" class="liquid"' + '<img id="' + strImgName_oilpipebig + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_oilpipebig[i];
            var nPicH = arrHString_oilpipebig[i];


            //nWidth_oilpipebig, nHeight_oilpipebig

            if (nPicW == nWidth_oilpipebig && nPicH == nHeight_oilpipebig) {
                strHTML_oilpipebig += '<div id="' + strDivName_oilpipebig + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipebig + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_oilpipebig / nHeight_oilpipebig;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_oilpipebig;
                    nNewH = parseInt(nPicH * nWidth_oilpipebig / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_oilpipebig;
                    nNewW = parseInt(nPicW * nHeight_oilpipebig / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_oilpipebig - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_oilpipebig - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_oilpipebig += '<div id="' + strDivName_oilpipebig + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_oilpipebig + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_oilpipebig += '<div id="' + strDivName_oilpipebig + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_oilpipebig + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_oilpipebig[i].src = strImg0;
        newimages_oilpipebig[i].onload = function () {

            nPicNum_oilpipebig++;
            if (nPicNum_oilpipebig == nIDNum_oilpipebig)
                OnLoadAllPics_oilpipebig();
            else {
                var nPercent = Math.floor(nPicNum_oilpipebig / nIDNum_oilpipebig * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_oilpipebig;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_oilpipebig() {
    for (var i = 0; i < nIDNum_oilpipebig; i++) {
        var strDivName_oilpipebig = "p_oilpipebig" + i.toString();
        var strImgName_oilpipebig = "pic_oilpipebig" + i.toString();

        $(strImgName_oilpipebig).src = newimages_oilpipebig[i].src;
        $(strDivName_oilpipebig).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_oilpipebig.toString();
    strHeight += "px";
    $("preview_box_oilpipebig").style.height = strHeight;

    $("preview_box_oilpipebig").style.visibility = "visible";

    document.getElementById("p_oilpipebig0").style.visibility = 'visible';
    document.getElementById("p_oilpipebig0").style.opacity = '0.5';
    if (oilpipebigState)
    Preview_oilpipebig();
}

function Preview_oilpipebig() {
    StopAnimate_oilpipebig();
    Animate_oilpipebig();
}

function ResetImgNumber_oilpipebig(n) {
    arrID_oilpipebig.length = n;
    nIDNum_oilpipebig = n;
}

function DisplayImages_oilpipebig() {
    InitPreview_oilpipebig();

}

function ReadFileName_oilpipebig(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_oilpipebig = nNum;
        arrFile_oilpipebig.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_oilpipebig[i] = arguments[i];
        }

        ResetImgNumber_oilpipebig(nNum);
    }
}


function ReadWHString_oilpipebig(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_oilpipebig = true;
        arrWString_oilpipebig.length = nNum / 2;
        arrHString_oilpipebig.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_oilpipebig[i / 2] = arguments[i];
            arrHString_oilpipebig[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_oilpipebig(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_oilpipebig) {
            for (var i = 0; i < nNum; i++)
                arrID_oilpipebig[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_oilpipebig; i++)
                arrID_oilpipebig[i] = i + 1;
        }
    }
}

function ReadWHS_oilpipebig(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_oilpipebig = arguments[0];
        nHeight_oilpipebig = arguments[1];
        nSpeed_oilpipebig = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
