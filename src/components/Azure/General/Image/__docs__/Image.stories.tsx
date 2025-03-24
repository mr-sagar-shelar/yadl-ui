import type { Meta, StoryObj } from "@storybook/react";
import Image from "../Image";

const meta: Meta<typeof Image> = { title: "Azure/General/Image", component: Image };

export default meta;
type Story = StoryObj<typeof Image>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
