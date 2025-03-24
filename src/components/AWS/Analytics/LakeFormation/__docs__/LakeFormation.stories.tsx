import type { Meta, StoryObj } from "@storybook/react";
import LakeFormation from "../LakeFormation";

const meta: Meta<typeof LakeFormation> = { title: "AWS/Analytics/LakeFormation", component: LakeFormation };

export default meta;
type Story = StoryObj<typeof LakeFormation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
