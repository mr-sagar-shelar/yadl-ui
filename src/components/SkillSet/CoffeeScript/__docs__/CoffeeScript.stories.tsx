import type { Meta, StoryObj } from "@storybook/react";
import CoffeeScript from "../CoffeeScript";

const meta: Meta<typeof CoffeeScript> = { title: "SkillSet/CoffeeScript", component: CoffeeScript };

export default meta;
type Story = StoryObj<typeof CoffeeScript>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
