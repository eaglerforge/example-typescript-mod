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
        function getItemInUse(): any;
        function getItemInUseCount(): number;
        function isUsingItem(): boolean;
        function getItemInUseDuration(): number;
        function stopUsingItem(): void;
        function clearItemInUse(): void;
        function isBlocking(): boolean;
        function getMaxInPortalTime(): number;
        function getSwimSound(): string;
        function getSplashSound(): string;
        function getPortalCooldown(): number;
        function playSound(json: any): void;
        function updateItemUse(json: any): void;
        function onItemUseFinish(): void;
        function handleStatusUpdate(json: any): void;
        function isMovementBlocked(): boolean;
        function closeScreen(): void;
        function updateRidden(): void;
        function preparePlayerToSpawn(): void;
        function updateEntityActionState(): void;
        function onLivingUpdate(): void;
        function collideWithPlayer(json: any): void;
        function getScore(): number;
        function addScore(json: any): void;
        function getHurtSound(): string;
        function getDeathSound(): string;
        function addToPlayerScore(json: any): void;
        function dropOneItem(json: any): any;
        function dropPlayerItemWithRandomChoice(json: any): any;
        function dropItem(json: any): any;
        function joinEntityItemWithWorld(json: any): void;
        function getToolDigEfficiency(json: any): number;
        function canHarvestBlock(json: any): boolean;
        function canAttackPlayer(json: any): boolean;
        function damageArmor(json: any): void;
        function getTotalArmorValue(): number;
        function getArmorVisibility(): number;
        function interactWith(json: any): boolean;
        function getCurrentEquippedItem(): any;
        function destroyCurrentEquippedItem(): void;
        function getYOffset(): number;
        function attackTargetEntityWithCurrentItem(json: any): void;
        function respawnPlayer(): void;
        function isEntityInsideOpaqueBlock(): boolean;
        function isUser(): boolean;
        function trySleep(json: any): string;
        function wakeUpPlayer(json: any): void;
        function isInBed(): boolean;
        function getBedOrientationInDegrees(): number;
        function isPlayerSleeping(): boolean;
        function isPlayerFullyAsleep(): boolean;
        function getSleepTimer(): number;
        function getBedLocation(): any;
        function isSpawnForced(): boolean;
        function setSpawnPoint(json: any): void;
        function moveEntityWithHeading(json: any): void;
        function getAIMoveSpeed(): number;
        function addMovementStat(json: any): void;
        function addMountedMovementStat(json: any): void;
        function fall(json: any): void;
        function resetHeight(): void;
        function getFallSoundString(json: any): string;
        function setInWeb(): void;
        function getCurrentArmor(json: any): any;
        function addExperience(json: any): void;
        function getXPSeed(): number;
        function removeExperienceLevel(json: any): void;
        function addExperienceLevel(json: any): void;
        function xpBarCap(): number;
        function addExhaustion(json: any): void;
        function getFoodStats(): any;
        function canEat(json: any): boolean;
        function shouldHeal(): boolean;
        function setItemInUse(json: any): void;
        function isAllowEdit(): boolean;
        function canPlayerEdit(json: any): boolean;
        function isPlayer(): boolean;
        function getAlwaysRenderNameTagForRender(): boolean;
        function clonePlayer(json: any): void;
        function canTriggerWalking(): boolean;
        function sendPlayerAbilities(): void;
        function getName(): string;
        function getEquipmentInSlot(json: any): any;
        function getHeldItem(): any;
        function setCurrentItemOrArmor(json: any): void;
        function isInvisibleToPlayer(json: any): boolean;
        function getInventory(): any[];
        function isPushedByWater(): boolean;
        function getEyeHeight(): number;
        function getOfflineUUID(json: any): string;
        function replaceItemInInventory(json: any): boolean;
        function setReducedDebug(json: any): void;
        function mountEntity(json: any): void;
        function dropOneItem(json: any): any;
        function sendChatMessage(json: any): void;
        function respawnPlayer(): void;
        function closeScreen(): void;
        function closeScreenAndDropStack(): void;
        function setPlayerSPHealth(json: any): void;
        function isUser(): boolean;
        function sendHorseJump(): void;
        function sendHorseInventory(): void;
        function setClientBrand(json: any): void;
        function getClientBrand(): string;
        function pushOutOfBlocks(json: any): boolean;
        function isOpenBlockSpace(json: any): boolean;
        function setXPStats(json: any): void;
        function playSound(json: any): void;
        function isServerWorld(): boolean;
        function isRidingHorse(): boolean;
        function getHorseJumpPower(): number;
        function isCurrentViewEntity(): boolean;
        function isSpectator(): boolean;


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
        let flyToggleTimer: number;
        let hasReducedDebug: boolean;
        let itemInUseCount: number;
        let lastXPSound: number;
        let sleepTimer: number;
        let sleeping: boolean;
        let spawnForced: boolean;
        let speedInAir: number;
        let speedOnGround: number;
        let xpCooldown: number;
        let xpSeed: number;
        /**Equal to the player's `inventoryContainer` */
        namespace inventoryContainer{
            let inventoryItemStacks : any
            function getPlayerList() : any
        }

        /**Equal to the player's `openContainer` */
        namespace openContainer{
            let inventoryItemStacks : any
            function getPlayerList() : any
        }



        /**The itemstack the player is using. (If existing) */
        namespace itemInUse{
            /**
             * The amount of items in the stack.
             */
            let amount: number;

            /**
             * The number of animation frames left for the item.
             */
            let animationsToGo: number;

            /**
             * The ID of the item.
             */
            let itemId: number;

            /**
             * The damage value of the item.
             */
            let itemDamage: number;

            /**
             * The entity data of the item frame, if it exists.
             */
            let itemFrame: any;

            /**
             * The block data representing which blocks this item can destroy.
             */
            let canDestroyCacheBlock: any;

            /**
             * Indicates whether the item can destroy the cached block.
             */
            let canDestroyCacheResult: boolean;

            /**
             * The block data representing which blocks this item can be placed on.
             */
            let canPlaceOnCacheBlock: any;

            /**
             * Indicates whether the item can be placed on the cached block.
             */
            let canPlaceOnCacheResult: boolean;

            /**
             * Gets the item data associated with this item stack.
             */
            function getItem(): any;

            /**
             * Gets the maximum stack size for this item.
             */
            function getMaxStackSize(): number;

            /**
             * Checks if the item stack is stackable.
             */
            function isStackable(): boolean;

            /**
             * Checks if the item stack can be damaged.
             */
            function isItemStackDamageable(): boolean;

            /**
             * Checks if the item has subtypes.
             */
            function getHasSubtypes(): boolean;

            /**
             * Checks if the item is damaged.
             */
            function isItemDamaged(): boolean;

            /**
             * Gets the damage value of the item.
             */
            function getItemDamage(): number;

            /**
             * Gets the metadata of the item.
             */
            function getMetadata(): number;

            /**
             * Sets the damage value of the item.
             * @param json The metadata value {meta: number}.
             */
            function setItemDamage(json: any): void;

            /**
             * Gets the maximum damage of the item.
             */
            function getMaxDamage(): number;

            /**
             * Copies the item stack.
             */
            function copy(): any;

            /**
             * Gets the unlocalized name of the item.
             */
            function getUnlocalizedName(): string;

            /**
             * Converts the item stack to a string representation.
             */
            function toString(): string;

            /**
             * Gets the maximum duration the item can be used.
             */
            function getMaxItemUseDuration(): number;

            /**
             * Gets the display name of the item.
             */
            function getDisplayName(): string;

            /**
             * Sets the display name of the item stack.
             * @param json The display name {displayName: string}.
             */
            function setDisplayName(json: any): any;

            /**
             * Clears the custom name of the item stack.
             */
            function clearCustomName(): void;

            /**
             * Checks if the item stack has a display name.
             */
            function hasDisplayName(): boolean;

            /**
             * Checks if the item stack has any enchantments.
             */
            function hasEffect(): boolean;

            /**
             * Checks if the item can be enchanted.
             */
            function isItemEnchantable(): boolean;

            /**
             * Adds an enchantment to the item stack.
             * @param json The enchantment and its level {ench: EnchantmentRef, level: number}.
             */
            function addEnchantment(json: any): void;

            /**
             * Checks if the item stack is enchanted.
             */
            function isItemEnchanted(): boolean;

            /**
             * Checks if the item allows editing blocks.
             */
            function canEditBlocks(): boolean;

            /**
             * Checks if the item is on an item frame.
             */
            function isOnItemFrame(): boolean;

            /**
             * Gets the repair cost of the item.
             */
            function getRepairCost(): number;

            /**
             * Sets the repair cost of the item.
             * @param json The repair cost {cost: number}.
             */
            function setRepairCost(json: any): void;

            /**
             * Sets the item for this item stack.
             * @param newItem The new item.
             */
            function setItem(json: any): void;

            /**
             * Checks if the item can destroy a specific block.
             * @param json The block ID {blockId: number}.
             */
            function canDestroy(json: any): boolean;

            /**
             * Checks if the item can be placed on a specific block.
             * @param json The block ID {blockId: number}.
             */
            function canPlaceOn(json: any): boolean;

            /**
             * Converts the item stack to NBT format.
             */
            function toNBT(): string;

            /**
             * Loads item stack data from NBT format.
             * @param json The NBT data {nbt: string}.
             */
            function fromNBT(json: any): void;

            /**
             * Gets the lore associated with the item.
             */
            function getLore(): string[];

            /**
             * Sets the lore associated with the item.
             * @param json The lore {lore: string[]}.
             */
            function setLore(json: any): void;

        }

        /**The player's fishing bobber / hook. (If existing) */
        namespace fishEntity{
            /**
             * Whether or not the fish hook is in the ground.
             */
            let inGround: boolean;

            /**
             * Equal to the fish hook's xTile.
             */
            let xTile: number;

            /**
             * Equal to the fish hook's yTile.
             */
            let yTile: number;

            /**
             * Equal to the fish hook's zTile.
             */
            let zTile: number;

            /**
             * Equal to the fish hook's shake.
             */
            let shake: number;

            /**
             * Equal to the fish hook's ticksCatchable.
             */
            let ticksCatchable: number;

            /**
             * Equal to the fish hook's ticksCatchableDelay.
             */
            let ticksCatchableDelay: number;

            /**
             * Equal to the fish hook's ticksCaughtDelay.
             */
            let ticksCaughtDelay: number;

            /**
             * Equal to the fish hook's ticksInAir.
             */
            let ticksInAir: number;

            /**
             * Equal to the fish hook's ticksInGround.
             */
            let ticksInGround: number;

            /**
             * The entity the fish hook is hooked on to. (If existing)
             */
            namespace caughtEntity{
                /**
                 * Equal to the entity's posX.
                 */
                let x: number;

                /**
                 * Equal to the entity's posY.
                 */
                let y: number;

                /**
                 * Equal to the entity's posZ.
                 */
                let z: number;

                /**
                 * Equal to the entity's chunkCoordX. (Read-only)
                 */
                let chunkCoordX: number;

                /**
                 * Equal to the entity's chunkCoordY. (Read-only)
                 */
                let chunkCoordY: number;

                /**
                 * Equal to the entity's chunkCoordZ. (Read-only)
                 */
                let chunkCoordZ: number;

                /**
                 * Equal to the entity's motionX.
                 */
                let motionX: number;

                /**
                 * Equal to the entity's motionY.
                 */
                let motionY: number;

                /**
                 * Equal to the entity's motionZ.
                 */
                let motionZ: number;

                /**
                 * Equal to the entity's rotationYaw.
                 */
                let yaw: number;

                /**
                 * Equal to the entity's rotationPitch.
                 */
                let pitch: number;

                /**
                 * Equal to the entity's isInWeb.
                 */
                let isInWeb: boolean;

                /**
                 * Equal to the entity's isCollided.
                 */
                let isCollided: boolean;

                /**
                 * Equal to the entity's isCollidedVertically.
                 */
                let isCollidedVertically: boolean;

                /**
                 * Equal to the entity's isCollidedHorizontally.
                 */
                let isCollidedHorizontally: boolean;

                /**
                 * Equal to the entity's onGround.
                 */
                let onGround: boolean;

                /**
                 * Equal to the entity's dimension. (Read-only)
                 */
                let dimension: number;

                /**
                 * Equal to the entity's entityId. (Read-only)
                 */
                let id: number;

                /**
                 * Equal to the entity's fallDistance. (Read-only)
                 */
                let fallDistance: number;

                /**
                 * Equal to the entity's noClip.
                 */
                let noClip: boolean;

                /**
                 * Equal to the entity's stepHeight.
                 */
                let stepHeight: number;

                /**
                 * Equal to the entity's isDead. (Read-only)
                 */
                let isDead: boolean;

                /**
                 * Equal to the entity's inPortal.
                 */
                let inPortal: boolean;

                /**
                 * Equal to the entity's inWater.
                 */
                let inWater: boolean;

                /**
                 * Equal to the entity's isAirBorne.
                 */
                let isAirBorne: boolean;

                /**
                 * Equal to the entity's ticksExisted. (Read-only)
                 */
                let ticksExisted: number;

                /**
                 * Equal to the entity's invulnerable.
                 */
                let invulnerable: boolean;


                /**
                 * Equal to the entity's isOutsideBorder.
                 */
                let isOutsideBorder: boolean;

                /**
                 * Equal to the entity's entityCollisionReduction.
                 */
                let entityCollisionReduction: number;

                /**
                 * Whether the entity is burning.
                 */
                function isBurning(): boolean;

                /**
                 * Whether the entity is pushed by water.
                 */
                function isPushedByWater(): boolean;

                /**
                 * Whether the entity is eating.
                 */
                function isEating(): boolean;

                /**
                 * Whether the entity is alive.
                 */
                function isEntityAlive(): boolean;

                /**
                 * Whether the entity is inside an opaque block.
                 */
                function isEntityInsideOpaqueBlock(): boolean;

                /**
                 * Whether the entity is immune to explosions.
                 */
                function isImmuneToExplosions(): boolean;

                /**
                 * Whether the entity is immune to fire.
                 */
                function isImmuneToFire(): boolean;

                /**
                 * Whether the entity is in lava.
                 */
                function isInLava(): boolean;

                /**
                 * Whether the entity is in range to render in 3D.
                 * @param json The coordinates {x: number, y: number, z: number}.
                 */
                function isInRangeToRender3d(json: any): boolean;

                /**
                 * Whether the entity is in range to render with the given distance.
                 * @param json The distance {distance: number}.
                 */
                function isInRangeToRenderDist(json: any): boolean;

                /**
                 * Whether the entity is in water.
                 */
                function isInWater(): boolean;

                /**
                 * Whether the entity is invisible.
                 */
                function isInvisible(): boolean;

                /**
                 * Whether the entity is riding.
                 */
                function isRiding(): boolean;

                /**
                 * Whether the entity is silent.
                 */
                function isSilent(): boolean;

                /**
                 * Whether the entity is sneaking.
                 */
                function isSneaking(): boolean;

                /**
                 * Whether the entity is sprinting.
                 */
                function isSprinting(): boolean;

                /**
                 * Whether the entity is wet.
                 */
                function isWet(): boolean;

                /**
                 * Sets the air level of the entity.
                 * @param json The air level {air: number}.
                 */
                function setAir(json: any): void;

                /**
                 * Sets whether the entity's name tag is always rendered.
                 * @param json Whether the name tag should always be rendered {alwaysRenderNameTag: boolean}.
                 */
                function setAlwaysRenderNameTag(json: any): void;

                /**
                 * Sets the angles of the entity.
                 * @param json The angles {yaw: number, pitch: number}.
                 */
                function setAngles(json: any): void;

                /**
                 * Marks the entity as being attacked.
                 */
                function setBeenAttacked(): void;

                /**
                 * Sets the custom name tag of the entity.
                 * @param json The name tag {name: string}.
                 */
                function setCustomNameTag(json: any): void;

                /**
                 * Marks the entity as dead.
                 */
                function setDead(): void;

                /**
                 * Sets whether the entity is eating.
                 * @param json Whether the entity is eating {eating: boolean}.
                 */
                function setEating(json: any): void;

                /**
                 * Sets the entity's ID.
                 * @param json The entity ID {id: number}.
                 */
                function setEntityId(json: any): void;

                /**
                 * Sets the entity on fire for a specified number of seconds.
                 * @param json The number of seconds {seconds: number}.
                 */
                function setFire(json: any): void;

                /**
                 * Sets a flag on the entity.
                 * @param json The flag to set {flag: number, set: boolean}.
                 */
                function setFlag(json: any): void;

                /**
                 * Marks the entity as being in a web.
                 */
                function setInWeb(): void;

                /**
                 * Sets whether the entity is invisible.
                 * @param json Whether the entity is invisible {invisible: boolean}.
                 */
                function setInvisible(json: any): void;

                /**
                 * Sets the location and angles of the entity.
                 * @param json The location and angles {x: number, y: number, z: number, yaw: number, pitch: number}.
                 */
                function setLocationAndAngles(json: any): void;

                /**
                 * Sets the entity on fire from lava.
                 */
                function setOnFireFromLava(): void;

                /**
                 * Sets whether the entity is outside the border.
                 * @param json Whether the entity is outside the border {outsideBorder: boolean}.
                 */
                function setOutsideBorder(json: any): void;

                /**
                 * Sets the position of the entity.
                 * @param json The position {x: number, y: number, z: number}.
                 */
                function setPosition(json: any): void;

                /**
                 * Sets the position and rotation of the entity.
                 * @param json The position and rotation {x: number, y: number, z: number, yaw: number, pitch: number}.
                 */
                function setPositionAndRotation(json: any): void;

                /**
                 * Sets the position and rotation of the entity.
                 * @param json The position and rotation {d0: number, d1: number, d2: number, f: number, f1: number, var9: number, var10: boolean}.
                 */
                function setPositionAndRotation2(json: any): void;

                /**
                 * Sets the position and updates.
                 * @param json The position {d0: number, d1: number, d2: number}.
                 */
                function setPositionAndUpdate(json: any): void;

                /**
                 * Sets the rotation of the entity.
                 * @param json The rotation {yaw: number, pitch: number}.
                 */
                function setRotation(json: any): void;

                /**
                 * Sets the rotation of the entity's yaw head.
                 * @param json The rotation {rotation: number}.
                 */
                function setRotationYawHead(json: any): void;

                /**
                 * Sets whether the entity is silent.
                 * @param json Whether the entity is silent {isSilent: boolean}.
                 */
                function setSilent(json: any): void;

                /**
                 * Sets the size of the entity.
                 * @param json The size {f: number, f1: number}.
                 */
                function setSize(json: any): void;

                /**
                 * Sets whether the entity is sneaking.
                 * @param json Whether the entity is sneaking {sneaking: boolean}.
                 */
                function setSneaking(json: any): void;

                /**
                 * Sets whether the entity is sprinting.
                 * @param json Whether the entity is sprinting {flag: boolean}.
                 */
                function setSprinting(json: any): void;

                /**
                 * Sets the velocity of the entity.
                 * @param json The velocity {x: number, y: number, z: number}.
                 */
                function setVelocity(json: any): void;

                /**
                 * Gets the UUID of the entity.
                 */
                function getUUID(): string;

                /**
                 * Gets the air level of the entity.
                 */
                function getAir(): number;

                /**
                 * Gets whether the entity's name tag is always rendered.
                 */
                function getAlwaysRenderNameTag(): boolean;

                /**
                 * Gets whether the entity's name tag is always rendered for rendering purposes.
                 */
                function getAlwaysRenderNameTagForRender(): boolean;

                /**
                 * Gets the brightness at the given light level.
                 * @param json The light level {var1: number}.
                 */
                function getBrightness(json: any): number;

                /**
                 * Gets the brightness for rendering at the given light level.
                 * @param json The light level {var1: number}.
                 */
                function getBrightnessForRender(json: any): number;

                /**
                 * Gets the collision border size of the entity.
                 */
                function getCollisionBorderSize(): number;

                /**
                 * Gets the collision bounding box of the entity.
                 */
                function getCollisionBoundingBox(): any;

                /**
                 * Gets the custom name tag of the entity.
                 */
                function getCustomNameTag(): string;

                /**
                 * Gets the display name of the entity.
                 */
                function getDisplayName(): string;

                /**
                 * Gets the formatted display name of the entity.
                 */
                function getDisplayNameFormatted(): string;

                /**
                 * Gets the distance between the entity and the specified coordinates.
                 * @param json The coordinates {x: number, y: number, z: number}.
                 */
                function getDistance(json: any): number;

                /**
                 * Gets the squared distance between the entity and the specified coordinates.
                 * @param json The coordinates {x: number, y: number, z: number}.
                 */
                function getDistanceSq(json: any): number;

                /**
                 * Gets the mounted Y offset of the entity.
                 */
                function getMountedYOffset(): number;

                /**
                 * Gets the entity ID.
                 */
                function getEntityId(): number;

                /**
                 * Gets the entity string.
                 */
                function getEntityString(): string;

                /**
                 * Gets the eye height of the entity.
                 */
                function getEyeHeight(): number;

                /**
                 * Gets the value of the flag at the specified index.
                 * @param json The flag index {flag: number}.
                 */
                function getFlag(json: any): boolean;

                /**
                 * Gets the maximum fall height of the entity.
                 */
                function getMaxFallHeight(): number;

                /**
                 * Gets the maximum in-portal time of the entity.
                 */
                function getMaxInPortalTime(): number;

                /**
                 * Gets the name of the entity.
                 */
                function getName(): string;

                /**
                 * Gets the parts of the entity.
                 */
                function getParts(): any[];

                /**
                 * Gets the portal cooldown of the entity.
                 */
                function getPortalCooldown(): number;

                /**
                 * Gets the yaw rotation of the entity's head.
                 */
                function getRotationYawHead(): number;

                /**
                 * Gets the sound played when the entity splashes.
                 */
                function getSplashSound(): string;

                /**
                 * Gets the sound played when the entity swims.
                 */
                function getSwimSound(): string;

                /**
                 * Gets the Y offset of the entity.
                 */
                function getYOffset(): number;

                /**
                 * Gets the class name of the entity.
                 */
                function getClassName(): string;

                /**
                 * Gets the position vector of the entity.
                 */
                function getPositionVector(): any;

                /**
                 * Gets the position vector of the entity's eyes.
                 * @param json The partial ticks {partialTicks: number}.
                 */
                function getPositionEyes(json: any): any;

                /**
                 * Gets the look vector of the entity.
                 * @param json The partial ticks {partialTicks: number}.
                 */
                function getLook(json: any): any;

                /**
                 * Gets the look vector of the entity.
                 */
                function getLookVec(): any;

                /**
                 * Gets the vector for the rotation.
                 * @param json The rotation {yaw: number, float: number}.
                 */
                function getVectorForRotation(json: any): any;

                /**
                 * Converts the entity to NBT format.
                 */
                function toNBT(): string;

                /**
                 * Loads entity data from NBT format.
                 * @param json The NBT data {nbt: string}.
                 */
                function fromNBT(json: any): void;

            }

            /**
             * Equal to the fish hook's fishApproachAngle.
             */
            let fishApproachAngle: number;

            /**
             * Equal to the fish hook's fishPitch.
             */
            let fishPitch: number;

            /**
             * Equal to the fish hook's fishPosRotationIncrements.
             */
            let fishPosRotationIncrements: number;

        }
        
        
        namespace foodStats{
            let foodLevel: number;
            let foodSaturationLevel: number;
            let foodExhaustionLevel: number;
            let foodTimer: number;
            let prevFoodLevel: number;

            function addStats(json: any): void;
            function addExhaustion(json: any): void;
            function setFoodLevel(json: any): void;
            function setFoodSaturationLevel(json: any): void;
            function getFoodLevel(): number;
            function getPrevFoodLevel(): number;
            function getSaturationLevel(): number;
            function needFood(): boolean;
        }

        /**Equals to the player's `inventory` */
        namespace inventory {
            let currentItem: number;
            let inventoryChanged: boolean;
            let mainInventory: any[];
            let armorInventory: any[];
        }

        /**Equals to the player's `capabilities` */
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

    /**Represents the network handler.*/
    namespace network{
        let avRandomizer: any;
        let cachedServerInfoData: any;
        let capeCache: any;
        let clientWorldController: any;
        let currentFNAWSkinAllowedState: number;
        let currentFNAWSkinForcedState: number;
        let currentServerMaxPlayers: number;
        let doneLoadingTerrain: number;
        let eaglerMessageController: any;
        let field_147308_k: number;
        let gameController: any;
        let guiScreenServer: any;
        let hasRequestedServerInfo: number;
        let id: number;
        let isIntegratedServer: number;
        let monitor: any;
        let netManager0: any;
        let notifManager: any;
        let playerInfoMap: any;
        let profile3: any;
        let skinCache: any;
        
        let addToSendQueue: (...args: any[]) => void;
        let getEaglerMessageController: (...args: any[]) => void;
        let getEaglerMessageProtocol: (...args: any[]) => void;
        let getNetworkManager: (...args: any[]) => void;
        let getPlayerInfo0: (...args: any[]) => void;
        let getPlayerInfoMap: (...args: any[]) => void;
        let handleChangeGameState: (...args: any[]) => void;
        let handleSpawnObject: (...args: any[]) => void;
        let onDisconnect: (p1: any) => void;
        let sendEaglerMessage: (...args: any[]) => void;
        
        let constructor: new () => any;
        

    }

    /**Represents the game's settings. */
    namespace settings{
        let advancedItemTooltips: number;
        let allowBlockAlternatives: number;
        let ambientOcclusion: number;
        let anaglyph: number;
        let chatColours: number;
        let chatHeightFocused: number;
        let chatHeightUnfocused: number;
        let chatLinks: number;
        let chatLinksPrompt: number;
        let chatOpacity: number;
        let chatScale: number;
        let chatVisibility: any;
        let chatWidth: number;
        let chunkFix: number;
        let clouds: number;
        let debugCamEnable: number;
        let deferredShaderConf: any;
        let difficulty0: any;
        let enableDynamicLights: number;
        let enableFNAWSkins: number;
        let enableProfanityFilter: number;
        let enableUpdateSvc: number;
        let enableVsync: number;
        let fancyGraphics: number;
        let fboEnable: number;
        let field_181150_U: number;
        let field_181151_V: number;
        let field_181657_aC: number;
        let field_183018_l: any;
        let fog: number;
        let forceUnicodeFont: number;
        let fovSetting: number;
        let fxaa: number;
        let gammaSetting: number;
        let guiScale: number;
        let hasCreatedDemoWorld: number;
        let hasHiddenPhishWarning: number;
        let hasShownProfanityFilter: number;
        let heldItemTooltips: number;
        let hideDefaultUsernameWarning: number;
        let hideGUI: number;
        let hideJoinCode: number;
        let hideServerAddress: number;
        let hideVideoSettingsWarning: number;
        let hud24h: number;
        let hudCoords: number;
        let hudFps: number;
        let hudPlayer: number;
        let hudStats: number;
        let hudWorld: number;
        let id: number;
        let invertMouse: number;
        let keyBindAttack: any;
        let keyBindBack: any;
        let keyBindChat: any;
        let keyBindClose: any;
        let keyBindCommand: any;
        let keyBindDrop: any;
        let keyBindForward: any;
        let keyBindFunction: any;
        let keyBindInventory: any;
        let keyBindJump: any;
        let keyBindLeft: any;
        let keyBindPickBlock: any;
        let keyBindPlayerList: any;
        let keyBindRight: any;
        let keyBindScreenshot: any;
        let keyBindSmoothCamera: any;
        let keyBindSneak: any;
        let keyBindSprint: any;
        let keyBindTogglePerspective: any;
        let keyBindUseItem: any;
        let keyBindZoomCamera: any;
        let keyBindings: any;
        let keyBindsHotbar: any;
        let language: any;
        let lastServer: any;
        let limitFramerate: number;
        let mapSoundLevels: any;
        let mc3: any;
        let mipmapLevels: number;
        let monitor: any;
        let mouseSensitivity: number;
        let overrideHeight: number;
        let overrideWidth: number;
        let particleSetting: number;
        let pauseOnLostFocus: number;
        let reducedDebugInfo0: number;
        let relayTimeout: number;
        let renderDistanceChunks: number;
        let resourcePacks: any;
        let saturation: number;
        let screenRecordAudioBitrate: number;
        let screenRecordCodec: any;
        let screenRecordFPS: number;
        let screenRecordGameVolume: number;
        let screenRecordMicVolume: number;
        let screenRecordResolution: number;
        let screenRecordVideoBitrate: number;
        let setModelParts: any;
        let shaders: number;
        let shadersAODisable: number;
        let showDebugInfo: number;
        let showDebugProfilerChart: number;
        let showInventoryAchievementHint: number;
        let smoothCamera: number;
        let snooperEnabled: number;
        let thirdPersonView: number;
        let touchControlOpacity: number;
        let touchscreen: number;
        let viewBobbing: number;
        let voiceListenRadius: number;
        let voiceListenVolume: number;
        let voicePTTKey: number;
        let voiceSpeakVolume: number;
        let checkBadVideoSettings: (...args: any[]) => void;
        let func_181147_e: (...args: any[]) => void;
        let getKeyBinding: (...args: any[]) => void;
        let getModelParts: (...args: any[]) => void;
        let getOptionFloatValue: (...args: any[]) => void;
        let getOptionOrdinalValue: (...args: any[]) => void;
        let getSoundLevel: (...args: any[]) => void;
        let loadOptions: (...args: any[]) => void;
        let loadOptions0: (...args: any[]) => void;
        let parseFloat: (...args: any[]) => void;
        let saveOptions: (...args: any[]) => void;
        let sendSettingsToServer: (...args: any[]) => void;
        let setModelPartEnabled: (...args: any[]) => void;
        let setOptionFloatValue: (...args: any[]) => void;
        let setOptionKeyBinding: (...args: any[]) => void;
        let setOptionValue: (...args: any[]) => void;
        let setSoundLevel: (...args: any[]) => void;
        let toJSONArray: (...args: any[]) => void;
        let writeOptions: (...args: any[]) => void;

        let constructor: new () => any;
    }

    namespace blocks{
        let acacia_door: any;
        let acacia_fence: any;
        let acacia_fence_gate: any;
        let acacia_stairs: any;
        let activator_rail: any;
        let air: any;
        let anvil: any;
        let barrier: any;
        let beacon: any;
        let bed: any;
        let bedrock: any;
        let birch_door: any;
        let birch_fence: any;
        let birch_fence_gate: any;
        let birch_stairs: any;
        let bookshelf: any;
        let brewing_stand: any;
        let brick_block: any;
        let brick_stairs: any;
        let brown_mushroom: any;
        let brown_mushroom_block: any;
        let cactus: any;
        let cake: any;
        let carpet: any;
        let carrots: any;
        let cauldron: any;
        let chest: any;
        let clay: any;
        let coal_block: any;
        let coal_ore: any;
        let cobblestone: any;
        let cobblestone_wall: any;
        let cocoa: any;
        let command_block: any;
        let crafting_table: any;
        let dark_oak_door: any;
        let dark_oak_fence: any;
        let dark_oak_fence_gate: any;
        let dark_oak_stairs: any;
        let daylight_detector: any;
        let daylight_detector_inverted: any;
        let deadbush: any;
        let detector_rail: any;
        let diamond_block: any;
        let diamond_ore: any;
        let dirt: any;
        let dispenser: any;
        let double_plant: any;
        let double_stone_slab: any;
        let double_stone_slab2: any;
        let double_wooden_slab: any;
        let dragon_egg: any;
        let dropper: any;
        let emerald_block: any;
        let emerald_ore: any;
        let enchanting_table: any;
        let end_portal: any;
        let end_portal_frame: any;
        let end_stone: any;
        let ender_chest: any;
        let farmland: any;
        let fire: any;
        let flower_pot: any;
        let flowing_lava: any;
        let flowing_water: any;
        let furnace: any;
        let glass: any;
        let glass_pane: any;
        let glowstone: any;
        let gold_block: any;
        let gold_ore: any;
        let golden_rail: any;
        let grass: any;
        let gravel: any;
        let hardened_clay: any;
        let hay_block: any;
        let heavy_weighted_pressure_plate: any;
        let hopper: any;
        let ice: any;
        let iron_bars: any;
        let iron_block: any;
        let iron_door: any;
        let iron_ore: any;
        let iron_trapdoor: any;
        let jukebox: any;
        let jungle_door: any;
        let jungle_fence: any;
        let jungle_fence_gate: any;
        let jungle_stairs: any;
        let ladder: any;
        let lapis_block: any;
        let lapis_ore: any;
        let lava: any;
        let leaves: any;
        let leaves2: any;
        let lever: any;
        let light_weighted_pressure_plate: any;
        let lit_furnace: any;
        let lit_pumpkin: any;
        let lit_redstone_lamp: any;
        let lit_redstone_ore: any;
        let log: any;
        let log2: any;
        let melon_block: any;
        let melon_stem: any;
        let mob_spawner: any;
        let monster_egg: any;
        let mossy_cobblestone: any;
        let mycelium: any;
        let nether_brick: any;
        let nether_brick_fence: any;
        let nether_brick_stairs: any;
        let nether_wart: any;
        let netherrack: any;
        let noteblock: any;
        let oak_door: any;
        let oak_fence: any;
        let oak_fence_gate: any;
        let oak_stairs: any;
        let obsidian: any;
        let packed_ice: any;
        let piston: any;
        let piston_extension: any;
        let piston_head: any;
        let planks: any;
        let portal: any;
        let potatoes: any;
        let powered_comparator: any;
        let powered_repeater: any;
        let prismarine: any;
        let pumpkin: any;
        let pumpkin_stem: any;
        let quartz_block: any;
        let quartz_ore: any;
        let quartz_stairs: any;
        let rail: any;
        let red_flower: any;
        let red_mushroom: any;
        let red_mushroom_block: any;
        let red_sandstone: any;
        let red_sandstone_stairs: any;
        let redstone_block: any;
        let redstone_lamp: any;
        let redstone_ore: any;
        let redstone_torch: any;
        let redstone_wire: any;
        let reeds: any;
        let sand: any;
        let sandstone: any;
        let sandstone_stairs: any;
        let sapling: any;
        let sea_lantern: any;
        let skull: any;
        let slime_block: any;
        let snow: any;
        let snow_layer: any;
        let soul_sand: any;
        let sponge: any;
        let spruce_door: any;
        let spruce_fence: any;
        let spruce_fence_gate: any;
        let spruce_stairs: any;
        let stained_glass: any;
        let stained_glass_pane: any;
        let stained_hardened_clay: any;
        let standing_banner: any;
        let standing_sign: any;
        let sticky_piston: any;
        let stone: any;
        let stone_brick_stairs: any;
        let stone_button: any;
        let stone_pressure_plate: any;
        let stone_slab: any;
        let stone_slab2: any;
        let stone_stairs: any;
        let stonebrick: any;
        let tallgrass: any;
        let tnt: any;
        let torch: any;
        let trapdoor: any;
        let trapped_chest: any;
        let tripwire: any;
        let tripwire_hook: any;
        let unlit_redstone_torch: any;
        let unpowered_comparator: any;
        let unpowered_repeater: any;
        let vine: any;
        let wall_banner: any;
        let wall_sign: any;
        let water: any;
        let waterlily: any;
        let web: any;
        let wheat: any;
        let wooden_button: any;
        let wooden_pressure_plate: any;
        let wooden_slab: any;
        let wool: any;
        let yellow_flower: any;

    }



    /** 
    This is the Minecraft instance exposed to JavaScript. It has no wrapping, and so many properties will be illegible.
    */
    namespace mcinstance{
        let $currentScreen : any[]
        let $fpsCounter : number
        let $displayHeight : number
        let $displayWidth : number
        let $serverName : String
        let $currentServerData : any[]
    }

    namespace array{
        function boolean(size)
        function byte(size)
        function char(size)
        function double(size)
        function float(size)
        function int(size)
        function object(jclass, size)
        function short(size)
    }

    // TODO: add other globals and more comments

    /** The version of the EaglerForge.*/
    let version: string;
    /**The brand of the Eaglercraft client, taken from ClientBrandRetriever.java */
    let clientBrand: string;
    let GNU: string;
    let credits: Array<any>;
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
    function currentScreen(): string
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
