import type { Meta, StoryObj } from "@storybook/react";
import AlgoliaAlgolia from "../AlgoliaAlgolia";

const meta: Meta<typeof AlgoliaAlgolia> = { title: "unDraw/AlgoliaAlgolia", component: AlgoliaAlgolia };

export default meta;
type Story = StoryObj<typeof AlgoliaAlgolia>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
