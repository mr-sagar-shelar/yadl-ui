import type { Meta, StoryObj } from "@storybook/react";
import Tag from "../Tag";

const meta: Meta<typeof Tag> = { title: "Azure/General/Tag", component: Tag };

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
