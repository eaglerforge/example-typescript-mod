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
        function isBurning(): boolean 
        function isPushedByWater(): boolean 
        function isEating(): boolean 
        function isEntityAlive(): boolean 
        function isEntityInsideOpaqueBlock(): boolean 
        function isImmuneToExplosions(): boolean 
        function isInLava(): boolean 
        function isInRangeToRender3d(json: any): boolean 
        function isInRangeToRenderDist(json: any): boolean 
        function isInWater(): boolean 
        function isInvisible(): boolean 
        function isPushedByWater(): boolean 
        function isRiding(): boolean 
        function isSilent(): boolean 
        function isSneaking(): boolean 
        function isSprinting(): boolean 
        function isWet(): boolean 
        function setAir(json: any): void 
        function setAlwaysRenderNameTag(json: any): void 
        function setAngles(json: any): void 
        function setBeenAttacked(): void 
        function setCustomNameTag(json: any): void 
        function setDead(): void 
        function setEating(json: any): void 
        function setEntityId(json: any): void 
        function setFire(json: any): void 
        function setFlag(json: any): void 
        function setInWeb(): void 
        function setInvisible(json: any): void 
        function setLocationAndAngles(json: any): void 
        function setOnFireFromLava(): void 
        function setOutsideBorder(json: any): void 
        function setPosition(json: any): void 
        function setPositionAndRotation(json: any): void 
        function setPositionAndRotation2(json: any): void 
        function setPositionAndUpdate(json: any): void 
        function setRotation(json: any): void 
        function setRotationYawHead(json: any): void 
        function setSilent(json: any): void 
        function setSize(json: any): void 
        function setSneaking(json: any): void 
        function setSprinting(json: any): void 
        function setVelocity(json: any): void 
        function getUUID(): string 
        function getAir(): number 
        function getAlwaysRenderNameTag(): boolean 
        function getAlwaysRenderNameTagForRender(): boolean 
        function getBrightness(json: any): number 
        function getBrightnessForRender(json: any): number 
        function getCollisionBorderSize(): number 
        function getCollisionBoundingBox()
        function getCommandSenderEntity()
        function getCustomNameTag(): string 
        function getDisplayName(): string 
        function getDisplayNameFormatted(): string 
        function getDistance(json: any): number 
        function getDistanceSq(json: any): number 
        function getMountedYOffset(): number 
        function getEntityId(): number 
        function getEntityString(): string 
        function getEyeHeight(): number 
        function getFlag(json: any): boolean 
        function getMaxFallHeight(): number 
        function getMaxInPortalTime(): number 
        function getName(): string 
        function getParts()
        function getPortalCooldown(): number 
        function getRotationYawHead(): number 
        function getSplashSound(): string 
        function getSwimSound(): string 
        function getYOffset(): number 
        function getClassName(): string 
        function getPositionVector()
        function getPositionEyes(json: any) 
        function getLook(json: any)
        function getLookVec()
        function getVectorForRotation(json: any)
        function toNBT(): string
        function fromNBT(json: any): void 
        function getPreviousEquipment()
        function getAttackingPlayer()
        function getLastAttacker()
        function getEntityLivingToAttack() 
        function setEntityLivingToAttack(json: any): void 
        function canBreatheUnderwater(): boolean 
        function isChild(): boolean 
        function canDropLoot(): boolean 
        function decreaseAirSupply(json: any): number 
        function isPlayer(): boolean 
        function getAITarget()
        function getRevengeTimer(): number 
        function getLastAttackerTime(): number 
        function getAge(): number 
        function clearActivePotions(): void 
        function isPotionActive(json: any): boolean 
        function isEntityUndead(): boolean 
        function removePotionEffectClient(json: any): void 
        function removePotionEffect(json: any): void 
        function heal(json: any): void 
        function getHealth(): number 
        function setHealth(json: any): void 
        function getHurtSound(): string 
        function getDeathSound(): string 
        function addRandomDrop(): void 
        function isOnLadder(): boolean 
        function isEntityAlive(): boolean 
        function fall(json: any): void 
        function getFallSoundString(json: any): string 
        function performHurtAnimation(): void 
        function getTotalArmorValue(): number 
        function damageArmor(json: any): void 
        function getMaxHealth(): number 
        function getArrowCountInEntity(): number 
        function setArrowCountInEntity(json: any): void 
        function swingItem(): void 
        function kill(): void 
        function setSprinting(json: any): void 
        function getSoundVolume(): number 
        function getSoundPitch(): number 
        function isMovementBlocked(): boolean 
        function getJumpUpwardsMotion(): number 
        function jump(): void 
        function updateAITick(): void 
        function handleJumpLava(): void 
        function getAIMoveSpeed(): number 
        function setAIMoveSpeed(json: any): void 
        function collideWithNearbyEntities(): void 
        function setJumping(json: any): void 
        function canBeCollidedWith(): boolean 
        function canBePushed(): boolean 
        function setBeenAttacked(): void 
        function getRotationYawHead(): number 
        function setRotationYawHead(json: any): void 
        function getAbsorptionAmount(): number 
        function setAbsorptionAmount(json: any): void 
        function markPotionsDirty(): void 
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
        let attackedAtYaw: number;
        let deathTime: number;
        let prevSwingProgress: number;
        let swingProgress: number;
        let prevLimbSwingAmount: number;
        let limbSwingAmount: number;
        let limbSwing: number;
        let maxHurtResistantTime: number;
        let prevCameraPitch: number;
        let cameraPitch: number;
        let renderYawOffset: number;
        let prevRenderYawOffset: number;
        let rotationYawHead: number;
        let prevRotationYawHead: number;
        let jumpMovementFactor: number;
        let recentlyHit: number;
        let dead: boolean;
        let entityAge: number;
        let onGroundSpeedFactor: number;
        let prevOnGroundSpeedFactor: number;
        let movedDistance: number;
        let prevMovedDistance: number;
        let scoreValue: number;
        let isJumping: boolean;
        let moveForward: number;
        let moveStrafing: number;
        let randomYawVelocity: number;
        let newPosRotationIncrements: number;
        let newPosX: number;
        let newPosY: number;
        let newPosZ: number;
        let newRotationPitch: number;
        let newRotationYaw: number;
        let revengeTimer: number;
        let lastAttackerTime: number;
        let landMovementFactor: number;
        let jumpTicks: number;
        let absorptionAmount: number;
        //let foodStats: FoodStatsData;
        //let fishEntity: FishHookData | null; 
        let flyToggleTimer: number;
        let hasReducedDebug: boolean;
        let itemInUseCount: number;
        //let itemInUse: ItemStackData | null; 
        let lastXPSound: number;
        let sleepTimer: number;
        let sleeping: boolean;
        let spawnForced: boolean;
        let speedInAir: number;
        let speedOnGround: number;
        let xpCooldown: number;
        let xpSeed: number;
        //let inventoryContainer: ContainerData;
        //let openContainer: ContainerData;
        
        
        
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
        function isOfflineDownload() : boolean
        function freeMemory() : number
        function maxMemory() : number
        function totalMemory() : number
        function openLink(json: any)
        function getClipboard() : string
        function recSupported() : boolean
        function toggleRec() : void
        function getUserAgentString() : void
        function getGLRenderer() : void
        function getGLVersion() : void
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
    /**returns screen height */
    function getdisplayHeight(): number
    /**returns screen width */
    function getdisplayWidth(): number
    /**returns the FONT_HEIGHT */
    function getFONT_HEIGHT(): number
    /**returns the width of a string based on minecraft's font */
    function getStringWidth(json: any)
    /**draws your string to screen and needs to be ran when the `drawhud` event is called. the color parameter needs be hex but # is replaced with 0x */
    function drawStringWithShadow(json: any): void
    /**draws your string to screen WITHOUT THE SHADOW and needs to be ran when the `drawhud` event is called. the color parameter needs be hex but # is replaced with 0x */
    function drawString(json: any): void
    /**draws a rect to screen and needs to be ran when the `drawhud` event is called. the color parameter needs be hex but # is replaced with 0x */
    function drawrect(json: any):void
}


// vexdev was here...
// radmanplays was here too.