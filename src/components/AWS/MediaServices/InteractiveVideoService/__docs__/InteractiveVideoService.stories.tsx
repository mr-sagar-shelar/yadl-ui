import type { Meta, StoryObj } from "@storybook/react";
import InteractiveVideoService from "../InteractiveVideoService";

const meta: Meta<typeof InteractiveVideoService> = { title: "AWS/MediaServices/InteractiveVideoService", component: InteractiveVideoService };

export default meta;
type Story = StoryObj<typeof InteractiveVideoService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
