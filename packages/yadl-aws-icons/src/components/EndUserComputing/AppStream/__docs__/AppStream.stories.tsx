import type { Meta, StoryObj } from "@storybook/react";
import AppStream from "../AppStream";

const meta: Meta<typeof AppStream> = { title: "AWS/EndUserComputing/AppStream", component: AppStream };

export default meta;
type Story = StoryObj<typeof AppStream>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
