import type { Meta, StoryObj } from "@storybook/react";
import Illustrator from "../Illustrator";

const meta: Meta<typeof Illustrator> = { title: "SkillSet/Illustrator", component: Illustrator };

export default meta;
type Story = StoryObj<typeof Illustrator>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
