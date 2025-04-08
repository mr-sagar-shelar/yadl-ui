import type { Meta, StoryObj } from "@storybook/react";
import PreviewFeatures from "../PreviewFeatures";

const meta: Meta<typeof PreviewFeatures> = { title: "Azure/General/PreviewFeatures", component: PreviewFeatures };

export default meta;
type Story = StoryObj<typeof PreviewFeatures>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
