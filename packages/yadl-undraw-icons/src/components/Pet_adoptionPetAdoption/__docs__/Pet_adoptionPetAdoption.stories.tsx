import type { Meta, StoryObj } from "@storybook/react";
import Pet_adoptionPetAdoption from "../Pet_adoptionPetAdoption";

const meta: Meta<typeof Pet_adoptionPetAdoption> = { title: "unDraw/Pet_adoptionPetAdoption", component: Pet_adoptionPetAdoption };

export default meta;
type Story = StoryObj<typeof Pet_adoptionPetAdoption>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
