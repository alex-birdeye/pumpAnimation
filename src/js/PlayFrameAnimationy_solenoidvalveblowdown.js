/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_solenoidvalveblowdown = 0;
var arrID_solenoidvalveblowdown = [1, 2];
var arrFile_solenoidvalveblowdown = ["1", "2"];
var bUseWHString_solenoidvalveblowdown = false;
var arrWString_solenoidvalveblowdown = ["1", "2"];
var arrHString_solenoidvalveblowdown = ["1", "2"];
var nActiveID_solenoidvalveblowdownIndex_solenoidvalveblowdown = 0;
var nActiveID_solenoidvalveblowdown = 0;

var timerPreview_solenoidvalveblowdown = 0;
var nIndexPreview_solenoidvalveblowdown = 0;
var nIndexPreviewLast_solenoidvalveblowdown = -1;
var nWidth_solenoidvalveblowdown = 0;
var nHeight_solenoidvalveblowdown = 0;
var nSpeed_solenoidvalveblowdown = 500;
var strYMD_solenoidvalveblowdown = "";
var strHour_solenoidvalveblowdown = "";
var strFolder_solenoidvalveblowdown = "";
var nHomeFolder_solenoidvalveblowdown = 1;
var newimages_solenoidvalveblowdown = [];

function Animate_solenoidvalveblowdown() {
    if (nIDNum_solenoidvalveblowdown <= 0)return;

    var strDivName_solenoidvalveblowdown = "";
    if (nIndexPreviewLast_solenoidvalveblowdown != -1) {
        strDivName_solenoidvalveblowdown = "p_solenoidvalveblowdown" + nIndexPreviewLast_solenoidvalveblowdown.toString();
        document.getElementById(strDivName_solenoidvalveblowdown).style.visibility = 'hidden';
    }

    var nIndex = arrID_solenoidvalveblowdown[nIndexPreview_solenoidvalveblowdown] - 1;
    strDivName_solenoidvalveblowdown = "p_solenoidvalveblowdown" + nIndex.toString();
    document.getElementById(strDivName_solenoidvalveblowdown).style.visibility = 'visible';

    nIndexPreviewLast_solenoidvalveblowdown = nIndex;

    nIndexPreview_solenoidvalveblowdown++;
    if (nIndexPreview_solenoidvalveblowdown >= nIDNum_solenoidvalveblowdown) {
        nIndexPreview_solenoidvalveblowdown = 0;
        StopAnimate_solenoidvalveblowdown();
    } else {
        timerPreview_solenoidvalveblowdown = setTimeout("Animate_solenoidvalveblowdown()", nSpeed_solenoidvalveblowdown);
    }
}

function StopAnimate_solenoidvalveblowdown() {
    clearTimeout(timerPreview_solenoidvalveblowdown);
    timerPreview_solenoidvalveblowdown = 0;
}

var isSolenoidValveBlowDownOpened = false;
function openSolenoidValveBlowDown(){
    if(!isSolenoidValveBlowDownOpened){
        ReadOrder_solenoidvalveblowdown(10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        Preview_solenoidvalveblowdown();
        isSolenoidValveBlowDownOpened = !isSolenoidValveBlowDownOpened;
    }
}
function closeSolenoidValveBlowDown() {
    if (isSolenoidValveBlowDownOpened) {
        ReadOrder_solenoidvalveblowdown(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Preview_solenoidvalveblowdown();
        isSolenoidValveBlowDownOpened = !isSolenoidValveBlowDownOpened;
    }
}

//var solenoidvalveblowdownState = false;
//function StartStopAnimate_solenoidvalveblowdown() {
//    solenoidvalveblowdownState = !solenoidvalveblowdownState;
//    if(solenoidvalveblowdownState){
//    } else{
//    }
//}

/*
 function SetFolderName( strDir )
 {
 strFolder_solenoidvalveblowdown = strDir;
 }*/

function SetFolderName_solenoidvalveblowdown(strDir1, strDir2, strDir3) {
    strYMD_solenoidvalveblowdown = strDir1;
    strHour_solenoidvalveblowdown = strDir2;
    strFolder_solenoidvalveblowdown = strDir3;
}

function SetHomeFolder_solenoidvalveblowdown(nDir) {
    nHomeFolder_solenoidvalveblowdown = nDir;
}

function GetFolderName_solenoidvalveblowdown() {
    return strFolder_solenoidvalveblowdown;
}

function InitPreview_solenoidvalveblowdown() {
    var i = 0;
    var strHTML_solenoidvalveblowdown = "";
    var dir_name = GetFolderName_solenoidvalveblowdown();

    var strWidth = nWidth_solenoidvalveblowdown.toString();
    strWidth += "px";
    var strHeight = nHeight_solenoidvalveblowdown.toString();
    strHeight += "px";

    var strFolder_solenoidvalveblowdownFunny62 = strFolder_solenoidvalveblowdown.substring(0, 1);

    $("preview_box_solenoidvalveblowdown").style.visibility = "hidden";

    var nPicNum_solenoidvalveblowdown = 0;

    for (i = 0; i < nIDNum_solenoidvalveblowdown; i++) {
        var strDivName_solenoidvalveblowdown = "p_solenoidvalveblowdown" + i.toString();
        var strImgName_solenoidvalveblowdown = "pic_solenoidvalveblowdown" + i.toString();

        var strImg0 = "";

        newimages_solenoidvalveblowdown[i] = new Image();

        if (nHomeFolder_solenoidvalveblowdown == 1)
        //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_solenoidvalveblowdown + "/" + strHour_solenoidvalveblowdown + "/" + strFolder_solenoidvalveblowdown + "/" + arrFile_solenoidvalveblowdown[i];
            strImg0 = "img/SolenoidValveBlowDown/" +arrFile_solenoidvalveblowdown[i];
        else if (nHomeFolder_solenoidvalveblowdown == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_solenoidvalveblowdown + "/" + strHour_solenoidvalveblowdown + "/" + strFolder_solenoidvalveblowdown + "/" + arrFile_solenoidvalveblowdown[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_solenoidvalveblowdownFunny62 + "/" + strFolder_solenoidvalveblowdown + "/" + arrFile_solenoidvalveblowdown[i];

        if (!bUseWHString_solenoidvalveblowdown)
        //strHTML_solenoidvalveblowdown += '<div id="' + strDivName_solenoidvalveblowdown + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_solenoidvalveblowdown + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_solenoidvalveblowdown += '<div id="' + strDivName_solenoidvalveblowdown + '" class="liquid"' + '<img id="' + strImgName_solenoidvalveblowdown + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_solenoidvalveblowdown[i];
            var nPicH = arrHString_solenoidvalveblowdown[i];


            //nWidth_solenoidvalveblowdown, nHeight_solenoidvalveblowdown

            if (nPicW == nWidth_solenoidvalveblowdown && nPicH == nHeight_solenoidvalveblowdown) {
                strHTML_solenoidvalveblowdown += '<div id="' + strDivName_solenoidvalveblowdown + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_solenoidvalveblowdown + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_solenoidvalveblowdown / nHeight_solenoidvalveblowdown;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_solenoidvalveblowdown;
                    nNewH = parseInt(nPicH * nWidth_solenoidvalveblowdown / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_solenoidvalveblowdown;
                    nNewW = parseInt(nPicW * nHeight_solenoidvalveblowdown / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_solenoidvalveblowdown - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_solenoidvalveblowdown - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_solenoidvalveblowdown += '<div id="' + strDivName_solenoidvalveblowdown + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_solenoidvalveblowdown + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_solenoidvalveblowdown += '<div id="' + strDivName_solenoidvalveblowdown + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_solenoidvalveblowdown + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_solenoidvalveblowdown[i].src = strImg0;
        newimages_solenoidvalveblowdown[i].onload = function () {

            nPicNum_solenoidvalveblowdown++;
            if (nPicNum_solenoidvalveblowdown == nIDNum_solenoidvalveblowdown)
                OnLoadAllPics_solenoidvalveblowdown();
            else {
                var nPercent = Math.floor(nPicNum_solenoidvalveblowdown / nIDNum_solenoidvalveblowdown * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_solenoidvalveblowdown;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_solenoidvalveblowdown() {
    for (var i = 0; i < nIDNum_solenoidvalveblowdown; i++) {
        var strDivName_solenoidvalveblowdown = "p_solenoidvalveblowdown" + i.toString();
        var strImgName_solenoidvalveblowdown = "pic_solenoidvalveblowdown" + i.toString();

        $(strImgName_solenoidvalveblowdown).src = newimages_solenoidvalveblowdown[i].src;
        $(strDivName_solenoidvalveblowdown).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_solenoidvalveblowdown.toString();
    strHeight += "px";
    $("preview_box_solenoidvalveblowdown").style.height = strHeight;

    $("preview_box_solenoidvalveblowdown").style.visibility = "visible";
    document.getElementById("p_solenoidvalveblowdown9").style.visibility = 'visible';
    if (solenoidvalveblowdownState)
        Preview_solenoidvalveblowdown();
}

function Preview_solenoidvalveblowdown() {
    StopAnimate_solenoidvalveblowdown();
    Animate_solenoidvalveblowdown();
}

function ResetImgNumber_solenoidvalveblowdown(n) {
    arrID_solenoidvalveblowdown.length = n;
    nIDNum_solenoidvalveblowdown = n;
}

function DisplayImages_solenoidvalveblowdown() {
    InitPreview_solenoidvalveblowdown();
}

function ReadFileName_solenoidvalveblowdown(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_solenoidvalveblowdown = nNum;
        arrFile_solenoidvalveblowdown.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_solenoidvalveblowdown[i] = arguments[i];
        }

        ResetImgNumber_solenoidvalveblowdown(nNum);
    }
}


function ReadWHString_solenoidvalveblowdown(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_solenoidvalveblowdown = true;
        arrWString_solenoidvalveblowdown.length = nNum / 2;
        arrHString_solenoidvalveblowdown.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_solenoidvalveblowdown[i / 2] = arguments[i];
            arrHString_solenoidvalveblowdown[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_solenoidvalveblowdown(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_solenoidvalveblowdown) {
            for (var i = 0; i < nNum; i++)
                arrID_solenoidvalveblowdown[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_solenoidvalveblowdown; i++)
                arrID_solenoidvalveblowdown[i] = i + 1;
        }
    }
}

function ReadWHS_solenoidvalveblowdown(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_solenoidvalveblowdown = arguments[0];
        nHeight_solenoidvalveblowdown = arguments[1];
        nSpeed_solenoidvalveblowdown = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
