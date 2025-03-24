import type { Meta, StoryObj } from "@storybook/react";
import HaxeFlixel from "../HaxeFlixel";

const meta: Meta<typeof HaxeFlixel> = { title: "SkillSet/HaxeFlixel", component: HaxeFlixel };

export default meta;
type Story = StoryObj<typeof HaxeFlixel>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
