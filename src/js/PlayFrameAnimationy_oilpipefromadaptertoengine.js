/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_oilpipefromadaptertoengine = 0;
var arrID_oilpipefromadaptertoengine = [1, 2];
var arrFile_oilpipefromadaptertoengine = ["1", "2"];
var bUseWHString_oilpipefromadaptertoengine = false;
var arrWString_oilpipefromadaptertoengine = ["1", "2"];
var arrHString_oilpipefromadaptertoengine = ["1", "2"];
var nActiveID_oilpipefromadaptertoengineIndex_oilpipefromadaptertoengine = 0;
var nActiveID_oilpipefromadaptertoengine = 0;

var timerPreview_oilpipefromadaptertoengine = 0;
var nIndexPreview_oilpipefromadaptertoengine = 0;
var nIndexPreviewLast_oilpipefromadaptertoengine = -1;
var nWidth_oilpipefromadaptertoengine = 0;
var nHeight_oilpipefromadaptertoengine = 0;
var nSpeed_oilpipefromadaptertoengine = 500;
var strYMD_oilpipefromadaptertoengine = "";
var strHour_oilpipefromadaptertoengine = "";
var strFolder_oilpipefromadaptertoengine = "";
var nHomeFolder_oilpipefromadaptertoengine = 1;
var newimages_oilpipefromadaptertoengine = [];

function Animate_oilpipefromadaptertoengine() {
    if (nIDNum_oilpipefromadaptertoengine <= 0)return;

    var strDivName_oilpipefromadaptertoengine = "";
    if (nIndexPreviewLast_oilpipefromadaptertoengine != -1) {
        strDivName_oilpipefromadaptertoengine = "p_oilpipefromadaptertoengine" + nIndexPreviewLast_oilpipefromadaptertoengine.toString();
        document.getElementById(strDivName_oilpipefromadaptertoengine).style.visibility = 'hidden';
    }

    var nIndex = arrID_oilpipefromadaptertoengine[nIndexPreview_oilpipefromadaptertoengine] - 1;
    strDivName_oilpipefromadaptertoengine = "p_oilpipefromadaptertoengine" + nIndex.toString();
    document.getElementById(strDivName_oilpipefromadaptertoengine).style.visibility = 'visible';

    nIndexPreviewLast_oilpipefromadaptertoengine = nIndex;

    nIndexPreview_oilpipefromadaptertoengine++;
    if (nIndexPreview_oilpipefromadaptertoengine >= nIDNum_oilpipefromadaptertoengine) nIndexPreview_oilpipefromadaptertoengine = 0;

    timerPreview_oilpipefromadaptertoengine = setTimeout("Animate_oilpipefromadaptertoengine()", nSpeed_oilpipefromadaptertoengine);
}

function StopAnimate_oilpipefromadaptertoengine() {
    clearTimeout(timerPreview_oilpipefromadaptertoengine);
    timerPreview_oilpipefromadaptertoengine = 0;
}

var oilpipefromadaptertoengineState = false;
function StartStopAnimate_oilpipefromadaptertoengine() {
    oilpipefromadaptertoengineState = !oilpipefromadaptertoengineState;
    if(oilpipefromadaptertoengineState){
        document.getElementById("preview_box_oilpipefromadaptertoengine").style.opacity = "1";
        Preview_oilpipefromadaptertoengine()
    } else{
        StopAnimate_oilpipefromadaptertoengine();
        document.getElementById("preview_box_oilpipefromadaptertoengine").style.opacity = "0.5";
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_oilpipefromadaptertoengine = strDir;
 }*/

function SetFolderName_oilpipefromadaptertoengine(strDir1, strDir2, strDir3) {
    strYMD_oilpipefromadaptertoengine = strDir1;
    strHour_oilpipefromadaptertoengine = strDir2;
    strFolder_oilpipefromadaptertoengine = strDir3;
}

function SetHomeFolder_oilpipefromadaptertoengine(nDir) {
    nHomeFolder_oilpipefromadaptertoengine = nDir;
}

function GetFolderName_oilpipefromadaptertoengine() {
    return strFolder_oilpipefromadaptertoengine;
}

function InitPreview_oilpipefromadaptertoengine() {
    var i = 0;
    var strHTML_oilpipefromadaptertoengine = "";
    var dir_name = GetFolderName_oilpipefromadaptertoengine();

    var strWidth = nWidth_oilpipefromadaptertoengine.toString();
    strWidth += "px";
    var strHeight = nHeight_oilpipefromadaptertoengine.toString();
    strHeight += "px";

    var strFolder_oilpipefromadaptertoengineFunny62 = strFolder_oilpipefromadaptertoengine.substring(0, 1);

    $("preview_box_oilpipefromadaptertoengine").style.visibility = "hidden";

    var nPicNum_oilpipefromadaptertoengine = 0;

    for (i = 0; i < nIDNum_oilpipefromadaptertoengine; i++) {
        var strDivName_oilpipefromadaptertoengine = "p_oilpipefromadaptertoengine" + i.toString();
        var strImgName_oilpipefromadaptertoengine = "pic_oilpipefromadaptertoengine" + i.toString();

        var strImg0 = "";

        newimages_oilpipefromadaptertoengine[i] = new Image();

        if (nHomeFolder_oilpipefromadaptertoengine == 1)
            //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_oilpipefromadaptertoengine + "/" + strHour_oilpipefromadaptertoengine + "/" + strFolder_oilpipefromadaptertoengine + "/" + arrFile_oilpipefromadaptertoengine[i];
            strImg0 = "img/OilPipeFromAdapterToEngine/" +arrFile_oilpipefromadaptertoengine[i];
        else if (nHomeFolder_oilpipefromadaptertoengine == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_oilpipefromadaptertoengine + "/" + strHour_oilpipefromadaptertoengine + "/" + strFolder_oilpipefromadaptertoengine + "/" + arrFile_oilpipefromadaptertoengine[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_oilpipefromadaptertoengineFunny62 + "/" + strFolder_oilpipefromadaptertoengine + "/" + arrFile_oilpipefromadaptertoengine[i];

        if (!bUseWHString_oilpipefromadaptertoengine)
            //strHTML_oilpipefromadaptertoengine += '<div id="' + strDivName_oilpipefromadaptertoengine + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipefromadaptertoengine + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_oilpipefromadaptertoengine += '<div id="' + strDivName_oilpipefromadaptertoengine + '" class="liquid"' + '<img id="' + strImgName_oilpipefromadaptertoengine + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_oilpipefromadaptertoengine[i];
            var nPicH = arrHString_oilpipefromadaptertoengine[i];


            //nWidth_oilpipefromadaptertoengine, nHeight_oilpipefromadaptertoengine

            if (nPicW == nWidth_oilpipefromadaptertoengine && nPicH == nHeight_oilpipefromadaptertoengine) {
                strHTML_oilpipefromadaptertoengine += '<div id="' + strDivName_oilpipefromadaptertoengine + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_oilpipefromadaptertoengine + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_oilpipefromadaptertoengine / nHeight_oilpipefromadaptertoengine;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_oilpipefromadaptertoengine;
                    nNewH = parseInt(nPicH * nWidth_oilpipefromadaptertoengine / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_oilpipefromadaptertoengine;
                    nNewW = parseInt(nPicW * nHeight_oilpipefromadaptertoengine / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_oilpipefromadaptertoengine - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_oilpipefromadaptertoengine - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_oilpipefromadaptertoengine += '<div id="' + strDivName_oilpipefromadaptertoengine + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_oilpipefromadaptertoengine + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_oilpipefromadaptertoengine += '<div id="' + strDivName_oilpipefromadaptertoengine + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_oilpipefromadaptertoengine + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_oilpipefromadaptertoengine[i].src = strImg0;
        newimages_oilpipefromadaptertoengine[i].onload = function () {

            nPicNum_oilpipefromadaptertoengine++;
            if (nPicNum_oilpipefromadaptertoengine == nIDNum_oilpipefromadaptertoengine)
                OnLoadAllPics_oilpipefromadaptertoengine();
            else {
                var nPercent = Math.floor(nPicNum_oilpipefromadaptertoengine / nIDNum_oilpipefromadaptertoengine * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_oilpipefromadaptertoengine;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_oilpipefromadaptertoengine() {
    for (var i = 0; i < nIDNum_oilpipefromadaptertoengine; i++) {
        var strDivName_oilpipefromadaptertoengine = "p_oilpipefromadaptertoengine" + i.toString();
        var strImgName_oilpipefromadaptertoengine = "pic_oilpipefromadaptertoengine" + i.toString();

        $(strImgName_oilpipefromadaptertoengine).src = newimages_oilpipefromadaptertoengine[i].src;
        $(strDivName_oilpipefromadaptertoengine).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_oilpipefromadaptertoengine.toString();
    strHeight += "px";
    $("preview_box_oilpipefromadaptertoengine").style.height = strHeight;

    $("preview_box_oilpipefromadaptertoengine").style.visibility = "visible";

    document.getElementById("p_oilpipefromadaptertoengine0").style.visibility = 'visible';
    document.getElementById("p_oilpipefromadaptertoengine0").style.opacity = '0.5';
    if (oilpipefromadaptertoengineState)
    Preview_oilpipefromadaptertoengine();
}

function Preview_oilpipefromadaptertoengine() {
    StopAnimate_oilpipefromadaptertoengine();
    Animate_oilpipefromadaptertoengine();
}

function ResetImgNumber_oilpipefromadaptertoengine(n) {
    arrID_oilpipefromadaptertoengine.length = n;
    nIDNum_oilpipefromadaptertoengine = n;
}

function DisplayImages_oilpipefromadaptertoengine() {
    InitPreview_oilpipefromadaptertoengine();

}

function ReadFileName_oilpipefromadaptertoengine(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_oilpipefromadaptertoengine = nNum;
        arrFile_oilpipefromadaptertoengine.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_oilpipefromadaptertoengine[i] = arguments[i];
        }

        ResetImgNumber_oilpipefromadaptertoengine(nNum);
    }
}


function ReadWHString_oilpipefromadaptertoengine(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_oilpipefromadaptertoengine = true;
        arrWString_oilpipefromadaptertoengine.length = nNum / 2;
        arrHString_oilpipefromadaptertoengine.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_oilpipefromadaptertoengine[i / 2] = arguments[i];
            arrHString_oilpipefromadaptertoengine[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_oilpipefromadaptertoengine(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_oilpipefromadaptertoengine) {
            for (var i = 0; i < nNum; i++)
                arrID_oilpipefromadaptertoengine[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_oilpipefromadaptertoengine; i++)
                arrID_oilpipefromadaptertoengine[i] = i + 1;
        }
    }
}

function ReadWHS_oilpipefromadaptertoengine(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_oilpipefromadaptertoengine = arguments[0];
        nHeight_oilpipefromadaptertoengine = arguments[1];
        nSpeed_oilpipefromadaptertoengine = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
