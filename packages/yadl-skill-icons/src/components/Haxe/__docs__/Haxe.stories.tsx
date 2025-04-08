import type { Meta, StoryObj } from "@storybook/react";
import Haxe from "../Haxe";

const meta: Meta<typeof Haxe> = { title: "SkillIcon/Haxe", component: Haxe };

export default meta;
type Story = StoryObj<typeof Haxe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
