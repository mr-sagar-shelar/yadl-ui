import type { Meta, StoryObj } from "@storybook/react";
import MediaFile from "../MediaFile";

const meta: Meta<typeof MediaFile> = { title: "Azure/General/MediaFile", component: MediaFile };

export default meta;
type Story = StoryObj<typeof MediaFile>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
