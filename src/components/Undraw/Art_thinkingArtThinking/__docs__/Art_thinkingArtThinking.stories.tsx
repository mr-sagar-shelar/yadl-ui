import type { Meta, StoryObj } from "@storybook/react";
import Art_thinkingArtThinking from "../Art_thinkingArtThinking";

const meta: Meta<typeof Art_thinkingArtThinking> = { title: "unDraw/Art_thinkingArtThinking", component: Art_thinkingArtThinking };

export default meta;
type Story = StoryObj<typeof Art_thinkingArtThinking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
