/**
 * ===================================
 *         ModAPI Definitions
 * ===================================
 */

/**
 * For more info and documentations, visit:
 * https://eaglerforge.github.io/
 */


/**
The Mod API consists of a global JavaScript object on the window, called, very simply, ModAPI.
 */
declare namespace ModAPI {
    namespace events {
        let types: string[];
        namespace listeners {
            let event: any[];
        }
        function newEvent(name: string): void;
        function callEvent(name: string, data: any): void;
    }
    namespace globals {
        function _initUpdate(): void;
    }

    /**
    Represents the player.
     */
    namespace player {
        function isBurning(): boolean;
        function isPushedByWater(): boolean;
        function isEating(): boolean;
        function isEntityAlive(): boolean;
        function isEntityInsideOpaqueBlock(): boolean;
        function isImmuneToExplosions(): boolean;
        function isInLava(): boolean;
        function isInWater(): boolean;
        function isInvisible(): boolean;
        function isPushedByWater(): boolean;
        function isRiding(): boolean;
        function isSilent(): boolean;
        function isSneaking(): boolean;
        function isSprinting(): boolean;
        function isWet(): boolean;
        function setBeenAttacked(): void;
        function setDead(): void;
        function setInWeb(): void;
        function setOnFireFromLava(): void;
        function getUUID(): string;
        function getAir(): number;
        function getAlwaysRenderNameTag(): boolean;
        function getAlwaysRenderNameTagForRender(): boolean;
        function getBrightness(json: any): number;
        function getBrightnessForRender(json: any): number;
        function reload(): void;
        function getCollisionBorderSize(): number;
        let lastReportedPosX: number
        let lastReportedPosY: number
        let lastReportedPosZ: number
        let lastReportedYaw: number
        let lastReportedPitch: number
        let serverSneakState: boolean
        let serverSprintState: boolean
        let positionUpdateTicks: number
        let hasValidHealth: boolean
        let clientBrand: string
        let sprintToggleTimer: number
        let sprintingTicksLeft: number
        let renderArmYaw: number
        let renderArmPitch: number
        let prevRenderArmYaw: number
        let prevRenderArmPitch: number
        let horseJumpPower: number
        let horseJumpPowerCounter: number
        let x: number;
        let y: number;
        let z: number;
        let chunkCoordX: number;
        let chunkCoordY: number;
        let chunkCoordZ: number;
        let motionX: number;
        let motionY: number;
        let motionZ: number;
        let yaw: number;
        let pitch: number;
        let isInWeb: boolean;
        let isCollided: boolean;
        let isCollidedVertically: boolean;
        let isCollidedHorizontally: boolean;
        let onGround: boolean;
        let dimension: number;
        let id: number;
        let fallDistance: number;
        let noClip: boolean;
        let stepHeight: number;
        let isDead: boolean;
        let inPortal: boolean;
        let inWater: boolean;
        let isAirBorne: boolean;
        let ticksExisted: number;
        let invulnerable: boolean;
        let isImmuneToFire: boolean;
        let isOutsideBorder: boolean;
        let entityCollisionReduction: number;
        let isSwingInProgress: boolean;
        let arrowHitTimer: number;
        let hurtTime: number;
        let maxHurtTime: number;
        let swingProgressInt: number;
        let dead: boolean;
        let isJumping: boolean;
        function jump(): void;
        function kill(): void;
        namespace inventory {
            let currentItem: number;
            let inventoryChanged: boolean;
            let mainInventory: any[];
            let armorInventory: any[];
        }
        namespace capabilities {
            let disableDamage: boolean;
            let isFlying: boolean;
            let allowFlying: boolean;
            let isCreativeMode: boolean;
            let allowEdit: boolean;
            let flySpeed: number;
            let walkSpeed: number;
            function getFlySpeed(): number;
            function getWalkSpeed(): number;
            function setFlySpeed(json: any): void;
            function setPlayerWalkSpeed(json: any): void;
        }
        let cameraYaw: number;
        let chasingPosX: number;
        let chasingPosY: number;
        let chasingPosZ: number;
        let experience: number;
        let experienceLevel: number;
        let experienceTotal: number;
    }

    /**for getting the scaled screen resolution. */
    namespace ScaledResolution{
        function getScaledWidth(): number
        function getScaledHeight(): number
        function getScaledWidth_double(): number
        function getScaledHeight_double(): number
        function getScaleFactor(): any //idk
    }

    namespace logger{
        function loginfo(json: any)
        function logerror(json: any)
        function logdebug(json: any)
        function logwarn(json: any)
        function logfatal(json: any)
        function logtrace(json: any)
    }

    namespace platform{
        // TODO: add methods
    }

    // TODO: add other globals and more comments

    /** 
    This is the Minecraft instance exposed to JavaScript. It has no wrapping, and so many properties will be illegible. To use it, I would recommend editing the build.gradle in the workspace to set minifying: false; [Auto]
    */
    let mcinstance: object
    /** The version of the EaglerForge.*/
    let version: string;
    /**The brand of the Eaglercraft client, taken from ClientBrandRetriever.java */
    let clientBrand: string;
    /**This method is used to add event listeners to the event name specified. */
    function addEventListener(name: string, callback: any): void;
    /**This method is used to remove event listeners to the event name specified. */
    function removeEventListener(name: string, func: any, slow: any): void;
    /**This method is used to tell `ModAPI` that a global needs to be generated. */
    function require(component: string): void;
    /**Force triggers a Mod API update. */
    function update(): void;
    /**Triggers a left click ingame. */
    function clickMouse(): void;
    /**Triggers a right click ingame. */
    function rightClickMouse(): void;
    /**Displays client-side message to user's ingame chat gui. how to use: `ModAPI.displayToChat({msg: "example"})` */
    function displayToChat(json: any): void;
    /**uwuifys your string...  how to use: `ModAPI.uwuify({string: "example"})` output: "exwmpwe"*/
    function uwuify(json: any): string;
    /**returns the current fps */
    function getFPS(): number
    /**returns the current screen as a string */
    function currentscreen(): string
    function getdisplayHeight(): number
    function getdisplayWidth(): number
    function getFONT_HEIGHT(): number
    /**draws your string to screen and needs to be ran when the `drawhud` event is called. the color parameter needs be hex but # is replaced with 0x */
    function drawStringWithShadow(json: any): void
    /**draws your string to screen WITHOUT THE SHADOW and needs to be ran when the `drawhud` event is called. the color parameter needs be hex but # is replaced with 0x */
    function drawString(json: any): void
    /**draws a rect to screen and needs to be ran when the `drawhud` event is called. the color parameter needs be hex but # is replaced with 0x */
    function drawrect(json: any):void
}


// vexdev was here...
// radmanplays was here too.