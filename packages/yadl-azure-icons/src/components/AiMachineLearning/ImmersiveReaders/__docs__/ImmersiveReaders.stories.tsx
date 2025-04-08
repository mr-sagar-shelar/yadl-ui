import type { Meta, StoryObj } from "@storybook/react";
import ImmersiveReaders from "../ImmersiveReaders";

const meta: Meta<typeof ImmersiveReaders> = { title: "Azure/AiMachineLearning/ImmersiveReaders", component: ImmersiveReaders };

export default meta;
type Story = StoryObj<typeof ImmersiveReaders>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
