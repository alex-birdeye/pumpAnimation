/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_enginespring = 0;
var arrID_enginespring = [1, 2];
var arrFile_enginespring = ["1", "2"];
var bUseWHString_enginespring = false;
var arrWString_enginespring = ["1", "2"];
var arrHString_enginespring = ["1", "2"];
var nActiveID_enginespringIndex_enginespring = 0;
var nActiveID_enginespring = 0;

var timerPreview_enginespring = 0;
var nIndexPreview_enginespring = 0;
var nIndexPreviewLast_enginespring = -1;
var nWidth_enginespring = 0;
var nHeight_enginespring = 0;
var nSpeed_enginespring = 500;
var strYMD_enginespring = "";
var strHour_enginespring = "";
var strFolder_enginespring = "";
var nHomeFolder_enginespring = 1;
var newimages_enginespring = [];

function Animate_enginespring() {
    if (nIDNum_enginespring <= 0)return;

    var strDivName_enginespring = "";
    if (nIndexPreviewLast_enginespring != -1) {
        strDivName_enginespring = "p_enginespring" + nIndexPreviewLast_enginespring.toString();
        document.getElementById(strDivName_enginespring).style.visibility = 'hidden';
    }

    var nIndex = arrID_enginespring[nIndexPreview_enginespring] - 1;
    strDivName_enginespring = "p_enginespring" + nIndex.toString();
    document.getElementById(strDivName_enginespring).style.visibility = 'visible';

    nIndexPreviewLast_enginespring = nIndex;

    nIndexPreview_enginespring++;
    if (nIndexPreview_enginespring >= nIDNum_enginespring) {
        nIndexPreview_enginespring = 0;
        StopAnimate_enginespring();
    } else {
        timerPreview_enginespring = setTimeout("Animate_enginespring()", nSpeed_enginespring);
    }
}

function StopAnimate_enginespring() {
    clearTimeout(timerPreview_enginespring);
    timerPreview_enginespring = 0;
}


var isEngineSpringOpened = false;
function openEngineSpring(){
    if(!isEngineSpringOpened){
        ReadOrder_enginespring(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Preview_enginespring();
        isEngineSpringOpened = !isEngineSpringOpened;
    }
}
function closeEngineSpring(){
    if(isEngineSpringOpened){
        ReadOrder_enginespring(9, 8, 7, 6, 5, 4, 3, 2, 1);
        Preview_enginespring();
        isEngineSpringOpened = !isEngineSpringOpened;
    }
}

var enginespringState = false;
function StartStopAnimate_enginespring() {
    enginespringState = !enginespringState;
    if(enginespringState){
    } else{
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_enginespring = strDir;
 }*/

function SetFolderName_enginespring(strDir1, strDir2, strDir3) {
    strYMD_enginespring = strDir1;
    strHour_enginespring = strDir2;
    strFolder_enginespring = strDir3;
}

function SetHomeFolder_enginespring(nDir) {
    nHomeFolder_enginespring = nDir;
}

function GetFolderName_enginespring() {
    return strFolder_enginespring;
}

function InitPreview_enginespring() {
    var i = 0;
    var strHTML_enginespring = "";
    var dir_name = GetFolderName_enginespring();

    var strWidth = nWidth_enginespring.toString();
    strWidth += "px";
    var strHeight = nHeight_enginespring.toString();
    strHeight += "px";

    var strFolder_enginespringFunny62 = strFolder_enginespring.substring(0, 1);

    $("preview_box_enginespring").style.visibility = "hidden";

    var nPicNum_enginespring = 0;

    for (i = 0; i < nIDNum_enginespring; i++) {
        var strDivName_enginespring = "p_enginespring" + i.toString();
        var strImgName_enginespring = "pic_enginespring" + i.toString();

        var strImg0 = "";

        newimages_enginespring[i] = new Image();

        if (nHomeFolder_enginespring == 1)
        //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_enginespring + "/" + strHour_enginespring + "/" + strFolder_enginespring + "/" + arrFile_enginespring[i];
            strImg0 = "img/EngineSpring/" +arrFile_enginespring[i];
        else if (nHomeFolder_enginespring == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_enginespring + "/" + strHour_enginespring + "/" + strFolder_enginespring + "/" + arrFile_enginespring[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_enginespringFunny62 + "/" + strFolder_enginespring + "/" + arrFile_enginespring[i];

        if (!bUseWHString_enginespring)
        //strHTML_enginespring += '<div id="' + strDivName_enginespring + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_enginespring + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_enginespring += '<div id="' + strDivName_enginespring + '" class="liquid"' + '<img id="' + strImgName_enginespring + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_enginespring[i];
            var nPicH = arrHString_enginespring[i];


            //nWidth_enginespring, nHeight_enginespring

            if (nPicW == nWidth_enginespring && nPicH == nHeight_enginespring) {
                strHTML_enginespring += '<div id="' + strDivName_enginespring + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_enginespring + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_enginespring / nHeight_enginespring;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_enginespring;
                    nNewH = parseInt(nPicH * nWidth_enginespring / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_enginespring;
                    nNewW = parseInt(nPicW * nHeight_enginespring / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_enginespring - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_enginespring - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_enginespring += '<div id="' + strDivName_enginespring + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_enginespring + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_enginespring += '<div id="' + strDivName_enginespring + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_enginespring + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_enginespring[i].src = strImg0;
        newimages_enginespring[i].onload = function () {

            nPicNum_enginespring++;
            if (nPicNum_enginespring == nIDNum_enginespring)
                OnLoadAllPics_enginespring();
            else {
                var nPercent = Math.floor(nPicNum_enginespring / nIDNum_enginespring * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_enginespring;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_enginespring() {
    for (var i = 0; i < nIDNum_enginespring; i++) {
        var strDivName_enginespring = "p_enginespring" + i.toString();
        var strImgName_enginespring = "pic_enginespring" + i.toString();

        $(strImgName_enginespring).src = newimages_enginespring[i].src;
        $(strDivName_enginespring).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_enginespring.toString();
    strHeight += "px";
    $("preview_box_enginespring").style.height = strHeight;

    $("preview_box_enginespring").style.visibility = "visible";
    document.getElementById("p_enginespring0").style.visibility = 'visible';
    if (enginespringState)
        Preview_enginespring();
}

function Preview_enginespring() {
    StopAnimate_enginespring();
    Animate_enginespring();
}

function ResetImgNumber_enginespring(n) {
    arrID_enginespring.length = n;
    nIDNum_enginespring = n;
}

function DisplayImages_enginespring() {
    InitPreview_enginespring();
}

function ReadFileName_enginespring(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_enginespring = nNum;
        arrFile_enginespring.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_enginespring[i] = arguments[i];
        }

        ResetImgNumber_enginespring(nNum);
    }
}


function ReadWHString_enginespring(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_enginespring = true;
        arrWString_enginespring.length = nNum / 2;
        arrHString_enginespring.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_enginespring[i / 2] = arguments[i];
            arrHString_enginespring[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_enginespring(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_enginespring) {
            for (var i = 0; i < nNum; i++)
                arrID_enginespring[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_enginespring; i++)
                arrID_enginespring[i] = i + 1;
        }
    }
}

function ReadWHS_enginespring(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_enginespring = arguments[0];
        nHeight_enginespring = arguments[1];
        nSpeed_enginespring = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
