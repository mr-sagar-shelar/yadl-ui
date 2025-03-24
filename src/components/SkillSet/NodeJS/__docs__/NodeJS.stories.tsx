import type { Meta, StoryObj } from "@storybook/react";
import NodeJS from "../NodeJS";

const meta: Meta<typeof NodeJS> = { title: "SkillSet/NodeJS", component: NodeJS };

export default meta;
type Story = StoryObj<typeof NodeJS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
