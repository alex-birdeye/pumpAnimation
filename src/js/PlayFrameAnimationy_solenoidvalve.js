/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_solenoidvalve = 0;
var arrID_solenoidvalve = [1, 2];
var arrFile_solenoidvalve = ["1", "2"];
var bUseWHString_solenoidvalve = false;
var arrWString_solenoidvalve = ["1", "2"];
var arrHString_solenoidvalve = ["1", "2"];
var nActiveID_solenoidvalveIndex_solenoidvalve = 0;
var nActiveID_solenoidvalve = 0;

var timerPreview_solenoidvalve = 0;
var nIndexPreview_solenoidvalve = 0;
var nIndexPreviewLast_solenoidvalve = -1;
var nWidth_solenoidvalve = 0;
var nHeight_solenoidvalve = 0;
var nSpeed_solenoidvalve = 500;
var strYMD_solenoidvalve = "";
var strHour_solenoidvalve = "";
var strFolder_solenoidvalve = "";
var nHomeFolder_solenoidvalve = 1;
var newimages_solenoidvalve = [];

function Animate_solenoidvalve() {
    if (nIDNum_solenoidvalve <= 0)return;

    var strDivName_solenoidvalve = "";
    if (nIndexPreviewLast_solenoidvalve != -1) {
        strDivName_solenoidvalve = "p_solenoidvalve" + nIndexPreviewLast_solenoidvalve.toString();
        document.getElementById(strDivName_solenoidvalve).style.visibility = 'hidden';
    }

    var nIndex = arrID_solenoidvalve[nIndexPreview_solenoidvalve] - 1;
    strDivName_solenoidvalve = "p_solenoidvalve" + nIndex.toString();
    document.getElementById(strDivName_solenoidvalve).style.visibility = 'visible';

    nIndexPreviewLast_solenoidvalve = nIndex;

    nIndexPreview_solenoidvalve++;
    if (nIndexPreview_solenoidvalve >= nIDNum_solenoidvalve) {
        nIndexPreview_solenoidvalve = 0;
        StopAnimate_solenoidvalve();
    } else {
        timerPreview_solenoidvalve = setTimeout("Animate_solenoidvalve()", nSpeed_solenoidvalve);
    }
}

function StopAnimate_solenoidvalve() {
    clearTimeout(timerPreview_solenoidvalve);
    timerPreview_solenoidvalve = 0;
}

var solenoidvalveState = false;
function StartStopAnimate_solenoidvalve() {
    solenoidvalveState = !solenoidvalveState;
    if(solenoidvalveState){
        ReadOrder_solenoidvalve(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Preview_solenoidvalve()
    } else{
        ReadOrder_solenoidvalve(10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        Preview_solenoidvalve()
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_solenoidvalve = strDir;
 }*/

function SetFolderName_solenoidvalve(strDir1, strDir2, strDir3) {
    strYMD_solenoidvalve = strDir1;
    strHour_solenoidvalve = strDir2;
    strFolder_solenoidvalve = strDir3;
}

function SetHomeFolder_solenoidvalve(nDir) {
    nHomeFolder_solenoidvalve = nDir;
}

function GetFolderName_solenoidvalve() {
    return strFolder_solenoidvalve;
}

function InitPreview_solenoidvalve() {
    var i = 0;
    var strHTML_solenoidvalve = "";
    var dir_name = GetFolderName_solenoidvalve();

    var strWidth = nWidth_solenoidvalve.toString();
    strWidth += "px";
    var strHeight = nHeight_solenoidvalve.toString();
    strHeight += "px";

    var strFolder_solenoidvalveFunny62 = strFolder_solenoidvalve.substring(0, 1);

    $("preview_box_solenoidvalve").style.visibility = "hidden";

    var nPicNum_solenoidvalve = 0;

    for (i = 0; i < nIDNum_solenoidvalve; i++) {
        var strDivName_solenoidvalve = "p_solenoidvalve" + i.toString();
        var strImgName_solenoidvalve = "pic_solenoidvalve" + i.toString();

        var strImg0 = "";

        newimages_solenoidvalve[i] = new Image();

        if (nHomeFolder_solenoidvalve == 1)
        //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_solenoidvalve + "/" + strHour_solenoidvalve + "/" + strFolder_solenoidvalve + "/" + arrFile_solenoidvalve[i];
            strImg0 = "img/SolenoidValve/" +arrFile_solenoidvalve[i];
        else if (nHomeFolder_solenoidvalve == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_solenoidvalve + "/" + strHour_solenoidvalve + "/" + strFolder_solenoidvalve + "/" + arrFile_solenoidvalve[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_solenoidvalveFunny62 + "/" + strFolder_solenoidvalve + "/" + arrFile_solenoidvalve[i];

        if (!bUseWHString_solenoidvalve)
        //strHTML_solenoidvalve += '<div id="' + strDivName_solenoidvalve + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_solenoidvalve + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_solenoidvalve += '<div id="' + strDivName_solenoidvalve + '" class="liquid"' + '<img id="' + strImgName_solenoidvalve + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_solenoidvalve[i];
            var nPicH = arrHString_solenoidvalve[i];


            //nWidth_solenoidvalve, nHeight_solenoidvalve

            if (nPicW == nWidth_solenoidvalve && nPicH == nHeight_solenoidvalve) {
                strHTML_solenoidvalve += '<div id="' + strDivName_solenoidvalve + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_solenoidvalve + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_solenoidvalve / nHeight_solenoidvalve;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_solenoidvalve;
                    nNewH = parseInt(nPicH * nWidth_solenoidvalve / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_solenoidvalve;
                    nNewW = parseInt(nPicW * nHeight_solenoidvalve / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_solenoidvalve - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_solenoidvalve - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_solenoidvalve += '<div id="' + strDivName_solenoidvalve + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_solenoidvalve + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_solenoidvalve += '<div id="' + strDivName_solenoidvalve + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_solenoidvalve + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_solenoidvalve[i].src = strImg0;
        newimages_solenoidvalve[i].onload = function () {

            nPicNum_solenoidvalve++;
            if (nPicNum_solenoidvalve == nIDNum_solenoidvalve)
                OnLoadAllPics_solenoidvalve();
            else {
                var nPercent = Math.floor(nPicNum_solenoidvalve / nIDNum_solenoidvalve * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_solenoidvalve;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_solenoidvalve() {
    for (var i = 0; i < nIDNum_solenoidvalve; i++) {
        var strDivName_solenoidvalve = "p_solenoidvalve" + i.toString();
        var strImgName_solenoidvalve = "pic_solenoidvalve" + i.toString();

        $(strImgName_solenoidvalve).src = newimages_solenoidvalve[i].src;
        $(strDivName_solenoidvalve).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_solenoidvalve.toString();
    strHeight += "px";
    $("preview_box_solenoidvalve").style.height = strHeight;

    $("preview_box_solenoidvalve").style.visibility = "visible";
    document.getElementById("p_solenoidvalve0").style.visibility = 'visible';
    if (solenoidvalveState)
        Preview_solenoidvalve();
}

function Preview_solenoidvalve() {
    StopAnimate_solenoidvalve();
    Animate_solenoidvalve();
}

function ResetImgNumber_solenoidvalve(n) {
    arrID_solenoidvalve.length = n;
    nIDNum_solenoidvalve = n;
}

function DisplayImages_solenoidvalve() {
    InitPreview_solenoidvalve();
}

function ReadFileName_solenoidvalve(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_solenoidvalve = nNum;
        arrFile_solenoidvalve.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_solenoidvalve[i] = arguments[i];
        }

        ResetImgNumber_solenoidvalve(nNum);
    }
}


function ReadWHString_solenoidvalve(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_solenoidvalve = true;
        arrWString_solenoidvalve.length = nNum / 2;
        arrHString_solenoidvalve.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_solenoidvalve[i / 2] = arguments[i];
            arrHString_solenoidvalve[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_solenoidvalve(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_solenoidvalve) {
            for (var i = 0; i < nNum; i++)
                arrID_solenoidvalve[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_solenoidvalve; i++)
                arrID_solenoidvalve[i] = i + 1;
        }
    }
}

function ReadWHS_solenoidvalve(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_solenoidvalve = arguments[0];
        nHeight_solenoidvalve = arguments[1];
        nSpeed_solenoidvalve = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
