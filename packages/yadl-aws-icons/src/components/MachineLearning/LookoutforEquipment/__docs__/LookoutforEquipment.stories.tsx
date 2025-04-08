import type { Meta, StoryObj } from "@storybook/react";
import LookoutforEquipment from "../LookoutforEquipment";

const meta: Meta<typeof LookoutforEquipment> = { title: "AWS/MachineLearning/LookoutforEquipment", component: LookoutforEquipment };

export default meta;
type Story = StoryObj<typeof LookoutforEquipment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
