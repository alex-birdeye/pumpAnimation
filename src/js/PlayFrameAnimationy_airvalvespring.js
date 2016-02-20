/**
 * Created by youser on 2/8/16.
 */
var _debug = $('debug');

var nIDNum_airvalvespring = 0;
var arrID_airvalvespring = [1, 2];
var arrFile_airvalvespring = ["1", "2"];
var bUseWHString_airvalvespring = false;
var arrWString_airvalvespring = ["1", "2"];
var arrHString_airvalvespring = ["1", "2"];
var nActiveID_airvalvespringIndex_airvalvespring = 0;
var nActiveID_airvalvespring = 0;

var timerPreview_airvalvespring = 0;
var nIndexPreview_airvalvespring = 0;
var nIndexPreviewLast_airvalvespring = -1;
var nWidth_airvalvespring = 0;
var nHeight_airvalvespring = 0;
var nSpeed_airvalvespring = 500;
var strYMD_airvalvespring = "";
var strHour_airvalvespring = "";
var strFolder_airvalvespring = "";
var nHomeFolder_airvalvespring = 1;
var newimages_airvalvespring = [];

function Animate_airvalvespring() {
    if (nIDNum_airvalvespring <= 0)return;

    var strDivName_airvalvespring = "";
    //console.log('nIndexPreviewLast_airvalvespring = ' + nIndexPreviewLast_airvalvespring);
    if (nIndexPreviewLast_airvalvespring != -1) {
        strDivName_airvalvespring = "p_airvalvespring" + nIndexPreviewLast_airvalvespring.toString();
        document.getElementById(strDivName_airvalvespring).style.visibility = 'hidden';
    }

    var nIndex = arrID_airvalvespring[nIndexPreview_airvalvespring] - 1;
    strDivName_airvalvespring = "p_airvalvespring" + nIndex.toString();
    document.getElementById(strDivName_airvalvespring).style.visibility = 'visible';

    nIndexPreviewLast_airvalvespring = nIndex;

    nIndexPreview_airvalvespring++;
    if (nIndexPreview_airvalvespring >= nIDNum_airvalvespring) {
        nIndexPreview_airvalvespring = 0;
        StopAnimate_airvalvespring();
    } else {
        timerPreview_airvalvespring = setTimeout("Animate_airvalvespring()", nSpeed_airvalvespring);
    }

}

function StopAnimate_airvalvespring() {
    clearTimeout(timerPreview_airvalvespring);
    timerPreview_airvalvespring = 0;
}

var airvalvespringState = false;
function StartStopAnimate_airvalvespring() {
    airvalvespringState = !airvalvespringState;
    if (airvalvespringState) {
        ReadOrder_airvalvespring(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Preview_airvalvespring()
    } else {
        ReadOrder_airvalvespring(10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
        Preview_airvalvespring()
        //StopAnimate_airvalvespring();
    }
}

/*
 function SetFolderName( strDir )
 {
 strFolder_airvalvespring = strDir;
 }*/

function SetFolderName_airvalvespring(strDir1, strDir2, strDir3) {
    strYMD_airvalvespring = strDir1;
    strHour_airvalvespring = strDir2;
    strFolder_airvalvespring = strDir3;
}

function SetHomeFolder_airvalvespring(nDir) {
    nHomeFolder_airvalvespring = nDir;
}

function GetFolderName_airvalvespring() {
    return strFolder_airvalvespring;
}

function InitPreview_airvalvespring() {
    var i = 0;
    var strHTML_airvalvespring = "";
    var dir_name = GetFolderName_airvalvespring();

    var strWidth = nWidth_airvalvespring.toString();
    strWidth += "px";
    var strHeight = nHeight_airvalvespring.toString();
    strHeight += "px";

    var strFolder_airvalvespringFunny62 = strFolder_airvalvespring.substring(0, 1);

    $("preview_box_airvalvespring").style.visibility = "hidden";

    var nPicNum_airvalvespring = 0;

    for (i = 0; i < nIDNum_airvalvespring; i++) {
        var strDivName_airvalvespring = "p_airvalvespring" + i.toString();
        var strImgName_airvalvespring = "pic_airvalvespring" + i.toString();

        var strImg0 = "";

        newimages_airvalvespring[i] = new Image();

        if (nHomeFolder_airvalvespring == 1)
        //strImg0 = "http://gifmaker.me/files/download/home/" + strYMD_airvalvespring + "/" + strHour_airvalvespring + "/" + strFolder_airvalvespring + "/" + arrFile_airvalvespring[i];
            strImg0 = "img/AirValveSpring/" + arrFile_airvalvespring[i];
        else if (nHomeFolder_airvalvespring == 8)
            strImg0 = "http://148.251.91.98/000/" + strYMD_airvalvespring + "/" + strHour_airvalvespring + "/" + strFolder_airvalvespring + "/" + arrFile_airvalvespring[i];
        else
            strImg0 = "http://gifmaker.me/files/download/funny/" + strFolder_airvalvespringFunny62 + "/" + strFolder_airvalvespring + "/" + arrFile_airvalvespring[i];

        if (!bUseWHString_airvalvespring)
        //strHTML_airvalvespring += '<div id="' + strDivName_airvalvespring + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_airvalvespring + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            strHTML_airvalvespring += '<div id="' + strDivName_airvalvespring + '" class="liquid"' + '<img id="' + strImgName_airvalvespring + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
        else {
            var nPicW = arrWString_airvalvespring[i];
            var nPicH = arrHString_airvalvespring[i];


            //nWidth_airvalvespring, nHeight_airvalvespring

            if (nPicW == nWidth_airvalvespring && nPicH == nHeight_airvalvespring) {
                strHTML_airvalvespring += '<div id="' + strDivName_airvalvespring + '" class="preview" style="width:' + strWidth + ';height:' + strHeight + ' ;">' + '<img id="' + strImgName_airvalvespring + '" style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';
            }
            else {
                //scale to same W
                var fScalePic = nPicW / nPicH;
                var fScaleDiv = nWidth_airvalvespring / nHeight_airvalvespring;

                var nNewW = 0;
                var nNewH = 0;

                if (fScalePic > fScaleDiv)//w
                {
                    nNewW = nWidth_airvalvespring;
                    nNewH = parseInt(nPicH * nWidth_airvalvespring / nPicW);
                }
                else//h
                {
                    nNewH = nHeight_airvalvespring;
                    nNewW = parseInt(nPicW * nHeight_airvalvespring / nPicH);
                }

                //	nNewW =  nPicW;
                //	nNewH = nPicH;

                var strWidthN = nNewW.toString();
                strWidthN += "px";
                var strHeightN = nNewH.toString();
                strHeightN += "px";

                var nPaddingW = parseInt(( nWidth_airvalvespring - nNewW ) / 2);
                var nPaddingH = parseInt(( nHeight_airvalvespring - nNewH ) / 2);

                var nDivW = nNewW;
                var nDivH = nNewH;

                var strDivW = nDivW.toString() + "px";
                var strDivH = nDivH.toString() + "px";

                var strPaddingW = nPaddingW.toString();
                var strPaddingH = nPaddingH.toString();
                var strPadding = "padding:" + strPaddingH + "px " + strPaddingW + "px " + strPaddingH + "px " + strPaddingW + "px;";

                strHTML_airvalvespring += '<div id="' + strDivName_airvalvespring + '" style="position:absolute;float:left;' + strPadding + 'width:' + strDivW + ';height:' + strDivH + ' ;">' + '<img id="' + strImgName_airvalvespring + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';
                //strHTML_airvalvespring += '<div id="' + strDivName_airvalvespring + '" style="position:absolute;top:300px;left:600px;">' + '<img id="' + strImgName_airvalvespring + '" style="margin:0;padding:0;border:0px;width:' + strWidthN + ';height:' + strHeightN + ';">' + '</div>';

            }
        }


        newimages_airvalvespring[i].src = strImg0;
        newimages_airvalvespring[i].onload = function () {

            nPicNum_airvalvespring++;
            if (nPicNum_airvalvespring == nIDNum_airvalvespring)
                OnLoadAllPics_airvalvespring();
            else {
                var nPercent = Math.floor(nPicNum_airvalvespring / nIDNum_airvalvespring * 100);
                $("Loading_box").innerHTML = "Loading... " + nPercent.toString() + "%";
            }
        };

    }
    $("preview_box").innerHTML = strHTML_airvalvespring;
    $("preview_box").style.width = strWidth;
    $("preview_box").style.height = "0px";
}

function OnLoadAllPics_airvalvespring() {
    for (var i = 0; i < nIDNum_airvalvespring; i++) {
        var strDivName_airvalvespring = "p_airvalvespring" + i.toString();
        var strImgName_airvalvespring = "pic_airvalvespring" + i.toString();

        $(strImgName_airvalvespring).src = newimages_airvalvespring[i].src;
        $(strDivName_airvalvespring).style.visibility = "hidden";
    }

    $("Loading_box").style.height = "0px";
    $("Loading_box").style.visibility = "hidden";

    var strHeight = nHeight_airvalvespring.toString();
    strHeight += "px";
    $("preview_box_airvalvespring").style.height = strHeight;

    $("preview_box_airvalvespring").style.visibility = "visible";

    document.getElementById("p_airvalvespring0").style.visibility = 'visible';
    if (airvalvespringState)
        Preview_airvalvespring();
}

function Preview_airvalvespring() {
    StopAnimate_airvalvespring();
    Animate_airvalvespring();
}

function ResetImgNumber_airvalvespring(n) {
    arrID_airvalvespring.length = n;
    nIDNum_airvalvespring = n;
}

function DisplayImages_airvalvespring() {
    InitPreview_airvalvespring();
}

function ReadFileName_airvalvespring(strFileNameList) {
    var nNum = arguments.length;
    if (nNum > 0) {
        nIDNum_airvalvespring = nNum;
        arrFile_airvalvespring.length = nNum;

        for (var i = 0; i < nNum; i++) {
            arrFile_airvalvespring[i] = arguments[i];
        }

        ResetImgNumber_airvalvespring(nNum);
    }
}


function ReadWHString_airvalvespring(strWHList) {
    var nNum = arguments.length;

    if (nNum > 0) {
        bUseWHString_airvalvespring = true;
        arrWString_airvalvespring.length = nNum / 2;
        arrHString_airvalvespring.length = nNum / 2;

        for (var i = 0; i < nNum; i += 2) {
            arrWString_airvalvespring[i / 2] = arguments[i];
            arrHString_airvalvespring[i / 2] = arguments[i + 1];
        }

    }
}

function ReadOrder_airvalvespring(strOrder) {
    var nNum = arguments.length;

    if (nNum > 0) {
        if (nNum == nIDNum_airvalvespring) {
            for (var i = 0; i < nNum; i++)
                arrID_airvalvespring[i] = arguments[i];
        }
        else {
            for (var i = 0; i < nIDNum_airvalvespring; i++)
                arrID_airvalvespring[i] = i + 1;
        }
    }
}

function ReadWHS_airvalvespring(strWHS) {
    var nNum = arguments.length;

    if (nNum == 3) {
        nWidth_airvalvespring = arguments[0];
        nHeight_airvalvespring = arguments[1];
        nSpeed_airvalvespring = arguments[2];
    }
}

function $(id) {
    return document.getElementById(id);
}
