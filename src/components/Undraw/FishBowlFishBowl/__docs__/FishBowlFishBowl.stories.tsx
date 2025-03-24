import type { Meta, StoryObj } from "@storybook/react";
import FishBowlFishBowl from "../FishBowlFishBowl";

const meta: Meta<typeof FishBowlFishBowl> = { title: "unDraw/FishBowlFishBowl", component: FishBowlFishBowl };

export default meta;
type Story = StoryObj<typeof FishBowlFishBowl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
