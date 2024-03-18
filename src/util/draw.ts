export function drawString(message: string, posX: number, posY: number, stringcolor: any){
    ModAPI.drawString({msg: message, x: posX, y: posY, color: stringcolor})
}

export function drawStringWithShadow(message: string, posX: number, posY: number, stringcolor: any){
    ModAPI.drawStringWithShadow({msg: message, x: posX, y: posY, color: stringcolor})
}

export function drawrect(rectleft: number, recttop: number, rectright: number, rectbottom: number, rectcolor: any){
    ModAPI.drawrect({left: rectleft, top: recttop, right: rectright, bottom: rectbottom, color: rectcolor})
}