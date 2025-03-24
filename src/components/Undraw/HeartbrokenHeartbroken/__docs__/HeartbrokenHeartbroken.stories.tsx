import type { Meta, StoryObj } from "@storybook/react";
import HeartbrokenHeartbroken from "../HeartbrokenHeartbroken";

const meta: Meta<typeof HeartbrokenHeartbroken> = { title: "unDraw/HeartbrokenHeartbroken", component: HeartbrokenHeartbroken };

export default meta;
type Story = StoryObj<typeof HeartbrokenHeartbroken>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
