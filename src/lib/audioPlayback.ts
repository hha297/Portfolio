type PauseHandler = () => void;

const registry = new Map<string, PauseHandler>();
let activeId: string | null = null;

/** Register a player so exclusive playback can pause peers. */
export function registerAudioPlayer(id: string, pause: PauseHandler) {
  registry.set(id, pause);
  return () => {
    if (activeId === id) activeId = null;
    registry.delete(id);
  };
}

/** Claim playback for one player; pauses every other registered player. */
export function claimAudioPlayback(id: string) {
  activeId = id;
  for (const [otherId, pause] of registry) {
    if (otherId !== id) pause();
  }
}

/** Pause every registered portfolio player without clearing their seek position. */
export function pauseAllAudioPlayers() {
  activeId = null;
  for (const pause of registry.values()) pause();
}

export function getActiveAudioPlayerId() {
  return activeId;
}
