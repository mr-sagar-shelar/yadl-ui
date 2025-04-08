import type { Meta, StoryObj } from "@storybook/react";
import ArtLover from "../ArtLover";

const meta: Meta<typeof ArtLover> = { title: "unDraw/ArtLover", component: ArtLover };

export default meta;
type Story = StoryObj<typeof ArtLover>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
