import type { Meta, StoryObj } from "@storybook/react";
import GameMakerStudio from "../GameMakerStudio";

const meta: Meta<typeof GameMakerStudio> = { title: "SkillIcon/GameMakerStudio", component: GameMakerStudio };

export default meta;
type Story = StoryObj<typeof GameMakerStudio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
