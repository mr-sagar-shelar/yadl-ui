import type { Meta, StoryObj } from "@storybook/react";
import NimbleStudio from "../NimbleStudio";

const meta: Meta<typeof NimbleStudio> = { title: "AWS/MediaServices/NimbleStudio", component: NimbleStudio };

export default meta;
type Story = StoryObj<typeof NimbleStudio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
