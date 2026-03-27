import PsalmCylinderPNG from '../assets/images/sprites/psalm-cylinder.png';
import ChoralCommandamentPNG from '../assets/images/sprites/choral-commandament.png';
import BoneScrollPNG from '../assets/images/sprites/bone-scroll.png';
import WeaverEffigyPNG from '../assets/images/sprites/weaver-effigy.png';
import RuneHarpPNG from '../assets/images/sprites/rune-harp.png';
import ArcaneEggPNG from '../assets/images/sprites/arcane-egg.png';

export type CollectibleCategoryType =
  | 'psalm cylinders'
  | 'choral commandment'
  | 'bone scroll'
  | 'weaver effigy'
  | 'rune harp'
  | 'arcane egg';
export type CollectibleType = {
  category: CollectibleCategoryType;
  name: string;
  location: string;
  where_to_find: string;
  image: string;
  id: string;
};

export const collectibles: CollectibleType[] = [
  {
    category: 'psalm cylinders',
    name: 'Psalm Cylinder 1',
    location: 'Underworks',
    where_to_find: 'Near the passage from The Unravalled',
    image: PsalmCylinderPNG,
    id: '6b3c6b23-f9a8-4109-ac78-8c5d7e59cddc',
  },
  {
    category: 'psalm cylinders',
    name: 'Psalm Cylinder 2',
    location: 'Blasted Steps',
    where_to_find: 'Sold by Grindle\n240 Rosaries',
    image: PsalmCylinderPNG,
    id: '8faafe34-6224-4597-acb1-cd3ed2e29027',
  },
  {
    category: 'psalm cylinders',
    name: 'Psalm Cylinder 3',
    location: 'High Halls',
    where_to_find: 'Breakable wall in the Clawline section',
    image: PsalmCylinderPNG,
    id: '7f03ab22-704b-4fc5-b38d-77e81f93cf58',
  },
  {
    category: 'psalm cylinders',
    name: 'Psalm Cylinder 4',
    location: 'Whispering Vaults',
    where_to_find: 'Complete the surface behind Songclave',
    image: PsalmCylinderPNG,
    id: '9bf112c9-faa0-48d8-a100-ff4b9e949b40',
  },
  {
    category: 'psalm cylinders',
    name: 'Psalm Cylinder 5',
    location: 'Whispering Vaults',
    where_to_find: "In Vaultkeeper Cardinius's Lair",
    image: PsalmCylinderPNG,
    id: '7facc796-7431-4ed7-9b47-c737573966f5',
  },
  {
    category: 'psalm cylinders',
    name: 'Sacred Cylinder',
    location: 'Whispering Vaults',
    where_to_find: "Complete Vaultkeeper's Melody quest",
    image: PsalmCylinderPNG,
    id: '400058bc-c183-4d7b-b205-a745c10735b9',
  },
  {
    category: 'choral commandment',
    name: 'Choral Commandment 1',
    location: 'Mosshome',
    where_to_find:
      'Near giant pit\nBreakable wall two floors above Mosshome elevator',
    image: ChoralCommandamentPNG,
    id: 'a5b0272f-f43a-4d63-94f8-fc651b360f32',
  },
  {
    category: 'choral commandment',
    name: 'Choral Commandment 2',
    location: 'Choral Chambers',
    where_to_find: 'Sold in Songclave\n180 Rosaries, second Jubilana quest',
    image: ChoralCommandamentPNG,
    id: 'a5b93281-5588-42a9-b4a7-e0a560e4e008',
  },
  {
    category: 'choral commandment',
    name: 'Choral Commandment 3',
    location: 'Whiteward',
    where_to_find: 'West from the elevator shaft\nWhite Key required',
    image: ChoralCommandamentPNG,
    id: '1cd9de84-a26b-4a88-8d56-c613b1b46b42',
  },
  {
    category: 'choral commandment',
    name: 'Choral Commandment 4',
    location: 'Whiteward',
    where_to_find: 'East from the elevator shaft\nEast from the elevator shaft',
    image: ChoralCommandamentPNG,
    id: '7f943bd0-4ec6-43f5-aea5-d5a703a679bb',
  },
  {
    category: 'bone scroll',
    name: 'Bone Scroll 1',
    location: 'Far Fields',
    where_to_find: "Hidden east of the Seamstress's house",
    image: BoneScrollPNG,
    id: '1f898cb9-9a30-4558-8538-d1806f2701f4',
  },
  {
    category: 'bone scroll',
    name: 'Bone Scroll 2',
    location: 'Greymoor',
    where_to_find: 'Underground section east of Halfway Home',
    image: BoneScrollPNG,
    id: 'bfa1e59d-63d7-4630-8059-02518718811d',
  },
  {
    category: 'bone scroll',
    name: 'Bone Scroll 3',
    location: 'Wisp Thicket',
    where_to_find:
      'Platforming challenge with Wisp Lanterns\nEast and north from the bench',
    image: BoneScrollPNG,
    id: 'dfa8619d-34f8-4405-8aa1-e29fdd0c7b6f',
  },
  {
    category: 'bone scroll',
    name: 'Bone Scroll 4',
    location: 'Underworks',
    where_to_find: 'Breakable wall in the first room\nWest side',
    image: BoneScrollPNG,
    id: '79df5644-83c0-4048-8a85-5349ce744310',
  },
  {
    category: 'weaver effigy',
    name: 'Weaver Effigy 1',
    location: 'Bone Bottom',
    where_to_find:
      'On a cliff near the big pit\nJump across the pit from Mosshome',
    image: WeaverEffigyPNG,
    id: 'f8003888-43e7-4a2f-b46e-3607532e65b9',
  },
  {
    category: 'weaver effigy',
    name: 'Weaver Effigy 2',
    location: 'The Slab',
    where_to_find:
      'Red sand area in The Slab\nIgnore the First Sinner path and go even more south',
    image: WeaverEffigyPNG,
    id: '95c229c4-aba6-47d9-9f7f-dbc21511e45b',
  },
  {
    category: 'weaver effigy',
    name: 'Weaver Effigy 3',
    location: 'Shellwood',
    where_to_find:
      'Chapel of the Witch entrance\nAfter exiting Chapel of the Witch, go east. Wish: Rite of Rebirth',
    image: WeaverEffigyPNG,
    id: '89598a45-fab9-4c7f-a35d-7f5a7668cd99',
  },
  {
    category: 'rune harp',
    name: 'Rune Harp 1',
    location: 'Weavenest Atla',
    where_to_find: 'East from the elevator shaft',
    image: RuneHarpPNG,
    id: 'a0068730-ba1b-46bd-b3ee-9d633a8931ca',
  },
  {
    category: 'rune harp',
    name: 'Rune Harp 2',
    location: 'High Halls',
    where_to_find: 'Conductor after High Halls gauntlet\nOnly in ACT 3',
    image: RuneHarpPNG,
    id: 'd5ed9099-3f78-4c5c-ac32-0780ebecd2ea',
  },
  {
    category: 'rune harp',
    name: 'Rune Harp 3',
    location: 'Far Fields',
    where_to_find:
      'Weavenest Cindril speed challenge\nNeedolin, Flea Brew required',
    image: RuneHarpPNG,
    id: 'd068d431-a35c-46f4-afdd-72084ba0817d',
  },
  {
    category: 'arcane egg',
    name: 'Arcane Egg',
    location: 'The Abyss',
    where_to_find:
      'White spikes path\nHidden path on the right side during the big drop',
    image: ArcaneEggPNG,
    id: '8a2f2862-30bb-411f-a31e-38f6179ebd86',
  },
];
