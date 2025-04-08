import type { Meta, StoryObj } from "@storybook/react";
import QT from "../QT";

const meta: Meta<typeof QT> = { title: "SkillIcon/QT", component: QT };

export default meta;
type Story = StoryObj<typeof QT>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
