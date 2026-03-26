import MaskShardPNG from '../assets/images/sprites/mask-shard.png';
import SpoolFragmentPNG from '../assets/images/sprites/spool-fragment.png';
import MagnetiteBroochPNG from '../assets/images/sprites/magnetite-brooch.png';
import DruidsEyePNG from '../assets/images/sprites/druids-eye.png';
import SnareSetterPNG from '../assets/images/sprites/snare-setter.png';
import WeavelightPNG from '../assets/images/sprites/weavelight.png';
import ShardPendantPNG from '../assets/images/sprites/shard-pendant.png';
import StraightPinPNG from '../assets/images/sprites/straight-pin.png';
import CurveclawPNG from '../assets/images/sprites/curveclaw.png';
import FracturedMaskPNG from '../assets/images/sprites/fractured-mask.png';
import MagmaBellPNG from '../assets/images/sprites/magma-bell.png';
import StingShardPNG from '../assets/images/sprites/sting-shard.png';
import FlintslatePNG from '../assets/images/sprites/flintslate.png';
import WardingBellPNG from '../assets/images/sprites/warding-bell.png';
import SilkspeedAnkletsPNG from '../assets/images/sprites/silkspeed-anklets.png';
import WeightedBeltPNG from '../assets/images/sprites/weighted-belt.png';
import ThreefoldPinPNG from '../assets/images/sprites/threefold-pin.png';
import FleaBrewPNG from '../assets/images/sprites/flea-brew.png';
import PimpilloPNG from '../assets/images/sprites/pimpillo.png';
import CompassPNG from '../assets/images/sprites/compass.png';
import MultibinderPNG from '../assets/images/sprites/multibinder.png';
import LongpinPNG from '../assets/images/sprites/longpin.png';
import PollipPouchPNG from '../assets/images/sprites/pollip-pouch.png';
import DeadBugsPursePNG from '../assets/images/sprites/dead-bugs-purse.png';
import PlasmiumPhialPNG from '../assets/images/sprites/plasmium-phial.png';
import MagnetiteDicePNG from '../assets/images/sprites/magnetite-dice.png';
import SnitchPickPNG from '../assets/images/sprites/snitch-pick.png';
import ThiefsMarkPNG from '../assets/images/sprites/thiefs-mark.png';
import ConchcutterPNG from '../assets/images/sprites/conchcutter.png';
import VoltFilamentPNG from '../assets/images/sprites/volt-filament.png';
import BarbedBraceletPNG from '../assets/images/sprites/barbed-bracelet.png';
import TacksPNG from '../assets/images/sprites/tacks.png';
import WispfireLanternPNG from '../assets/images/sprites/wispfire-lantern.png';
import DelversDrillPNG from '../assets/images/sprites/delvers-drill.png';
import SawtoothCircletPNG from '../assets/images/sprites/sawtooth-circlet.png';
import CogworkWheelPNG from '../assets/images/sprites/cogwork-wheel.png';
import ScuttlebracePNG from '../assets/images/sprites/scuttlebrace.png';
import InjectorBandPNG from '../assets/images/sprites/injector-band.png';
import AscendantsGripPNG from '../assets/images/sprites/ascendants-grip.png';
import SpoolExtenderPNG from '../assets/images/sprites/spool-extender.png';
import SpiderStringsPNG from '../assets/images/sprites/spider-strings.png';
import ClawMirrorPNG from '../assets/images/sprites/claw-mirror.png';
import VoltvesselsPNG from '../assets/images/sprites/voltvessels.png';
import CogflyPNG from '../assets/images/sprites/cogfly.png';
import RosaryCannonPNG from '../assets/images/sprites/rosary-cannon.png';
import ReserveBindPNG from '../assets/images/sprites/reserve-bind.png';
import MemoryCrystalPNG from '../assets/images/sprites/memory-crystal.png';
import PinBadgePNG from '../assets/images/sprites/pin-badge.png';
import WreathOfPurityPNG from '../assets/images/sprites/wreath-of-purity.png';
import LongclawPNG from '../assets/images/sprites/longclaw.png';
import EggOfFlealiaPNG from '../assets/images/sprites/egg-of-flealia.png';
import QuickSlingPNG from '../assets/images/sprites/quick-sling.png';
import ThrowingRingsPNG from '../assets/images/sprites/throwing-rings.png';
import SilkshotPNG from '../assets/images/sprites/silkshot.png';
import SilkspearPNG from '../assets/images/sprites/silkspear.png';
import ThreadStormPNG from '../assets/images/sprites/thread-storm.png';
import CrossStitchPNG from '../assets/images/sprites/cross-stitch.png';
import SharpdartPNG from '../assets/images/sprites/sharpdart.png';
import RuneRagePNG from '../assets/images/sprites/rune-rage.png';
import PaleNailsPNG from '../assets/images/sprites/pale-nails.png';
import SwiftStepPNG from '../assets/images/sprites/swift-step.png';
import ClingGripPNG from '../assets/images/sprites/cling-grip.png';
import NeedolinPNG from '../assets/images/sprites/needolin.png';
import NeedleStrikePNG from '../assets/images/sprites/needle-strike.png';
import ClawlinePNG from '../assets/images/sprites/clawline.png';
import SilkSoarPNG from '../assets/images/sprites/silk-soar.png';
import CrestOfWandererPNG from '../assets/images/sprites/crest-of-wanderer.png';
import CrestOfBeastPNG from '../assets/images/sprites/crest-of-beast.png';
import CrestOfReaperPNG from '../assets/images/sprites/crest-of-reaper.png';
import CrestOfArchitectPNG from '../assets/images/sprites/crest-of-architect.png';
import CrestOfWitchPNG from '../assets/images/sprites/crest-of-witch.png';
import CrestOfShamanPNG from '../assets/images/sprites/crest-of-shaman.png';
import OilPNG from '../assets/images/sprites/oil.png';
import CraftingKitPNG from '../assets/images/sprites/crafting-kit.png';
import ToolPouchPNG from '../assets/images/sprites/tool-pouch.png';
import SilkHeartPNG from '../assets/images/sprites/silk-heart.png';
import EverbloomPNG from '../assets/images/sprites/everbloom.png';
import BindEvaPNG from '../assets/images/sprites/bind-eva.png';

export type ChecklistType = {
  category:
    | 'mask shard'
    | 'spool fragment'
    | 'tool'
    | 'silk skill'
    | 'ability'
    | 'crest'
    | 'upgrade'
    | 'progress and misc';
  name: string;
  location: string;
  where_to_find: string;
  image: string;
  id: string;
};

export const checklists: ChecklistType[] = [
  {
    category: 'mask shard',
    name: 'Mask Shard 1',
    location: 'Bone Bottom',
    where_to_find: 'Sold in Bone Bottom\n300 Rosaries',
    image: MaskShardPNG,
    id: 'fdd999cd-3640-4761-923e-4987437e317b',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 2',
    location: 'Wormways',
    where_to_find: 'Behind breakable wall south',
    image: MaskShardPNG,
    id: '61bb79e4-1938-4800-9f79-14b1bc6c8e3d',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 3',
    location: 'Weavenest Atla',
    where_to_find: 'Elevator shaft east exit\nNeedolin required',
    image: MaskShardPNG,
    id: '8bd22eb2-65c9-48df-97fd-1d64eaa8ea97',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 4',
    location: 'Deep Docks',
    where_to_find: 'Above western-most bench\nCling Grip required',
    image: MaskShardPNG,
    id: 'f44b809e-48e9-452d-bc3c-350f254570c1',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 5',
    location: 'Far Fields',
    where_to_find: "Above Seamstress's Home\nDrifter's Cloak required",
    image: MaskShardPNG,
    id: '20a6a596-ef30-43cc-8eb8-053e967aa286',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 6',
    location: 'Far Fields',
    where_to_find: 'Skull Cavern (no ground arena)\nClawline required',
    image: MaskShardPNG,
    id: '6f81a3e3-6240-4b72-bdd7-f358747196df',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 7',
    location: 'Bellhart',
    where_to_find: 'Savage Beastfly quest\nWish: Savage Beastfly',
    image: MaskShardPNG,
    id: '80f29bdd-5783-48de-bfb5-551d9f36748d',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 8',
    location: 'Shellwood',
    where_to_find: 'Flower trap behind breakable wall',
    image: MaskShardPNG,
    id: '0fc949a0-a5f3-40b8-bcfa-9dd76c3ccdb8',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 9',
    location: 'Blasted Steps',
    where_to_find:
      'Secret Jump near west border\nFaydown Cloak or Silk Soar required',
    image: MaskShardPNG,
    id: 'dcd11e94-8681-45d9-9ef0-4b9d5df3d8eb',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 10',
    location: 'Wisp Thicket',
    where_to_find: 'Parkour Challenge near east edge\nFaydown Cloak required',
    image: MaskShardPNG,
    id: 'c7f70ee8-71ce-4cde-a943-799f19b720b5',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 11',
    location: 'Cogwork Core',
    where_to_find: 'Arena southeast from central Bench',
    image: MaskShardPNG,
    id: 'a614e5a7-4a85-4e20-803b-7cd32fe90ec4',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 12',
    location: 'Choral Chambers',
    where_to_find: 'Sold in Songclave\n750 Rosaries',
    image: MaskShardPNG,
    id: '04fec687-1337-4a4a-9cb1-4d0a45126b51',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 13',
    location: 'Whispering Vaults',
    where_to_find: 'Box puzzle in eastern part\nCling Grip required',
    image: MaskShardPNG,
    id: 'da36eb9d-aae1-41f8-acbb-f0ee02400cf7',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 14',
    location: 'Bilewater',
    where_to_find: 'Toxic path with jumping wormfish\nClawline required',
    image: MaskShardPNG,
    id: '01226e4d-706e-48fa-83d5-7121e9e8dffd',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 15',
    location: 'The Slab',
    where_to_find:
      'Parkour challenge, north-east\nApostate Key, Clawline required',
    image: MaskShardPNG,
    id: '0f8454ff-e5ad-4cea-9d50-47206378fdb1',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 16',
    location: 'Mount Fay',
    where_to_find: 'Floating near west bench\nFaydown Cloak required',
    image: MaskShardPNG,
    id: '4521e8fe-f646-444d-ab51-f202b2960ada',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 17',
    location: 'Far Fields',
    where_to_find: 'Sprintmaster Swift quest\nWish: Fastest in Pharloom\nACT 3',
    image: MaskShardPNG,
    id: '9e8a94cf-c6d7-4c47-84dd-1323ee682c07',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 18',
    location: 'Bellhart',
    where_to_find: 'Void hearts quest\nWish: Dark Hearts\nACT 3',
    image: MaskShardPNG,
    id: '97fd5d60-304e-4f1b-8488-6dda5a9cb033',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 19',
    location: 'Bellhart',
    where_to_find: 'Gurr the Outcast quest\nWish: The Hidden Hunter\nACT 3',
    image: MaskShardPNG,
    id: '04dd0a8f-2fbb-4036-a92a-6a9b8c68a1c3',
  },
  {
    category: 'mask shard',
    name: 'Mask Shard 20',
    location: 'Mount Fay',
    where_to_find: 'Brightvein\nSilk Soar required\nACT 3',
    image: MaskShardPNG,
    id: '9ee11ceb-5f86-471e-baaf-f3bc592e2911',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 1',
    location: 'Bone Bottom',
    where_to_find: 'Trap-room east of lift',
    image: SpoolFragmentPNG,
    id: '28f3d3a8-45fc-4d24-860e-3a2b73c95fd4',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 2',
    location: 'Weavenest Atla',
    where_to_find: 'Elevator shaft west exit\nCling Grip required',
    image: SpoolFragmentPNG,
    id: '230bbc58-4936-4f77-a936-94930ffbb0b0',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 3',
    location: 'Deep Docks',
    where_to_find: 'Parkour challenge near Forge Daughter',
    image: SpoolFragmentPNG,
    id: '0cb84707-7455-490d-90c7-8689a60703b4',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 4',
    location: 'Deep Docks',
    where_to_find: 'Parkour challenge in southeast\nClawline required',
    image: SpoolFragmentPNG,
    id: 'f1e6be78-d3e1-40d8-a4f1-1195a1b137ed',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 5',
    location: 'Greymoor',
    where_to_find: "Near Sinner's Road shortcut\nCling Grip required",
    image: SpoolFragmentPNG,
    id: '825b868e-3fec-4819-92b2-cf8c962f0cb8',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 6',
    location: 'Bellhart',
    where_to_find: 'First Courier quest\nWish: My Missing Courier',
    image: SpoolFragmentPNG,
    id: 'd62d3ccf-905c-421c-9cb3-cabfaa143052',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 7',
    location: 'Blasted Steps',
    where_to_find: 'Sold by Grindle\n680 Rosaries',
    image: SpoolFragmentPNG,
    id: '084b3135-4f64-43d5-b712-c999d00f6335',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 8',
    location: 'Grand Gate',
    where_to_find: 'Moving platforms challenge\nCling Grip required',
    image: SpoolFragmentPNG,
    id: 'f06af82a-e7e1-4ae4-b527-bbe138381bf7',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 9',
    location: 'Underworks',
    where_to_find: 'West from the Cauldron\nCling Grip required',
    image: SpoolFragmentPNG,
    id: '7f207b4a-a4ce-4655-9c16-7d7b18b4460c',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 10',
    location: 'Underworks',
    where_to_find: 'In a pit, near lift to Trobbio Arena\n300 Rosaries',
    image: SpoolFragmentPNG,
    id: '5044567a-9fc9-41ae-b639-a2c984ecc011',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 11',
    location: 'Whiteward',
    where_to_find: 'Below the main lift\nWhite Key required',
    image: SpoolFragmentPNG,
    id: '8cb3eabe-0441-49ce-8e75-954fa3b78147',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 12',
    location: 'Cogwork Core',
    where_to_find: 'Cogwork bug blocking a lever southeast',
    image: SpoolFragmentPNG,
    id: '036ca505-5053-41d6-b878-e9431fe0907d',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 13',
    location: 'Choral Chambers',
    where_to_find:
      'Sold in Songclave\n500 Rosaries, after first Jubilana quest',
    image: SpoolFragmentPNG,
    id: '8b430359-7a13-4c0a-99ae-e98c5a6a1a53',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 14',
    location: 'Choral Chambers',
    where_to_find: 'Songclave - Sherma quest\nWish: Balm for the Wounded',
    image: SpoolFragmentPNG,
    id: '43f60ad7-2d59-4c9e-b2cb-3fa779c920cb',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 15',
    location: 'Memorium',
    where_to_find: 'Parkour challenge in west room\nFaydown Cloak required',
    image: SpoolFragmentPNG,
    id: '92cf4663-98e8-470b-a08d-057765771e8e',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 16',
    location: 'High Halls',
    where_to_find: 'Parkour challenge in first tower\nFaydown Cloak required',
    image: SpoolFragmentPNG,
    id: '326b9727-b62d-4bc4-a234-fbc26c50626d',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 17',
    location: 'The Slab',
    where_to_find: 'Mount Fay viewpoint\nApostate Key, Cling Grip required',
    image: SpoolFragmentPNG,
    id: '3e1a2ce7-414e-4656-9edb-6f3173ef0420',
  },
  {
    category: 'spool fragment',
    name: 'Spool Fragment 18',
    location: 'Grand Gate',
    where_to_find: 'Find 14 Lost Fleas\nGiven by Mooshka',
    image: SpoolFragmentPNG,
    id: '6d3ce83f-e9af-40da-98d4-ccbaa3349e05',
  },
  {
    category: 'tool',
    name: 'Magnetite Brooch',
    location: 'Bone Bottom',
    where_to_find:
      'Sold in Bone Bottom\n120 Rosaries\nIf in ACT 3: Sold by Grindle',
    image: MagnetiteBroochPNG,
    id: '08f87796-fdf4-4887-9922-c97cde99ecd0',
  },
  {
    category: 'tool',
    name: "Druid's Eye",
    location: 'Mosshome',
    where_to_find: "Druid's Mossberry picking quest\nWish: Berry Picking",
    image: DruidsEyePNG,
    id: '9e6dea5e-617a-424c-8da9-d7cc29a7b83f',
  },
  {
    category: 'tool',
    name: 'Snare Setter',
    location: 'Weavenest Atla',
    where_to_find: 'West from the lift shaft\nFaydown Cloak required',
    image: SnareSetterPNG,
    id: '7f1deaec-10e2-4784-86b3-f1bdd15321c5',
  },
  {
    category: 'tool',
    name: 'Weavelight',
    location: 'Weavenest Atla',
    where_to_find: 'Duo Moss Mothers\nWest from Weavenest Atla bench',
    image: WeavelightPNG,
    id: '19fbb4b3-5939-46c4-a281-2272ccd78c39',
  },
  {
    category: 'tool',
    name: 'Shard Pendant',
    location: 'The Marrow',
    where_to_find: 'Small room west of the central tall area',
    image: ShardPendantPNG,
    id: '246f24a5-5f1c-4925-b754-44468e150161',
  },
  {
    category: 'tool',
    name: 'Straight Pin',
    location: 'The Marrow',
    where_to_find: "Grindle's Prison Cell",
    image: StraightPinPNG,
    id: 'c674b72d-2178-4533-8c04-d999751aed5c',
  },
  {
    category: 'tool',
    name: 'Curveclaw',
    location: "Hunter's March",
    where_to_find: 'Sold by Mottled Skarr\n140 Rosaries',
    image: CurveclawPNG,
    id: 'afd8b0f8-284e-43f5-b264-18dcf924bbff',
  },
  {
    category: 'tool',
    name: 'Fractured Mask',
    location: "Hunter's March",
    where_to_find: 'Sold by Mottled Skarr\n260 Rosaries',
    image: FracturedMaskPNG,
    id: '846470cc-6764-4ef7-8bc2-e58349fb0a26',
  },
  {
    category: 'tool',
    name: 'Magma Bell',
    location: 'Deep Docks',
    where_to_find: 'Sold by Forge Daughter\n110 Rosaries, 1 Craftmetal',
    image: MagmaBellPNG,
    id: 'e0abf23a-6f95-4076-9ab8-8b6b10f3dc34',
  },
  {
    category: 'tool',
    name: 'Sting Shard',
    location: 'Deep Docks',
    where_to_find: 'Sold by Forge Daughter\n140 Rosaries, 1 Craftmetal',
    image: StingShardPNG,
    id: '63ee1273-c3a6-4d24-a793-a1121a799f7b',
  },
  {
    category: 'tool',
    name: 'Flintslate',
    location: 'Deep Docks',
    where_to_find: 'Southeast Deep Docks\nAccessible from southern Far Fields',
    image: FlintslatePNG,
    id: 'e8c4df3c-a7a1-4da3-9192-590d5ce68388',
  },
  {
    category: 'tool',
    name: 'Warding Bell',
    location: 'Far Fields',
    where_to_find: 'Bottom of central Far Fields room',
    image: WardingBellPNG,
    id: 'c4dce0c9-149c-40e9-9dbe-8190127aecdf',
  },
  {
    category: 'tool',
    name: 'Silkspeed Anklets',
    location: 'Far Fields',
    where_to_find: 'Weavenest Cindril\nNeedolin required',
    image: SilkspeedAnkletsPNG,
    id: 'e166c74a-dca5-424c-9f86-c6eaa194542a',
  },
  {
    category: 'tool',
    name: 'Weighted Belt',
    location: 'Far Fields',
    where_to_find: "Sold in Pilgrim's Rest\n160 Rosaries",
    image: WeightedBeltPNG,
    id: 'fbfee1e6-806e-4ab6-8993-1790a0b774d2',
  },
  {
    category: 'tool',
    name: 'Threefold Pin',
    location: 'Greymoor',
    where_to_find:
      'Secret room above Craw House\nActivate the bouncing platforms',
    image: ThreefoldPinPNG,
    id: '212fcab6-f99a-49ce-8528-fee307a7acbe',
  },
  {
    category: 'tool',
    name: 'Flea Brew',
    location: 'Greymoor',
    where_to_find: 'Find 5 Fleas and move the caravan',
    image: FleaBrewPNG,
    id: '6304d208-b334-4ab0-bf51-462021e3ac49',
  },
  {
    category: 'tool',
    name: 'Pimpillo',
    location: 'Greymoor',
    where_to_find: 'Yarnaby tower\n1 Craftmetal, Cling Grip required',
    image: PimpilloPNG,
    id: '077e1c08-8bed-4510-a13c-012272b8ad2c',
  },
  {
    category: 'tool',
    name: 'Compass',
    location: 'Bellhart',
    where_to_find: 'Sold by Shakra\n70 Rosaries',
    image: CompassPNG,
    id: 'c4a1aea3-b862-493a-b4f8-150269001754',
  },
  {
    category: 'tool',
    name: 'Multibinder',
    location: 'Bellhart',
    where_to_find: 'Sold in Bellhart\n880 Rosaries, first Courier quest',
    image: MultibinderPNG,
    id: 'af5e2607-1fc8-4c27-84a8-cbe5fe63a237',
  },
  {
    category: 'tool',
    name: 'Longpin',
    location: 'Bellhart',
    where_to_find: 'Behind Shellwood Wasp nest',
    image: LongpinPNG,
    id: '1d26dbf1-4929-4734-bca9-4214d985b25f',
  },
  {
    category: 'tool',
    name: 'Pollip Pouch',
    location: 'Shellwood',
    where_to_find: 'Greyroot Pollip Hearts quest\nWish: Rite of the Pollip',
    image: PollipPouchPNG,
    id: '26f6f7b9-9801-4c04-8732-99f0bd6ab2a2',
  },
  {
    category: 'tool',
    name: "Dead Bug's Purse",
    location: 'Wormways',
    where_to_find: 'Near northern entrance\nShell Satchel in Steel Soul',
    image: DeadBugsPursePNG,
    id: '4154a6b3-69a5-4922-8a81-a1c38ef494d6',
  },
  {
    category: 'tool',
    name: 'Plasmium Phial',
    location: 'Wormways',
    where_to_find: "Alchemist Zylotol quest\nWish: Alchemist's Assistant",
    image: PlasmiumPhialPNG,
    id: 'e78d7131-a2b0-4b53-96f8-a8ebd2e8d506',
  },
  {
    category: 'tool',
    name: 'Magnetite Dice',
    location: 'Blasted Steps',
    where_to_find:
      'Win at dice minigame\nIf in ACT 3: Sold by Grindle, 300 Rosaries',
    image: MagnetiteDicePNG,
    id: '8b465dd1-61df-4943-bf78-907eeb58e571',
  },
  {
    category: 'tool',
    name: 'Snitch Pick',
    location: 'Blasted Steps',
    where_to_find: 'Sold by Grindle\n740 Rosaries',
    image: SnitchPickPNG,
    id: 'b8787e97-8973-4023-b9b4-c6264a4d6419',
  },
  {
    category: 'tool',
    name: "Thief's Mark",
    location: 'Blasted Steps',
    where_to_find: 'Sold by Grindle\n350 Rosaries',
    image: ThiefsMarkPNG,
    id: 'e94c3aeb-7932-4255-9adf-784abd3814d8',
  },
  {
    category: 'tool',
    name: 'Conchcutter',
    location: 'Sands of Karak',
    where_to_find: 'In Coral Tower',
    image: ConchcutterPNG,
    id: '765dde4d-df5e-4336-b52f-ad4f85b0f71b',
  },
  {
    category: 'tool',
    name: 'Volt Filament',
    location: 'Sands of Karak',
    where_to_find: 'Defeat Voltwyrm',
    image: VoltFilamentPNG,
    id: 'c19c43ac-c5a0-4220-83b2-dab87bc16074',
  },
  {
    category: 'tool',
    name: 'Barbed Bracelet',
    location: "Sinner's Road",
    where_to_find: 'In a pit at the end of the first road',
    image: BarbedBraceletPNG,
    id: 'e36183b9-fbd4-48ca-bdb8-f66ba5091a3c',
  },
  {
    category: 'tool',
    name: 'Tacks',
    location: "Sinner's Road",
    where_to_find: 'Muckroaches quest\nWish: Roach Guts',
    image: TacksPNG,
    id: 'a7fb2999-2ab6-4c48-93d9-1feabf10b9ec',
  },
  {
    category: 'tool',
    name: 'Wispfire Lantern',
    location: 'Wisp Thicket',
    where_to_find: 'Defeat Father of the Flame',
    image: WispfireLanternPNG,
    id: '64764321-ea21-4355-aa4e-36801a384126',
  },
  {
    category: 'tool',
    name: "Delver's Drill",
    location: 'Underworks',
    where_to_find: 'South of the Grand Gate lift',
    image: DelversDrillPNG,
    id: 'd7de8180-1c56-4422-a0fb-a9e36b14f86c',
  },
  {
    category: 'tool',
    name: 'Sawtooth Circlet',
    location: 'Underworks',
    where_to_find: 'Sold by Twelfth Architect\n1 Craftmetal, 230 Rosaries',
    image: SawtoothCircletPNG,
    id: '5678e8e9-42cd-4dbd-bc8f-caa60d6f0289',
  },
  {
    category: 'tool',
    name: 'Cogwork Wheel',
    location: 'Underworks',
    where_to_find: 'Sold by Twelfth Architect\n1 Craftmetal, 360 Rosaries',
    image: CogworkWheelPNG,
    id: '2897a2dd-428a-4952-8eaa-ca3d5ede0ebc',
  },
  {
    category: 'tool',
    name: 'Scuttlebrace',
    location: 'Underworks',
    where_to_find: 'Sold by Twelfth Architect\n1 Craftmetal, 140 Rosaries',
    image: ScuttlebracePNG,
    id: '8b996038-aa11-44b8-95bd-7f532d70e228',
  },
  {
    category: 'tool',
    name: 'Injector Band',
    location: 'Whiteward',
    where_to_find: 'Hidden before the drop to Underworks',
    image: InjectorBandPNG,
    id: 'aa194259-a8da-42b1-95d5-e0e02cc79db9',
  },
  {
    category: 'tool',
    name: "Ascendant's Grip",
    location: 'Choral Chambers',
    where_to_find: 'Sold in Songclave\n350 Rosaries',
    image: AscendantsGripPNG,
    id: '7799e0e0-13b9-4f9e-9f2f-39bdd775393f',
  },
  {
    category: 'tool',
    name: 'Spool Extender',
    location: 'Choral Chambers',
    where_to_find: 'Sold in Songclave\n720 Rosaries',
    image: SpoolExtenderPNG,
    id: 'e0f3a473-f7b7-4e50-87e5-bafdafe1effc',
  },
  {
    category: 'tool',
    name: 'Spider Strings',
    location: 'Choral Chambers',
    where_to_find:
      'Sold in Songclave\n320 Rosaries, after second Jubilana quest',
    image: SpiderStringsPNG,
    id: '16fcf52b-07fe-45a5-9f58-c4978bd91453',
  },
  {
    category: 'tool',
    name: 'Claw Mirror',
    location: 'Whispering Vaults',
    where_to_find: 'Defeat Trobbio',
    image: ClawMirrorPNG,
    id: '2a848a91-1fd9-4f77-a91d-b520bd1320b7',
  },
  {
    category: 'tool',
    name: 'Voltvessels',
    location: 'Memorium',
    where_to_find: 'Electric enemies near Large Flea',
    image: VoltvesselsPNG,
    id: '7be91269-3431-4557-9532-83c078cceef0',
  },
  {
    category: 'tool',
    name: 'Cogfly',
    location: 'High Halls',
    where_to_find: "Room beside the Drifter's Cloak section\n1 Craftmetal",
    image: CogflyPNG,
    id: '22a129c9-4833-47fd-820c-7c6953ed8adb',
  },
  {
    category: 'tool',
    name: 'Rosary Cannon',
    location: 'High Halls',
    where_to_find: 'Locked room before Arena\nSimple Key required',
    image: RosaryCannonPNG,
    id: 'dc58a448-44f6-4a62-a048-d931e4a569c4',
  },
  {
    category: 'tool',
    name: 'Reserve Bind',
    location: 'Choral Chambers',
    where_to_find: 'Defeat Second Sentinel',
    image: ReserveBindPNG,
    id: 'eac23b99-e1b4-4017-a46c-904b1aeee8b5',
  },
  {
    category: 'tool',
    name: 'Memory Crystal',
    location: 'Mount Fay',
    where_to_find: 'Ice room near western bench',
    image: MemoryCrystalPNG,
    id: '0beea1d0-ac50-4690-82f0-69a4ad469505',
  },
  {
    category: 'tool',
    name: 'Pin Badge',
    location: 'Mount Fay',
    where_to_find: 'Defeat Pinstress\nACT 3',
    image: PinBadgePNG,
    id: '50191ec3-5013-4f2f-ac70-97073088e0a2',
  },
  {
    category: 'tool',
    name: 'Wreath of Purity',
    location: 'Putrified Ducts',
    where_to_find: 'East of the Bellway',
    image: WreathOfPurityPNG,
    id: 'cbc60eba-24ab-48de-9edd-03aedfd99ff3',
  },
  {
    category: 'tool',
    name: 'Longclaw',
    location: 'Putrified Ducts',
    where_to_find: 'Organ collection quest\nWish: Broodfeast',
    image: LongclawPNG,
    id: 'aaccb151-cf5f-4af9-97da-2a9ce28cd71d',
  },
  {
    category: 'tool',
    name: 'Egg of Flealia',
    location: 'Fleatopia',
    where_to_find: 'Find every Lost Flea',
    image: EggOfFlealiaPNG,
    id: 'f569fb4b-7c1b-4a24-8d59-5346295fa880',
  },
  {
    category: 'tool',
    name: 'Quick Sling',
    location: 'Bilewater',
    where_to_find: 'Secret area behind breakable ceilings',
    image: QuickSlingPNG,
    id: '432b948d-21b2-4629-813a-9a324c5b8133',
  },
  {
    category: 'tool',
    name: 'Throwing Rings',
    location: 'Bilewater',
    where_to_find: "Shakra quest\nWish: Trail's End",
    image: ThrowingRingsPNG,
    id: 'bc62b0a2-30dd-4551-bb7b-6eca1de2a981',
  },
  {
    category: 'tool',
    name: 'Silkshot',
    location: 'Bilewater',
    where_to_find:
      'Find Ruined Tool in east Bilewater\n1 Craftmetal, Get Silkshot at Forge Daughter',
    image: SilkshotPNG,
    id: '5fcd9ad8-fd68-43df-817f-09836c3ecb1a',
  },
  {
    category: 'silk skill',
    name: 'Silkspear',
    location: 'Mosshome',
    where_to_find: 'Complete Mosshome',
    image: SilkspearPNG,
    id: '6c0e3255-ef7b-4a9f-b781-fdd1222db9f9',
  },
  {
    category: 'silk skill',
    name: 'Thread Storm',
    location: 'Greymoor',
    where_to_find: 'Defeat Craw gauntlet and pogo outside',
    image: ThreadStormPNG,
    id: '1aa350f9-f9cb-4a9b-b57f-55cfe9ef02da',
  },
  {
    category: 'silk skill',
    name: 'Cross Stitch',
    location: 'Exhaust Organ',
    where_to_find: 'Defeat Phantom',
    image: CrossStitchPNG,
    id: '6627756d-408f-435a-8ef3-a8ff36b2a1ca',
  },
  {
    category: 'silk skill',
    name: 'Sharpdart',
    location: 'Wormways',
    where_to_find: 'Weavenest Karn\nNeedolin, Clawline required',
    image: SharpdartPNG,
    id: '05127c25-fc14-445d-af02-7307e4c5c720',
  },
  {
    category: 'silk skill',
    name: 'Rune Rage',
    location: 'The Slab',
    where_to_find: 'Defeat First Sinner',
    image: RuneRagePNG,
    id: 'fd72278d-5e3f-45db-9301-b8cf99aa7fcd',
  },
  {
    category: 'silk skill',
    name: 'Pale Nails',
    location: 'The Cradle',
    where_to_find: 'On route to surface village\nACT 3, Silk Soar required',
    image: PaleNailsPNG,
    id: 'f4005542-aa0b-4899-a961-ad23de36d7b6',
  },
  {
    category: 'ability',
    name: 'Swift Step',
    location: 'Deep Docks',
    where_to_find: 'Complete Deep Docks',
    image: SwiftStepPNG,
    id: '72d4d2ff-1d7e-4019-9427-36db5c298cc8',
  },
  {
    category: 'ability',
    name: 'Cling Grip',
    location: 'Shellwood',
    where_to_find: 'Defeat Sister Splinter',
    image: ClingGripPNG,
    id: 'de791cbb-427e-4da6-8acb-f44cbf71df8a',
  },
  {
    category: 'ability',
    name: 'Needolin',
    location: 'Bellhart',
    where_to_find: 'Defeat Widow\nCling Grip required',
    image: NeedolinPNG,
    id: '179bab5e-bbae-4b62-8c17-186262778c37',
  },
  {
    category: 'ability',
    name: 'Needle Strike',
    location: 'Blasted Steps',
    where_to_find: 'Given by Pinstress',
    image: NeedleStrikePNG,
    id: 'f008c186-44e1-4174-add7-06385f616985',
  },
  {
    category: 'ability',
    name: 'Clawline',
    location: 'Underworks',
    where_to_find: 'Complete The Cauldron',
    image: ClawlinePNG,
    id: '672f26d5-db48-47dd-a19e-f44ebc918201',
  },
  {
    category: 'ability',
    name: 'Silk Soar',
    location: 'The Abyss',
    where_to_find: 'Complete The Abyss for the first time',
    image: SilkSoarPNG,
    id: 'b6663b09-8537-4e5d-b4fe-ec5da08e6e85',
  },
  {
    category: 'crest',
    name: 'Crest of Wanderer',
    location: 'Bone Bottom',
    where_to_find: 'Chapel of the Wanderer in Bonegrave\nCling Grip required',
    image: CrestOfWandererPNG,
    id: '4b5686a9-ba5e-49fc-9e3c-3b39222562c4',
  },
  {
    category: 'crest',
    name: 'Crest of Beast',
    location: "Hunter's March",
    where_to_find: 'Chapel of the Beast with Savage Beastlfy',
    image: CrestOfBeastPNG,
    id: '5f5aa7a3-a501-46e8-bb56-830992ca7595',
  },
  {
    category: 'crest',
    name: 'Crest of Reaper',
    location: 'Greymoor',
    where_to_find: 'Chapel of the Reaper Arena',
    image: CrestOfReaperPNG,
    id: 'b33454c9-fb52-4433-b5be-6eed65eb4a67',
  },
  {
    category: 'crest',
    name: 'Crest of Architect',
    location: 'Underworks',
    where_to_find:
      'Chapel of the Architect near Twelfth Architect\n25 Tools, 110 Rosaries required',
    image: CrestOfArchitectPNG,
    id: '00fba43a-5b59-41a9-ab68-64c84a899881',
  },
  {
    category: 'crest',
    name: 'Crest of Witch',
    location: 'Shellwood',
    where_to_find: 'Cure Greyroot infection quest\nWish: Rite of Rebirth',
    image: CrestOfWitchPNG,
    id: 'e6300ac5-4dd6-46f1-9b36-a07f4b884faa',
  },
  {
    category: 'crest',
    name: 'Crest of Shaman',
    location: 'Bone Bottom',
    where_to_find: 'Ruined Chapel\nACT 3, Silk Soar required',
    image: CrestOfShamanPNG,
    id: '6d3e9431-19f4-412e-99a9-f8aad50d8b62',
  },
  {
    category: 'upgrade',
    name: 'Pale Oil 1',
    location: 'Bellhart',
    where_to_find: 'Defeat Widow and upgrade the Needle\nCling Grip required',
    image: OilPNG,
    id: 'a3696217-0faf-4700-ad4d-64b7919db1e4',
  },
  {
    category: 'upgrade',
    name: 'Pale Oil 2',
    location: 'Whispering Vaults',
    where_to_find: 'Get Pale Oil at Whispering Vaults west edge',
    image: OilPNG,
    id: 'e3e858a4-bd25-48bf-a80c-e58eb66d2e60',
  },
  {
    category: 'upgrade',
    name: 'Pale Oil 3',
    location: 'Bellhart',
    where_to_find:
      'Get Pale Oil after 5 Delicacies quest\nWish: Great Taste of Pharloom',
    image: OilPNG,
    id: '8783770d-4e25-4d78-aec5-14d3afebf9eb',
  },
  {
    category: 'upgrade',
    name: 'Pale Oil 4',
    location: 'Fleatopia',
    where_to_find:
      'Get Pale Oil after beating all Flea minigames\nWish: Ecstasy of the End',
    image: OilPNG,
    id: '2db1386e-729f-455c-b679-ebb55d00dd36',
  },
  {
    category: 'upgrade',
    name: 'Crafting Kit 1',
    location: 'Deep Docks',
    where_to_find: 'Sold by Forge Daughter\n180 Rosaries',
    image: CraftingKitPNG,
    id: 'f8238efa-eba3-44bb-a5c2-67fa304bf407',
  },
  {
    category: 'upgrade',
    name: 'Crafting Kit 2',
    location: 'Bellhart',
    where_to_find: 'Craw Scarecrow quest\nWish: Crawbug Clearing',
    image: CraftingKitPNG,
    id: '179adcea-2aa3-4fb6-b1f0-e5aca0980484',
  },
  {
    category: 'upgrade',
    name: 'Crafting Kit 3',
    location: 'Blasted Steps',
    where_to_find: 'Sold by Grindle\n700 Rosaries',
    image: CraftingKitPNG,
    id: 'b5918bf9-7661-4996-a335-adef64ac3882',
  },
  {
    category: 'upgrade',
    name: 'Crafting Kit 4',
    location: 'Underworks',
    where_to_find: 'Sold by Twelfth Architect\n450 Rosaries',
    image: CraftingKitPNG,
    id: 'f85c2c39-00ab-4d76-b74b-1de4bccdda3b',
  },
  {
    category: 'upgrade',
    name: 'Tool Pouch 1',
    location: 'The Marrow',
    where_to_find: "Straight Pin Aim challenge\nComplete Loddle's challenge",
    image: ToolPouchPNG,
    id: '4d391275-b343-4e48-a2e3-1f3a73693cd9',
  },
  {
    category: 'upgrade',
    name: 'Tool Pouch 2',
    location: 'Far Fields',
    where_to_find:
      "Sold in Pilgrim's Rest\n220 Rosaries. ACT 3: Sold by Grindle",
    image: ToolPouchPNG,
    id: 'c36dd48a-1ea4-4cbb-8817-637445ed28fc',
  },
  {
    category: 'upgrade',
    name: 'Tool Pouch 3',
    location: 'Greymoor',
    where_to_find: "Nuu Hunter's Journal quest\nWish: Bugs of Pharloom",
    image: ToolPouchPNG,
    id: '721d1c3b-48a5-4fac-9c74-0a426fc59648',
  },
  {
    category: 'upgrade',
    name: 'Tool Pouch 4',
    location: 'Putrified Ducts',
    where_to_find: 'Find 20 Fleas, move to Fleatopia',
    image: ToolPouchPNG,
    id: 'd55745ff-34fb-470f-95b5-4cc1395c811b',
  },
  {
    category: 'progress and misc',
    name: 'Silk Heart 1',
    location: 'The Marrow',
    where_to_find: 'Defeat Bell Beast',
    image: SilkHeartPNG,
    id: '538e7281-55de-4c90-968e-7947189a83cd',
  },
  {
    category: 'progress and misc',
    name: 'Silk Heart 2',
    location: 'Whiteward',
    where_to_find: 'Defeat The Unravelled',
    image: SilkHeartPNG,
    id: '97edfb84-d584-46b5-875f-ea3d135cdafa',
  },
  {
    category: 'progress and misc',
    name: 'Silk Heart 3',
    location: 'The Cradle',
    where_to_find: 'Defeat Lace 2',
    image: SilkHeartPNG,
    id: '5d1f260e-e90b-487c-8134-391d8a0b8839',
  },
  {
    category: 'progress and misc',
    name: 'Everbloom',
    location: 'Bone Bottom',
    where_to_find: 'Gather 3 Ancient Hearts\nACT 3, Wish: The Old Hearts',
    image: EverbloomPNG,
    id: '9b8c0642-67e4-40a2-b8bf-ea32e90b725f',
  },
  {
    category: 'progress and misc',
    name: 'Bind Eva',
    location: 'Weavenest Atla',
    where_to_find:
      'Max out Eva upgrades for Sylphsong\nAt least 6 Crests and 17 used Memory Lockets required',
    image: BindEvaPNG,
    id: 'd5984a24-f23f-4781-8d74-cd2efae21127',
  },
];
