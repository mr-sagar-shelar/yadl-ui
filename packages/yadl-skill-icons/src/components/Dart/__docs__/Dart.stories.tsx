import type { Meta, StoryObj } from "@storybook/react";
import Dart from "../Dart";

const meta: Meta<typeof Dart> = { title: "SkillIcon/Dart", component: Dart };

export default meta;
type Story = StoryObj<typeof Dart>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
