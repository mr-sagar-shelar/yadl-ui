import type { Meta, StoryObj } from "@storybook/react";
import CLion from "../CLion";

const meta: Meta<typeof CLion> = { title: "SkillSet/CLion", component: CLion };

export default meta;
type Story = StoryObj<typeof CLion>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
