import type { Meta, StoryObj } from "@storybook/react";
import ResourceMover from "../ResourceMover";

const meta: Meta<typeof ResourceMover> = { title: "Azure/Other/ResourceMover", component: ResourceMover };

export default meta;
type Story = StoryObj<typeof ResourceMover>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
